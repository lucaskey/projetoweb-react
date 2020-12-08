import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { store, persistor } from '../src/store';
import { PersistGate } from 'redux-persist/integration/react';

/* Pages */
import Login from './view/login';
import NewUser from './view/newUser';
import Home from './view/home';
import LostPassword from './view/lostpassword';
import NewPost from './view/newpost';
import PostDetails from './view/postdetails';
import AboutUs from './view/aboutus';




function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/login' component={Login} />
          <Route exact path='/newuser' component={NewUser} />
          <Route exact path='/' component={Home} />
          <Route exact path='/lostpassword' component={LostPassword} />
          <Route exact path='/newpost' component={NewPost} />
          <Route path='/posts/:parametro' component={Home} />
          <Route path='/postdetails/:idPost' component={PostDetails} />
          <Route path='/postedit/:idPost' component={NewPost} /> 
          <Route exact path='/aboutus' component={AboutUs} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
