const useSingleMenu = () =>{
    const { data: singleMenu=[], refetch, isLoading: loading } = useQuery({
        queryKey: ['singleMenu'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/menu/${food._id}`)
            return res.json()
        }
      })
      return [singleMenu, refetch, loading]
}
export default useSingleMenu;