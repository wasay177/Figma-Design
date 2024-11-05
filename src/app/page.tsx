import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="h-[3500px]">
    <div className="flex flex-row">
      <div className="mt-80">
      <h1 className="text-7xl font-light text-gray-400 font-Roboto ml-32">PROJECT</h1>
      <h2 className="text-7xl font-bold font-Roboto ml-32">Lorum</h2>
      <div className="mt-24">
      <button className="w-[50px] h-[50px] border-inherit border bg-gray-100 rounded-sm text-2xl mr-5 ml-32"><FaArrowLeftLong className="ml-3"/></button>
      <button className="w-[50px] h-[50px] border-inherit border bg-gray-100 rounded-sm text-2xl"><FaArrowRight className="ml-3"/></button>
      </div>
      <div>
      <Image src="/slide-numbers.png" alt="slide-numbers" width={100} height={100} className="ml-32  w-[120px] h-[50px] mt-20"/>     
      </div>
      </div>
      <div className="image">
      <button className="bg-white h-[50px] w-[200px] flex text-center justify-center items-center font-Roboto mt-[780px]">VIEW PROJECT<FaArrowRight className="ml-3"/></button>  
      {/* <Image src="/Rectangle 6.png" alt="Rectangle 6" width={300} height={300} className="ml-32 w-[650px] h-[1000px]"/> */}
      </div>
    </div>
    <div className="bg-gray-100 h-[360px] ml-9 mr-9 flex">
    <div className="flex">
    <div>
    <Image src="/Rectangle 8.png" alt="Rectangle 8" width={800} height={800} className="mt-10 ml-14 w-[2000px] h-[200px]"/>
    <Image src="/Rectangle 10.png" alt="Rectangle 10" width={800} height={800} className="mt-14 ml-14 w-[2000px] h-[100px]"/>
    </div>
    <div>
    <Image src="/Rectangle 9.png" alt="Rectangle 9" width={800} height={800} className="mt-14 w-[2000px] h-[280px] ml-24"/>
    </div>
    </div>
    <h1 className="ml-[120px] mr-[60px] font-Roboto font-light mt-6 leading-6">
      <p className="text-6xl font-Roboto font-light text-gray-400">About</p> 
      Lorem Ipsum is simply dummy text of the  printing and
      typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s,
      when an unknown printer took a gallery of type and
      scrambled it to make a type specimen book. It has
      survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged.
      <br /> 
      <button className="flex bg-white items-center justify-center h-[50px] w-[200px] mt-3">READ MORE<FaArrowRight className="ml-6"/></button> 
    </h1>
    </div>
      <h1 className="text-6xl mt-36 font-Roboto text-gray-300 ml-12">Main Focus/Mission Statement</h1>
    <div className="flex mt-6 mr-16 ml-6">
      <h1 className="text-9xl font-Roboto font-extrabold text-gray-300 ml-6">1</h1>
      <p className="mt-5 ml-4 text-md font-Roboto">
         Lorem ipsum dolor sit amet, 
         consectetur adipiscing elit.
         Sed efficitur, lectus et
         facilisis placerat.
      </p> 
      <h1 className="text-9xl font-Roboto font-extrabold text-gray-300 ml-[600px]">2</h1>
      <p className="mt-5 ml-4 text-md font-Roboto">
         Lorem ipsum dolor sit amet,consectetur
         adipiscing elit.Sed efficitur, lectus et
         facilisis placerat, magna mauris porttitor
         tortor, a auctor est felis ut nisl.
      </p> 
    </div>
    <div>
      <h1 className="font-Roboto font-light text-6xl ml-12 text-gray-300 mt-32">Our Projects</h1>
      <div className="flex mt-[50px]">
      <div className="image1">
      <div className="h-[255px] w-[570px] bg-gray-600 opacity-70 p-10">
      <h1 className="text-7xl font-Roboto font-bold text-white">Sample</h1>
      <h1 className="text-7xl font-Roboto font-bold text-white">Project</h1>
      <button className="text-white flex mt-4">VIEW MORE<FaArrowRight className="ml-3 mt-1"/></button>       
      </div>
      {/* <Image src="/Rectangle 12.png" alt="Rectangle 12" width={400} height={400} className="ml-[50px] h-[300px] w-[560px]"/> */}
      </div>
      <div className="">

      </div>
      <Image src="/image 15.png" alt="image 15" width={400} height={400} className="h-[257px] w-[560px]"/>
      </div>
      <div className="flex">
      <Image src="/image 16.png" alt="image 16" width={200} height={200} className="ml-[50px] mt-[2px] h-[257px] w-[200px]"/>
      <Image src="/image 17.png" alt="image 17" width={400} height={400} className="ml-[50px] mt-[2px] h-[257px] w-[500px]"/>
      <Image src="/image 18.png" alt="image 18" width={300} height={300} className="ml-[50px] mt-[2px] h-[257px] w-[375px]"/>
      </div>
      <button className="flex bg-gray-900 text-white mt-[40px] h-[50px] w-[200px] text-center justify-center items-center ml-[1030px]">ALL PROJECTS<FaArrowRight className="ml-3 text-center justify-center items-center"/></button>
    </div>
    <div className="mt-32">
      <h1 className="font-Roboto text-7xl font-light text-gray-300 ml-12">Contact Us</h1>
      <div className="flex ml-12">
      <div className="flex flex-col mt-4">
      <input type="text" placeholder="Name" className="bg-gray-200 h-[40px] w-[500px] p-4"/>
      <input type="number" placeholder="Phone Number*" className="bg-gray-200 mt-4 h-[40px] w-[500px] p-4"/>
      <input type="text" placeholder="Email*" className="bg-gray-200 mt-4 h-[40px] w-[500px] p-4"/>
      <input type="text" placeholder="Interested in*" className="bg-gray-200 mt-4 h-[40px] w-[500px] p-4"/>
      <textarea placeholder="Message*" className="bg-gray-200 mt-4 h-[200px] w-[500px] p-4"/>
      <button className="flex bg-gray-900 text-white mt-16 h-[50px] w-[200px] text-center justify-center items-center">SEND EMAIL<FaArrowRight className="ml-3 text-center justify-center items-center"/></button>
      </div>
      <Image src="/image 12.png" alt="image 12" width={650} height={650} className="ml-[30px] h-[440px]"/>
      </div>
    </div>
    </div>  
  );
}

// <div className="w-[500px] h-[2000px] flex">
//         <div className="mt-64">
//         <h1 className="text-7xl font-light text-gray-400 font-Roboto ml-32">PROJECT</h1>
//         <h2 className="text-7xl font-bold font-Roboto ml-32">Lorum</h2>
//         <button className="w-[50px] h-[50px] border-inherit border bg-gray-100 rounded-sm text-2xl mr-5 ml-32"><FaArrowLeftLong className="ml-3"/></button>
//         <button className="w-[50px] h-[50px] border-inherit border bg-gray-100 rounded-sm text-2xl"><FaArrowRight className="ml-3"/></button>
//         </div>
//         <div className="mb-32 w-[500px] h-[500px]">
//         <Image src="/Rectangle 6.png" alt="Rectangle 6" width={500} height={500} className="ml-[130px]"/>
//         <button className="h-14 w-48 bg-white flex ml-32 justify-center text-center items-center mt-2">VIEW PROJECT<FaArrowRight className="mt-1 ml-6"/></button>
//         </div>
//         <div className="bg-gray-100 flex h-[500px] w-[1000px]">
//         <div className="">
//         <Image src="/Rectangle 8.png" alt="Rectangle 8" width={400} height={400}/>
//         <Image src="/Rectangle 10.png" alt="Rectangle 10" width={300} height={300}/>
//         </div> 
//         <div>
//         <Image src="/Rectangle 9.png" alt="Rectangle 9" width={500} height={500} className=""/>
//         </div>
//         </div>
//       </div> 