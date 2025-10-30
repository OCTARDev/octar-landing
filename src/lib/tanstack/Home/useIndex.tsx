import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

const fetch = ()=>{
    return axiosInstance.get(`/home`);
}


export default function useHomeIndex(){
    return useQuery({
        queryKey:["home","index"],
        queryFn:()=>fetch()
    })
}