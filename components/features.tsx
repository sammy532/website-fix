import Image from "next/image";

import "../global.css";


import SUGG from "../public/icons/place-suggestions.svg";
import CRT from "../public/icons/create.svg";
import SOC from "../public/icons/social.svg";
import MAP from "../public/icons/map.svg";
import FEED from "../public/icons/feed.svg";
import DETAILS from "../public/icons/details.svg";


import localFont from 'next/font/local'

// const dyuthi = localFont({
//   src: [
//     {
//       path: '../public/fonts/Dyuthi-Regular.ttf',
//     }
//   ],
//   variable: '--font-dyuthi'
// })


export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-2 md:py-2">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-blue-200 dyuthi"
                data-aos="fade-up"
                data-aos-delay={600}
                >
                Your Personalized Travel Guide, Anywhere in the World
            </h2>
            <p className="text-xl text-gray-800"
                data-aos="fade-up"
                data-aos-delay={600}
            >
                With limited time to plan ahead, travelers may miss out on amazing experiences.</p>
            <p className="text-xl text-gray-800"
                data-aos="fade-up"
                data-aos-delay={600}
            >
                Our app provides on-the-go recommendations for places and events to explore.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 items-center" >
                 <div className="bg-purple-600 rounded-full items-center p-2" >
                    <Image src={SUGG} alt={""} width="60"/>
                 </div>
              </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi text-center">Personalized Place Recommendations</h4>
              <p className="text-lg text-gray-800 text-center">The app provides tailored suggestions for places to visit, matched to each user’s unique preferences.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 mb-4 items-center" >
                <div className="bg-purple-600 rounded-full items-center p-2" >
                 <Image src={CRT} alt={""} width="60"/>
               </div>
             </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi">Add Your Favorite Spots</h4>
              <p className="text-lg text-gray-800 text-center">Discovered a hidden gem, like a cozy coffee shop worth sharing? Add new places to help other travelers find unique spots too.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 mb-4 items-center" >
                <div className="bg-purple-600 rounded-full items-center p-4" >
                 <Image src={SOC} alt={""} width="50"/>
               </div>
             </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi">Connect with Travelers</h4>
              <p className="text-lg text-gray-800 text-center">Users can link up with fellow travelers, sharing messages, photos, videos, and favorite locations.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 mb-4 items-center" >
                <div className="bg-purple-600 rounded-full items-center p-2" >
                 <Image src={MAP} alt={""} width="60"/>
               </div>
             </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi">Personal Travel Map</h4>
              <p className="text-lg text-gray-800 text-center">Users can build a customized map of their travels.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 items-center" >
                <div className="bg-purple-600 rounded-full items-center p-2" >
                  <Image src={FEED} alt={""} width="60"/>
                </div>
              </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi">Travel Feed</h4>
              <p className="text-lg text-gray-800 text-center">The user’s feed showcases places visited and shared by other travelers.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
            <div className="w-16 h-16 mb-4 items-center" >
              <div className="bg-purple-600 rounded-full items-center p-2" >
                <Image src={DETAILS} alt={""} width="60"/>
              </div>
            </div>
              <h4 className="h4 mb-2 text-blue-200 font-dyuthi">Place Details</h4>
              <p className="text-lg text-gray-800 text-center">Users can share ratings, reviews, photos, and videos for each location.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
