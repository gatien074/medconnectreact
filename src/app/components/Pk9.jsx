import Image from "next/image";

export default function pk9() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[90%] lg:w-[1201px] h-auto bg-[#ffffff] justify-center md:justify-around items-center mt-8 mx-auto py-4 shadow-lg shadow-green-600 space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image
          className="w-3/4 sm:w-1/2 md:w-[300px] h-auto object-contain mt-4"
          src="/hopital pk9.svg"
          alt="Hôpital PK9"
          width={100}
          height={100}
        />
      </div>
      <div className="md:w-[541px] text-center md:text-left space-y-4 px-2">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mt-4">
          HÔPITAL D’INSTRUCTION DES ARMEES OMAR BONGO ONDIMBA
        </h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed mt-4">
          L'Hôpital d'Instruction des Armées Omar Bongo Ondimba (HIAOBO) est un hôpital militaire situé à Libreville, au Gabon. Il a été construit en 1998 sur l'ancien site de l'hôpital militaire. L'HIAOBO offre des services d'urgence médico-chirurgicaux et est équipé d'un héliport. Il est ouvert aux militaires ainsi qu'aux civils. Les heures d'ouverture de l'HIAOBO sont 24 heures sur 24, 7 jours sur 7.
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
