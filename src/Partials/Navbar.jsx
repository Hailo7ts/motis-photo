import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <>         
          <div className="flex justify-center mt-20">   
            <ul className="menu menu-horizontal bg-base-200 rounded-box w-3/5 justify-evenly">
              <li>
                <Link to='/about' className="btn btn-ghost text-xl">about</Link>
              </li>

              <li>
                <Link to='/' className="btn btn-ghost text-xl">gallery</Link>
              </li>          

              <li>
                <Link to='/contact' className="btn btn-ghost text-xl">contact</Link>
              </li>
            </ul>    
          </div> 
        </>
    )
}

export default Navbar
