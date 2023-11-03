import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/SideBar";

export default function PageLayout({children}) {
  return (
    <div className='flex'>
      <SideBar/>
      <div className='w-full lg:w-5/6'>
        <Navbar/>
        <div className='p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}
