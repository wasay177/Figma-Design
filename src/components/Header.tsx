import Image from "next/image"

export default function Header() {
  return(
      <div className="flex w-[1260px] h-[102px] bg-white">
        <div className="w-70 h-24">
        <Image src="/Group 11.png" alt="Group 11" width={80} height={80} className="mx-36 pt-4 pb-4 opacity-100"/>  
        </div>
        <ul className="flex gap-x-10 mx-auto items-center justify-center mb-2">
          <li className="border-y-2  border-black tracking-widest font-Roboto text-xs">MAIN</li>  
          <li className="tracking-widest font-Roboto text-xs">GALLERY</li>  
          <li className="tracking-widest font-Roboto text-xs">PROJECTS</li>  
          <li className="tracking-widest font-Roboto text-xs">CERTIFICATIONS</li>  
          <li className="tracking-widest font-Roboto text-xs">CONTACTS</li>
        </ul>  
      </div>
  )    
}