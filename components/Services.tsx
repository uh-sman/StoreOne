import { offeredServices } from '@/constants/utils'
import Image from 'next/image'
import React from 'react'

const OfferedServices = () => {
  return (
    <section className="w-full flex justify-items-start px-4 lg:justify-center py-16">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[32px] max-w-[1188px] w-full items-center">
        {offeredServices.map(({ imageUrl, title, description }, index) => (
          <article key={index} className="flex items-center gap-[16px]">
            <Image src={imageUrl} alt={title} width={30} height={31} />
            <div>
              <h3 className="text-lg text-wrap lg:text-nowrap font-bold pb-[12px]">
                {title}
              </h3>
              <p className="text-sm">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfferedServices;
