
import './App.css';

function App() {
  return (
    <Router history={history}>
    <Switch>
    <HomeTemplate  path="/" exact Component={Home}/>
    <HomeTemplate  path="/" exact Component={Home}/>
    </Switch>

  </Router>
  );
}

export default App;
