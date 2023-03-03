# ipp5-backend-static

~~~~~ sh
npm install e53e04ac/ipp5-backend-static
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["@types/express"]);
    B_1(["express"]);
    B_2(["hold"]);
    B_3(["joi"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["ipp5-types"]);
  end;
  subgraph "github";
    C_2(["e53e04ac/hold\n8575e49e6bfe80ba61782e3a8f9eb80f78776713"]);
    C_5(["e53e04ac/ipp5-types\ndd9746113b508ee3f68a7a75b5f8d7e6910dd7c7"]);
  end;
  subgraph "npmjs";
    C_0(["@types/express\n4.17.17"]);
    C_1(["express\n4.18.2"]);
    C_3(["joi\n17.8.3"]);
    C_4(["@types/node\n18.14.5"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  B_5 ----> C_5;
  click C_0 "https://www.npmjs.com/package/@types/express/v/4.17.17";
  click C_1 "https://www.npmjs.com/package/express/v/4.18.2";
  click C_2 "https://github.com/e53e04ac/hold/tree/8575e49e6bfe80ba61782e3a8f9eb80f78776713";
  click C_3 "https://www.npmjs.com/package/joi/v/17.8.3";
  click C_4 "https://www.npmjs.com/package/@types/node/v/18.14.5";
  click C_5 "https://github.com/e53e04ac/ipp5-types/tree/dd9746113b508ee3f68a7a75b5f8d7e6910dd7c7";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-static";
    E_0(["type Application"]);
  end;
  M["index.d.ts"]
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

~~~~~ mermaid
graph RL;
  M["index.mjs"]
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
