'use client'

import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import home from '@/public/images/home.jpg'
import loc1 from "@/public/images/loc-details-1.jpg"
import loc2 from "@/public/images/loc-details-2.jpg"
import profile1 from "@/public/images/profile-1.jpg"
import profile2 from "@/public/images/profile-2.jpg"
import create from "@/public/images/create-place.jpg"

import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'

export default function Zigzag() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="py-12 md:py-13 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-10 md:pb-13">
            <h1 className="h2 mb-4 text-gray-900">All this in one app</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={home} width={200} height={300} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More Adventure, Less Planning</div>
                  <h3 className="h3 mb-3 text-gray-900">Home Page</h3>
                  <p className="text-xl text-gray-800 mb-4"> When users open the app, they’ll see personalized place suggestions based on their current location. They can also explore new destinations by selecting a different town, city, or country. </p>
                  <ul className="text-lg text-gray-800 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Saves users time by providing location suggestions instantly, wherever they are.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>If the search bar is left blank, users will see the most popular places nearby.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can search for specific spots like 'attractions,' 'bars,' 'cinemas,' or search by location name.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              {isMobile ?
                <div className="flex-row md:w-full  md:grid md:grid-cols-2 md:gap-0 lg:col-span-6 mb-8 md:mb-0 md:mb-0 rtl"
                      data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto mb-8" src={loc2} width={200} height={300} alt="Features 02" />
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={loc1} width={200} height={300} alt="Features 02" />
                </div> :
                <div className="flex-row md:w-full  md:grid md:grid-cols-2 md:gap-0 lg:col-span-6 mb-8 md:mb-0 md:mb-0 rtl"
                      data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={loc2} width={200} height={300} alt="Features 02" />
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={loc1} width={200} height={300} alt="Features 02" />
                </div>
              }

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Place Details</div>
                  <h3 className="h3 mb-3 text-gray-900">Explore Reviews, Photos, and Essential Details</h3>
                  <p className="text-xl text-gray-800 mb-4">Place recommendations are sourced from both user-generated content and TomTom's Places API.</p>
                  <ul className="text-lg text-gray-800 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can upload photos, videos, and reviews, or simply view place details.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can share places both within the app and on other platforms.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can follow a place to receive updates and notifications about it.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={profile1} width={200} height={300} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Keep Track of Your Journey</div>
                  <h3 className="h3 mb-3 text-gray-900">Profile Page</h3>
                  <p className="text-xl text-gray-800 mb-4">Tag places you've visited to see them displayed on a clustered map.</p>
                  <ul className="text-lg text-gray-800 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Tap any cluster to view detailed information about the places within.</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can add, edit, or remove reviews as they wish.</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Users can only view another user's map if they have posted at least one review themselves.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4th Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                  <Image className="max-w-full mx-auto md:max-w-none h-auto" src={create} width={200} height={300} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Create Custom Place</div>
                  <h3 className="h3 mb-3 text-gray-900">Users can create custom places</h3>
                  <p className="text-xl text-gray-800 mb-4">Travelers will be able to inspite each other with travel ideas</p>
                  <ul className="text-lg text-gray-800 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Great way to promote small, unknown businesses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
