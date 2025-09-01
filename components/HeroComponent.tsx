import Image from 'next/image'
import React from 'react'
interface HeroComponentProps {
  imageUrl: string;
}
const HeroComponent = ({ imageUrl }:HeroComponentProps) => {
  return (
    <section className='w-full flex justify-center py-16'>
      <Image src={imageUrl} width={1189} height={200} alt='hero banner' className='w-[1189px] h-auto object-cover bg-background'/>
    </section>
  )
}

export default HeroComponent
