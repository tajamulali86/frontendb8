// function Header({ islogged }) {
//     // islogged ==boolean 
//     let auth
//     if (islogged === true) {
//         auth = <li className="text-red-500">LogOut</li>
//     } else {
//         auth = <li className="text-green-500">Sign In</li>
//     }
//     return (<div>
//         <ul><li>Home</li>
//             <li>About</li>
//             <li>contact</li>
//             {/* yaha pe login ya logout */}
//             {auth}
//         </ul>
//     </div>)

import { useContext } from "react"
import { LogingContext } from "./LoginContext"
import { Link } from "react-router"

// }
function Header() {
    // islogged ==boolean 
    // const {loggedIn:islogged} =useContext(LogingContext)
    // let color

    // if (islogged === true) {
    //     color = 'text-red-500'
    // } else {
    //     color= 'text-green-500'
    // }
    return (<div>
        <ul><li><Link to={'/about'}>About</Link>    </li>
            <li><Link to={"/contact"}>Contact</Link>    </li>
            <li><Link to={"/"}>Home</Link>    </li>
            <li><Link to={"/admin"}>Admin</Link>    </li>
            {/* yaha pe login ya logout */}
            {/* {islogged?<li className={color}>LogOut</li>: <li className={color}>LogIn</li>} */}
        </ul>
    </div>)
}
export default Header