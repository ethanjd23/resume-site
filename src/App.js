import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bootstrap from './pages/Bootstrap'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Bootstrap} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
