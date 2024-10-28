import Image from "next/image";

export default function Libreville() {
  return (
    <div className="flex flex-col md:flex-row w-full md:w-[90%] lg:w-[1201px] h-auto bg-[#ffffff] justify-center md:justify-around items-center mt-8 mx-auto py-4 shadow-lg shadow-green-600  space-y-4 md:space-y-0">
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <Image
          className="w-3/4 sm:w-1/2 md:w-[300px] h-auto object-contain"
          src="/CHL.svg"
          alt="Centre Hospitalier de Libreville"
          width={100}
          height={100}
        />
      </div>
      <div className="md:w-[541px] text-center md:text-left space-y-4 px-2">
        <h2 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold">
          CENTRE HOSPITALIER DE LIBREVILLE
        </h2>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed">
          Le Centre Hospitalier Universitaire de Libreville (CHUL) est le plus grand et le plus important hôpital du Gabon. Situé dans la capitale, Libreville, il dispose d'un service d'accidentologie et d'urgence qui dessert une grande partie du pays. Le CHUL offre une variété de spécialités médicales, y compris la rhumatologie, la gastro-entérologie, la chirurgie, la gynécologie, la maternité, la neurochirurgie, la cardiologie, et bien d'autres. L'hôpital emploie environ 1 500 agents. Le Centre Hospitalier Universitaire de Libreville (CHUL) est ouvert 24 heures sur 24, 7 jours sur 7.
        </p>
        <button
          className="bg-lime-500 w-full md:w-72 h-10 mt-2 text-white font-medium rounded-full shadow-md shadow-green-600"
          type="button"
        >
          CONTACTEZ UN GESTIONNAIRE
        </button>
      </div>
    </div>
  );
}
