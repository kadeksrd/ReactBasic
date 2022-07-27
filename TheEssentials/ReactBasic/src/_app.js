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
        // functionEvent.bind(this,isi functionya)
        // this menandakan function di scope tsb
        // isi function: isi function yg akan di eksekusi 
        ></div>
        
        
        );
       
// state and reactivity

    // membuat fungsi count [-] 1 [+]
        
    // component
        function App() {
            
     
            // cara biasa
        
            const state[count,setCount] = React.useState(1);
        
            const count = state[0];
            const setCount = state[1];
            
            /* 
            penulisan state = React.UseState(nilaiAwal,fungsiUpdate)
            
            nilai Awal : nilai awal state
            fungsi Update : fungsi untuk update sih statenya 
            
            */
           
        
        
        // cara destructuring
            
            const [count,setCount] = React.useState(1);
        


            return (
                // element
                <div>
                    <button onClick={() => {
                    if(count == 0) {count = 0}
                        else{
                        setCount(count - 1)
                        }
                    }
                    }>
                        -
                    </button>
                    <span> {count} </span>
                    <button onClick={
                        function(){
                            setCount(count + 1)
                        }
                    }>
                        +
                    </button>
                </div>
            )
        }

// component lifecycle 
    function App(){
    
    
    
    
    /*  gunakan React.useEffect Kalo ingin ngambil element sesudah ngerender
    
    kelebihan : fungsinya berjalan saat dirender baik itu pertama kali maupun seterusnya
    kekurangan : karena berjalan saat dirender maka dia selalu mengikuti perubahan statenya 
    
    contoh buat state klik 
    
    saat diklik maka console.log nya ttep dicetak padahal kita cuma suruh dicetak 1x

    karena menggunakan useEffect ini
    
    tapi tergantung dengan inturksi event kliknya kalo cuma false true maka saat true 
    
    React.useEffectn nya ga dicetak lagi
    
    tapi kalo eventnya mengaruskan klik terus2san kyk tombol keranjang maka kecetak trus 
    
    */
   
   const [click, setClick] = React.useState(false);
   const [cart, setCart] = React.useState(0);
   
   React.useEffect(() => {
       console.log(document.querySelector("#judul"));
   },[]) 
   /*
   
   -cara agar state tertentu aja yang bisa debugging fungsi diatas 
   -dengan tambahkan array dibelakangnya [masukan,statenya]


    -dan cara agar sih React.useEffect ngga ngerender lagi saat function dijalankan atau event di klik 
    -yaitu tambahkan [] di akhir 
   -ini cocok untuk fetching api biar data api tidak di render ulang yang membuat web berat 
   -istilah ini dinamakan mount
   -gimana cara demount biar elemennya bisa dihapus atau diganti saat pindah halaman atau eksekusi lain
   -di return lagi 
   */

    //   ngemount
   React.useEffect(() => {
       console.log('aku di klik kawan!');
        //   ngedemount
       return () => {
              console.log('aku di hapus kawan!');
       }
   },[]) 
    return(
        <>
            <h1 id="judul">Hello Judul</h1>
            <button onClick={() => setClick(true)}>Klik Akuh</button>
            <button onClick={() => setCart(cart + 1)}>
            Tambah Keranjang
            </button>  
            <h4>Keranjangku Ada <b>{cart}</b> </h4>
        </>
    )
}
       




//Conditional rendering
function App() {
    const [login, setLogin] = React.useState(false);
  
    /* cara Pake If 
    if (login == true) {
      return (
        <>
          <h1>Login Berhasil !</h1>
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            Logout
          </button>
          </>
      );
    }
  */
  
    
    return (
        <>
        <h1>Application</h1>
        {/* cara Pake  Ternary  */}
        <p>{login ? <b>Kamu Sudah Login !</b> : <i>Kamu Belom login ! </i>}</p>
        {/* cara Pake  Ternary  Inline Kondisional tanpa else */}
        {/* react bisa nulis jsx didalem regular expresionnya  */}
        <p>{login == true && <b>Kamu Sudah Login! </b>}</p>
        <button
          onClick={() => {
            setLogin(true);
          }}
          >
          Login
        </button>
      </>
    );
  }
  
  /*
  Konsep Conditional Diatas 
  jadi apabila dia mmemenuhi suatu function maka react akan merender function yang dituju
  
  misal diatas saat setLogin(true) maka react akan merender if (login == true)
  
  begitu juga sebaliknya kalo setLogin(false) maka react akan merender setLogin awal yaitu yang false  / menu awal
  
  
  
  */

 
// manipulasi dom di react

function App() {
  // Cara biasa menggunakan useEffect
  React.useEffect(() => {
    const getApp = document.getElementById("app");
    setTimeout(() => {
      getApp.textContent = "Aplikasi biasa";
    }, 2000);
  });

  // cara kedua menggunakan useref
  const judulref = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      judulref.current.textContent = "Aplikasi useref";
    }, 2000);
  });

  return (
    <div>
      <h1 id="app">Application biasa</h1>
      <h1 ref={judulref}>Application useRef</h1>
    </div>
  );
}

/*

UseRef

-jadi kita membuat  reference yang isi awalnya null
-lalu kita ambil dom menggunakan ref={variabelREfnya}
-lalu kita taruh di useEffect biar dijalananin duluan
-jgn lupa tambahkan object .current agar tidak usah memanipulasi dom secara manual 
-contoh 
judulref.current.textContent = "Aplikasi useref";



*/


// List dan Keys
function App () {

  const fruit = ["apple", "banana", "orange"];

  return (
    <ul>
     
      {fruit.map(fruit =>  
      
      <li key={fruit}>{fruit}</li>
      
      )
      }
    </ul>


  )
}


/*
 contoh diatas adalah cara  membuat list dan keys direact
1. looping <li> menggunakan map karena kalo pakai foreach ga bisa direturn
2. kalo terjadi eror 'Warning: Each child in a list should have a unique "key" prop.
' itu terjadi karena ga ditamnbahkan key 
3. fungsi key sendiri agar tiap isi array tidak boleh sama 
4. nama key harus sama dengan nama array 
*/



// membuat form dengan react bag 1 (onControl Component (vanila js method on react ))
function App() {
  const namaRef = React.useRef(null);

  function Submit(e) {
    e.preventDefault();

    const nama = namaRef.current.value;

    alert(`halo: ${nama}`);

    console.log("halo : ", nama)
  }

  return (
    <form onSubmit={Submit}>
      <div>
        <label>nama : </label>
        <input type="text" name="nama" ref={namaRef} />
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

/*
  Membuat form dengan react bag 1
  1. buat form pada html biasanya
  2. buat function Submit untuk mengambil data yang di submit 
  3. jangan lupa di preventDefault karena pada dasarya form itu saat di submit maka akan berpindah ke halaman lain 
  agar bisa di cegah tambahkan preventDefault sehingga saat di panggil tidak langsung hilang karena reload pindah tempat
  4. tambahkan onSubmit:{namaFunction} agar tombol submit bisa mengikuti rule functionnya
  5. tambahkan React.useRef untuk mengambil node dari dom html
  6. lalu taruhkan ref di input 
  7. jangan lupa masukan fungsi refnya ke dalam function submit agar bisa menangkap data yang diambil dari input  



 */

// Buat form versi control menggunakan react state
function App() {

    const [nama,setNama] = React.useState('')
 
   //  function submit
    function Submit(e){
       e.preventDefault();
 
 
     alert(`nama akoeh : ${nama}`)
 
    }
 
 
 
   return (
     <form onSubmit={Submit}>
       <div>
         <label>nama : </label>
         <input type="text" name="nama" value={nama} onChange={ (e) => setNama(e.target.value)} />
       </div>
       <button type="submit">submit</button>
     </form>
   )
 }
 
 /*
 Buat form versi control menggunakan react state
 
 tambahkan event handler onChange 
 lalu masukan setNama untuk mengatur statenya
 
 lalu jadikan state nama valuenya
 
 lalu cetak di function submit 
 
 
 */




// mengambil api dengan fetch 

function App () {
  
  // menggunakan promise 
    /*
    
    React.useEffect(() => {  
      const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs')
      .then((response) => {
        return response.json();
      }).then((getData) => console.log(getData))
    },[])
    
    */

  // menggunakan fetch

  React.useEffect(() => {
    const getData = async () => {
      const request =  await fetch ('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json()
      console.log (response);
    }
    getData();
  },[])



  return(
    <div>Data Fetch API</div>
  )




}

/*
  proses pengambilan api adalah 
  1. menggunakan fetch untuk mengambil api dari server / link 
  2. karena metode fetch menghasilkan asynchronous maka kita menggunakan promise / async await untuk proses pencetakan data 
  
  menggunakan promise 
  1. gunakan then pertama untuk mengambil data lalu mengembalikan json
  2. gunakan then untuk mencetak json 

  menggunakan asycn await 
  1. buat async function untuk proses asynchronousnya 
  2. buat variabel await request buat fetch data dari server 
  3. buat variabel await lagi untuk return json()nya
  4. lalu console.log jsonnya 
  5. taroh async function diluar function  


*/


 
 