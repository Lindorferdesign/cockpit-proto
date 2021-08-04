import Head from 'next/head'
import Notification from "../components/Notification"
import UserCard from "../components/UserCard"
import News from "../components/News"
import MeineWoche from "../components/MeineWoche"
import Image from "next/image"
import LvaCard from "../components/LvaCard"

function lva() {
    return (
        <div className="font-body">
  
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
          <div className="main-nav h-16 w-full"></div>
          <div className="content-header p-4 h-40 w-full d-flex bg-white">
            <div className="flex max-w-6xl m-auto h-full items-center">
              <h2 className="ml-6 text-5xl uppercase font-bold">Meine Lehrveranstaltungen</h2>
            </div>
          </div>

          <div className="lva-grid grid grid-cols-3 mt-10 max-w-6xl m-auto gap-8">

            <LvaCard title="Umgang mit Heterogenität: Individualisierung, Diagn ..."></LvaCard>
            <LvaCard title="Umgang mit Heterogenität"></LvaCard>
            <LvaCard title="Linear Algebra 2"></LvaCard>
            <LvaCard title="Algebra 1"></LvaCard>
            <LvaCard title="Umgang mit Heterogenität: Individualisierung, Diagnose"></LvaCard>
            </div>
          </div>

      </div>
      </div>
    )
}

export default lva
