import React from 'react';
import './PizzaItem.css';

interface PizzaItemProps {
  imageUrl: string;
  name: string;
  description: string;
  price: number;
}

const PizzaItem: React.FC<PizzaItemProps> = (props: PizzaItemProps) => {
  return (
    <>
      <div className="pizzaItemSquare">
        <img className="pizzaItemImage" src={props.imageUrl} />
        <div className="pizzaItemContent"></div>
      </div>
    </>
  );
};

export type { PizzaItemProps };
export { PizzaItem };
