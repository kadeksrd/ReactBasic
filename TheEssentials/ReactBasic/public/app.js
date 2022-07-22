// state and reactivity
const root = ReactDOM.createRoot(document.querySelector("#root")); // component

function App() {
  /* 
  cara biasa
  
  const state[count,setCount] = React.useState(1);
  
  const count = state[0];
  const setCount = state[1];
  
  
  penulisan state = React.UseState(nilaiAwal,fungsiUpdate)
  
  nilai Awal : nilai awal state
  fungsi Update : fungsi untuk update sih statenya 
    */
  // cara destructuring
  const [count, setCount] = React.useState(1);
  return (
    /*#__PURE__*/
    // element
    React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (count == 0) {
          count = 0;
        } else {
          setCount(count - 1);
        }
      }
    }, "-"), /*#__PURE__*/React.createElement("span", null, " ", count, " "), /*#__PURE__*/React.createElement("button", {
      onClick: function () {
        setCount(count + 1);
      }
    }, "+"))
  );
}

root.render( /*#__PURE__*/React.createElement(App, null));