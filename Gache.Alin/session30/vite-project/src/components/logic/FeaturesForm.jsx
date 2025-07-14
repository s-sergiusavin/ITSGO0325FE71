import { useState } from "react";

import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const FeaturesForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  // const titleInputRef = useRef();
  // const actionInputRef = useRef();
  // const stateInputRef = useRef();
  // const descriptionInputRef = useRef();

  const [nameFieldError, setNameFieldError] = useState(false);
  const navigate = useNavigate;

  const checkValid = () => {
    // titleInputRef.current.value === "" ||
    // actionInputRef.current.value === "" ||
    // stateInputRef.current.value === "" ||
    // descriptionInputRef.current.value === ""

    return (
      nameField !== "" &&
      actionField !== "" &&
      stateField !== "" &&
      descriptionField !== ""
    );
  };

  const resetFields = () => {
    // actionInputRef.current.value = "";
    // stateInputRef.current.value = "";
    // titleInputRef.current.value = "";
    // descriptionInputRef.current.value = "";
    setNameField("");
    setActionField("");
    setStateField("");
    setDescriptionField("");
  };

  const nameChangeHandler = (e) => {
    // console.log(e)
    setNameField(e.target.value);
  };

  const actionChangeHandler = (e) => {
    // console.log(e)
    setActionField(e.target.value);
  };

  const stateChangeHandler = (e) => {
    // console.log(e)
    setStateField(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    // console.log(e)
    setDescriptionField(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();
    const isValid = checkValid();
    setIsFormValid(isValid);
    if (isValid) {
      const newFeature = {
        name: nameField,
        action: actionField,
        state: stateField,
        id: Math.random() * 100,
      };
      updateFeatures(newFeature);
      resetFields();
    }
    navigate("/smart-home");
    console.log(isFormValid);
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      onSubmit={submitHandler}
      noValidate
    >
      <div className="control">
        {/* <label htmlFor="title">Feature title</label>
        <input
          type="text"
          id="title"
          required
         
          value={nameField}
        /> */}

        <TextField
          error={nameFieldError}
          id="outlined-error-helper-text"
          label="Future title"
          value={nameField}
          required
          helperText={nameFieldError && "Incorrect entry."}
          onChange={nameChangeHandler}
        />
      </div>

      <div className="control">
        <TextField
          error={nameFieldError}
          id="actionField"
          label="Future action"
          value={actionField}
          required
          helperText={nameFieldError && "Incorrect entry."}
          onChange={actionChangeHandler}
        />
      </div>

      <div className="control">
        <TextField
          error={nameFieldError}
          id="stateField"
          label="Future state"
          value={stateField}
          required
          helperText={nameFieldError && "Incorrect entry."}
          onChange={stateChangeHandler}
        />
      </div>

      <div className="control">
        <TextField
          error={descriptionField}
          id="descriptionField"
          label="Future description field"
          value={descriptionField}
          required
          multiline
          minRows={4}
          helperText={nameFieldError && "Incorrect entry."}
          onChange={descriptionChangeHandler}
        />
      </div>

      <div className="actions">
        <Button variant="contained">Add feature</Button>
      </div>
    </form>
  );
};

export default FeaturesForm;
