
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';

function App() {
  const linkStyle ={
    display:"flex",
    justifyContent:"space-around",
    margin:"auto",
    width:"150px"
}
  return (
    <div className="App">

      <div>
      <nav class="navbar navbar-light bg-light">  
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={linkStyle}></input>
      <h3> WELCOME IN OUR TEAM</h3>
      <button class="btn btn-outline-success" type="submit" style={linkStyle}>Enter</button>
     
    </nav>
      </div>
     

<h1>Please choose your favorite company! </h1>
<UserList />
<div className='footer'>
            <a href="#">About Us</a>
            <a href="#">Our Services</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
  );
}

export default App;
