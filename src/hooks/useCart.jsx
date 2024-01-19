import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { isLoading, isError, data: cart = [], error, refetch } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/carts?email=${user?.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch cart data');
        }

        return res.json();
      } catch (error) {
        throw new Error('Failed to fetch cart data');
      }
    },
  });

  return [cart, refetch, isLoading, isError, error];
};

export default useCart;
