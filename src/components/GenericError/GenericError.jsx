const GenericError = ({ error, resetErrorBoundary }) => (
  <div role="alert" className="flex h-svh w-full items-center justify-center text-slate-400 ">
    <div className="flex flex-col md:w-1/2 max-md:px-8 gap-4 items-center">
      <h1 className="text-accent font-serif text-lg text-center">Something went wrong.</h1>
      <p className="text-center">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="font-serif text-lg text-slate-400 hover:text-accent transition-ease"
      >
        <span className="text-accent">&#123; </span>Try Again
        <span className="text-accent"> &#125; </span>
      </button>
    </div>
  </div>
)

export default GenericError
