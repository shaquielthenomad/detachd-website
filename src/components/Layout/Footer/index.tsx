import React, { FC } from 'react'
import Link from 'next/link'
import { headerData } from '../Header/Navigation/menuData'
import { footerlabels, contactInfo } from '@/app/api/data'
import { Icon } from '@iconify/react'

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pt-16 bg-darkmode' id='contact'>
      <div className='container px-4'>
        {/* Contact Information Banner */}
        <div className='bg-detachd-slate-800/50 backdrop-blur-sm border border-detachd-slate-700 rounded-2xl p-8 mb-16'>
          <h3 className='text-2xl font-bold text-white text-center mb-8'>Contact Information</h3>
          <div className='grid md:grid-cols-3 gap-8 text-center'>
            <div>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-detachd-primary/20 rounded-lg mb-4'>
                <Icon icon="ph:phone-duotone" className='text-detachd-primary text-2xl' />
              </div>
              <p className='text-white font-medium'>{contactInfo.phone}</p>
            </div>
            <div>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-detachd-primary/20 rounded-lg mb-4'>
                <Icon icon="ph:envelope-duotone" className='text-detachd-primary text-2xl' />
              </div>
              <p className='text-white font-medium'>{contactInfo.email}</p>
            </div>
            <div>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-detachd-primary/20 rounded-lg mb-4'>
                <Icon icon="ph:map-pin-duotone" className='text-detachd-primary text-2xl' />
              </div>
              <p className='text-white font-medium'>{contactInfo.address}</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-6'>
            {/* Detachd Brand without Logo */}
            <div className='mb-6'>
              <h2 className='text-3xl font-bold text-white mb-3'>detachd</h2>
              <p className='text-detachd-primary font-medium text-lg'>Revolutionizing Insurance with AI</p>
              <p className='text-detachd-text-secondary mt-2'>
                Streamline claims processing, reduce fraud, and enhance customer experience with cutting-edge insurtech solutions.
              </p>
            </div>
            
            <div className='flex gap-6 items-center mt-8 relative z-1'>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:linkedin'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-detachd-primary'
                />
              </Link>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-detachd-primary'
                />
              </Link>
              <Link href='#' className='group'>
                <Icon
                  icon='fa6-brands:github'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-detachd-primary'
                />
              </Link>
            </div>
          </div>
          
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Quick Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.href}
                    className='text-white hover:text-detachd-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Legal</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    href={item.href}
                    className='text-white hover:text-detachd-primary text-17'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='lg:col-span-4 md:col-span-4 col-span-6'>
            <h3 className='text-white text-24 font-medium'>Stay Updated</h3>
            <p className='text-detachd-text-secondary text-18 mt-5'>
              Subscribe to get the latest insights on insurance technology and AI innovations.
            </p>
            <div className='relative lg:w-80%'>
              <input
                type='email'
                name='mail'
                id='mail'
                placeholder='Enter Email'
                className='bg-transparent border border-detachd-slate-700 py-4 text-white rounded-lg w-full mt-6 px-6 focus:border-detachd-primary focus:outline-none'
              />
              <Icon
                icon='tabler:send'
                width='24'
                height='24'
                className='text-detachd-primary absolute right-7 bottom-4 cursor-pointer hover:text-detachd-secondary'
              />
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='border-t border-detachd-slate-700 pt-8 pb-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-detachd-text-secondary text-center md:text-left'>
              © {currentYear} Detachd. All rights reserved.
            </p>
            <p className='text-detachd-text-secondary text-center md:text-right mt-4 md:mt-0'>
              Built with ❤️ for the insurance industry
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
