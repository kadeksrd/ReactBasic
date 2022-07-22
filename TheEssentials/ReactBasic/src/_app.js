const root = document.querySelector("#root");

const box = "box";
const box2 = "box2";
const clickElement = (success) => alert(success);


 const element = (

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

   
// event handler
   
   //   cara onclick

   <div className={box} onClick={() => alert('success')}>
   </div>
   


    // cara onclick kedua
       
     // cara function onlclick 1
       
       <div
       className={box2}
       onClick={() => {
           clickElement("aku di eksekut");
        }}
        
        ></div>

    // cara function onlclick 2
        
        <div
        className={box2}
        onClick={clickElement.bind(this, "aku di tekan")}
        ></div>
        
        
        );
       
       
       