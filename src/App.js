import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Dashboard from './pages/Dashboard';
import Publishers from './pages/Publishers';
import Subscribers from './pages/Subscribers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Bustime from './pages/plugins/Bustime';
import Alphavantage from './pages/plugins/Alphavantage';
import Weather from './pages/plugins/Weather';
import store from './store/';

Auth.configure(awsconfig);

const mdTheme = createTheme();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header />
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/publishers" component={Publishers} />
                  <Route exact path="/subscribers" component={Subscribers} />
                  <Route exact path="/reports" component={Reports} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/plugins/weather" component={Weather} />
                  <Route
                    exact
                    path="/plugins/alphavantage"
                    component={Alphavantage}
                  />
                  <Route exact path="/plugins/bustime" component={Bustime} />
                </Switch>
                <Footer sx={{ pt: 4 }} />
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default withAuthenticator(App);
