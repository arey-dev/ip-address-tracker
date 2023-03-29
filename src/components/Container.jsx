export function Container(props) {
  return (
    <div
      className={`w-108 mx-auto px-16 py-6 ${props.white ? "bg-white" : null}`}
    >
      {props.children}
    </div>
  );
}
