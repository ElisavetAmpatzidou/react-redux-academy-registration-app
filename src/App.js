import './App.css';
import Home from './tscomponents/home';
import Register from './tscomponents/register';
import {Provider} from 'react-redux';
import NavBar from './tscomponents/navbar';
import Students from './tscomponents/students';
import {Route, Switch } from 'react-router-dom';
import crStore from './tscomponents/configureStore'; 

function App() {

  const store = crStore;
  return (
    <Provider store={store}>
      <NavBar/>
      <main className="container">
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/view" component={Students}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </main>
    </Provider>
      
  );
}

export default App;
