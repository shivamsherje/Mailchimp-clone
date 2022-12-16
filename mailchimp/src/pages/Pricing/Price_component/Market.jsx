import { Button } from '@chakra-ui/react';
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


{/* Price table */}


    <div className='price_table'>
        <div className='lis'>

                <span className='first'>Monthly Email Sends</span>
                <span>Users</span>
                <span>Customer Support</span>
                <span>Pre-built Email Templates</span>
                <span>300+ Integrations</span>
                <span>Basic Reporting & Analytics</span>
                <span>forms & landing page</span>
                <span>Creative Assistant</span>
                <span>Role-based Access</span>
                <span>Remove Mailchimp Branding</span>
                <span>A/B Testing</span>
                <span>Email Scheduling</span>
                <span>Automated Customer Journeys</span>
                <span>Pre-built Journeys</span>
                <span>Custom-Coded Templates</span>
                <span>Predictive Segmentation</span>
                <span>Content Optimizer</span>
                <span>Send Time Optimization</span>
                <span>Dynamic Content</span>
                <span>Multivariate Testing</span>
                <span>Comparative Reporting</span>
                <span>Advanced Segmentation</span>
                <span>Assisted Onboarding</span>
            </div>




            <div className='border_price'>            



                {/* Premium  pacakage */}
                <div className='pirce_box'>
                    <p  className='recommend_hid'>Mailchimp Recommends</p> 
                    <div className='stan1'>
                        <h3>Premium</h3>
                        <p>Our most advanced tools, unlimited contacts, and priority support; built for teams.</p>
                        
                        <div>
                            <p>Starts at</p>
                            <div className='convert'>
                                &#x00024;<h2>23,000</h2>
                            </div>
                            <p>/month*</p>
                        </div>


                        <Button>Buy Now</Button>
                        
                        <div>
                            <p>*<u>Overages</u> apply if contact or email send limit is exceeded.</p>
                            <span>Learn more</span>
                        </div>

                        <p>150,000</p>
                        <p>Unlimited</p>
                        <p>Phone & Priority Support</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>5 Roles</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>Enhanced</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                    </div>  
                </div>



                {/* Standerd package */}
                <div className='standard_box'>
                    <p className='recommend'>Mailchimp Recommends</p> 
                    <div className='stan' >
                        <h3>Premium</h3>
                        <p>Our most advanced tools, unlimited contacts, and priority support; built for teams.</p>
                        
                        <div>
                            <p>Starts at</p>
                            <div className='convert'>
                                &#x00024;<h2>23,000</h2>
                            </div>
                            <p>/month*</p>
                        </div>


                        <Button>Buy Now</Button>

                        <div>
                            <p>*<u>Overages</u> apply if contact or email send limit is exceeded.</p>
                            <span>Learn more</span>
                        </div>

                        <p>150,000</p>
                        <p>Unlimited</p>
                        <p>Phone & Priority Support</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>5 Roles</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>Enhanced</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                    </div>
                </div>



                {/* Essentials package */}
                <div className='pirce_box'>
                    <p  className='recommend_hid'>Mailchimp Recommends</p>
                    <div className='stan1'>
                        <h3>Premium</h3>
                        <p>Our most advanced tools, unlimited contacts, and priority support; built for teams.</p>
                        
                        <div>
                            <p>Starts at</p>
                            <div className='convert'>
                                &#x00024;<h2>23,000</h2>
                            </div>
                            <p>/month*</p>
                        </div>

                        <Button>Buy Now</Button>

                        <div>
                            <p>*<u>Overages</u> apply if contact or email send limit is exceeded.</p>
                            <span>Learn more</span>
                        </div>


                        <p>150,000</p>
                        <p>Unlimited</p>
                        <p>Phone & Priority Support</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>5 Roles</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>Enhanced</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                    </div>
                </div>


                
                {/* Free Pacakge */}
                <div className='pirce_box2'>
                    <p  className='recommend_hid'>Mailchimp Recommends</p>
                    <div className='stan1'>
                        <h3>Premium</h3>
                        <p>Our most advanced tools, unlimited contacts, and priority support; built for teams.</p>

                        <div>
                            <p>Starts at</p>
                            <div className='convert'>
                                &#x00024;<h2>23,000</h2>
                            </div>
                            <p>/month*</p>
                        </div>

                        <Button>Buy Now</Button>

                        <div>
                            <p>*<u>Overages</u> apply if contact or email send limit is exceeded.</p>
                            <span>Learn more</span>
                        </div>


                        <p>150,000</p>
                        <p>Unlimited</p>
                        <p>Phone & Priority Support</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>5 Roles</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>Enhanced</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                        <p>&#x2713;</p>
                    </div>    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Market