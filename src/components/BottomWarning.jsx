import { Link } from "react-router-dom"

export function BottomWarning({label, buttonText, to}){

    return (
        <div className="py-2 text-sm flex justify-center">
            <div >{label} </div>
            <Link to={to} className = "pointer underline cursor-pointer pl-2" >
             {buttonText} 
            </Link>
        </div>
    )
}