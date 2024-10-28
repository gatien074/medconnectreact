import Image from "next/image";

export default function Owendo() {
  return (
    <div className="flex flex-col md:flex-row md:w-[90%] lg:w-[1201px] md:h-auto lg:h-[336px] bg-transparent  justify-center md:justify-around items-center mt-8 mx-auto py-4 shadow-lg shadow-green-600 space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image
          className="w-3/4 sm:w-1/2 md:w-[300px] lg:w-[300px] h-auto object-contain"
          src="/CHO.svg"
          alt="Centre Hospitalier d'Owendo"
          width={1028}
          height={1028}
        />
      </div>
      <div className="md:w-[541px] text-center md:text-left space-y-4 px-2">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          CENTRE HOSPITALIER D’OWENDO
        </h2>
        <p className="text-xs sm:text-sm md:text-base">
          Le centre Hospitalier Universitair d'Owendo(CHUO) est un hôpital de pointe situé à Owendo, près de Libreville, au Gabon. Inauguré en 2016, il est spécialisé dans la chirurgie orthopédique et traumatologique. Le CHUO dispose de plusieurs plateaux techniques modernes et offre des soins de qualité dans divers domaines, tels que l'anesthésie-réanimation, la chirurgie maxillo-faciale, et les accouchements. Il est dirigé par le Dr Elise Eyang Obam et compte cinq services spécialisés. Le Centre Hospitalier Universitaire d'Owendo (CHUO) est ouvert 24 heures sur 24, 7 jours sur 7.
        </p>
        <button
          className="bg-lime-500 w-full md:w-72 h-10 mt-2 text-white font-medium rounded-full shadow-md shadow-green-600 hover:bg-transparent hover:text-black"
          type="button"
        >
          CONTACTEZ UN GESTIONNAIRE
        </button>
      </div>
    </div>
  );
}
