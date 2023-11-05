import SideBar from "@/components/Sidebar/SideBar";
import Navbar from "@/components/Navbar/Navbar";

export default function AppsLayout({children}){
  return (
    <div>
      <Navbar/>
      <div className='flex'>
        <SideBar isDeveloper={true}/>
        <div className='w-full lg:w-5/6'>
          <div className='p-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}