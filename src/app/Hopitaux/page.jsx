import Barre from '../components/Barre'
import Owendo from '../components/Owendo'
import Libreville from '../components/Libreville'
import Akanda from '../components/Akanda'
import Pk9 from '../components/Pk9'
import Melene from '../components/Melene'

export default function Hopitaux() {
    return (
        <div className="w-full max-w-[1088px] mx-auto px-4 gap-8">
           
            <div className="flex justify-center py-8 text-black">
                <h1 className="py-2 px-4 border font-bold rounded-lg text-lg md:text-2xl text-center w-full max-w-xs">
                    Liste des hôpitaux
                </h1>
            </div>

           
            <Barre />

           
            <h1 className="font-bold text-center text-lg md:text-2xl leading-snug py-8">
                DÉCOUVREZ LES HÔPITAUX QUI SONT PRÈS DE CHEZ VOUS ET CONTACTEZ-LES
            </h1>

           
            <section className="space-y-8">
                <Owendo />
                <Libreville />
                <Akanda />
                <Pk9 />
                <Melene />
            </section>
        </div>
    );
}
