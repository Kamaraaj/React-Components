import React,{useState} from 'react'
const useAPI = (baseURL)=>{
    const [data,setData] = useState(null)
    const [errors,setErrors] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const sendRequest = async (config)=>{
        setIsLoading(true);
        try {
            const request = await fetch (baseURL+config.url,{...config});
            const response = await request.json();
            const responseData = await response;
            setData(responseData);
            return responseData
        }
        catch (any){
            setErrors(any)
            return null
        }
        finally{
            setIsLoading(false)
        }
    }

// Convenience methods for GET, POST, PUT, DELETE
const get =(url)=>sendRequest({url,method:"GET"})
const post = (url,data,config={})=>sendRequest({url,body:JSON.stringify(data),method:"POST",...config})
const put =  (url,data,config={})=>sendRequest({url,body:JSON.stringify(data),method:"PUT",...config})
const del = (url,config={})=>sendRequest({url,method:"DELETE",...config})

return { data, errors, isLoading, get,post,put,del};
}
export default useAPI