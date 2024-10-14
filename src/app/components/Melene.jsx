import Image from "next/image";

export default function(){
    return(
     <div>
        <Image src="/Hopital melen.svg"alt=""width="100"height="100"/>
    <div>
        <h2 className='text-center text-[24px] font-semibold'>CENTRE HOSPITALIER REGIONAL ESTUAIRE MELEN</h2>
        <p>Le Centre Hospitalier Régional de l’Estuaire de Melen (CHREM) est situé à Libreville, au Gabon1. Il offre une gamme complète de services médicaux, y compris des soins de laboratoire, de gynécologie, d’urgences, de bloc opératoire, de médecine générale, de pédiatrie, de radiologie, et bien plus encore1.
        Les heures d’ouverture du CHREM sont 24 heures sur 24, 7 jours sur 7</p>
        <button type="button">CONTACTEZ UN GESTIONNAIRE</button>
    </div>
       
    </div>
    )
}