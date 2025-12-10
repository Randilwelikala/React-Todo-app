import Button from './components/button';
import Card from './components/card';

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
    </div>  
  );
}

export default App;