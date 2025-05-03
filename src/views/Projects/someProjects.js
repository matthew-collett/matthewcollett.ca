import ctag from '@assets/icons/ctag.svg'
import intellicure from '@assets/icons/intellicure.svg'
import playloudr from '@assets/icons/playloudr.svg'
import cedargroves from '@assets/images/cedargroves.webp'
import gridstream from '@assets/images/gridstream.webp'
import rovertech from '@assets/images/rovertech.webp'

export default [
  {
    title: 'Cedar Groves Golf Website',
    description:
      'Designed and developed the website for Cedar Groves Golf Course, bringing their brand to life online.',
    techs: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Express.js',
      'EJS',
      'AWS',
      'Docker',
      'CircleCI',
    ],
    github: 'https://github.com/cedargrovesgolf/cedar-groves-site',
    extra: {
      title: 'Check it out',
      link: 'https://cedargrovesgolf.ca',
    },
    image: cedargroves,
    imageType: 'image',
  },
  {
    title: 'Go CTag',
    description:
      'A Go library providing utilities for extracting and processing custom struct tags.',
    techs: ['Go', 'GitHub Actions'],
    github: 'https://github.com/matthew-collett/go-ctag',
    extra: {
      title: 'Documentation',
      link: 'https://pkg.go.dev/github.com/matthew-collett/go-ctag/ctag',
    },
    image: ctag,
    imageType: 'logo',
  },
  {
    title: 'Gridstream',
    description:
      'A team-based senior design project creating a real-time verification system for demand response programs.',
    techs: [
      'Go',
      'Python',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'MQTT',
      'Microservices',
      'ETL Pipelines',
      'Kubernetes',
      'GCP',
    ],
    extra: {
      title: 'Demo',
      link: 'https://youtu.be/3iU_WECfWZA',
    },
    github: 'https://github.com/grid-stream-org',
    image: gridstream,
    imageType: 'logo',
  },
  {
    title: 'RoverTech',
    description:
      'A team project developed for the ECE3232 Harvest Challenge, focusing on building a rover capable of performing specific tasks.',
    techs: ['C', 'Embedded Systems', 'PIC Microcontrollers', 'MPLAB X IDE'],
    github: 'https://github.com/matthew-collett/RoverTech',
    extra: {
      title: 'Demo',
      link: 'https://www.youtube.com/shorts/3O7Qbo-jFUY',
    },
    image: rovertech,
    imageType: 'image',
  },
  {
    title: 'PlayLoudr',
    description:
      'An Android application for music enthusiasts to share their favorite tracks and discover new music.',
    techs: [
      'Kotlin',
      'Jetpack Compose',
      'Android Studio',
      'AWS',
      'Spotify Web API',
      'MVVM Architecture',
    ],
    github: 'https://github.com/matthew-collett/playloudr',
    image: playloudr,
    imageType: 'logo',
  },
  {
    title: 'IntelliCure',
    description:
      'Team-based solution at CEC 2025 using a CNN model to detect brain tumors in MRIs with an interactive interface for analysis and visualization.',
    techs: ['TypeScript', 'shadcn/ui', 'Python', 'Flask', 'TensorFlow', 'Firebase'],
    github: 'https://github.com/matthew-collett/cec2025',
    image: intellicure,
    imageType: 'logo',
  },
]
