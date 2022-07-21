const root = document.querySelector("#root");

const box = "box";	
const element = (
   /** 
    // nulis inline style di react gunain style={{}}
    <div style={
        {
            backgroundColor: "red",
            width: 200,
            height: 200,
        }
    }></div>
     **/   

    // nulis lewat external style 
    <div className={box}>
            
    </div>


)


ReactDOM.render(element, root);
