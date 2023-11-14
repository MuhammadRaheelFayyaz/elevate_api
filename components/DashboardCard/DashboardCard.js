import Typography from "@/components/Typegraphy/Typography";

const DashboardCard = ({heading, description})=>{
  return(
    <div className="w-full md:w-[49%] 2xl:w-[530px] bg-blue-200 px-6 py-4 rounded">
      <Typography variant="h2" className="mb-3" text={heading} />
      <Typography variant="body" className='text-gray-500' text={description} />
    </div>
  )
}
export default DashboardCard