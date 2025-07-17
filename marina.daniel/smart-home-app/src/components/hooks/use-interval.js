import { useEffect, useRef, useState } from "react";

const useInterval = (interval, initialDirtProgress) => {
    const [actions, setActions] = useState({
        dirtProgress: initialDirtProgress,
        cleaned: 0
    });

    let dirtInterval = useRef();

    useEffect(() => {
        dirtInterval.current = setInterval(() => {
            setActions(prevState => {
                if (prevState.dirtProgress > 1) {
                    clearInterval(dirtInterval.current)
                }
                return {
                    ...prevState,
                    dirtProgress: prevState.dirtProgress + 0.1
                }
            })
        }, interval);

        return () => {
            clearInterval(dirtInterval.current)
        }
    }, [actions.cleaned]);

    const resetCleaningStatus = () => {
        setActions(prevState => {
            return {
                ...prevState,
                dirtProgress: initialDirtProgress,
                cleaned: prevState.cleaned + 1
            }
        });
    }

    return [actions, resetCleaningStatus]
}

export default useInterval;