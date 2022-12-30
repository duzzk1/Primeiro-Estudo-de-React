import "./MsgArea.css";

const MsgArea = (props) => {
  const placeholderModifier = `${props.placeholder}`;
  const typeModifier = `${props.type}`;

  const onDigitsChange = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="MsgArea">
      <label>{props.label}</label>
      <textarea
        value={props.valor}
        onChange={onDigitsChange}
        required={props.obrigatory}
        placeholder={placeholderModifier}
        type={typeModifier}
      />
    </div>
  );
};

export default MsgArea;
