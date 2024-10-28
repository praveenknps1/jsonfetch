import Post from "./Post";

import Get from "./Get";
import { Component } from "react";


class Fin extends Component{
    constructor(){
        super()
        this.state={
            a:true
        }
    }

    change=()=>{
        this.setState({
            a:!this.state.a
        })
    }

render(){
    return(
        <>
        
        <h1> Adding Data To Profile(Db.json)  </h1>
        <br />
        <br />

        <h2 onClick={this.change} style={{cursor:"pointer"}}> Click Me  To Get the Data</h2>
        <br />
            {this.state.a ? <Post/>:<Get/>}
        </>
    )
}

}

export default Fin;