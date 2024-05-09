import { useEffect} from "react";
import EmpForm from "./EmpForm"
import { useParams } from "react-router-dom";
import useAPI from "./useAPI";

const EmpDetails = ()=>{
    const { data, errors, isLoading, get} = useAPI ("http://localhost:8000")
    const {empid} = useParams()
    useEffect(()=>{
        get("/employee/"+empid)
    },[])
    return (
        <div>
            {
               data && Object.keys(data).length >0 &&<EmpForm formValue={data} isReadOnly={true}/>
            }
            
        </div>
    )
}
export default EmpDetails