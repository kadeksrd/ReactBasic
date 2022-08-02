import {useState} from 'react';

function Todo () {
    
    // state
    const [activity,setActivity] = useState('');
    const [todos,setTodos] = useState([]);
    const [edit, setEdit] = useState({});
    const [messages, setMessages] =  useState('')


    // get id 
    function getId(){
        return Date.now();
    }
    
    // add & update todo
    function saveTodohandler (event) {
        event.preventDefault();


        if(!activity){
            return setMessages ('Isi Todo Dulu !')
        }


        setMessages('');
        

        if(edit.id)
        {
            const updatedTodo = {
                ...edit,
                activity
            }

            const editTodoIndex = todos.findIndex((todo) => todo.id == edit.id)

            const updatedTodos = [...todos]

            updatedTodos[editTodoIndex] = updatedTodo;
            
            setTodos(updatedTodos);
            
            return cancelTodoHandler()
        }
        

        setTodos([...todos, 
            {
                id: getId(), 
                activity,
                done: false
            }
         ]);

        
        setActivity('');
    }

    // remove function
    function removeTodoHandler(todoId){
        const filteredTodos = todos.filter( (todo) => {
           return todo.id != todoId
        })
        setTodos(filteredTodos);
        cancelTodoHandler();
    }
    
    // edit function
    function editTodoHandler(todo){
        setActivity(todo.activity);
        setEdit(todo)
    }

    // cancel edit
    function cancelTodoHandler(){
        setEdit({});
        setActivity('');
    }

    // checkbox function
    function checkboxTodohandler(todo){
        const updatedTodo = {
            ...todo, //(sphread operator ) mengambil semua isi sebelumnya dari state todo
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex((currentTodo) => currentTodo.id == todo.id)

        const updatedTodos = [...todos]

        updatedTodos[editTodoIndex] = updatedTodo;
        
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo List App</h1>
            <form onSubmit={saveTodohandler}>
            { messages && <div style={{color: 'red', marginBottom: '10px'}}>{messages}</div>}                
            <input type="text" placeholder="nama Aktivitas" value={activity} onChange={
                    (e) => setActivity(e.target.value)
                }/>
                
                <button tyoe="submit">{edit.id ? 'Simpan Perubahan' : "Tambahkan"}</button>
                {edit.id && <button onClick={cancelTodoHandler}>Batal Perubahan</button>}
            </form>
            {todos.length > 0 ? 
            (<ul>
                {todos.map((todo) => {                   
                    return (
                        <li key={todo.id}>
                        <input type="checkbox" checked={todo.done} onChange={checkboxTodohandler.bind(this, todo)} />   
                        {todo.activity} ({todo.done ? 'selesai' : 'belum selesai'})
                        <button onClick={
                            editTodoHandler.bind(this,todo)
                        }>Edit</button> 
                        <button onClick={
                            removeTodoHandler.bind(this,todo.id)
                        }>Hapus</button> 
                        </li> 
                        ) 
                    })}
            </ul>) : (<p><i>Tidak ada Todo</i></p>)}
            
        </div>
        )
}

export default Todo;