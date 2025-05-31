import Link from 'next/link';
import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchDrink = async(id: any) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }
  return response.json()
}

const singleDrinkPage = async({params}: any) => {
    const data = await fetchDrink(params.id)
    console.log(data)
    const title = data?.drinks[0]?.strDrink
        const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div>
        <h1 className='text-4xl'>{title}</h1>
        <br></br>
        <Link href="/drinks" className='btn btn-primary'>Go Back</Link>
    </div>
  )
}

export default singleDrinkPage