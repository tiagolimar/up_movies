export const InputForm = (props) => {
  const id = props.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const width = props.width ? props.width : 4

  return (
    <div className={`col-md-${width}`}>
      <label htmlFor={id} className="form-label">
        {props.title}
      </label>
      <input type="text" id={id} className="form-control" onChange={props.onChange} />
    </div>
  );
};
