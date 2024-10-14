import Image from "next/image";

export default function Libreville(){
    return(
        <div>
        <Image src="/CHL.svg"alt=""width="100"height="100" />

       <div>
       <h2 className='text-center text-[24px] font-semibold'>CENTRE HOSPITALIER DE LIBREVILLE</h2>
       <p>Le Centre Hospitalier Universitaire de Libreville (CHUL) est le plus grand et le plus important hôpital du Gabon. Situé dans la capitale, Libreville, il dispose d'un serviced'accidentologie et d'urgence qui dessert une grande partie du pays. Le CHUL offre une variété de spécialités médicales, y compris la rhumatologie, la gastro-entérologie, la chirurgie, la gynécologie, la maternité, la neurochirurgie, la cardiologie, et bien d'autres. L'hôpital emploie environ 1 500 agents.
       Le Centre Hospitalier Universitaire de Libreville (CHUL) est ouvert 24 heures sur 24 7 jours sur 7.</p>
       <button type="button">CONTACTEZ UN GESTIONNAIRE</button>
       </div>
    </div>

    )
}

