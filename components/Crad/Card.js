
export default function Card({children, className}){
    return (
        <div className={`m-0 p-6 shadow-custom ${className}`}>
            {children}
        </div>
    )
}
