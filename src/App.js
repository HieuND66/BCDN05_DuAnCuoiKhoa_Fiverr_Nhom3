
import './App.css';
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom';
import  HomeTemplate  from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import {Suspense, lazy} from 'react'
import UserInfo from './pages/UserInfo/UserInfo';
import Login from './pages/Login/Login';
import DeTailCheckOut from './pages/Checkout/DeTailCheckOut';
import JobList from './pages/JobList/JobList';
import Loading from './components/Loading/Loading';
import Register from './pages/Register/Register';
import SearchName from './pages/SearchName/SearchName';
import SignUp from './pages/SignUp/SignUp';
import { JobType } from './pages/JobType/JobType';

const HomeTemplateLazy = lazy(() => import ('./templates/HomeTemplate/HomeTemplate'))
export const history = createBrowserHistory()

function App() {

  return (
   
    <Router history={history}>
      <Loading></Loading>
    <Switch>

    <HomeTemplate  path="/" exact Component={Home}/>
    <Suspense fallback = {<h1>Loading...</h1>}>
    <HomeTemplateLazy  path="/search/:id" exact Component={SearchName}/>
    <HomeTemplateLazy  path="/joblist" exact Component={JobList}/>
    <HomeTemplateLazy  path="/job/:id" exact Component={Detail}/>
    <HomeTemplate path="/user/:id" exact Component={UserInfo} />
    <HomeTemplate path="/jobtype/:id" exact Component={JobType} />
    <Route path='/login' exact component={Login} />
    <Route path='/signup' exact component={SignUp} />
    <HomeTemplate path='/register' exact Component={Register} />
    <HomeTemplate path='/detaicheckout/:id' exact Component={DeTailCheckOut} />
    </Suspense>

    </Switch>

  </Router>
  );
}

export default App;
