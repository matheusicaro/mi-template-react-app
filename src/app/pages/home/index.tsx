import React from 'react';

import { Stack, Switch } from '@mui/material';

import { useTheme } from '../../styles/provider';
import { Banner, Footer, Text } from '../../components';

const HomePage: React.FC = (props) => {
  const { theme, toggleTheme } = useTheme();

  const ToggleTheme = () => {
    return (
      <Stack style={{ justifyContent: 'center' }} direction="row" spacing={1} alignItems="center" component="section">
        <Text>Light Theme</Text>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        <Text>Dark Theme</Text>
      </Stack>
    );
  };

  return (
    <main>
      <Banner />
      <ToggleTheme />
      <Text style={{ placeContent: 'center', height: '50vh', display: 'grid' }} variant="h1">
        Hello
      </Text>
      <Footer />
    </main>
  );
};

export default HomePage;
