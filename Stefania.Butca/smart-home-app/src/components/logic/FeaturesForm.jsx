import { useState } from "react";

const FeaturesForm = ({ updateFeatures }) => {
    const [isFormValid, setIsFormValid] = useState(true);

    const [nameField, setNameField] = useState('');
    const [actionField, setActionField] = useState('');
    const [stateField, setStateField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');

    const checkValid = () => {
        if (nameField === '' ||
            actionField === '' ||
            stateField === '' ||
            descriptionField === ''
        ) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }

    const resetFields = () => {
        setNameField('');
        setActionField('');
        setStateField('');
        setDescriptionField('');
    }

    const nameChangeHandler = (e) => {
        // console.log(e)
        setNameField(e.target.value)
    }

    const actionChangeHandler = (e) => {
        // console.log(e)
        setActionField(e.target.value)
    }

    const stateChangeHandler = (e) => {
        // console.log(e)
        setStateField(e.target.value)
    }

    const descriptionChangeHandler = (e) => {
        // console.log(e)
        setDescriptionField(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        checkValid();

        const newFeature = {
            name: nameField,
            action: actionField,
            state: stateField,
            id: Math.random() * 100,
        };


        updateFeatures(newFeature);
        resetFields()
    }

    return <form className={`form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={submitHandler} noValidate>
        <div className="control">
            <label htmlFor="title">Feature title</label>
            <input type="text" id="title" required onChange={nameChangeHandler} value={nameField}/>
        </div>

        <div className="control">
            <label htmlFor="action">Feature action</label>
            <input type="text" id="action" required onChange={actionChangeHandler} value={actionField}/>
        </div>

        <div className="control">
            <label htmlFor="state">Feature state</label>
            <input type="text" id="state" required onChange={stateChangeHandler} value={stateField} />
        </div>

        <div className="control">
            <label htmlFor="description">Feature description</label>
            <textarea id="description" rows={5} required onChange={descriptionChangeHandler} value={descriptionField}></textarea>
        </div>

        <div className="actions">
            <button>Add feature</button>
        </div>
    </form>
}

export default FeaturesForm;