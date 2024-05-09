import { useEffect} from "react";
import { useParams } from "react-router-dom";
import useAPI from "./useAPI";
import EmpForm from "./EmpForm";

const EmpEdit =()=>{
    const { data, errors, isLoading, get} = useAPI ("http://localhost:8000")
    const {empid} = useParams()
    useEffect(()=>{
        get("/employee/"+empid)
    },[])

    return (
        <div>
            {
              data && Object.keys(data).length >0 &&<EmpForm formValue={data} empid = {empid}/>
            }
        </div>
    )
}
export default EmpEdit