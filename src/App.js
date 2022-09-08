import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import Animedetails from './components/Animedetails';
import Wishlist from './components/Wishlist';

function App() {

  return (

    <Router>

    <div className="App">

     <Navbar/>

    <Switch>

         <Route exact path = "/">
        
            <Home/>

         </Route>

         <Route path = "/animedetails:mal_id">
        
            <Animedetails/>

         </Route>

         <Route path='/wishlist'>

             <Wishlist/> 
         </Route>


    </Switch>


    </div>

    </Router>
  );
}

export default App;
