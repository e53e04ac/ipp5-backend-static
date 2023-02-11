# ipp5-backend-static

~~~~~ sh
npm install e53e04ac/ipp5-backend-static
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["@types/express"]);
    B_1(["express"]);
    B_2(["e53e04ac/hold"]);
    B_3(["joi"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  click B_0 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/ipp5-types/tree/ef144d850d518b40703ea085cb940b3ec452bde2";
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.mjs"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["default"]);
    B_1_1(["Router"]);
    B_1_2(["static"]);
  end;
  subgraph "joi";
    B_2_0(["default"]);
  end;
  subgraph "hold";
    B_3_0(["hold"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_1_2 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
~~~~~

~~~~~ mermaid
graph LR;
  A(["index.d.ts"])
  subgraph "node:http";
    B_0_0(["Server"]);
  end;
  subgraph "express";
    B_1_0(["Application"]);
    B_1_1(["ErrorRequestHandler"]);
    B_1_2(["RequestHandler"]);
    B_1_3(["Router"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
  end;
  subgraph "ipp5-types";
    B_3_0(["Ipp5BackendStaticEnvMap"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_1_1 ----> A;
  B_1_2 ----> A;
  B_1_3 ----> A;
  B_2_0 ----> A;
  B_3_0 ----> A;
~~~~~
