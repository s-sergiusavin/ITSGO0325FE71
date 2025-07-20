import { useEffect, useRef, useState } from "react";

const useCoffee = (interval, initialVolume) => {
    const [actions, setActions] = useState({
        coffeeVolume: 0,
        emptied: 0,
    });

    let coffeeInterval = useRef();

    const startFilling = () => {
        coffeeInterval.current = setInterval(() => {
            setActions(prevState => {

                if (prevState.coffeeVolume >=5) {
                    clearInterval(coffeeInterval.current)
                }
                return {
                    ...prevState,
                    coffeeVolume: prevState.coffeeVolume +1
                }
            })

        }, interval)

    }

    useEffect(() => {

        return () => {
            clearInterval(coffeeInterval.current)
        }
    }, [actions.emptied]);


    const resetCoffeeStatus = () => {
        setActions((prevState) => {
            return {
                ...prevState,
                coffeeVolume: initialVolume,
                emptied: prevState.emptied + 1

            }
        })

        
    };
    return [actions, resetCoffeeStatus, startFilling];
};



export default useCoffee;

















// import { useEffect, useRef, useState } from "react";

// const useCoffee = (interval, initialVolume) => {
//     const [actions, setActions] = useState({
//         coffeeVolume: initialVolume,
//         emptied: 0,
//     });

//     let coffeeInterval = useRef();

//     const startFilling = () => {
//         coffeeInterval.current = setInterval(() => {
//             setActions(prevState => {

//                 if (prevState.coffeeVolume > 1) {
//                     clearInterval(coffeeInterval.current)
//                 }
//                 return {
//                     ...prevState,
//                     coffeeVolume: prevState.coffeeVolume + 0.1
//                 }
//             })

//         }, interval)

//     }

//     useEffect(() => {

//         return () => {
//             clearInterval(coffeeInterval.current)
//         }
//     }, [actions.emptied]);


//     const resetCoffeeStatus = () => {
//         setActions((prevState) => {
//             return {
//                 ...prevState,
//                 coffeeVolume: initialVolume,
//                 emptied: prevState.emptied + 1

//             }
//         })

        
//     };
//     return [actions, resetCoffeeStatus, startFilling];
// };



// export default useCoffee;