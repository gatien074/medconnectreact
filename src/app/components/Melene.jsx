import Image from "next/image";

export default function Melene() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[90%] lg:w-[1201px] bg-[#ffffff] justify-center md:justify-around items-center mt-8 mx-auto py-4  shadow-lg shadow-green-600 space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image
          className="w-3/4 sm:w-1/2 md:w-[300px] h-auto object-contain"
          src="/Hopital melen.svg"
          alt="Hôpital Melen"
          width={100}
          height={100}
        />
      </div>
      <div className="md:w-[541px] text-center md:text-left space-y-4 px-2">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          CENTRE HOSPITALIER REGIONAL ESTUAIRE MELEN
        </h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
          Le Centre Hospitalier Régional de l’Estuaire de Melen (CHREM) est situé à Libreville, au Gabon. Il offre une gamme complète de services médicaux, y compris des soins de laboratoire, de gynécologie, d’urgences, de bloc opératoire, de médecine générale, de pédiatrie, de radiologie, et bien plus encore. Les heures d’ouverture du CHREM sont 24 heures sur 24, 7 jours sur 7.
        </p>
        <div className="flex justify-center md:justify-start">
          <button
            className="bg-lime-500 w-full md:w-72 h-10 mt-2 text-white font-medium rounded-full shadow-md shadow-green-600"
            type="button"
          >
            CONTACTEZ UN GESTIONNAIRE
          </button>
        </div>
      </div>
    </div>
  );
}
