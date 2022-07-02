import React from "react";
import Card from "./Card";

import type { TData } from "../App";
interface Props {
  data: TData[];
}

const Personagens: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex ">
      <ul className="flex flex-wrap justify-center justify-items-center">
        {data != null &&
          data.map((personagem) => {
            return <Card key={personagem.id} personagem={personagem} />;
          })}
      </ul>
    </div>
  );
};

export default Personagens;
