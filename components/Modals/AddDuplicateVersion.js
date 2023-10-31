import Typography from "@/components/Typegraphy/Typography";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function AddDuplicateVersion({onClose}){
    return (
        <>
            <Typography text='Duplicate Version' variant='h2' className='mb-2' />
            <Input label='Version Number' />
            <Typography variant='body' text='Example 1.0.1' className='mb-4' />
            <div className='border-t py-4 flex items-center justify-end gap-4'>
                <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500'
                        onClick={onClose}/>
                <Button text='Add Version' onClick={onClose}/>
            </div>
        </>
    )
}
