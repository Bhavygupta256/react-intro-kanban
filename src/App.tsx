import './App.css'
import Taskcard from './components/TaskCard'
import {tasks} from './utils/data-tasks'  

function App() {
   
  return (
    <>
    {tasks.map((task) => <Taskcard task= {task}/>)}
    </>
  )
}

export default App
