import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'
import Bottombar from '@/components/shared/Bottombar'
const RootLayout = () => {
  return (
    <div className='w-full h-screen md:flex '>
      <Topbar/>
      <LeftSidebar/>
      <section className='flex flex-1 h-full '>
        <Outlet/>
      </section>

      <Bottombar/>
    </div>
  )
}

export default RootLayout