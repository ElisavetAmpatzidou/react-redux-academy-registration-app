import './App.css';
import Home from './components/home';
import Register from './components/register';
import {Provider} from 'react-redux';
import NavBar from './components/navbar';
import Students from './components/students';
import {Route, Switch } from 'react-router-dom';
import crStore from './store/configureStore'; 

function App() {

  const store = crStore();
  return (
    <Provider store={store}>
      <NavBar/>
      <main className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/view" component={Students}></Route>
          </Switch>
        </main>
    </Provider>
      
  );
}

export default App;
