import { useParams } from "react-router-dom";
import ProfileHeader from "./profileComponents/ProfileHeader";
import AboutSection from "./profileComponents/AboutSection";

const ProfilePage = () => {
    const id = useParams().id;
    return <>
    
    <ProfileHeader/>
    <AboutSection/>
    Profile Page {id}
    
    </>
}

export default ProfilePage;