import {useState} from "react";
import Typography from "@/components/Typegraphy/Typography";
import Input from "@/components/Input/Input";
import RadioButton from "@/components/Radio/RadioButton";
import FileUpload from "@/components/FileUpload/FileUpload";
import Button from "@/components/Button/Button";

export default function AddNewVersion({onClose}){
    const [showUpload, setShowUpload] = useState(false)
    const [selectedFileOption, setSelectedFileOption] = useState('manually')

    const handleRadioButton = (e) => {
        const isShowUploadFile = {
            manually: false,
            openApi: true,
            postmanCollection: true,
        }
        setSelectedFileOption(e.target.value)
        setShowUpload(isShowUploadFile[e.target.value])
    }
    return (
        <>
            <Typography text='Duplicate Version' variant='h2' className='mb-2'/>
            <Input label='Version Number'/>
            <Typography variant='body' text='Example 1.0.1' className='mb-4'/>
            <div className='my-4 gap-4'>
                <RadioButton
                    label='UI (manually)'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'manually'}
                    value='manually'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='Import OpenApi'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'openApi'}
                    value='openApi'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='Import Postman Collection'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'postmanCollection'}
                    value='postmanCollection'
                    name={'file'}
                    className='mt-4'
                />
            </div>
            {showUpload && <FileUpload className='mb-4'/>}
            <div className='border-t py-4 flex items-center justify-end gap-4'>
                <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500'
                        onClick={onClose}/>
                <Button text='Add Version' onClick={onClose}/>
            </div>
        </>
    )
}
