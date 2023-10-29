import Typography from "@/components/Typegraphy/Typography";
import CustomDropdown from "@/components/Custom-dropdown";
import Tabs from "@/components/Tabs/tabs";
import SearchInput from "@/components/Search/Search";
import {useState} from "react";
import Button from "@/components/Button/Button";
import Table from "@/components/custom-table/table";
import Navbar from "@/components/Navbar/Navbar";


const options = [
    { label: 'Option 1', status: 'Active', value: 'option1' },
    { label: 'Option 2', status: 'Draft', value: 'option2' },
    { label: 'Option 3', status: 'Draft', value: 'option3' },
];
const tabs=[
    {label:'Endpoints'},
    {label:'Security'},
]
const columns = [
    { key: 'endpoints', label: 'Endpoints' },
    { key: 'method', label: 'Method' },
    { key: 'action', label: 'Action' },
];

const data = [
    {
        endpoints: '/api/users',
        method: 'REST API',
        action: 'Edit',
    },
    {
        endpoints: '/api/products',
        method: 'REST API',
        action: 'Edit',
    },
    {
        endpoints: '/api/posts',
        method: 'REST API',
        action: 'Edit',
    },

];

export { columns, data };

export default function Definitions(){
    const [search, setSearch]=useState('')
    return (
       <div>
           <Navbar />
           <div className='p-4 md:p-10'>
               <div className='flex gap-1 items-center bg-blue-400 p-2 rounded mb-4'>
                   <Typography text='These changes will apply only to' variant='body' />
                   <CustomDropdown options={options} footer={<ManageVersion />}/>
               </div>
               <div className='mb-4'>
                   <Typography
                       text='When publishing an API version to the RapidAPI Hub, you can either manually edit definitions or upload a specification file.'
                       variant='body'
                   />
               </div>
               <div className='mb-4'>
                   <Tabs tabs={tabs}/>
               </div>
               <div className='mb-4'>
                   <Typography variant='h2' className='mb-4' text="Endpoints" />
                   <Typography variant='body' className='mb-4' text='Changes made to the endpoints will be reflected in the Hub.' />
                   <Typography variant='body'  text='Add and define your API endpoints.' />
               </div>
               <div className='flex flex-col  lg:flex-row justify-between'>
                   <div>
                       <SearchInput placeholder='Search Endpoint' value={search} onChange={setSearch} />
                   </div>
                   <div className='flex flex-col md:flex-row gap-1 mb-4 mt-2 lg:mt-0'>
                       <Button text='Add REST API Endpoint' icon='/icons/add.svg'/>
                       <Button text='Add GraphQl Endpoint' icon='/icons/add.svg'/>
                       <Button text='Delete' className='bg-red-600'/>
                   </div>
               </div>
               <div>
                   <Table columns={columns} data={data} />
               </div>

           </div>
       </div>
    )

}
const ManageVersion=()=>(<div>Manage Version</div>)
