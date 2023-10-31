import Tabs from "@/components/Tabs/tabs";
import SearchInput from "@/components/Search/Search";
import {useState} from "react";
import Table from "@/components/custom-table/table";
import Navbar from "@/components/Navbar/Navbar";
import HubLayout from "@/components/HubLayout/HubLayout";

const usersTabs=[
    {
        label:"Users"
    },
    {
        label:"Invite Users"
    }
]

const usersTypes=[
    {
        label:"Paid Users"
    },
    {
        label:"Free Users"
    }
]

const columns = [
    { key: 'username', label: 'Username' },
    { key: 'status', label: 'Status' },
    { key: 'name', label: 'Name' },
    { key: 'subscribedDate', label: 'Subscribed Date' }, // Adjusted the key to match your column definition
    { key: 'plan', label: 'Plan Name' },
    { key: 'paid', label: 'Total Paid' },
    { key: 'active', label: 'Last Active' },
];

const data = [
    {
        username: 'user1',
        status: 'Active',
        name: 'John Doe',
        subscribedDate: '2023-01-15',
        plan: 'Basic Plan',
        paid: '$49.99',
        active: '2023-10-20',
    },
    {
        username: 'user2',
        status: 'Inactive',
        name: 'Alice Smith',
        subscribedDate: '2022-11-30',
        plan: 'Premium Plan',
        paid: '$99.99',
        active: '2023-10-18',
    },
    {
        username: 'user3',
        status: 'Active',
        name: 'Bob Johnson',
        subscribedDate: '2023-02-10',
        plan: 'Standard Plan',
        paid: '$74.99',
        active: '2023-10-21',
    },
    {
        username: 'user4',
        status: 'Active',
        name: 'Eva Williams',
        subscribedDate: '2023-03-05',
        plan: 'Basic Plan',
        paid: '$49.99',
        active: '2023-10-19',
    },
    {
        username: 'user5',
        status: 'Inactive',
        name: 'David Lee',
        subscribedDate: '2023-01-25',
        plan: 'Premium Plan',
        paid: '$99.99',
        active: '2023-10-17',
    },
    {
        username: 'user6',
        status: 'Active',
        name: 'Grace Brown',
        subscribedDate: '2023-04-12',
        plan: 'Standard Plan',
        paid: '$74.99',
        active: '2023-10-22',
    },
    {
        username: 'user7',
        status: 'Active',
        name: 'Mike Davis',
        subscribedDate: '2023-05-08',
        plan: 'Basic Plan',
        paid: '$49.99',
        active: '2023-10-20',
    },
    {
        username: 'user8',
        status: 'Inactive',
        name: 'Linda Wilson',
        subscribedDate: '2023-06-30',
        plan: 'Premium Plan',
        paid: '$99.99',
        active: '2023-10-18',
    },
    {
        username: 'user9',
        status: 'Active',
        name: 'Peter Taylor',
        subscribedDate: '2023-07-15',
        plan: 'Standard Plan',
        paid: '$74.99',
        active: '2023-10-21',
    },
    {
        username: 'user10',
        status: 'Active',
        name: 'Sara Hall',
        subscribedDate: '2023-08-03',
        plan: 'Basic Plan',
        paid: '$49.99',
        active: '2023-10-19',
    },
];


export default function Community(){
    const [search, setSearch]=useState('')
    return (
      <HubLayout>
          <div className='w-fit md:w-auto'>
              <div className='p-4 md:p-10'>
                  <div className='mb-4'>
                      <Tabs tabs={usersTabs} />
                  </div>
                  <div className='mb-4 flex flex-col md:flex-row justify-between'>
                      <div className='mb-4'>
                          <Tabs tabs={usersTypes} />
                      </div>
                      <div >
                          <SearchInput placeholder='Search username' value={search} onChange={setSearch} />
                      </div>
                  </div>
                  <div className='w-[100vw] md:w-full overflow-scroll'>
                      <Table columns={columns} data={data}/>
                  </div>
              </div>
          </div>
      </HubLayout>
    )
}
