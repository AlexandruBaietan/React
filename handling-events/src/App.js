import React, {Component} from 'react'

class App extends Component
{
  constructor(){
    super();
    this.state={
      count: 0,
      backgroundColor: "black",
      color: "white"
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    this.setState((prevState) => {
      return({
        count: prevState.count + 1,
        backgroundColor: prevState.backgroundColor === "white" ? "black" : "white",
        color: prevState.color === "white" ? "black" : "white"
      })
    })
  }

  render(){
    const styles = {display: "flex",
                     justifyContent: "center",
                     alignItems:"center",
                     flexDirection: "column",
                     height: "200px",
                     color: this.state.color,
                     backgroundColor: this.state.backgroundColor}
    return(
      <div  style={styles}>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}

export default App