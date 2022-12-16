import React from 'react'
import "./MarketStyle.css";

const Market = () => {
  return (
    <div>
        <nav>Marketing Platform</nav>
        
        <div className='price'>
            <div className='PriceList'>
                <label for='p'>How many contacts do you have?</label>
                <select id='p'>
                    <option>500</option>
                    <option>1,500</option>
                    <option>2,500</option>
                    <option>5,000</option>
                    <option>5,000</option>
                    <option>10,000</option>
                    <option>15,000</option>
                    <option>20,000</option>
                    <option>25,000</option>
                    <option>30,000</option>
                    <option>40,000</option>
                    <option>50,000</option>
                    <option>75,000</option>
                    <option>100,000</option>
                </select>
            </div>

            <div className='cu'>
                <select>
                    <option>&#x20B9; INR</option>
                    <option>&#x00024; USD</option>
                </select>
            </div>
        
        </div>

        <div className='price_table'>
            <div>
                <p>Monthly Email Sends</p>
                <p>Users</p>
                <p>Customer Support</p>
                <p>Pre-built Email Templates</p>
                <p>300+ Integrations</p>
                <p>Basic Reporting & Analytics</p>
                <p>forms & landing page</p>
            </div>
            <div className='border_price'>            
                <div>
                    <></>
                </div>
                <div>
                    <></>
                </div>
                <div>
                    <></>
                </div>
                <div>
                    <></>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Market