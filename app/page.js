import Image from 'next/image'
import React from 'react'
import { Poppins } from 'next/font/google'

import img from '../public/hello.jpg'
import Card from '@/components/Card'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500','600','700']
})

export default function page() {
  return (
    <div>
      <h1 className={`text-blue-600 font-bold text-5xl ${poppins.className}`}>This is Home</h1>
      <Image src={img} width={500} height={400}/>
      <Card/>
    </div>
  )
}
