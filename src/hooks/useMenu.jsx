import { useQuery } from '@tanstack/react-query'

const useMenu = () =>{
    const { data: menu=[], refetch, isLoading: loading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/menu`)
            return res.json()
        }
      })
      return [menu, refetch, loading]
}
export default useMenu;