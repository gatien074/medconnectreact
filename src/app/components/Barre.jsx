export default function Barre() {
    return (
      <div className="flex justify-center w-full px-4">
        <form className="flex flex-col sm:flex-row items-center w-full max-w-3xl gap-3">
          <input
            className="w-full sm:w-[70%] h-12 sm:h-[49.42px] text-green-600 rounded-lg bg-[#F9F2F2B2] border border-blue-600 px-4 text-sm placeholder-gray-500"
            type="search"
            placeholder="Hôpital ou Clinique"
          />
          <button
            className="w-full sm:w-[30%] h-12 sm:h-[46.59px] rounded-lg bg-[#000000B2]  text-white font-bold text-base sm:text-lg"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </div>
    );
  }
  