const root = ReactDOM.createRoot(document.querySelector("#root"));

// menaruh data api di jsx

function App() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const request = await fetch(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );

        const response = await request.json();

        setNews(response);
        setLoading(false);
      };
      getData();
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>loading data ...</i>
      ) : (
        <ul>
          {news.map((item) => {
            return;
            <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

/*
 menaruh data di jsx : 

 menggunakan state
 1. buat state  const [news, setNews ] = React.useState([])
 2. taroh setNews didalam async function dan masukan hasil responsennya 
 3. setNews(response)

 taruh state di jsx menggunakan maps
 1.masukan state nes di jsx lalu di mapping dengan item sebagai reference
 2.{news.map((item) => (
 3. lalu masukin li sebagai list htmlnya dan mapping judulnya 
 4. jangan lupa masukan key dan id sebagai ref nya    
<li key={item.id}>{item.title} </li>
 )

  tambahkan ui loading agar lebih cantik 

  tujun
  1. buat state loading const [loading, setLoading] = React.useState(true) 
  note: true tujuannya ada saat nunggu dia ada ui loading nnati saat false keluar apinya `
  2. taroh state di async function setLoading(false)
  3. buat ternary di jsx 
  {loading ? (<i>loading data ...</i>) : ( 
        <ul>
        {news.map((item) => {
          return 
          <li key={item.id}>{item.title}</li>
        })}
  4. tujuannya saat true dia tampilin ui loading 
  5. saat false dia tampilin api 
  6. done 
 )} 
  

*/

root.render(<App />);
