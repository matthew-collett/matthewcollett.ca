import MeWaving from '@assets/images/me-waving.webp'
import Heading from '@components/Heading'
import { motion } from 'framer-motion'
import meimages from './meimages.js'

const About = () => (
  <section id="about" className="w-full py-20 max-md:py-8 flex justify-center">
    <div className="flex flex-col section-res">
      <div className="flex justify-around max-lg:flex-col">
        <motion.div
          className="flex flex-col gap-2 w-1/2 py-6 max-lg:w-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Heading num={1} text={'about me'} />
          <h3 className="text-2xl max-md:text-xl font-bold">
            I&apos;m a software engineering student based in New Brunswick, Canada
          </h3>
          <div className="flex flex-col gap-2 ">
            <p>
              From learning to code in 2022 to switching from electrical to software engineering, my
              passion for software has only grown stronger.
            </p>
            <p>
              I&apos;m currently enjoying exploring the realms of cloud computing, systems design,
              and architecture.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me hanging out with friends and family or
              enjoying some hobbies like speed-cubing, gaming, playing guitar, or trying (and
              sometimes failing!) to perfect my golf swing.
            </p>
            <p>No matter what it is, I love to learn new things!</p>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center w-1/2 items-end max-lg:w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={MeWaving}
            alt="Me Waving"
            className="w-80 max-lg:w-64 max-lg:pt-12 drop-shadow-2xl hover:scale-105 hover:-rotate-3 transition-transform transition-ease"
            style={{
              filter: 'drop-shadow(0px 0px 20px rgba(255,255,255,0.1))',
            }}
          />
        </motion.div>
      </div>
      <div className="h-[1px] w-full bg-slate-500" />
      <div className="w-full pt-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 auto-rows-auto"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {meimages.map(image => (
            <div key={image.id} className="relative pb-[60%]">
              <img
                src={image.src}
                alt={image.alt}
                className="opacity-80 transition-ease absolute inset-0 w-full h-full object-cover rounded-md shadow-md"
                style={{
                  filter: 'drop-shadow(0px 0px 20px rgba(255,255,255,0.1))',
                  objectPosition: `50% ${image.vPosition}`,
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

export default About
