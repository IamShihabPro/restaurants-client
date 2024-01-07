import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useTanstack = () =>{
    const {user} = useContext(AuthContext)

    const { data: cart=[], refetch } = useQuery({
        queryKey: ['carts', user?.email],

        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/carts?email=${user?.email}`)
            return res.json()
        }
      })
      return [cart, refetch]
}
export default useTanstack;