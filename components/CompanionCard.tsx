
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  description: string;

}



const CompanionCard = ({id , name , topic , subject , duration , color , description}:CompanionCardProps) => {
  return (
    <div>
   <article className="companion-card" style={{backgroundColor :color}}>
    <div className="flex justify-between items-center">
      <div className="subject-badge">{subject}</div>
      <button className="companion-bookmark">
        <Image  src={"/icons/bookmark.svg"}  alt="bookmark" width={12.5} height={15}/>
        

      </button>

    </div>

    <h1 className="text-2xl font-semibold">{name}</h1>
    <p className="text-sm font-medium">{topic}</p>
    <div className="flex items-center gap-2"> 
      <Image src={"/icons/clock.svg"} alt="duration" width={13.5} height={13.5}/>
      <span className="text-sm font-medium">{duration} min</span>

    </div>
    <Link href={`/companions/${id}`} className="w-full">
    <button className="btn-primary w-full justify-center ">LAUNCH  LESSON</button>
    </Link>
   </article>
    </div>
  );
}

export default CompanionCard;
