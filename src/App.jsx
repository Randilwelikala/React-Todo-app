import Button from './components/button';
import Card from './components/card';
import Input from './components/input';
import Counter from'./components/counter';
import Modal from './components/modal';
import Tabs from './components/tabs';
import Navbar from './components/navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from'./pages/home';
import Profile from'./pages/profile';
import Settings from'./pages/settings';
import User from './pages/user';
import Sidebar from './components/sidebar'



function App(){

  // const handleClick = () => {
  //   alert('Button Clicked!');
  // }
  
  return (
    <div>
      
        <Sidebar></Sidebar>
        <Navbar items={["Home", "About", "Contact"]} />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>

          <Link to="/user">User</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/settings" element={<Settings/>}/>     

          <Route path="/user" element={<User />} />
          <Route/>
        </Routes>





    </div>  
  );
}

export default App;