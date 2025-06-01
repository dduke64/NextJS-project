import DrinksList from "../component/drinksList"; 
 const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';
 import drinkImg from './drink.jpg'

const fetchDrinks = async() => {
    //just to show loading.tsx
    await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }
  const data = await response.json();
  return data
}


const Drinks = async () => {
const data = await fetchDrinks();
  return (
    <div>
        <DrinksList drinks={data.drinks} />

    </div>
  )
}

export default Drinks