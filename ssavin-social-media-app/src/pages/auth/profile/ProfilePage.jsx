import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const id = useParams().id;
    return <div>Profile Page {id}</div>
}

export default ProfilePage;