import { useMutation } from '@tanstack/react-query';
import { postData } from '../services/api';
import API_URLS from '../services/apiUrls';
import { useCustomToast } from './useToastHelper';
import { LoginApiResponse } from '../types/login.types';

export function useLogin() {
	const { showErrorToast } = useCustomToast();
	return useMutation({
		mutationFn: (data: { email: string; password: string }): Promise<LoginApiResponse> => postData(API_URLS.AUTHENTICATION.LOGIN, data),
		retry: false,
		onSuccess: (resp: LoginApiResponse) => {
			return resp;
		},
		onError: () => {
			showErrorToast('Error while logging in, please try again');
		},
	});
}
