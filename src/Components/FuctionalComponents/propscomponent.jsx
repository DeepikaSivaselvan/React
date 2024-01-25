import "../../css/propscomponent.css"


function PropsComponent(props){
    /*const StyleAttrs={
        backgroundColor:"red",
        color:"yellow"
    }
    //internal css
    */

    return(
        
        

            <h1>Hello {props.name}<br></br>This is {props.course} class</h1>
            
        
    )
}

export default PropsComponent;
//<div style={{color:"white",backgroundColor:"brown"}}> inline
//<div style={Styleattrs}                       nn>
    