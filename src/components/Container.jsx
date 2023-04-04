export function Container(props) {
  return (
    <div className="max-w-5xl w-full mx-auto px-6 py-8 max-h-[17.5rem]">
      {props.children}
    </div>
  );
}
