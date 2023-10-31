import {useState} from "react";
import Typography from "@/components/Typegraphy/Typography";
import SearchInput from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Table from "@/components/custom-table/table";

const columns = [
    {key: 'endpoints', label: 'Endpoints'},
    {key: 'method', label: 'Method'},
    {key: 'action', label: 'Action'},
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
export default function EndPoints({onTabSelect}) {
    const [search, setSearch] = useState('')

    return (
        <>
            <div className='mb-4'>
                <Typography variant='h2' className='mb-4' text="Endpoints"/>
                <Typography variant='body' className='mb-4'
                            text='Changes made to the endpoints will be reflected in the Hub.'/>
                <Typography variant='body' text='Add and define your API endpoints.'/>
            </div>
            <div className='flex flex-col  lg:flex-row justify-between'>
                <div>
                    <SearchInput placeholder='Search Endpoint' value={search}
                                 onChange={e => setSearch(e.target.value)}/>
                </div>
                <div className='flex flex-col md:flex-row gap-1 mb-4 mt-2 lg:mt-0'>
                    <Button text='Add REST API Endpoint' icon='/icons/add.svg'
                            onClick={() => onTabSelect(2)}/>
                    <Button text='Add GraphQl Endpoint' icon='/icons/add.svg'
                            onClick={() => onTabSelect(3)}/>
                    <Button text='Delete' className='bg-red-600'/>
                </div>
            </div>
            <div>
                <Table columns={columns} data={data}/>
            </div>
        </>
    )
}
