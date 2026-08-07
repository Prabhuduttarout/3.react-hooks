import { useEffect, useReducer, useRef, useState } from "react";


    // Reducer function (all state update logic ) (outside of the component)
    function blogReducer(state,action){
        switch(action.type){
            case "ADD":
                return [action.blog,...state];
            case "REMOVE":
                return state.filter((_,index)=> index !== action.index)
            default:
                return []
        }
    }

//Blogging App using Hooks
export default function Blog(){
    // => 1. useState
    // const[title,setTitle] = useState("");
    // const[content,setContent] = useState("");

    // passing Object in useState
    const[blogData,setBlogData] = useState({title:"",content:""});

    // ? here insted of using useState we have to use useReducer 
    // As the "blog" state of this componet is upadted by multiple event handlers in serveral places
    // To overcome this we can consolidate all the state update logic outside our component in a single function, called a reducer.
    // xx const[blogs,setBlogs] = useState([]);

    // => 4. useReducer
    const [blogs,dispatch] =  useReducer(blogReducer,[])

    
    // => 2. useRef
    const titleRef = useRef(null);
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
        
        // setBlogs([blogData,...blogs]);

        //! useing dispatch function insted setBlogs(1)
        dispatch({type:"ADD",blog:blogData})

        setBlogData({title:"",content:""})
        titleRef.current.focus();
    }

      // => 3. useEffect
    // Update the page title when the add button clicked
    useEffect(()=>{
        if(blogs.length && blogs[0].title)
            document.title= blogs[0].title;
        else
            document.title="No Blogs !!";
        },[blogs])

    // Focus the title field on the intitial render (means componentDidMount) using useeffect with [] dependency
    useEffect(()=>{
        titleRef.current.focus();
    },[])

    function removeBlog(blgIndx){
        // setBlogs(blogs.filter((blog,index)=> index !== blgIndx))

        //! useing dispatch function insted setBlogs(2)
        dispatch({type:"REMOVE",index:blgIndx})
    } 

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                        value={blogData.title}
                        placeholder="Enter the Title of the Blog here.."
                        ref={titleRef}
                        autoFocus={true}
                        onChange={(e)=>setBlogData({...blogData,title:e.target.value})}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                        value={blogData.content}
                        placeholder="Content of the Blog goes here.."
                        onChange={(e)=>setBlogData({...blogData,content:e.target.value})}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
            {blogs.map((blog,index)=>(<BlogCard key={index} index={index} title={blog.title} content={blog.content} removeBlog={removeBlog}/>))}
        </>
        )
    }

//Row component to introduce a new row section in the form
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


// Blog Card
function BlogCard({title,content,index,removeBlog}){
    return(
        <div className="blog">
            <h3>{title}</h3>
            <hr />
            <p>{content}</p>
            <p className=" blog-btn"><button className="btn remove" onClick={()=>removeBlog(index)}>Remove</button></p>
        </div>
    )
}