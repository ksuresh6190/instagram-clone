import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestion from './Suggestion'

function App() {
  return (
    <div className='d-flex'>
        <div className='vh-100 w-20'><Sidebar/></div>
        <div className='vh-200 w-55 feed-head'><Feed/></div>
        <div className='vh-100 w-25 suggestion-head'><Suggestion/></div>
    </div>
  )
}

export default App
