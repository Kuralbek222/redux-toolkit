
import './App.css';
import {useState,useEffect} from 'react';
import TodoList from './component/TodoList'
import InputField from './component/InputField'
import {useDispatch,useSelector} from 'react-redux'

import {addNewTodo,fetchTodos} from './store/todoSlice'

function App() {
  
  const [text, setText] = useState('')
  const {status,error} = useSelector(state=>state.todos)
  const dispatch = useDispatch()

  const addTask = () => dispatch(addNewTodo(text), setText(''))

  useEffect(()=> {
    dispatch(fetchTodos())
  },[dispatch])

    

 
  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask } />

      {status ==='loading' && <h2>loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
