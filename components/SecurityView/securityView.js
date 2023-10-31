import Typography from "@/components/Typegraphy/Typography";
import Button from "@/components/Button/Button";
import {useState} from "react";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/textArea";
import Dropdown from "@/components/Dropdown/Dropdown";


const authorizationOption=['API Key','HTTP', 'OAuth 2.0']
const addToOptions=['Header','query']
export default function SecurityView({onTabSelect}) {
    const [view, setView] = useState('viewEndPoints')
    return (
        <div className='p-2'>
            <Typography variant='h2' text='Security Schemes'/>
            <Typography variant='body'
                        text='Security Schemes are used for APIs that require additional authorization such as OAuth 2.0. '/>
            <div className='flex justify-end mb-4'>
                <Button text='New Schema' onClick={()=>setView('addEndPoints')}/>
            </div>
            <div className='border flex'>
                <div className='border-r p-2 w-1/5'>
                    <div className='flex justify-between mb-4'>New Auth</div>
                    <div className='flex justify-between mb-4'>New Auth1</div>
                </div>
               <div className='w-4/5'>
                   {view === 'viewEndPoints' && <ViewEndPoints/>}
                   {view ==='addEndPoints' && <AddEndPoints onClick={setView} />}
               </div>
            </div>
        </div>
    )
}


const ViewEndPoints = () => {
    return (
        <div className='p-4'>
            <Typography variant='h2' text='New Auth' className='mb-3'/>
            <div className='mb-2 flex gap-2 items-center'>
                <Typography variant='h3' text='Description:'/>
                <Typography variant='body' text='Some description here'/>
            </div>
            <div className='mb-2 flex gap-2 items-center'>
                <Typography variant='h3' text='Authorization set:'/>
                <Typography variant='body' text='Authorization set'/>
            </div>
            <div className='mb-2 flex gap-2 items-center'>
                <Typography variant='h3' text='Key:'/>
                <Typography variant='body' text='Key here'/>
            </div>
            <div className='mb-2 flex gap-2 items-center'>
                <Typography variant='h3' text='Description:'/>
                <Typography variant='body' text='Some description here'/>
            </div>
            <div className='mb-2 flex gap-2 items-center'>
                <Typography variant='h3' text='Add to:'/>
                <Typography variant='body' text='Header'/>
            </div>
        </div>
    )
}

const AddEndPoints = ({onClick}) => {

    const handleSelect = (option) => {
       console.log('options',option)
    };
    return (
        <div className='p-4'>
           <div className='w-[50%]'>
               <Input value='New Auth' />
                <TextArea label='Auth Description' />
               <Dropdown
               label='Authorization set'
               options={authorizationOption}
               placeholder="Select an option"
               onSelect={handleSelect}
               />
               <Input lable='Key'  />
               <Input lable='Description'  />
               <Dropdown
                   label='Add to:'
                   options={addToOptions}
                   placeholder="Select an option"
                    onSelect={handleSelect}
               />
               <div className='border-t py-4 flex items-center justify-end gap-4'>
                   <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500'
                           onClick={()=>onClick('viewEndPoints')}/>
                   <Button text='Save' onClick={()=>onClick('viewEndPoints')}/>
               </div>
           </div>
        </div>
    )
}
