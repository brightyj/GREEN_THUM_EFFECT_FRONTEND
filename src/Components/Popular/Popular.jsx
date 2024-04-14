import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = (props) => {
  return (
    <div className='popular'>
      <h1>Popular In Indoor</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item id={item.id} key={i} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
