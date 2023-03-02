import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'
function Sidebar(){
    return (
       <aside className="sidebar">
        <button className="sidebar-addChat"><FontAwesomeIcon className='font-awsome-faPlus' icon={faPlus}/> New chat</button>
       </aside>
    )
}
export default Sidebar