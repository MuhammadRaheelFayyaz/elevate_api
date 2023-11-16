import Typography from "@/components/Typegraphy/Typography";

const CountCard = ({heading, subHeading, count, onClick, selected})=>{
  return(
    <div className={`w-full md:w-[calc(100%_/_3)] px-8 py-3 border-2 hover:border-blue-500 rounded-lg ${
      selected
        ? 'text-white bg-blue-500 border-blue-500' 
        : 'border-transparent' 
    }`} onClick={onClick}>
      <Typography text={heading} variant="h4" className='mb-2'/>
      <Typography text={subHeading} variant="small"/>
      <Typography text={count} variant="h1"/>
    </div>
  )
 }

 export default  CountCard