import React from 'react'

const CompA = ({item}) => {

    const{title, price, desc, category, img} = item
    // console.log(title)

  return (
    <div data-test-id={"menu-item-" + category} style={{display:"flex", border:"1px solid black", width:"500px"}}>
        <img src={img} alt='broken'/>

        <div>
            <div>
                <h3>{title}</h3>
                <span>{price}</span>
            </div>

            <p>{desc}</p>
        </div>
    </div>
  )
}

export default CompA