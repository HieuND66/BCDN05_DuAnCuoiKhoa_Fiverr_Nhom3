
import './App.css';
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router-dom';
import  HomeTemplate  from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import {Suspense, lazy} from 'react'
import UserInfo from './pages/UserInfo/UserInfo';
import Login from './pages/Login/Login';
import DeTailCheckOut from './pages/Checkout/DeTailCheckOut';

const HomeTemplateLazy = lazy(() => import ('./templates/HomeTemplate/HomeTemplate'))
export const history = createBrowserHistory()

function App() {

  return (
   
    <Router history={history}>
    <Switch>

    <HomeTemplate  path="/" exact Component={Home}/>
    <Suspense fallback = {<h1>Loading...</h1>}>
    <HomeTemplateLazy  path="/job/:id" exact Component={Detail}/>
    <HomeTemplate path="/user/:id" exact Component={UserInfo} />
    <HomeTemplate path='/login' exact Component={Login} />
    <HomeTemplate path='/detaicheckout/:id' exact Component={DeTailCheckOut} />
    </Suspense>

    </Switch>

  </Router>
  );
}

export default App;
