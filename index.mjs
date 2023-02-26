/*!
    @e53e04ac/ipp5-backend-static/index.mjs
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { default as express } from 'express';
import { Router as ExpressRouter } from 'express';
import { static as expressStatic } from 'express';
import { default as Joi } from 'joi';

import { hold } from 'hold';

/** @type {import('.').Application} */
const app = ({
    process: hold(() => {
        return process;
    }),
    env: hold(() => {
        /** @type {import('joi').ObjectSchema<ReturnType<typeof app['env']>>} */
        const schema = Joi.object().unknown(true).keys({
            TZ: Joi.string().max(100).required(),
            WEBSITES_PORT: Joi.number().integer().min(0).max(65535).default(3000),
            CUSTOM_BACKEND_STATIC_HTTP_PATH_PREFIX: Joi.string().max(100).required(),
            CUSTOM_CONTAINER_DOCUMENT_ROOT_DIRECTORY_PATH: Joi.string().max(100).required(),
            CUSTOM_EXPRESS_ENV: Joi.string().allow('development', 'production').required(),
            CUSTOM_EXPRESS_SUBDOMAIN_OFFSET: Joi.number().integer().min(2).required(),
            CUSTOM_EXPRESS_TRUST_PROXY: Joi.string().max(100).required(),
        });
        const validationResult = schema.validate(app.process().env);
        if (validationResult.error != null || validationResult.value == null) {
            throw new Error();
        }
        return validationResult.value;
    }),
    logHandler: hold(() => {
        return ((req, res, next) => {
            const beginDate = new Date();
            res.on('close', () => {
                const endDate = new Date();
                const duration = endDate.getTime() - beginDate.getTime();
                const record = {
                    beginDate,
                    endDate,
                    duration,
                    remoteFamily: req.socket.remoteFamily ?? null,
                    remoteAddress: req.socket.remoteAddress ?? null,
                    remotePort: req.socket.remotePort ?? null,
                    localFamily: req.socket.localFamily ?? null,
                    localAddress: req.socket.localAddress ?? null,
                    localPort: req.socket.localPort ?? null,
                    method: req.method,
                    url: req.url,
                    httpVersion: req.httpVersion,
                    requestHeaders: req.headers,
                    status: res.statusCode,
                    statusMessage: res.statusMessage,
                    responseHeaders: res.getHeaders(),
                };
                console.log(JSON.stringify(record));
            });
            next();
        });
    }),
    healthcheckHandler: hold(() => {
        return ((req, res, next) => {
            res.status(200).type('text/plain; charset=utf-8').end('200 OK');
        });
    }),
    expressStatic: hold(() => {
        return expressStatic(app.env().CUSTOM_CONTAINER_DOCUMENT_ROOT_DIRECTORY_PATH, {
            dotfiles: 'ignore',
            etag: true,
            extensions: false,
            fallthrough: true,
            immutable: false,
            index: 'index.html',
            lastModified: true,
            maxAge: 0,
            redirect: true,
            setHeaders: undefined,
        });
    }),
    expressRouter: hold(() => {
        const it = ExpressRouter({
            caseSensitive: false,
            mergeParams: false,
            strict: false,
        });
        it.get('/healthcheck', app.healthcheckHandler());
        it.use(app.expressStatic());
        return it;
    }),
    expressNotFound: hold(() => {
        return ((req, res, next) => {
            res.status(403).type('text/plain; charset=utf-8').end('403 Forbidden');
        });
    }),
    expressInternalServerError: hold(() => {
        return ((err, req, res, next) => {
            console.error(err);
            res.status(500).type('text/plain; charset=utf-8').end('500 Internal Server Error');
        });
    }),
    expressApplication: hold(() => {
        const it = express();
        it.set('case sensitive routing', false);
        it.set('env', app.env().CUSTOM_EXPRESS_ENV);
        it.set('etag', 'weak');
        it.set('jsonp callback name', null);
        it.set('json escape', true);
        it.set('json replacer', null);
        it.set('json spaces', null);
        it.set('query parser', 'extended');
        it.set('strict routing', false);
        it.set('subdomain offset', app.env().CUSTOM_EXPRESS_SUBDOMAIN_OFFSET);
        it.set('trust proxy', app.env().CUSTOM_EXPRESS_TRUST_PROXY);
        it.set('views', null);
        it.set('view cache', null);
        it.set('view engine', null);
        it.set('x-powered-by', false);
        it.use(app.logHandler());
        it.use(app.env().CUSTOM_BACKEND_STATIC_HTTP_PATH_PREFIX, app.expressRouter());
        it.use(app.expressNotFound());
        it.use(app.expressInternalServerError());
        return it;
    }),
    httpServer: hold(() => {
        const it = new HttpServer({});
        it.on('request', app.expressApplication());
        return it;
    }),
    run: hold(async () => {
        await new Promise((resolve) => {
            app.httpServer().listen(app.env().WEBSITES_PORT, () => {
                resolve(undefined);
            });
        });
    }),
});

await app.run();
