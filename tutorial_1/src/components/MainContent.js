import React from 'react'
import { TodoItem } from './TodoItem'

export const MainContent = () => {
    const name = "Alex"
    const surname = "Baietan"
    let date = new Date()
    let hours = date.getHours()
    let timeOfDay =''
    const styles = 
    {
        height: '60px',
        color:"white",
        backgroundColor: 'black',
        textAlign: 'center'
    }

    if(hours < 12){
        timeOfDay = 'morning'
    }else if (hours > 12 &&  hours < 17) {
        timeOfDay = 'afternoon'
        styles.backgroundColor = 'gray'
        
    }else{
        timeOfDay = 'night'
    }

    
    return(
        <div>
            <main>
                <h3 style={styles}>Welcome {`${name} ${surname} it is currently ${hours} and it is ${timeOfDay}`}</h3>
                <div className="radioInp">
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />
                        <TodoItem />                                    
                </div>
            </main>
        </div>
    )
}