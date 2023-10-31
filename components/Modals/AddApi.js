import React, {useState} from "react";
import Typography from "@/components/Typegraphy/Typography";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";
import RadioButton from "@/components/Radio/RadioButton";

export default function AddAPI({onCancel,onApply}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [showUpload, setShowUpload] = useState(false)
    const [selectedFileOption, setSelectedFileOption] = useState('doNotImport')
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleSelect = (option) => {
        setSelectedOption(option);
    };
    const handleRadioButton = (e) => {
        const isShowUploadFile = {
            doNotImport: false,
            openApi: true,
            postmanCollection: true,
            graphqlSchema: true,
            kafka: false
        }
        setSelectedFileOption(e.target.value)
        setShowUpload(isShowUploadFile[e.target.value])
    }

    return (
        <>
            <Typography variant='h1' text='Add Api' className='text-center mb-4'/>
            <Input label='Name' placeholder='custom input'/>
            <Input label='Description' placeholder='custom input'/>
            <Dropdown
                label='Category'
                options={options}
                onSelect={handleSelect}
                placeholder="Select an option"
            />
            <Dropdown
                label='Team'
                options={options}
                onSelect={handleSelect}
                placeholder="Select an option"
            />
            <div className='my-4 gap-4'>
                <RadioButton
                    label='Do not Import'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'doNotImport'}
                    value='doNotImport'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='OpenApi'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'openApi'}
                    value='openApi'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='Postman Collection'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'postmanCollection'}
                    value='postmanCollection'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='GraphQL Schema'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'graphqlSchema'}
                    value='graphqlSchema'
                    name={'file'}
                    className='mt-4'
                />
                <RadioButton
                    label='Kafka'
                    onChange={handleRadioButton}
                    checked={selectedFileOption === 'kafka'}
                    value='kafka'
                    name={'file'}
                    className='mt-4'
                />
            </div>
            {showUpload && <FileUpload className='mb-4'/>}

            <div className='border-t py-4 flex items-center justify-end gap-4'>
                <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500'
                        onClick={onCancel}/>
                <Button text='Add Api Project' onClick={onApply}/>
            </div>
        </>
    )
}
