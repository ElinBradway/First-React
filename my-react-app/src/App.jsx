import ItemCard from "./components/itemCard";

import {
  fish1,
  fish2,
  fish3,
  fish4,
  fish5
} from "./assets/images"

import "./components/Item-card.css"

function App() {
return (
  <div className='Container'>
    <h1>Exotic fish for sale!</h1>
    <div className='card-container'>
    <ItemCard 
      img={fish1} 
      title='Goldfish' 
      info='Goldfish are known for their large size, bright color, and ability to swim through water.'
    />
        <ItemCard 
      img={fish2} 
      title='Goldfish' 
      info='Goldfish are known for their large size, bright color, and ability to swim through water.'
    />
        <ItemCard 
      img={fish3} 
      title='Goldfish' 
      info='Goldfish are known for their large size, bright color, and ability to swim through water.'
    />
        <ItemCard 
      img={fish4} 
      title='Goldfish' 
      info='Goldfish are known for their large size, bright color, and ability to swim through water.'
    />
        <ItemCard 
      img={fish5} 
      title='Goldfish' 
      info='Goldfish are known for their large size, bright color, and ability to swim through water.'
    /></div>
  </div>
);

}

export default App;



