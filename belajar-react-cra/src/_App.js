import logo from './logo.svg';
import './App.css';
import {Welcome2 , Welcome3} from './welcome.js';
// tiap satu file bisa ditambahkan exportnya dengan , 
// kalau bukan export default gunakan {}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome2 children="Test Ngab"/>
        <Welcome2 children = "Test dua ngab"/>
        <Welcome2>Test Ngab 3 </Welcome2>
      </header>
    </div>
  );
}
/*
Props 

Props = properti yang dalamnya ada  children poda react Elemen
Penamaan = penamaan childern juga bisa diubah tergantung value yang ada 
contoh props.namaLaen nnati isinya dijadikan value di dalem componentnya seperti ini namalaen="isiValue"
Props childern bisa dipakai langsung dengan jsx seperti ini  <Welcome2>Test Ngab 3 </Welcome2>


*/
export default App;
