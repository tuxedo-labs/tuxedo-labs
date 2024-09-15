import React from 'react'
import HeroSection from '../fragments/HeroSection'

export default function HeroLayout() {
  return (
    <HeroSection
      title='Tuxedo Labs'
      description='Saling berbagi, belajar, dan bangun koneksi yang berharga dengan sesama tech-enthusiast. Dapatkan wawasan terbaru tentang perkembangan teknologi dan temukan kesempatan kolaborasi yang tak ternilai harganya.'
      buttonLink='/about'
      image='https://r-code.vercel.app/profile.jpg'
    />
  )
}

