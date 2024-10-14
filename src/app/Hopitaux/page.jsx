import Barre from '../components/Barre'
import Image from 'next/image'
import Owendo from '../components/Owendo'
import Libreville from '../components/Libreville'
import Akanda from '../components/Akanda'
import Pk9 from '../components/Pk9'
import Melene from '../components/Melene'

export default function Hopitaux(){
    return(
        <div  className='w-[1,088px] h-[234.01px] gap-[49px]'>
            <div className="flex justify-center py-8 text-black">
            <h1 className="flex justify-center py-[7.06px ] border font-bold  rounded-[9.88px]  md:text-[28.24px]  w-[256.12px] h-[46.59px] ">Liste des hopitaux</h1>
            </div>
            <Barre />
            <h1 className='w-[1088px] h-[96px] font-bold text-[30px] text-center flex justify-center py-8 m-auto'>DECOUVREZ LES HOPITAUX QUI SONT PRES DE CHEZ VOUS ET CONCTATEZ-LES</h1>

         <section className='py-20'>
             
            <Owendo/>
            <Libreville/>
            <Akanda/>
            <Pk9/>
            <Melene/>
            </section>
        </div>
    )
}