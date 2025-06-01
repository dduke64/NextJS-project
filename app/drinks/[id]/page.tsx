import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
import drinkImg from './drink.jpg'

const fetchDrink = async(id: any) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error('failed to fetch data')
  }
  return response.json()
}

const singleDrinkPage = async({params}: any) => {
    const data = await fetchDrink(params.id)
    const title = data?.drinks[0]?.strDrink
        const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div>
        <h1 className='text-4xl'>{title}</h1>
        <br></br>
        <Image src={imgSrc} width={300} height={300} className="w-48 h-48 rounded-lg shadow-lg mb-4"priority alt={title}></Image>
        <Link href="/drinks" className='btn btn-primary'>Go Back</Link>
    </div>
  )
}

export default singleDrinkPage