import { 
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { Layout } from 'components/Layout';

import { AccountPage } from './pages/Account/AccountPage';
import { InsightsPage } from './pages/Insights/InsightsPage';
import { FollowersPage } from './pages/Followers/FollowersPage';
import { SettingsPage } from './pages/Settings/SettingsPage';
import { NotFound } from './pages/NotFound/NotFound';


function App() {
  return (
    
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/insights" component={InsightsPage} />
            <Route exact path="/followers" component={FollowersPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/">
              <Redirect to="/account" />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>    
  );
}

export default App;
