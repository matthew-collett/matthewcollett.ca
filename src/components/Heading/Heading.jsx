const Heading = ({ num, text, className = '' }) => (
  <h2 className={`font-serif text-5xl max-md:text-3xl font-bold text-slate-200 ${className}`}>
    <span className="text-accent">0{num}. </span>
    {text}
  </h2>
)

export default Heading
