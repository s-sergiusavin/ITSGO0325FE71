import style from './RightSide.module.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';
import VideocamIcon from '@mui/icons-material/Videocam';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

const RightSide = () => {

    //messenger box
    const [showChat, setShowChat] = useState(false);
    const toggleChat = (e) => {
        console.log(e.currentTarget)
        setShowChat(prevState => !prevState)
    }

    const hideChat = () => {
        setTimeout(() => setShowChat(false), 100);
    }

    //request box
    const [showRequest, setShowRequest] = useState(false);

    const toggleRequest = () => {
        setShowRequest(prevState => !prevState)
    }

    const hideRequest = () => {
        setTimeout(() => setShowRequest(false), 100)
    }


    return <>


        <div className={style.rightContent}>


            <div className={style.friendsList}>
                <a href="#" title="Friends list"><img src="https://cdn-icons-png.flaticon.com/128/3220/3220788.png"
                    alt="" /></a>
                <span>Friends</span>
            </div>

            <div className={style.friends}>
{/* use event delegation */}
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>
                <a onClick={toggleChat} className={style.friendName}><img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png"
                    alt="" />Steve Rogers</a>


                {showChat && (<div className={style.messengerContainer}>

                    <div className={style.messengerHead}>
                        <section className={style.personInfo}>
                            <div className={style.picAndName}>
                                <img src="https://cdn-icons-png.flaticon.com/128/4140/4140057.png" />
                                <strong>Steve Rogers</strong><KeyboardArrowDownIcon sx={{ alignSelf: 'center' }} />
                            </div>
                            <p>Active 5m ago</p>
                        </section>

                        <section className={style.windowOptions}>
                            <PhoneIcon /><VideocamIcon /><RemoveIcon /><CloseIcon onClick={hideChat} />
                        </section>
                    </div>

                    <div className={style.messengerBody}>
                        Messages and calls are secured with end-to-end encryption.
                        Only people in this chat can read, listen to, or share them.
                        <strong>Learn More</strong>

                        <div className={style.messengerBottom}>
                            <KeyboardVoiceIcon /><CropOriginalIcon /><GifBoxOutlinedIcon /><input type="text" placeholder='Aa' /><EmojiEmotionsIcon /><ThumbUpIcon />
                        </div>

                    </div>

                </div>)}


            </div>

            <div className={style.groupsList}>
                <a href="#" title="Groups"><img src="https://cdn-icons-png.flaticon.com/128/16841/16841872.png"
                    alt="" /></a>
                <span>Groups</span>
            </div>

            <div className={style.groups}>


                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
                <a className={style.groupName}><img src="https://cdn-icons-png.flaticon.com/128/4807/4807598.png"
                    alt="" />Social Media Group</a>
            </div>

            <div className={style.suggestionsList}>

                <a href="#" title="Friend requests"><img src="https://cdn-icons-png.flaticon.com/128/16382/16382065.png"
                    alt="" /></a>
                <span>Requests</span>

            </div>

            <div className={style.friendSuggestion}>

                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>
                <a onClick={toggleRequest} className={style.suggestion}><img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                    alt="" />Bruce Banner</a>

                {showRequest && (<div className={style.request}>
                    <div className={style.requestName}>
                        <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" />
                        <strong>Bruce Banner</strong>
                    </div>

                    <div className={style.requestBio}>
                        <PeopleAltIcon />3 mutual friends
                    </div>

                    <div className={style.requestOptions}><DoneOutlineIcon className={style.accept} onClick={hideRequest} />
                    <NotInterestedIcon className={style.decline} onClick={hideRequest}/></div>
                </div>)}


            </div>
        </div>




    </>
}

export default RightSide;