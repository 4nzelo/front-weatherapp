import logo from './logo.svg';
import background from './background.png'
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//8hook que almacena toDos.
//9-11funciòn que pide por los toDos
function App() {
  const [todos, setTodos] = useState();
  const url = 'http://localhost:4000/api/cities';
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  }

  useEffect(() => {
    fetchApi()
  }, []);

  return (
    <div className="App" >
      <div id="card">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={background} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
