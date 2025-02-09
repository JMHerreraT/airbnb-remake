import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its an awesome clone</p>
            <p>Referrals accepted</p>
            <p>JHerrera</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>JHerrera</p>
            <p>Presents</p>
            <p>Airbnb Remake</p>
            <p>Next+Tailwind</p>
            <p>Join us</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help center</p>
            <p>Trust & S`afety</p>
            <p>Say Hi everyone</p>
            <p>Remakes</p>
            <p>For the win</p>
        </div>
    </div>
  )
}

export default Footer