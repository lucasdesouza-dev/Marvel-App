import type { TData } from "../App";
interface Props {
  personagem: TData;
}

const Card: React.FC<Props> = ({ personagem }) => {
  const verificar = (parametro: string | undefined) => {
    return parametro === undefined || parametro === ""
      ? `The character ${personagem.name} has no description assigned.`
      : parametro;
  };
  return (
    <div className=" card  p-4 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  m-2">
      <div className=" flex  justify-center ">
        <span className="text-xl font-bold mb-4">{personagem.name}</span>{" "}
      </div>
      <picture>
        <source />
        <img
          className="rounded-lg w-[414px] h-[414px]"
          src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
          alt={`Imagem ${personagem.name} `}
        />
      </picture>

      <div className="p-5   m-2 ">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {verificar(personagem.description)}
        </p>
      </div>
    </div>
  );
};

export default Card;
