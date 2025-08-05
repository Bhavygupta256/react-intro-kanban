import './App.css'
import Taskcard from './task-card'

function App() {
  const title = 'Do Market Research'
  const id = 'BUS-1'
  const points = 5
  
  return (
    <>
    <Taskcard title={title} id={id} points={points} />
    <Taskcard title="Competitor Analysis" id="Bus-2" points={3} />
    <Taskcard title="Develop Business Strategy" id="Bus-3" points={8} />
    <Taskcard title="Develop Marketing Strategy" id="Bus-4" points={5} />
    </>
  )
}

export default App
