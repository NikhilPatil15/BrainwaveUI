import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10'>
        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col '>
            <p className='caption text-n-4 lg:block'>
                {new Date().getFullYear()}
                &nbsp;
                All rights reserved
            </p>
            <div className='flex gap-5 flex-wrap'>
                {socials.map((icon)=>(
                  
                        <a href={icon.url} target="_blank" className='flex items-center justify-center rounded-full transition-colors w-10 h-10 bg-n-7 hover:bg-n-6' key={icon.id}>
                            <img src={icon.iconUrl} width={16} height={16} alt={icon.title} />
                        </a>
                    
                ))}
            </div>
        </div>
    </Section>
  )
}

export default Footer