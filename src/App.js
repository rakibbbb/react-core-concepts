import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const name = ["Sakib", "Tamim", "Mashrafi", "Sabbir", "Mushfiq", "Mahmudullah", "Rubel"];
  const products = [
    {name: "Photoshop", price: "$199"},
    {name: "Illustrator", price: "$150"},
    {name: "MS Office", price: "$99"}
  ]

  const friends = [
    {name: "Shoibe", meet: "Varsity"},
    {name: "Joy", meet: "School"},
    {name: "Shamim", meet: "Office"},
    {name: "Abdullah", meet: "Office"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users></Users>
        <Counter></Counter>

        <ul>
          {
            name.map(name => <li>{name}</li>)
          }
        </ul>
        <div>
          {
            friends.map(fd => <Friends friend = {fd}></Friends>)
          }
        </div>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>

        <Person name= {name[0]} job= "Sakib's Dine"></Person>
        <Person name= {name[1]} job="Player"></Person>
        <Person name= {name[2]} job="MP"></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Data: {users.length}</h3>
      <ul>{
        users.map(user => <li>{user.name}</li>)
      }</ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Friends(props) {
  const styleFriend = {
    width: "200px",
    height: "200px",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    backgroundColor: "yellow",
    color: "black"
  }

  const {name, meet} = props.friend;
  return (
    <div style={styleFriend}>
      <h1>{name}</h1>
      <h2>{meet}</h2>
    </div>
  );

}

function Product(props) {
  const styleProduct = {
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    backgroundColor: "red",
    padding: "10px",
    margin: "10px",
    float: "left"
  }
  const {name, price} = props.product;
  return (
    <div style={styleProduct}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border : "1px solid yellow",
    borderRadius : "10px",
    margin : "10px",
    padding: "10px 30px",
    backgroundColor : "green"
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
    </div>
  );
}


export default App;