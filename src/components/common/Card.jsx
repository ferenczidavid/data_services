import clsx from 'clsx'

const Card = ({className, children, ...rest}) => {
  return (
    <div className={clsx("rounded-md h-[8rem] md:my-10 md:w-full border border-slate-400 text-center bg-zinc-200 px-8 py-1 hover:bg-zinc-100 shadow-2xl transition duration-300 cursor-default flex justify-center items-center", className)} {...rest}>
      {children}
    </div>
  )
}

export default Card