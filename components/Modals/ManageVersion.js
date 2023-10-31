import {useState} from "react";
import Typography from "@/components/Typegraphy/Typography";
import Button from "@/components/Button/Button";
import RadioButton from "@/components/Radio/RadioButton";

export default function ManageVersionOverlay({onClose, handleDuplicate, handleAdd}) {
    const [status, setStatus] = useState('active')

    return (
        <>
            <div className='border-b pb-4'>
                <Typography variant='h2' text='Manage Version'/>
            </div>
            <div className='flex'>
                <div className='w-1/2 border-r p-4 pt-8'>
                    <div className='border-r flex justify-between mb-4'>
                        <Typography variant='h3' text='Versions'/>
                        <Button text='Add' icon='/icons/add.svg' className='border-blue-500' onClick={handleAdd}/>
                    </div>
                    <div className='mb-2'>
                        <div className='flex justify-between mb-4'>
                            <Typography variant='h3' text='V1'/>
                            <Typography variant='h3' text='Active' className='text-green-300'/>
                        </div>
                        <div className='flex justify-between mb-4'>
                            <Typography variant='h3' text='V2'/>
                            <Typography variant='h3' text='Deprecated'/>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 p-4 pt-8'>
                    <div className='flex justify-between'>
                        <Typography variant='h3' text='V1'/>
                        <Button text='Duplicate' icon='/icons/add.svg' onClick={handleDuplicate} className='border-blue-500'/>
                    </div>
                    <div>
                        <div className='mb-4'>
                            <RadioButton
                                checked={status === 'active'}
                                onChange={() => setStatus('active')}
                                label='Active'
                                value={'active'}
                                name='status'
                            />
                            <Typography variant='body' text='Version developers can subscribe' className='ml-4 mt-1'/>
                        </div>
                        <div className='mb-4'>
                            <RadioButton
                                checked={status === 'draft'}
                                onChange={() => setStatus('draft')}
                                label='Draft'
                                value={'draft'}
                                name='status'
                            />
                            <Typography variant='body' text='Version initially created visible only the provider'
                                        className='ml-4 mt-1'/>
                        </div>
                        <div className='mb-4'>
                            <RadioButton
                                checked={status === 'deprecated'}
                                onChange={() => setStatus('deprecated')}
                                label='Deprecated'
                                value={'deprecated'}
                                name='status'
                            />
                            <Typography variant='body' text='Version no longer recommended to use    '
                                        className='ml-4 mt-1'/>
                        </div>
                    </div>
                </div>

            </div>
            <div className='border-t py-4 flex items-center justify-end gap-4'>
                <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500'
                        onClick={onClose}/>
                <Button text='Save' onClick={onClose}/>
            </div>
        </>
    )
}
