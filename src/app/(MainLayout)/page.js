import Image from 'next/image'
import Banner from '../Components/HomeComponents/Banner'
import Nav from '../Components/HomeComponents/Nav'
import Tabs from '../Components/HomeComponents/Tabs'

export default function Home() {
  return (
   <main>
    <Nav/>
   <Banner/>
   <Tabs/>
   </main>
  )
}
