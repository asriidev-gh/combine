import Image from 'next/image'
import { Inter } from 'next/font/google'
import LandingPage from './containers/LandingPage'
import VideoContainer from './containers/VideoContainer'


export default function Home() {
  return (
    <main className='h-screen'>
      <VideoContainer path="universe.mp4" customStyle={"absolute inset-0 w-full h-screen object-cover bg-opacity-10"}/>
      <LandingPage />
    </main>
  )
}
