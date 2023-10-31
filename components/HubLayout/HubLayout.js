import Navbar from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/SideBar";

export default function HubLayout({children}){
    return (
        <div>
            <Navbar />
           <div className='flex'>
               <SideBar />
              <div className='w-5/6 p-4'>
                  {children}
              </div>
           </div>
        </div>
    )
}
