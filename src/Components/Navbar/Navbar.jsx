import './Navabar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <nav>
    <div className="nav-left"><h1>StackFlow</h1></div>
    <div className="nav-right">
    <ul className='nav-menu'>
        <li><Link to='/'>Login & Sign up</Link></li>
        <li><Link to='/quote-generator'>Quote Generator</Link></li>
        <li><Link to='/weather-api'>Weather API</Link></li>
        <li><Link to='/todo-list'>ToDo List</Link></li>
    </ul>

    </div>

    </nav>

  )
}

export default Navbar
