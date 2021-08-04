import Head from 'next/head'
import Notification from "../components/Notification"
import UserCard from "../components/UserCard"
import News from "../components/News"
import MeineWoche from "../components/MeineWoche"
import Image from "next/image"



export default function Home() {
  return (
    <div className="font-body">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex">
      <div className="menu w-64 h-full bg-white shadow-md">
           <div className="jku-logo h-16 w-full bg-black"></div>
           <div className="navigation">
            <ul>
              <li className="p-4 bg-gray-40 font-medium">
                <div className="">Link 1</div>
              </li>
              <li>Link 2</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
           </div>
      </div>

      <div className="content flex-1 overflow-x-scroll bg-jku-background">
        <div className="main-nav h-16 w-full sticky top-0 z-1 "></div>
        <div className="content-header p-4 h-72 w-full d-flex -mt-16 bg-jku-light-blue">
          <div className="flex max-w-6xl m-auto h-full items-center">
            <Image
              src="/Logo_Bildmarke.png"
              width="140"
              height="140"
              className=""
            />
            <h2 className="ml-6 text-5xl uppercase font-bold">Dein Studium auf <br></br>einem Blick.</h2>
          </div>
        </div>

        <div className="content grid grid-cols-3 gap-12 max-w-6xl m-auto p-4">
          <div className="main-content col-span-2 w-full h-auto">

            <div className="notififications my-6">
              <div className="header-text flex justify-between">
                <h2 className="text-2xl font-bold">Ungelesene Nachrichten</h2>
                <div className="alle-anzeigen underline font-bold cursor-pointer">Alle anzeigen</div>
              </div>
              <Notification></Notification>
              <Notification></Notification>
            </div>

            <div className="news-section my-20">
              <div className="section-heading flex justify-between mb-4">
                <h2 className="text-2xl font-bold">Meine Woche</h2>
                <div className="alle-anzeigen underline font-bold cursor-pointer">HEUTE</div>
            </div>
            <MeineWoche></MeineWoche>
            </div>
            
            <div className="news-section my-20">
            <div className="header-text flex justify-between">
            <h2 className="text-2xl font-bold">KUSSS News</h2>
            <div className="alle-anzeigen underline font-bold cursor-pointer">Alle anzeigen</div>
            </div>
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
