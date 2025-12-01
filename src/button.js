export function Button({ children, asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 transition text-sm"
      {...props}
    >
      {children}
    </Comp>
  );
}
