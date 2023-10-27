import React, {useState} from "react";
import Typography from "@/components/Typegraphy/Typography";
import Input from "@/components/Input/Input";
import Dropdown from "@/components/Dropdown/Dropdown";
import Card from "@/components/Crad/Card";
import Button from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";
import RadioButton from "@/components/Radio/RadioButton";

export default function AddAPI({onCancel}) {
    const [selectedOption, setSelectedOption] = useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const handleSelect = (option) => {
        setSelectedOption(option);
    };
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
                <div className='my-4 flex gap-4'>
                    <RadioButton
                        label='Open Api'
                        onChange={()=>console.log('...')}
                        checked={true}
                        value={true}
                        name={'openApi'}
                        className='mt-4'
                    />
                    <RadioButton
                        label='Open Api'
                        onChange={()=>console.log('...')}
                        checked={true}
                        value={true}
                        name={'openApi'}
                        className='mt-4'
                    />
                    <RadioButton
                        label='Open Api'
                        onChange={()=>console.log('...')}
                        checked={true}
                        value={true}
                        name={'openApi'}
                        className='mt-4'
                    />
                    <RadioButton
                        label='Open Api'
                        onChange={()=>console.log('...')}
                        checked={true}
                        value={true}
                        name={'openApi'}
                        className='mt-4'
                    />
                </div>
                <FileUpload className='mb-4' />

                <div className='border-t py-4 flex items-center justify-end gap-4'>
                    <Button text='Cancel' className='border border-blue-500 !bg-blue-100 !text-blue-500' onClick={onCancel} />
                    <Button text='Add Api Project' />
                </div>
            </>
    )
}
