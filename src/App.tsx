import { useEffect } from 'react';
import './App.css';
import type { PizzaItemProps } from './PizzaItem.tsx';
import { PizzaItem } from './PizzaItem.tsx';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/margherita.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/spinaci.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/salamino.jpg?raw=true',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName:
      'https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/prosciutto.jpg?raw=true',
    soldOut: false,
  },
  {
    name: 'Corned Beef',
    ingredients:
      'Locally sourced free range Corned beef, brine, pickle, swiss cheese spicy mustard',
    price: 23,
    photoName:
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/8/24/1/FN_Cleveland-restaurant-guide-Slymans-Corned-Beef_s4x3.jpg.rend.hgtvcom.616.462.suffix/1440474333122.jpeg',
    soldOut: true,
  },
];

function App() {
  console.log(`Pizza item count ${pizzaData.length}`);

  useEffect(() => {
    console.log(`Pizza item count ${pizzaData.length}`);
  });

  return (
    <>
      <div className="pizzaGridParent">
        {pizzaData.map((pizza, i: number) => (
          <PizzaItem
            key={i}
            imageUrl={pizza.photoName}
            name={pizza.name}
            description={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
