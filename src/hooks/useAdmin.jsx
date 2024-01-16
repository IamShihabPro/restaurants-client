import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem('access-token')

    const {data: isAdmin, isLoading: isAdminLoading, refetch} = useQuery({
        queryKey: ['isAdmin', user?.email],
        // queryFn: async () => {
        //     const res = await axiosSecure.get(`/users/admin/${user?.email}`);
        //     // console.log('is admin response', res)
        //     return res.data.admin;
        // }
        queryFn: async() =>{
            const res = await fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            // console.log(res);
            return res.json()
        },
    })
    return [isAdmin, isAdminLoading, refetch]
}
export default useAdmin;