import Link from 'next/link'
import React from 'react'

const DrinksList = ({drinks}) => {
    console.log(drinks)
  return (
    <div>
        <ul className='menu menu-vertical pl-0'>
            {drinks.map((drink) => {
                return <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`}>
                        {drink.strDrink}
                    </Link>
                </li>
            })}

        </ul>
    </div>
  )
}

export default DrinksList