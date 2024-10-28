import { Component } from "react";


class Post extends Component{
    constructor(){
        super();
        this.state={
            a:"",
        }
    }


    one =()=>{
        this.value=prompt("Enter a value");

        this.setState({
            a: this.value,
        });


        fetch("http://localhost:3000/profile",{
            method: "POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify({
                b: this.value,
            })
       }).then((res)=>{
        return res.json();
       }).then((res)=>{
        console.log(res);
       }).catch((err)=>{
        console.log(err);
       })

    };

    componentWillUnmount(){
        console.log("Unmounted in POST");
        
    }

    render(){
        return(

            <>
            
            <button onClick={this.one}>click here to post data</button>
            
            </>

        )
    }

  


}

export default Post;