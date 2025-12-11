import Button from './components/button';
import Card from './components/card';
import Input from './components/input';

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

    </div>  
  );
}

export default App;