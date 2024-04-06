import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { UserProvider } from './UserContext';
//import SupplierTable from './components/SupplierTable';
import UserForm from './components/AddUser';
import TradingViewWidget from './components/TradingViewWidget';
function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <NavBar/>
             <br></br>
             <UserForm/>
             
        </UserProvider>
        <TradingViewWidget/>
      </Router>
      
    </div>
  );
}

export default App;
