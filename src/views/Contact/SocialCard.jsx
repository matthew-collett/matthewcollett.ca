import { useState } from 'react'
import { ExternalLink, Copy, Check } from 'lucide-react'

const SocialCard = ({ social }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = e => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(social.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <a href={social.link} target="_blank" rel="noopener noreferrer" className="w-full">
      <div className="flex flex-col rounded-md p-8 border border-slate-500 h-full w-full gap-12 justify-center hover:scale-[1.02] transition-ease group">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <social.icon size={32} color="var(--color-accent)" />
            <ExternalLink size={18} />
          </div>
          <p className="text-sm font-serif">{social.label}</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-slate-200 group-hover:text-accent transition-ease">
            {social.value}
          </p>
          {social.copyable && (
            <button
              onClick={handleCopy}
              className="transition-ease p-2 rounded-md hover:bg-slate-800"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} className="text-slate-400" />
              )}
            </button>
          )}
        </div>
      </div>
    </a>
  )
}

export default SocialCard
