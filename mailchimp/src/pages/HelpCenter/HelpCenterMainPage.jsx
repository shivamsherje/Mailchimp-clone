import React from 'react'
import Banner from './Banner'
import ContactSupport from './ContactSupport'
import Guides from './Guides'
import Search from './Search'
import "./Content.css"
import Help from './Help'
import BottomSection from './BottomSection'
import { Box } from '@chakra-ui/react'

function HelpCenterMainPage() {
    return (
        <Box>
            <Banner />
            <Search />
            <Guides />
            <ContactSupport />
            <Help />
            <BottomSection />
        </Box>
    )
}

export default HelpCenterMainPage