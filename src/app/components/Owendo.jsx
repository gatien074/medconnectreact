import Image from "next/image"

export default function Owendo(){
    return(
            <div className='flex w-[1201px] h-[336px]'>
               
               <Image className="w-[1080px]  h-[300px]" src="/CHO.svg" alt="" width={3000}height={3000}/>
            <div>
               <h2 className='text-center text-[24px] font-semibold'>CENTRE HOSPITALIER D’OWENDO</h2>
               <p>Le centre Hospitalier Universitair d'Owendo(CHUO) est un hôpital de pointe situé à Owendo, près de Libreville, au Gabon.Inaugurer en 2016, il est spécialisé dans la chirurgie orthopédique et traumatologique. Le CHUO dispose de plusieurs plateaux techniques modernes et offre des soins de qualité dans divers domaines, tels que l'anesthé-sie-réanimation, la chirurgie maxillo-faciale, et les accouchements. Il est dirigé par le Dr Elise Eyang Obam et compte cinq services spécialisés. Le Centre Hospitalier Universitaire d'Owendo (CHUO) est ouvert 24 heures sur 24,  7 jours sur 7.</p>
               <button type="button">CONTACTEZ UN GESTIONNAIRE</button>
               </div>
            </div>
       
    )
}