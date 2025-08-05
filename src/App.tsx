import './App.css'
import Taskcard from './components/task-card'
import {Task} from './utils/data-tasks'  

function App() {
   const task: Task = {
    title: 'Do Market Research',
    id: 'BUS-1',
   points: 5
   }
  return (
    <>
    <Taskcard task={task} />
    </>
  )
}

export default App
