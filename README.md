# ipp5-backend-static

~~~~~ sh
npm install e53e04ac/ipp5-backend-static
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-backend-static"]);
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
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  A --reference--> B_5;
  click B_0 "https://www.npmjs.org/package/@types/express/v/4.17.17";
  click B_1 "https://www.npmjs.org/package/express/v/4.18.2";
  click B_2 "https://github.com/e53e04ac/hold/tree/2143f5f52192ae4156ea0af80d41c87c55355e9c";
  click B_3 "https://www.npmjs.org/package/joi/v/17.7.1";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_5 "https://github.com/e53e04ac/ipp5-types/tree/f66ddbd49c9601df9aea4cefdbb3e5c3e65427f5";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-backend-static"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "node:http"
    D0(["Server"]);
  end;
  subgraph "express"
    D1(["default"]);
    D2(["Router"]);
    D3(["static"]);
    D6(["Application"]);
    D7(["ErrorRequestHandler"]);
    D8(["RequestHandler"]);
  end;
  subgraph "joi"
    D4(["default"]);
  end;
  subgraph "hold"
    D5(["hold"]);
    D9(["Get"]);
  end;
  subgraph "ipp5-types"
    D10(["Ipp5BackendStaticEnvMap"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D4 --import--> C0;
  D5 --import--> C0;
  D0 --import--> C1;
  D6 --import--> C1;
  D7 --import--> C1;
  D8 --import--> C1;
  D2 --import--> C1;
  D9 --import--> C1;
  D10 --import--> C1;
~~~~~
