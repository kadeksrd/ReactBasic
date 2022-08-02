const root = ReactDOM.createRoot(document.querySelector("#root"));

function App() {
  // state
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState({});
  const [messages, setMessages] = React.useState(''); // get id 

  function getId() {
    return Date.now();
  } // add & update todo


  function saveTodohandler(event) {
    event.preventDefault();

    if (!activity) {
      return setMessages('Isi Todo Dulu !');
    }

    setMessages('');

    if (edit.id) {
      const updatedTodo = { ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => todo.id == edit.id);
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelTodoHandler();
    }

    setTodos([...todos, {
      id: getId(),
      activity,
      done: false
    }]);
    setActivity('');
  } // remove function


  function removeTodoHandler(todoId) {
    const filteredTodos = todos.filter(todo => {
      return todo.id != todoId;
    });
    setTodos(filteredTodos);
    cancelTodoHandler();
  } // edit function


  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  } // cancel edit


  function cancelTodoHandler() {
    setEdit({});
    setActivity('');
  } // checkbox function


  function checkboxTodohandler(todo) {
    const updatedTodo = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(currentTodo => currentTodo.id == todo.id);
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Todo List App"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodohandler
  }, messages && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red',
      marginBottom: '10px'
    }
  }, messages), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "nama Aktivitas",
    value: activity,
    onChange: e => setActivity(e.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    tyoe: "submit"
  }, edit.id ? 'Simpan Perubahan' : "Tambahkan"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelTodoHandler
  }, "Batal Perubahan")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: checkboxTodohandler.bind(this, todo)
    }), todo.activity, " (", todo.done ? 'selesai' : 'belum selesai', ")", /*#__PURE__*/React.createElement("button", {
      onClick: editTodoHandler.bind(this, todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada Todo")));
}
/*
    Membuat Todo 

    
    
buat state 

    1. buat state activity dan setActivity dan atur statenya jadi empty string 
        tujuannya : untuk mengatur string aktivitas ex: id ,makan dll
    2. buat state todos dan setTodos dan atur state nya jadi array
        tujuannya :untuk menyimpan aktivitas dan mengaturnya seperti edit hapus dll  
        
    
buat function 

    fungsi id 
        1.buat Function getId()
        2.return kan Date.now() agar mendapatkan uniq angka atau angka acak

    fungsi menambahkan todos
        1.buatkan function addTodohandler(event) yang parameternya event
        2. lalu event kita preventDefault agar sih form diam ditempat ga buka halama lain 
        3. lalu tambahkan statenya yang dibuat seperti ini diambil

            setTodos([...todos, {
                id: getId(), 
                activity: acitivity
            }]);

            setActivity('')

            set Todos 
            1. dia membuat rest parameter ([...todos]) : agar semua aktivitas bisa ditampilkan 
            2. object parameter  {
                id: getId(), 
                activity: acitivity
            } 
            3.agar semua object state activitynya bisa diatur id dari function getId() 
            4.Id dari function getId() 
            5.sedangkan Activity () untuk object aktivitasnya


            fungsi hapus 
            1. buat function removeTodoHandler(todoId) dan todoId sebagai parameter
            2. buat isinya begini 

            filteredTodos = todos.filter( (todo) => {
                    return todo.id != todoId
                })
                setTodos(filteredTodos);
            3. kita filter state todosnya yang mana mereturn 
            4. todo.id bukan = todoId
            5. fungsi dibuatkan seperti ini karna 
            6. todo.id id yang tersimpan awal di todo.id
            7. todoId id setelah todo.id yang mana kalo disamain akan gagal filternya 
            8. set state nya setTodos(filteredTodos) agar setelah di filter maka state nya akan menghapus hasil filter tersebut 

pada JSX  
1. buat form dan buttonnya jangan lupa tambahkan onchange di dalam input dengan menambahkan setActivity sebagai setup activitynya 
agar inputannya bisa diambnil dan 
tambahkan value state{activity} untuk ambil inputannya
2. jangan lupa buat ul dan li buat ui listnya
3. pada form tambahkan onSubmit={addTodohandler} untuk funtion tambahnya 
4. pada li  kita map dari state todosnya 
<li key={todo.id}>{todo.activity} <button onClick={
    removeTodoHandler.bind(this,todo.id)
}>Hapus</button> </li> 

1.key todo.id: unique key yang diambil dari id yang dibuat difunction getid()
2.map todo.activity : untuk memamping semua activity yang ditulis yang di simpan dalam todos 
3.tambahkan button untuk menghapus dan kasih event onCLick yang isinya fungsi removeTodoHandler yang membinding id dari todo itu sendiri 


membuat update todo

pada jsx 
1. tambahkan button edit dan tambahkan event onClick dan arahkan ke fungsi editTodoHandler 

(<button onClick={
        editTodoHandler.bind(this,todo)
    }>Edit</button>)

2. tambahkan ternary condition di button submit agar tombolnya berubah dari tambahkan menjadi simpan perubahan seperti ini 
    <button tyoe="submit">{edit.id ? 'Simpan Perubahan' : "Tambahkan"}</button>

pada state 
1. tambahkan const [edit, setEdit] = React.useState({}) kenapa object karena function edit itu mengembalikan objectnya


*/


root.render( /*#__PURE__*/React.createElement(App, null));