import React from 'react'
import Market from './Price_component/Market';
import Transactional from './Price_component/Transactional';
import Website from './Price_component/Website';

const Pricing = () => {
  return (
    <div>
        <Market/>
        <Website/>
        <Transactional/>
    </div>
  )
}

export default Pricing;