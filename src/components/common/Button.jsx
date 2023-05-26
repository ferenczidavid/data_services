import clsx from "clsx"

const Button = ({className, type = "primary", children, ...rest}) => {
  return (
    <button className={clsx("rounded px-3 py-1 hover:scale-110 transition duration-300 active:scale-90", {
      "bg-[#5D3FD3] text-white": type === "primary",
      "text-[#5D3FD3] border border-[#5D3FD3]": type === "secondary",
    }, className)} {...rest}>{children}</button>
  )
}

export default Button