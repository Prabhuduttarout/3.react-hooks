import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            lastName:""
        }
    }
    // Handel state (Updating the Wlcm Msg)
    handelFstname=(e)=>{
        this.setState({name:e.target.value})
    }
    handelLstname=(e)=>{
        this.setState({lastName:e.target.value})
    }

    //Handel Side Effect (Updating the title of the page)
    componentDidMount(){
        document.title = this.state.name +" "+ this.state.lastName
    } 
    componentDidUpdate(){
        document.title = this.state.name +" "+ this.state.lastName
    } 
    render(){
        return(
            <>
            <div className="section">
                <h2>Class Based</h2>
                <Row label="Name">
                        <input className="input" value={this.state.name} onChange={this.handelFstname}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" value={this.state.lastName} onChange={this.handelLstname}/>
                </Row >
            </div>
    
            <h2>Hello,{this.state.name + " " + this.state.lastName} </h2>
            
            </>
            )

    }
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
