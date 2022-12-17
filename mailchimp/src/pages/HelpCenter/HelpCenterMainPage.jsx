import React from 'react'
import Banner from './Banner'
import ContactSupport from './ContactSupport'
import Guides from './Guides'
import Search from './Search'
import "./Content.css"
import Help from './Help'
import BottomSection from './BottomSection'

function HelpCenterMainPage() {
    return (
        <main>
            <Banner />
            <Search />
            <Guides />
            <ContactSupport />
            <Help />
            <BottomSection />
        </main>
    )
}

export default HelpCenterMainPage