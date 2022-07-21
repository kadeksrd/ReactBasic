const root = document.querySelector("#root");
const box = "box";
const element =
/*#__PURE__*/

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
React.createElement("div", {
  className: box
});
ReactDOM.render(element, root);