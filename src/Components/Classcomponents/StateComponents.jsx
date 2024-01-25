import React from "react";
class StateComponent extends React.Component{
    //var a =10; use can not assign this directly inside a class.we can use constructor for this
    constructor(){
        super()
        this.state ={
            name:"Jimin💜",
            course:"KEC"
        }
    }
    changeState =(params)=>{
    console.log("Kongu engineering College")//useState should be used when we come to hooks
    }
    render(){
        return(
            <div>
            <h2>This is State Component</h2>
            <h3>Hello {this.state.name}<br></br>Welcome to {this.state.course} college</h3>
            <h2>Iam changing the state of the {this.state.name} to {this.changeState()} </h2>
            <button onMouseOver={this.changeState}>Click me to change the state</button>
            </div>
            
        )
    }
}
export default StateComponent;