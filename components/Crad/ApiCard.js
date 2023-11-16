import Image from "next/image";
import Typography from "@/components/Typegraphy/Typography";

export default function ApiCard({onClick}) {
    return (
        <div onClick={onClick}>
            <div className='flex justify-between cursor-pointer'>
                <div className='flex items-center gap-2 mb-3'>
                    <div className='rounded-full min-h-[60px] w-[60px] h-[60px] min-w-[60px] overflow-hidden'>
                        <Image
                            src="/images/profile.jpeg"
                            width={60}
                            height={60}
                            className='overflow-hidden'
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <Typography variant='h4' className='font-bold' text='Muhammad Raheel'/>
                        <Typography variant='small' text='25 Oct 2023'/>
                    </div>
                </div>
                <div>
                    <Image
                        src="/icons/star.svg"
                        width={24}
                        height={24}
                        className='overflow-hidden'
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <Typography variant='body' className='text-gray-500' text='Excepteur sint occaecat cupidatat proident'/>
            <Typography
                variant='small'
                text='Ut enim ad minima veniam, quis nostrum exercitationem,Ut enim minima veniam, quis nostrum
                exercitationem'
                className='text-gray-500'
            />
        </div>
    )
}
