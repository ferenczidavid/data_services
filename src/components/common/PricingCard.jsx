import clsx from 'clsx'

const PricingCard = ({className, children, ...rest}) => {
  return (
    <div className={(clsx("bg-zinc-300 mx-3 p-4 w-1/3"))}>
      {children}
    </div>
  )
}

export default PricingCard
