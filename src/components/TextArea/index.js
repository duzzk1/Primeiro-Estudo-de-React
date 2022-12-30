import "./TextArea.css";

const TextArea = (props) => {
  const placeholderModifier = `${props.placeholder}`;
  const typeModifier = `${props.type}`;

  const onDigitsChange = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="TextArea">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onDigitsChange}
        required={props.obrigatory}
        placeholder={placeholderModifier}
        type={typeModifier}
      />
    </div>
  );
};

export default TextArea;
