import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { setCredentials, logout } from '../store/slices/authSlice';
import request from '../utils/request';
import endpoints from '../constants/apiEndpoints';

export const useAuth = () => {
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const { user, token } = useSelector((state) => state.auth);

    const loginMutation = useMutation({
        mutationFn: async (inp) => (await request.post(endpoints.AUTH.LOGIN, inp)).data,
        onSuccess: (data) => {
            dispatch(setCredentials(data));
            queryClient.invalidateQueries({ queryKey: ['user'] });
        },
    });

    const handleLogout = () => {
        dispatch(logout());
        queryClient.clear();
    };

    return {
        user,
        token,
        isAuthenticated: !!token,
        login: loginMutation.mutate,
        logout: handleLogout,
        isLoggingIn: loginMutation.isPending,
        loginError: loginMutation.error,
    };
};