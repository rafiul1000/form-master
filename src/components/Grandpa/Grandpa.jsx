import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "diamond";

  return (
    <div className="grandpa div">
      <h2>Grandpa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dad asset={asset}></Dad>
          <Uncle asset={asset}></Uncle>
          <Aunty></Aunty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/* 

1. create a context and export it

2. add provider for the context with a value

*/
