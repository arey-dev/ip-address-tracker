type ContainerProps = {
  children: React.ReactNode;
};

export function Container(props: ContainerProps) {
  return (
    <div className="max-w-6xl w-full mx-auto px-6 py-8 max-h-[18.75rem] sm:max-h-[17.5rem]">
      {props.children}
    </div>
  );
}
