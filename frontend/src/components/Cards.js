import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/beauty-products.gif"
                    text="Feel the taste of Green Teas"
                    label="Beauty Products"
                    path="/beauty-products"
                />
                <CardItem
                    src="images/face-scrubs.gif"
                    text="Try your beauty with nature"
                    label="Face scrub"
                    path="/face-scrub"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/night-cream.gif"
                    text="Buy a night creams "
                    label="Night Cream"
                    path="/night-cream"
                />
                <CardItem
                    src="images/face-pack.webp"
                    text="Products in your beauty"
                    label="Face pack Products"
                    path="/face-pack"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                    src="images/body-scrub.gif"
                    text="Buy a night creams "
                    label="Body Scrub"
                    path="/body-scrub"
                />
                <CardItem
                    src="images/tonner.gif"
                    text="Products in your beauty"
                    label="Toner Products"
                    path="/toner"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
