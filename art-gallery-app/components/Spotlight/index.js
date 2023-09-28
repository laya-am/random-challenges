import React from 'react'
import Image from 'next/image'
export default function Spotlight({image, artist, title}) {
  return (
    <div>
        <Image src={image} alt={title} width={400} height={600}/>
        <h3>{artist}</h3>
    </div>
  )
}
