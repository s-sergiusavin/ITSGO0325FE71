import Feature from "./Feature";

function Features({toggleAction}) {

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
            action: 'Turn on the vacuum',
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

const toggleActionHandler = (value) => {
    toggleAction(value)
}

    return <div className="features-container">

        {FEATURES.map(feature => {
            return (
                <Feature name={feature.name} 
                action={feature.action} 
                key={feature.id} 
                toggleAction={toggleActionHandler}/>
            )
        })}



        {/* <Feature name={FEATURES[0].name} action={FEATURES[0].action} />
        <Feature name={FEATURES[1].name} action={FEATURES[1].action} />
        <Feature name={FEATURES[2].name} action={FEATURES[2].action} />
        <Feature name={FEATURES[3].name} action={FEATURES[3].action} /> */}
    </div>
}

export default Features;