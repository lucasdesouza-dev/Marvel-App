import type { TData } from "../App";
interface Props {
  personagem: TData;
}

const Card: React.FC<Props> = ({ personagem }) => {
  return (
    <div className=" card  max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  m-2">
      <div className=" flex  justify-center ">
        <span className="text-xl font-bold ">{personagem.name}</span>{" "}
      </div>

      <img
        className="rounded-t-lg "
        src={`${personagem.thumbnail.path}.${personagem.thumbnail.extension}`}
        alt={`Imagem ${personagem.name} `}
      />
      <div className="p-5   m-2 ">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {personagem.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
