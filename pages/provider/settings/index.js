import Typography from "@/components/Typegraphy/Typography";
import RadioButton from "@/components/Radio/RadioButton";
import {useState} from "react";
import SearchInput from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import PageLayout from "@/components/HubLayout/HubLayout";

export default function Settings() {
    const [transferTo, setTransferTo] = useState('user')
    const [search, setSearch] = useState('')
    return (
        <PageLayout>
            <div className='p-4'>
                <Typography variant='h2' text='Transfer ownership' className='mb-4'/>
                <Typography
                    variant='h4'
                    text='Transfer ownership of this API to another ElevateAPI user or team.'
                    className='mb-4'
                />
                <Typography variant='h3' text='Transfer to' className='mb-4'/>
                <div className='mb-4'>
                    <RadioButton
                        checked={transferTo === 'user'}
                        onChange={() => setTransferTo('user')}
                        label='User'
                        value={'user'}
                        name='transferTo'
                    />
                </div>
                <div className='mb-4'>
                    <RadioButton
                        checked={transferTo === 'team'}
                        onChange={() => setTransferTo('team')}
                        label='Team'
                        value={'team'}
                        name='transferTo'
                    />
                </div>
                <div className='mb-4 md:w-[300px]'>
                    <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className='mb-4'>
                    <Button text='Transfer' className='bg-red-600 text-blue-100'/>
                </div>
                <div className='mb-4'>
                    <Typography variant='h2' text='Delete API'/>
                </div>
                <div className='mb-4'>
                    <Typography
                        variant='body'
                        text={`Permanently deleting this API project will remove it from the ElevateAPI Hub Listing. This action will erase your team's data, including Requests, Testing, and Descriptions, and it is irreversible.`}
                    />
                </div>
                <Button text='Delete Api' className='bg-red-600 text-blue-100'/>
            </div>
        </PageLayout>
    )
}
