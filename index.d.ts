/*!
    @e53e04ac/ipp5-backend-static/index.d.ts
    Copyright (C) @e53e04ac
    MIT License
*/

import { Server as HttpServer } from 'node:http';

import { Application as ExpressApplication } from 'express';
import { ErrorRequestHandler as ExpressErrorRequestHandler } from 'express';
import { RequestHandler as ExpressRequestHandler } from 'express';
import { Router as ExpressRouter } from 'express';

import { Get } from 'hold';
import { Ipp5BackendStaticEnvMap } from 'ipp5-types';

export declare type Application = {
    readonly process: Get<NodeJS.Process>;
    readonly env: Get<Ipp5BackendStaticEnvMap>;
    readonly healthcheckHandler: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressStatic: Get<ExpressRequestHandler>;
    readonly expressRouter: Get<ExpressRouter>;
    readonly expressNotFound: Get<ExpressRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressInternalServerError: Get<ExpressErrorRequestHandler<unknown, unknown, unknown, unknown, Record<string, unknown>>>;
    readonly expressApplication: Get<ExpressApplication>;
    readonly httpServer: Get<HttpServer>;
    readonly run: Get<Promise<void>>;
};
