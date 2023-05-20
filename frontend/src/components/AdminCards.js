import React from 'react'
import CardItem from './CardItem'
import './AdminCards.css'

function AdminCards() {
  return (
    <div className='cards'>
      <h1>Welcome To Infution Management Section</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                    src="images/product.png"
                    text="Manage Products Details"
                    label="Product Management"
                    path="/view-product"
                />
                <CardItem
                    src="images/delivery.gif"
                    text="Manage All The Deliveries"
                    label="Delivery Management"
                    path="/add-delivery"
                />
                
                <CardItem
                    src="images/employee.jpg"
                    text="Maintain Seller Details"
                    label="Seller Management"
                    path="/add-employee"
                />
                
            </ul>

            <ul className='cards__items'>

                <CardItem
                    src="images/user.gif"
                    text="Details of Users"
                    label="User Management"
                    path="/userManagement"
                />

                <CardItem
                    src="images/order.jpg"
                    text="Details of Orders"
                    label="Order Management"
                    path="/orderManagement"
                />
                
                
            </ul>
            
        </div>
      </div>
    </div>
  )
}

export default AdminCards