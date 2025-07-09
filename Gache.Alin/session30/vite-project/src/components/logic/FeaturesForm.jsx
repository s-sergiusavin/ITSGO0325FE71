import { useRef, useState } from "react";

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

  const checkValid = () => {
    if (
      // titleInputRef.current.value === "" ||
      // actionInputRef.current.value === "" ||
      // stateInputRef.current.value === "" ||
      // descriptionInputRef.current.value === ""
      nameField === "" ||
      actionField === "" ||
      stateField === "" ||
      descriptionField === ""
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const resetFields = () => {
    // titleInputRef.current.value = "";
    // actionInputRef.current.value = "";
    // stateInputRef.current.value = "";
    // descriptionInputRef.current.value = "";
    nameField = "";
    actionField = "";
    stateField = "";
    descriptionField = "";
  };

  const nameChangeHandler = (e) => {
    console.log(e);
    setNameField(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValid();

    // const descriptionValue = descriptionInputRef.current.value;

    const newFeature = {
      name: nameField,
      action: actionField,
      state: stateField,
      id: Math.random() * 100,
    };

    updateFeatures(newFeature);
    resetFields();
  };
  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      onSubmit={submitHandler}
      noValidate
    >
      <div className="control">
        <label htmlFor="title">Feature title</label>
        <input type="text" id="title" required onChange={nameChangeHandler} />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input type="text" id="action" required />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <input type="text" id="state" required />
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <textarea name="" id="description" rows={5} required></textarea>
      </div>

      <div className="actions">
        <button>Add feature</button>
      </div>
    </form>
  );
};

export default FeaturesForm;
