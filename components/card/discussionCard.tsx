import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart, faShareNodes, faEye, faMessage } from '@fortawesome/free-solid-svg-icons';
function DiscussionCard() {
  return (
    <div className="border p-4 mt-3 mb-8">
        <div className="flex items-center" >
            <FontAwesomeIcon icon={faUser} className="text-xl mr-3 ml-3" />
            <div className="text-xl font-medium">Lorem Ipsum</div>
            <div className={`bg-sector mr-2 ml-4 pr-3 pl-3 rounded-full text-white`}>Sector 2</div>
            <p className="text-blue-500 font-semibold ml-auto">2 min ago</p>
        </div>
        <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="flex justify-between mt-4">
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faHeart} /> 2k</div>
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faEye} /> 2k
            </div>
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faMessage} /> 2k Comments
            </div>
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faShareNodes} /> share</div>
        </div>
    </div>
  );
}

export default DiscussionCard