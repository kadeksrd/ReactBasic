/*


// Cara Pertama 

function Welcome(){
    return <h1> Welcome Ngab</h1>
}

export default Welcome; // export default dijadikan utama

*/

// cara Kedua 

export function Welcome2 (props) {
    return (
        <> 
        <h1>
            {props.children}
        </h1>
        </>
   )
}

/*
 */

export function Welcome3 () {
    return <h1>Welcome Ketiga</h1>
}