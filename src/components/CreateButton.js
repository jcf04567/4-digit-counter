
const CreateButton = ({setNumberHandler, buttonActivity }) => {

  return(
    <button disabled={buttonActivity} onClick={setNumberHandler}>create!</button>
  );
};

export default CreateButton;
