import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tabs, { TabPane } from 'rc-tabs';
import Dashboard from '../components/dashboard/dashboard';

const tab_icon1 = 
        <div className='flex items-center px-6'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff">
            <path d="M15 9a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5a1 1 0 011-1h5zm-9 3a1 1 0 011 1v2a1 1 0 01-1 1H1a1 1 0 01-1-1v-2a1 1 0 011-1h5zM6 0a1 1 0 011 1v8a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h5zm9 0a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V1a1 1 0 011-1h5z" fillRule="evenodd"></path>
          </svg>
          <p className='pl-2 text-base'>Dashboard</p>
        </div>
const tab_icon2 = 
        <div className='flex items-center px-6'>
          <svg width="16" height="16" viewBox="0 0 16 16" fill= "#ffffff">
            <path d="M15.637 3.011L13.95.381A.836.836 0 0013.247 0H2.752a.836.836 0 00-.704.38L.362 3.012C-.508 4.37.264 6.26 1.89 6.475c.117.015.236.022.356.022.768 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84.467.51 1.15.84 1.917.84.769 0 1.45-.33 1.917-.84a2.6 2.6 0 002.273.818c1.631-.214 2.406-2.103 1.533-3.464zm-1.884 4.301c-.26 0-.517-.038-.766-.096V9.75H3.012V7.216c-.25.056-.507.096-.766.096-.156 0-.315-.01-.468-.03a3.332 3.332 0 01-.426-.091v4.997c0 .449.371.812.831.812h11.638c.46 0 .831-.363.831-.813V7.191c-.14.04-.28.073-.426.091-.158.02-.314.03-.473.03z"></path>
          </svg>
          <p className='pl-2 text-base'>MarketPlace</p>
        </div>


const Home: NextPage = () => {
  var callback = function(key:any) {};
  return (
    <div className='main-container min-h-screen'>
      <Head>
        <title>Market Place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tab-logo.png" />
      </Head>
      <div className='text-white flex items-center justify-between h-[52px] bg-black'>
        <div className='w-[90px] h-[52px] flex justify-center items-center hover:cursor-pointer'>
          <Image src="/assets/img/logo.png" width={66} height={36} alt='logo'/>
        </div>

        <button className='w-[100px] h-[52px] flex justify-center items-center bg-blue-600'>
          <svg width="16" height="16" viewBox="0 -1 16 16" fill='#ffffff'>
            <path d="M13 12h-2.625a.376.376 0 01-.375-.375v-1.25c0-.206.169-.375.375-.375H13c.553 0 1-.447 1-1V3c0-.553-.447-1-1-1h-2.625A.376.376 0 0110 1.625V.375c0-.206.169-.375.375-.375H13a3 3 0 013 3v6a3 3 0 01-3 3zm-1.469-6.281L6.281.469C5.813 0 5 .329 5 1v3H.75a.748.748 0 00-.75.75v3c0 .416.334.75.75.75H5v3c0 .672.813 1 1.281.531l5.25-5.25a.756.756 0 000-1.062z"></path>
          </svg>
          <p className='ml-1 mb-1 text-base'>Login</p>
        </button>
      </div>
      <div className='menu-tabs absolute top-0 left-0 text-white'>
        <Tabs defaultActiveKey="2" onChange={callback}>
          <TabPane tab= {tab_icon1} key="1">
            <Dashboard/>
          </TabPane>
          <TabPane tab= {tab_icon2} key="2">
            2222222222222222222
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default Home
