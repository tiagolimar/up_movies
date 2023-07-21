export const Button = (props) => {
  let width = props.width ? props.width : 5;
  let reset = props.reset ? "reset" : "submit";
  return (
    <button
      className={`btn btn-dark col-md-${width} ms-1`}
      type={reset}
    >
      {props.title}
    </button>
  );
};
