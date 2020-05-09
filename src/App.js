import React from 'react';

function Food({name}){
  return <h1>I like {name}</h1>;
}

const foodILike = [
  {name: "Kimchi"},
  {name: "ramen"}
];

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    {foodILike.map(dish => <Food name = {dish.name}/>
    )}
  </div>
  );
}

export default App;
