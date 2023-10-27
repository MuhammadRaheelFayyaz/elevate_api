import Image from "next/image";
import Typography from "@/components/Typegraphy/Typography";

export default function ApiCard() {
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <div className='rounded-full bg-blue-400 h-10 w-10 overflow-hidden'>
                        <Image
                            src="/images/profile.jpeg"
                            width={40}
                            height={40}
                            className='overflow-hidden'
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <Typography variant='h4' text='Muhammad Raheel'/>
                        <Typography variant='body' text='25 Oct 2023'/>
                    </div>
                </div>
                <div>
                    <Image
                        src="/icons/star.svg"
                        width={30}
                        height={30}
                        className='overflow-hidden'
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <Typography variant='h4' text='Excepteur sint occaecat cupidatat proident'/>
            <Typography
                variant='body'
                text='Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum
                exercitationem'
            />
        </>
    )
}
