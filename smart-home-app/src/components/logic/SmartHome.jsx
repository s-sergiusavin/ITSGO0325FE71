import { useEffect, useRef, useState } from "react";
import Ac from "../ui/Ac";
import Light from "../ui/Light";
import Room from "../ui/Room";
import Features from "./Features";

const SmartHome = ({newFeature}) => {
    const [lightsOn, setLightsOn] = useState(false);
    const [acOn, setAcOn] = useState(false);
    const [dirtProgress, setDirtProgress] = useState({
        status: 0,
        cleaned: 0
    });

    

    let dirtInterval = useRef();

    useEffect(() => {
        dirtInterval.current = setInterval(() => {
            setDirtProgress(prevState => {
                // console.log(prevState.status)
                if (prevState.status > 1) {
                    clearInterval(dirtInterval.current)
                }
                return {
                    ...prevState,
                    status: prevState.status + 0.1
                }
            })
        }, 2000);

        return () => {
            clearInterval(dirtInterval.current)
        }
    }, [dirtProgress.cleaned])

    const toggleLights = () => {
        setLightsOn((prevState) => {
            return !prevState
        });
    }

    const toggleAc = () => {
        setAcOn((prevState) => {
            return !prevState
        });
    }

    const startCleaning = () => {
        setDirtProgress(prevState => {
            return {
                ...prevState,
                status: 0,
                cleaned: prevState.cleaned + 1
            }
        });
    }

    const toggleActionHandler = (name) => {
        switch (name) {
            case 'Toggle lights':
                toggleLights();
                break;
            case 'Toggle AC':
                toggleAc();
                break;
            case 'Clean':
                startCleaning();
                break;

        }
    }

    return (
        <>
            <div className="ui-features">
                <Light lightsOn={lightsOn} />
                <Room status={dirtProgress.status} />
                <Ac acOn={acOn} />
            </div>
            <Features toggleAction={toggleActionHandler} newFeature={newFeature} />
        </>
    )
}

export default SmartHome;