import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const FeaturesForm = ({ updateFeatures }) => {

    const [isFormValid, setIsFormValid] = useState(true);

    const [nameField, setNameField] = useState('');
    const [actionField, setActionField] = useState('');
    const [stateField, setStateField] = useState('');
    const [descriptionField, setDescriptionField] = useState('');

    const [nameFieldError, setNameFieldError] = useState(false);

    const navigate = useNavigate();

    const checkValid = () => {
        return (
            nameField !== '' &&
            actionField !== '' &&
            stateField !== '' &&
            descriptionField !== ''
        );
    }

    const resetField = () => {
        setNameField('');
        setActionField('');
        setStateField('');
        setDescriptionField('');
    }

    const nameChangeHandler = (e) => {

        setNameField(e.target.value);
    }
    const actionChangeHandler = (e) => {

        setActionField(e.target.value);
    }
    const stateChangeHandler = (e) => {

        setStateField(e.target.value);
    }
    const descriptionChangeHandler = (e) => {

        setDescriptionField(e.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const isValid = checkValid();
        setIsFormValid(isValid);

        if (isValid) {

            const newFeature = {
                name: nameField,
                action: actionField,
                state: stateField,
                id: Math.random() * 100
            }

            updateFeatures(newFeature);
            resetField();
            navigate('/smart-home')
        }

    }




    return <form className={`form ${isFormValid ? 'valid' : 'invalid'}`} onSubmit={submitHandler} noValidate>
        <div className="control">
            <TextField
                error={nameFieldError}
                id="nameField"
                label="Feature title"
                value={nameField}
                required
                defaultValue="Hello World"
                helperText={nameFieldError && 'Incorrect entry'}
                onChange={nameChangeHandler}
            />
        </div>

        <div className="control">
            <TextField
                error={actionField}
                id="outlined-error-helper-text"
                label="Feature title"
                value={actionField}
                required
                defaultValue="Hello World"
                helperText={nameFieldError && 'Incorrect entry'}
                onChange={actionChangeHandler}
            />
        </div>

        <div className="control">
            <TextField
                error={actionField}
                id="stateField"
                label="Feature title"
                value={stateField}
                required
                defaultValue="Hello World"
                helperText={nameFieldError && 'Incorrect entry'}
                onChange={stateChangeHandler}
            />
        </div>

        <div className="control">
            <TextField
                error={actionField}
                id="descriptionField"
                label="Feature title"
                value={descriptionField}
                required
                defaultValue="Hello World"
                helperText={nameFieldError && 'Incorrect entry'}
                onChange={descriptionChangeHandler}
            />
        </div>

        <div className="actions">
            <Button variant="contained">Add Feature</Button>
        </div>


    </form>
}

export default FeaturesForm;