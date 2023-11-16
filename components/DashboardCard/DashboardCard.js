import Typography from "@/components/Typegraphy/Typography";

const DashboardCard = ({heading, description})=>{
  return(
    <div className="w-full max-w-[300px] min-h-[120px] shadow-xl border border-white bg-blue-500 px-6 py-4 rounded-xl">
      <Typography variant="h2" className="mb-3 text-white" text={heading} />
      <Typography variant="small" className='text-white' text={description} />
    </div>
  )
}
export default DashboardCard