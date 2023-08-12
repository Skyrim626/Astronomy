import "../css/button.css";

function CustomButton(props) {
  // Default Value for the Button
  const defaultButtontext = "Hello World";

  return (
    <>
      <button className="button">{props.text || defaultButtontext}</button>
    </>
  );
}

export default CustomButton;
