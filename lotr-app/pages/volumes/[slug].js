// import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { volumes } from '@/lib/data'
import { useRouter } from 'next/router'

export default function Slug() {
    const router = useRouter();
    const {slug} = router.query;

    if(!slug) return;

    const currentVolume= volumes.find(volume => volume.slug === slug);
    const {title, description, cover, books} = currentVolume;
    
  return (
    <div>
        <h2>{title}</h2> 
        <p>{description}</p>
        <Image src={cover} alt={`${title} cover`} width="300" height="400" />
        <ul>
            <li>{books[0].ordinal}: {books[0].title}</li>
            <li>{books[1].ordinal}: {books[1].title}</li>
        </ul>
        <Link href="/volumes">Back to All Volumes</Link>
    </div>
  )
}
