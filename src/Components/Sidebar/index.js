import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUnlockKeyhole,faPlus} from '@fortawesome/free-solid-svg-icons';
import { faSun,faMessage, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import slytherinImg from '../../Assets/SlytherinLogo.png';
function Sidebar(){
    return (
       <aside className="sidebar">
        <div className="chatbox-config">
            <button className="sidebar-addChat"><FontAwesomeIcon className='font-awsome' icon={faPlus}/>New chat</button>
            <ul className="chatboxs">
                <li className="chatbox"><FontAwesomeIcon icon={faMessage}  className='font-awsome'/>Office AI Helper</li>
                <li className="chatbox"><FontAwesomeIcon icon={faMessage}  className='font-awsome'/>AI trợ giúp lập trình</li>
                <li className="chatbox"><FontAwesomeIcon icon={faMessage}  className='font-awsome'/>Translate VN-EN AI</li>
            </ul>
        </div>
        <div className="setting">
            <div className="setting-item"><FontAwesomeIcon icon={faTrashCan}  className='font-awsome'/>Clear Conversation</div>
            <div className="setting-item"><FontAwesomeIcon icon={faSun}  className='font-awsome'/>Light Mode</div>
            <div className="setting-item"><FontAwesomeIcon icon={faUnlockKeyhole}  className='font-awsome'/>Change API KEY</div>
            <div className="introduce">
                <img src={slytherinImg} alt="slytherinImg" />
                <h3>Design by Anthony</h3>
            </div>
        </div>
       </aside>
    )
}
export default Sidebar