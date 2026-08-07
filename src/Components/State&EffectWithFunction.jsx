import { useEffect, useState } from "react";

export default function Input(){
    //=> UseState (Updating the Wlcm Msg)
    const[name,setName] = useState("");
    const[lastName,setLastName] = useState("")

    //=> UseEffect (Updating the title of the page)
    // @ 1. Acting both as Both componentDidMount & componentDidUpdate
    // useEffect(()=>{
    //     document.title= name + " " + lastName;
    // })

    // @ 2. Acting as only componentDidMount (Only Update the when the component render) coz i pass the balank dependancy array as 2nd arrgument
    // const[name,setName] = useState("Harry");
    // useEffect(()=>{
    //     document.title= name + " " + lastName;
    // },[])

    // @ 3. Acting as componentDidMount  and componentDidUpdate(Only when lastname(state) is updated)
    useEffect(()=>{
        document.title= name + " " + lastName;
    },[lastName]);

    // ! We can use multiple side-Effect . And each useEffect doing completly different task. 
    // ! And all the tasks that are related to each other are inside same function 
    // !! That Justify the "Separation  of Concerns "
    useEffect(()=>{
        // Acting componentDidMount
        let timer = setInterval(()=>{
            console.log("Windows Width:", window.innerWidth);
        },1000);

        // Remove the timmer(automatically by React)
        // Acting componentWillUnmount
        return () => clearInterval(timer);
    })

    return(
        <>
        <div className="section">
            <h2>Function Based</h2>
            <Row label="Name" >
                    <input className="input" value={name} onChange={(e)=>setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello,{name + " " + lastName} </h2>
        
        </>
        )
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
