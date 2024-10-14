import Image from "next/image";

export default function(){
    return(
              <div>
                <Image src="/CHA.svg" alt=""width="100"height="100"></Image>
         <div>
                <h2 className='text-center text-[24px] font-semibold'>CENTRE HOSPITALIER D’AKANDA</h2>
                <p>Le Centre Hospitalier Universitaire d'Akanda (CHUA) est un hôpital moderne situé à Akanda, près de Libreville, au Gabon. Il a été officiellement inauguré le 7 mai 2018 et est sous pavillon militaire2. Le CHUA offre une gamme complète de services médicaux et dispose de technologies de pointe pour assurer des soins de qualité.
                Les heures d'ouverture du CHUA sont 24 heures sur 24, 7 jours sur 7.</p>
                <button type="button">CONTACTEZ UN GESTIONNAIRE</button>
        </div>
             </div>
    )
}