import React, {useState} from 'react';
import './todo.css'


const Todo = () => {
    const  [todo, setTodo] = useState("");
    const  [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo !=="") {
            setTodos([{id: `${todo}`, todo}, ...todos])
        }

        setTodo("")
    }
    
    const handleDelete = (id) => {
        const todoDelete = todos.filter((to) => to.id !==id);
        setTodos([...todoDelete])
        setEditId(id)
    }

    const handleEdit= (id) => {
        const editTodo = todos.find((i) => i.id ===id);
        setTodo(editTodo.todo)
    }
  return (
    <div className='todo'>
        <div className='container'>
            <h1>Todo List App</h1>
            <form className='todoForm' onSubmit={handleSubmit}>
                <input className="todoInput"type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
                <button className='btn'>{editId ? "Edit" : "Go"}</button>
            </form>
            <ul className='allTodo'>
                {
                    todos.map((t) => (
                        <li className='singleTodo' key={t.id}>
                        <span className='todoText'>{t.todo}</span>
                        <button className='btn' onClick={() => handleEdit(t.id)}>Edit</button>
                        <button className='btn' onClick={() => handleDelete(t.id)}>Delete</button>
                    </li>
                    ))
                }
                {/* <li className='singleTodo'>
                    <span className='todoText'>Learn React</span>
                    <button className='btn'>Edit</button>
                    <button className='btn'>Delete</button>
                </li> */}
            </ul>
        </div>
    </div>
  );
};

export default Todo;
