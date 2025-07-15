import { useEffect, useState } from "react";
import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";

function Features({ toggleAction, newFeature }) {

    const FEATURES = [
        {
            name: 'Toggle Lights',
            action: 'Turn the lights on',
            state: false,
            id: 0
        },
        {
            name: 'Toggle A/C',
            action: 'Turn on the A/C',
            state: false,
            id: 1
        },
        {
            name: 'Clean',
            action: 'Start cleaning',
            state: false,
            id: 2
        },
        {
            name: 'Coffee time',
            action: 'Make a coffee',
            state: false,
            id: 3
        },
        {
            name: 'Watch TV',
            action: 'Turn on the TV',
            state: false,
            id: 4
        }

    ];

    const [features, setFeatures] = useState(FEATURES);

    useEffect(() => {
        if (newFeature.name !== ''
            // &&
            // newFeature.action !== ''
        ) {
            setFeatures(prevState => [newFeature, ...prevState])
        }
    }, [newFeature]);


    const toggleLights = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Toggle Lights') {
                    feature.state = !feature.state;
                    feature.action = `Turn the lights ${feature.state ? 'Off' : 'On'}`
                }
                return feature;
            })

            return updatedFeatures;
        })
    }

    const toggleAc = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Toggle A/C') {
                    feature.state = !feature.state;
                    feature.action = `Turn ${feature.state ? 'Off' : 'On'} the A/C`
                }
                return feature;
            })

            return updatedFeatures;
        })
    }

    const toggleTv = () => {
        setFeatures(prevState => {
            const updatedFeatures = prevState.map(feature => {
                if (feature.name === 'Watch TV') {
                    feature.state = !feature.state;
                    feature.action = `Turn ${feature.state ? 'Off' : 'On'} the TV`
                }
                return feature;
            })

            return updatedFeatures;
        })
    }

    const toggleActionHandler = (value) => {
        toggleAction(value)

        switch (value) {
            case 'Toggle Lights':
                toggleLights();
                break;
            case 'Toggle A/C':
                toggleAc();
                break;
            case 'Watch TV':
                toggleTv();
                break;
        }
    }

    return <div className="features-container">
        <div className="features">
            {features.map(feature => {
                return (
                    <Feature name={feature.name}
                        action={feature.action}
                        key={feature.id}
                        toggleAction={toggleActionHandler}
                        state={feature.state} />

                )
            })}
        </div>


        {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action} />
        <Feature name={FEATURES[1].name} action={FEATURES[1].action} />
        <Feature name={FEATURES[2].name} action={FEATURES[2].action} />
        <Feature name={FEATURES[3].name} action={FEATURES[3].action} /> */}


    </div>
}

export default Features;