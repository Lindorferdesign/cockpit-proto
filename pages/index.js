import Head from 'next/head'
import Notification from "../components/Notification"
import UserCard from "../components/UserCard"
import News from "../components/News"
import MeineWoche from "../components/MeineWoche"
import Image from "next/image"




export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex">
      <div className="menu w-64 h-full bg-white shadow-md">
           <div className="jku-logo h-16 w-full bg-black"></div>
           <div className="navigation">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
           </div>
      </div>

      <div className="content flex-1 overflow-x-scroll bg-jku-background">
        <div className="main-nav h-16 w-full  sticky top-0"></div>
        <div className="content-header p-4 h-64 w-full bg-jku-light-blue d-flex -mt-16">
          <div className="flex max-w-6xl m-auto h-full items-center">
            <img src="{require('../public/assets/images/Logo_Bildmarke.png')}"></img>
            <Image
              src="/images/Logo_Bildmarke.png"
              width="70"
              height="70"
            />
            <h2 className="text-5xl uppercase font-bold">Dein Studium auf <br></br>einem Blick.</h2>
          </div>
        </div>

        <div className="content grid grid-cols-3 gap-12 max-w-6xl m-auto p-4">
          <div className="main-content col-span-2 w-full h-auto">

            <div className="notififications my-6">
              <div className="header-text">
                <h2 className="text-2xl font-semibold">Ungelesene Nachrichten</h2>
                <div className="alle-anzeigen"></div>
              </div>
              <Notification></Notification>
              <Notification></Notification>
              <Notification></Notification>              
            </div>

            <div className="news-section my-12">
              <div className="section-heading flex justify-between mb-4">
                <h2 className="text-2xl font-semibold mb-2">Meine Woche</h2>
                <a href="#">alle anzeigen</a>
            </div>
            <MeineWoche></MeineWoche>
            </div>
            
            <div className="news-section my-12">
            <h2 className="text-2xl font-semibold">Ungelesene Nachrichten</h2>
            <News></News>
            <News></News>
            <News></News>

            </div>

          </div>

          <div className="side-content w-full grid-span-1 -mt-24">
            <UserCard></UserCard>
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
