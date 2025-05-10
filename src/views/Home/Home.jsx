import { useState } from 'react'
import { Link } from 'react-scroll'
import MeCoding from '@assets/images/me-coding.webp'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import Typewriter from 'typewriter-effect'

const Home = () => {
  const [typewriterComplete, setTypewriterComplete] = useState(false)

  return (
    <section
      id="home"
      className="h-[calc(100vh-var(--nav-height))] relative flex items-center justify-center section"
    >
      <div className="relative z-10 flex flex-col gap-4 section-container">
        <div className="font-serif text-accent font-medium h-6">
          <Typewriter
            onInit={typewriter => {
              typewriter
                .changeDelay(50)
                .typeString('Hello, my name is')
                .callFunction(() => setTypewriterComplete(true))
                .start()
            }}
            options={{
              delay: 50,
              cursor: '|',
              cursorClassName: 'text-accent animate-blink',
              autoStart: false,
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-7xl max-md:text-5xl font-bold text-slate-100">Matthew Collett.</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-7xl max-md:text-5xl font-bold">I like to code.</h2>
        </motion.div>

        <motion.p
          className="font-medium md:w-3/4"
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          A software engineer with a strong passion for problem solving, software, and its latest
          advancements.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={typewriterComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="p-3 rounded-full hover:bg-slate-700 transition-ease hover:cursor-pointer">
            <a
              href="https://linkedin.com/in/matthew-collett"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} color="var(--color-accent)" strokeWidth={1.5} />
            </a>
          </div>
          <div className="p-3 rounded-full hover:bg-slate-700 transition-ease hover:cursor-pointer">
            <a href="https://github.com/matthew-collett" target="_blank" rel="noopener noreferrer">
              <Github size={24} color="var(--color-accent)" strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-0 h-full w-2/3 z-0"
        initial={{ x: 50, opacity: 0 }}
        animate={typewriterComplete ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary z-10" />
        <img
          src={MeCoding}
          alt="Me Coding"
          loading="lazy"
          className="h-full w-full object-cover opacity-30"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 30%, black 70%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 30%, black 70%, transparent 100%)',
          }}
        />
      </motion.div>
      <motion.div
        className="absolute flex justify-center bottom-10 items-center w-full z-20"
        initial={{ y: 50, opacity: 0 }}
        animate={typewriterComplete ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <Link to="about" spy smooth duration={700} offset={-40}>
          <DotLottieReact
            src="https://lottie.host/d0f0410b-9766-40de-b9e4-fa797749f534/UFBGoV1ZK4.json"
            loop
            autoplay
            className="w-24 hover:cursor-pointer hover:scale-110 transition-ease"
          />
        </Link>
      </motion.div>
    </section>
  )
}

export default Home
