import type { TData } from "../App";
interface Props {
  personagem: TData;
}

const Card: React.FC<Props> = ({ personagem }) => {
  return (
    <div className=" card flex flex-col container w-1/4 m-4  border-4 border-red-700 rounded  align-text-bottom  ">
      <li className="list-none   h-full">
        <div className="flex  justify-center ">
          <span className="text-xl font-bold ">{personagem.name}</span>
        </div>
        <img
          src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
          alt={`Imagem ${personagem.name} `}
        />
      </li>
      <div className="m-2">{personagem.description}</div>
    </div>
  );
};

export default Card;
