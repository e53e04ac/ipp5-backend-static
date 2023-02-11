# ipp5-backend-static

~~~~~ sh
npm install e53e04ac/ipp5-backend-static
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-backend-static"]);
  B0(["@types/express"]);
  B1(["express"]);
  B2(["e53e04ac/hold"]);
  B3(["joi"]);
  C0(["@types/node"]);
  C1(["e53e04ac/ipp5-types"]);
  click B2 href "https://github.com/e53e04ac/hold";
  click C1 href "https://github.com/e53e04ac/ipp5-types";
  subgraph "e53e04ac/ipp5-backend-static";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
    C1 --import--> A;
  end;
~~~~~
