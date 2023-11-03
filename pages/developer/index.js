import {useEffect} from "react";
import {useRouter} from "next/router";

export default function Developer(){
  const router=useRouter()
  useEffect(()=>{
    router.push('/developer/dashboard')
  },[])
  return  null
}