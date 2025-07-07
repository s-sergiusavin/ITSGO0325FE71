const FeaturesForm = ({updateFeatures}) => {
    const [isFormValid, satIsFormValid] = useState(true);
    const submitHandler = () => {
updateFeatures()
    }
    return <form className={'form' } onSubmit={submitHandler} noValidate></form>
}

export default FeaturesForm