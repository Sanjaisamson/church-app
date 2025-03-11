import { useToast, UseToastOptions } from '@chakra-ui/react';

export const useToastHelper = () => {
  const toast = useToast();

  const showToast = (message: string, options?: UseToastOptions) => {
    toast({
      title: 'Notification',
      description: message,
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
      ...options,
    });
  };

  return showToast;
};

export const useSuccessToast = () => {
  const showToast = useToastHelper();

  const showSuccessToast = (message: string, options?: UseToastOptions) => {
    showToast(message, { status: 'success', title: 'Success', ...options });
  };

  return showSuccessToast;
};

export const useErrorToast = () => {
  const showToast = useToastHelper();

  const showErrorToast = (message: string, options?: UseToastOptions) => {
    showToast(message, { status: 'error', title: 'Error', ...options });
  };

  return showErrorToast;
};

export const useCustomToast = () => {
  const showSuccessToast = useSuccessToast();
  const showErrorToast = useErrorToast();

  return {
    showSuccessToast,
    showErrorToast,
  };
};
