import React from 'react'
import Products from './Products'
import prod from './jokesData'

function App () {
   const prodComp= prod.map( product => <Products key={product.id} products={product}/>)
  return (
    <div style={{border: "2px solid black", display: "flex", justifyContent:"center", flexDirection: "column", alignItems: "center"}}>
      {prodComp}
    </div>
  )
}

export default App