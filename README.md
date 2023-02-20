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
  click B_0 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_3 "https://www.npmjs.com/package/joi/v/17.8.1";
  click B_4 "https://www.npmjs.com/package/@types/node/v/18.14.0";
  click B_5 "https://github.com/e53e04ac/ipp5-types/tree/7b54ab5fbd2f85facb7851e6ae651413d4d1e0d2";
~~~~~

~~~~~ mermaid
graph RL;
  M(["index.mjs"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["default"]);
    I_1_1(["Router"]);
    I_1_2(["static"]);
  end;
  subgraph "joi";
    I_2_0(["default"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_2_0;
  M ----> I_3_0;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-static";
    E_0(["type Application"]);
  end;
  M(["index.d.ts"])
  subgraph "node:http";
    I_0_0(["Server"]);
  end;
  subgraph "express";
    I_1_0(["Application"]);
    I_1_1(["ErrorRequestHandler"]);
    I_1_2(["RequestHandler"]);
    I_1_3(["Router"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
  end;
  subgraph "ipp5-types";
    I_3_0(["Ipp5BackendStaticEnvMap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_1_1;
  M ----> I_1_2;
  M ----> I_1_3;
  M ----> I_2_0;
  M ----> I_3_0;
  E_0 ----> M;
~~~~~
