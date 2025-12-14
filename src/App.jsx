import Button from './components/button';
import Card from './components/card';
import Input from './components/input';
import Counter from'./components/counter';
import Modal from './components/modal';
import Tabs from './components/tabs';
import Navbar from './components/navbar';

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
          <link to="/">Home</link>
          <link to="/profile">Profile</link>
          <link to="/settings">Settings</link>
        </nav>

        <Routes>
          <Rout path="/" element={<Home/>}/>
          <Rout path="/profile" element={<Profile/>}/>
          <Rout path="/settings" element={<Settings/>}/>
        </Routes>





    </div>  
  );
}

export default App;