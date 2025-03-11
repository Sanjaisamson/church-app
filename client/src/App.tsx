/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
// import { I18nextProvider } from 'react-i18next';
// import i18n, { setLanguage } from './translations/i18n';
import AppProvider from './contexts/AppProvider';
import { generateTheme } from './styles/theme';
import { fetchData } from './services/api';
import API_URLS from './services/apiUrls';
import AppLoader from './components/shared/AppLoader';
import Login from './Login';
import { ClientConfigType } from './types/config.types';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<Record<string, any>>({});

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const data: ClientConfigType = await fetchData<ClientConfigType>(API_URLS.CLIENT_CONFIG);
        const customTheme = generateTheme(data?.themeConfig);
        setTheme(customTheme);
        // await setLanguage(data.language, data.translation);
      } catch (error) {
        console.error('Error loading config:', error);
        setTheme(generateTheme()); // Default theme
      } finally {
        setLoading(false);
      }
    };

    fetchConfig();
  }, []);

  if (isLoading) {
    return <AppLoader />;
  }

  return (
    <AppProvider theme={theme}>
      {/* <I18nextProvider i18n={i18n}> */}
        <Login />
      {/* </I18nextProvider> */}
    </AppProvider>
  );
};

export default App;
