import Typography from "@/components/Typegraphy/Typography";
import CustomDropdown from "@/components/Custom-dropdown";
import Tabs from "@/components/Tabs/tabs";
import SearchInput from "@/components/Search/Search";
import {useState} from "react";
import Button from "@/components/Button/Button";
import Table from "@/components/custom-table/table";
import Navbar from "@/components/Navbar/Navbar";
import Modal from "@/components/Modals/Modal";
import ManageVersionOverlay from "@/components/Modals/ManageVersion";
import AddDuplicateVersion from "@/components/Modals/AddDuplicateVersion";
import AddNewVersion from "@/components/Modals/AddNewVersion";
import EndPoints from "@/components/EndPoints/endPoints";
import SecurityView from "@/components/SecurityView/securityView";
import HubLayout from "@/components/HubLayout/HubLayout";


const options = [
    {label: 'Option 1', status: 'Active', value: 'option1'},
    {label: 'Option 2', status: 'Draft', value: 'option2'},
    {label: 'Option 3', status: 'Draft', value: 'option3'},
];
const tabs = [
    {label: 'Endpoints'},
    {label: 'Security'},
]

export default function Definitions() {
    const [showVersionModal, setShowVersionModal] = useState(false)
    const [showDuplicateVersionModal, setShowDuplicateVersionModal] = useState(false)
    const [showAddVersionModal, setShowAddVersionModal] = useState(false)
    const [view, setView] = useState('endPoints')

    const handleDuplicate = () => {
        setShowVersionModal(false)
        setShowDuplicateVersionModal(true)
    }
    const handleAdd = () => {
        setShowVersionModal(false)
        setShowDuplicateVersionModal(false)
        setShowAddVersionModal(true)
    }

    const onTabSelect = (value) => {
        const temp = ['endPoints', 'security', 'addEnfPoints', 'addGraphql']
        setView(temp[value])
    }

    return (
        <HubLayout>
            <div className='w-full p-4 md:p-10'>
                <div className='flex gap-1 items-center bg-blue-400 p-2 rounded mb-4'>
                    <Typography text='These changes will apply only to' variant='body'/>
                    <CustomDropdown options={options}
                                    footer={<ManageVersion onClick={() => setShowVersionModal(true)}/>}/>
                </div>
                <div className='mb-4'>
                    <Typography
                        text='When publishing an API version to the RapidAPI Hub, you can either manually edit definitions or upload a specification file.'
                        variant='body'
                    />
                </div>
                <div className='mb-4'>
                    <Tabs tabs={tabs} onTabSelect={onTabSelect}/>
                </div>
                {
                    view === "endPoints" && (
                        <EndPoints onTabSelect={onTabSelect}/>
                    )
                }
                {
                    view === 'security' && (
                        <SecurityView onTabSelect={onTabSelect}/>
                    )
                }
            </div>
            <Modal isOpen={showVersionModal} onClose={() => setShowVersionModal(false)}>
                <ManageVersionOverlay onClose={() => setShowVersionModal(false)} handleDuplicate={handleDuplicate}
                                      handleAdd={handleAdd}/>
            </Modal>
            <Modal isOpen={showDuplicateVersionModal} onClose={() => setShowDuplicateVersionModal(false)}
                   className='md:w-[350px]'>
                <AddDuplicateVersion onClose={() => setShowDuplicateVersionModal(false)}/>
            </Modal>
            <Modal isOpen={showAddVersionModal} onClose={() => setShowAddVersionModal(false)}
                   className='md:w-[450px]'>
                <AddNewVersion onClose={() => setShowAddVersionModal(false)}/>
            </Modal>
        </HubLayout>
    )

}
const ManageVersion = ({onClick}) => (<div onClick={onClick}>Manage Version</div>)
