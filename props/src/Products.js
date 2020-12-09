import React from 'react'

function Products (props) {
    const info = (event)=>{
        event.preventDefault();
        alert(props.products.name)
    }
    return (
        <div>
            <h1>{props.products.name}<span> {props.products.price}</span></h1>
            <button onClick={info} >Get prod info</button>
        </div>
        )
}
export default Products