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


function App(){

  const handleClick = () => {
    alert('Button Clicked!');
  }
  
  return (
    <div>
      <div>
        <h1>Todo App</h1>
      </div>   
        <Button text="Click Me" onClicked={handleClick}></Button> 

        <Card
          title="Toy"
          description="Remote control car"
          footer="Rs. 3000.00"
        />

        <Card
          title="Book"
          description="Stories"
          footer="Rs. 275.00"
        />

        <Card
          title="Marker Pen"
          description="Blue color"
          footer="Rs. 190.00"
        />


        <Input lable="Enter your name" placeholder="Type here ..."></Input>
        <Input lable="Enter your email" placeholder="example@gmail.com"></Input>


        <Counter></Counter>

        

        <Modal></Modal>
        <br></br>

        <Tabs></Tabs>

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
        </Routes>





    </div>  
  );
}

export default App;