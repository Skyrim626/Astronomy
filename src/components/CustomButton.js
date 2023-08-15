import "../css/button.css";

function CustomButton(props) {
  // Default Value for the Button
  const defaultButtontext = "Hello World";

  return (
    <>
      <button
        className="button"
        onMouseEnter={(e) => {
          e.target.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#000";
        }}
      >
        {/* <span></span> */}
        {props.text || defaultButtontext}
      </button>
    </>
  );
}

export default CustomButton;
