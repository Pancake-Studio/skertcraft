'use client'

import { useEffect, useState } from 'react'
import { Particles } from 'react-tsparticles'
import { Engine, ISourceOptions } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function SnowParticles() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    setInit(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine)
  }

  const options: ISourceOptions = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        straight: false
      },
      opacity: {
        value: 0.7,
        random: false
      }
    },
    retina_detect: true,
    background: {
      color: "transparent"
    }
  }

  if (!init) return null

  return (
    <Particles
      id="snow-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 pointer-events-none hidden dark:block"
    />
  )
} 