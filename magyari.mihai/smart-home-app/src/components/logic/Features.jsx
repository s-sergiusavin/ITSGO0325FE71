import { useState } from "react";
import Feature from "./Feature";
import FeaturesForm from "./FeaturesForm";

function Features({ toggleAction }) {

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


    ];

    const [features, setFeatures] = useState(FEATURES);

    const toggleActionHandler = (value) => {
        toggleAction(value)
    }

    const updateFeaturesHandler = (feature) => {
        setFeatures(prevState => {
            return [...prevState, feature]
        })

    }

    return <div className="features-container">
        <div className="features">
            {features.map(feature => {
                return (
                    <Feature name={feature.name}
                        action={feature.action}
                        key={feature.id}
                        toggleAction={toggleActionHandler} />
                )
            })}
        </div>
        <FeaturesForm updateFeatures={updateFeaturesHandler} />

        {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action} />
        <Feature name={FEATURES[1].name} action={FEATURES[1].action} />
        <Feature name={FEATURES[2].name} action={FEATURES[2].action} />
        <Feature name={FEATURES[3].name} action={FEATURES[3].action} /> */}


    </div>
}

export default Features;