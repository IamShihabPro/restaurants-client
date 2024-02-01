import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useBooking = () => {
  const { user, loading } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { isLoading, isError, data: booking = [], error, refetch } = useQuery({
    queryKey: ['bookings', user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings?email=${user?.email}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch booking data');
        }

        return res.json();
      } catch (error) {
        throw new Error('Failed to fetch booking data');
      }
    },
  });

  return [booking, refetch, isLoading, isError, error];
};

export default useBooking;
