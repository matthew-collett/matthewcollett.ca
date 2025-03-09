const EmploymentStatus = ({ employed }) => (
  <div className="flex items-center gap-2 text-slate-400">
    <div
      className={`w-2 h-2 rounded-full ${employed ? 'bg-red-400' : 'bg-green-400'} animate-pulse`}
    />
    {employed ? 'Not currently seeking new opportunities' : 'Available for new opportunities'}
  </div>
)

export default EmploymentStatus
