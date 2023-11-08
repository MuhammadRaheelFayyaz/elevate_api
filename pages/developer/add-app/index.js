import AppsLayout from "@/components/AppsLayout/AppsLayout";
import Button from "@/components/Button/Button";
import Dropdown from "@/components/Dropdown/Dropdown";
import FileUpload from "@/components/FileUpload/FileUpload";
import PageLayout from "@/components/HubLayout/HubLayout";
import Input from "@/components/Input/Input";
import Checkbox from "@/components/RadioButton/RadioButton";
import TextArea from "@/components/TextArea/textArea";
import Typography from "@/components/Typegraphy/Typography";

const dropdownData = ["ElevateAPI", "OAuth2", "Header", "Basic Auth"]

const AddApps = ()=> {
    return (
        <AppsLayout>
            <div >
                <div className=" p-6 pb-8">
                    <Typography variant="h1" text="Add New App" />
                </div>
                <div className="px-6 max-w-[500px]">
                    <Typography variant="h4" className='mb-2' text="Describe your App" />
                    <Input label='* App Name' />
                    <TextArea label='Description' />
                    <FileUpload placeholder="Select Image" className='mb-3' />
                    <div className="flex items-center gap-3">
                        <Typography variant="h4" className='mb-2' text="Add initial authorization" />
                        <img src="/icons/info.svg" alt="info" />
                    </div>
                    <Input label='Authorization Name' />
                    <Typography variant="small" className='mb-2' text="* Select gateways" />
                    <Typography variant="xs" className='mb-2 text-gray-400' text="Gateways are configured by your Environment Admin" />
                    <div className="flex items-center gap-2 mb-2">
                        <Checkbox label='elevateapi.com' disable={true} />
                        <Typography variant='xs' text="(ElevateAPI gateway)" />
                    </div>
                    <Typography variant='small' text="Add authorization details corresponding to selected gateway(s)" />
                    <Typography variant='xs' className='my-1' text="Authorization type" />
                    <Dropdown options={dropdownData} className='!mb-0.5' onSelect={(option)=>console.log(option)} placeholder='ElevateAPI' />
                    <Typography variant='xs' className='mb-1 text-gray-400' text="API key will be generated automatically" />
                    <Button className='mt-10' text="Add App" />
                </div>
            </div>
        </AppsLayout>
    )
}

export default AddApps;