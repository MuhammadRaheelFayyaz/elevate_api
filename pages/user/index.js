import Button from "@/components/Button/Button";
import Image from "next/image";
import Typography from "@/components/Typegraphy/Typography";
import Tabs from "@/components/Tabs/tabs";
import Card from "@/components/Crad/Card";
import ApiCard from "@/components/Crad/ApiCard";
import Navbar from "@/components/Navbar/Navbar";
import Table from "@/components/custom-table/table";
import Slider from "@/components/Slider/Slider";
import {useState} from "react";
import {useRouter} from "next/router";
import Input from '@/components/Input/Input';


const tabs = [
  {
    label: "Publish API('s)"
  },
  {
    label: "API('s) Following"
  },
  {
    label: "Followed By"
  },
  {
    label: "Following"
  },
]

const discussionTabs = [
  {
    label: "All"
  },
  {
    label: "Questions"
  },
  {
    label: "Answers"
  },
]

const columns = [
  {key: 'title', label: 'Title'},
  {key: 'createdAt', label: 'Created At'}
];
const data = [
  {title: 'Item 1', createdAt: '2023-11-04'},
  {title: 'Item 2', createdAt: '2023-11-05'},
  {title: 'Item 3', createdAt: '2023-11-06'}
];


export default function User() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const router = useRouter();
  const onClick = () => {
    router.push("/user");
  };
  return (
    <div>
      <Navbar/>
      <div className='w-full md:w-[85%] md:mb-20 mt-5 p-4 mx-auto'>
        <div className='flex flex-col justify-center gap-3 items-center w-full max-w-[402px] border-2 shadow-custom border-white mx-auto p-4 rounded-2xl mb-4 bg-blue-300'>
          <div className='w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-white'>
            <Image
              src={'/images/profile.jpeg'}
              width={150}
              height={150}
            />
          </div>
          <div className="text-center">
            {
              editMode?<Input wrapperClassname='!mb-1' placeholder='Muhammad Raheel' />: <Typography text='Muhammad Raheel' variant='h2' className='cursor-pointer font-bold'/>
            }
            <div className='flex gap-2 justify-center flex-wrap'>
              {editMode?<Input wrapperClassname='!mb-1' placeholder='Software Developer' />:<Typography text='Software Developer' variant='h4'/>}
              {editMode?<Input wrapperClassname='!mb-1' placeholder='ABC APPs' />:<Typography text='ABC APPs' variant='h4'/>}
            </div>
            <div className='flex gap-2 items-center justify-center'>
              {editMode?<Input wrapperClassname='!mb-1' placeholder='Islamabad' />:<Typography text='Islamabad' variant='h3' className='text-gray-600'/>}
            </div>
            <div className='flex gap-2 items-center justify-center'>
              {editMode?<Input wrapperClassname='!mb-1' placeholder='BIO' />:<Typography text='BIO' variant='h4'/>}
            </div>
          </div>
          <Button text={editMode?'Save':'Edit Profile'} icon={editMode?'':'/icons/edit.svg'} className='md:w-[100px] mt-1 md:t-0 h-[40px] justify-center' onClick={()=>setEditMode(!editMode)}/>
        </div>
        <div className='mb-4'>
          <Tabs tabs={tabs} onTabSelect={setSelectedTab}/>
        </div>
        {
          selectedTab === 0 && <div className='flex gap-4 flex-wrap mb-8'>
            <Card className='w-full min-[425px]:w-[300px]'>
              <ApiCard/>
            </Card>
            <Card className='w-full min-[425px]:w-[300px]'>
              <ApiCard/>
            </Card>
            <Card className='w-full min-[425px]:w-[300px]'>
              <ApiCard/>
            </Card>
          </div>
        }

        {
          selectedTab === 1 && <div className='flex gap-4 flex-wrap mb-8'>
            <Card className='w-full min-[425px]:w-[300px]'>
              <ApiCard/>
            </Card>
            <Card className='w-full min-[425px]:w-[300px]'>
              <ApiCard/>
            </Card>
          </div>
        }
        {
          selectedTab === 2 &&
          <Slider>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
            <Card className='shadow-none border mr-1'>
              <ApiCard/>
            </Card>
          </Slider>
        }
        {
          selectedTab === 3 && <div className="w-full h-[250px] flex justify-center items-center">
            <div className="w-[300px] text-center">
              <Typography variant="h2" text='Not Following Yet' />
              <Typography variant="small" text='They must have not found the one yet' />
            </div>
          </div>
        }

        <div className='flex justify-between md:items-center flex-col md:flex-row mb-4 p-2 md:p-0'>
          <Typography text='Discussions 0'/>
          <div className='mt-4 md:mt0'>
            <Tabs tabs={discussionTabs}/>
          </div>
        </div>
        <div>
          {/*discuustion table here*/}
          <Table columns={columns} data={data}/>
        </div>

      </div>
    </div>
  )
}
