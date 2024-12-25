import clsx from 'clsx'

const Logo = ({ className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 16"
    className={clsx('font-serif text-accent', className)}
    {...props}
  >
    <text x="0" y="12" fill="currentColor" fontSize="12">
      &lt;MC/&gt;
    </text>
  </svg>
)

export default Logo
