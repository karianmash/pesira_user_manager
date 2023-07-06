import { Switch, Route } from 'react-router-dom';

import './App.css';

import AddUser from './pages/AddUser/AddUser';
import Home from './pages/Home/Home';

function App() {
  const showUpdateUserModal = (userId) => {
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-user" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;
