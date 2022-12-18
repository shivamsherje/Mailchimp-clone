import React from 'react'
import "./faqStyle.css";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from 'react';

const faq_data =[
    {
        Question:'What Paymetn methods do you offer?',
        ans :'We accept all major credit cards, PayPal, and (in select countries) direct debit. We also support transactions in a range of currencies.'
    },
    {
        Question:'How do I switch to a different plan?',
        ans :'You can switch to a new plan at any time by going to the Billing page in your account. Select the plan you’d like to switch to and immediately start using new features.'
    },
    {
        Question:'Can I buy credits instead?',
        ans:'Yes. If you send emails infrequently and prefer to pay as you go, you can buy email credits as an alternative to a monthly plan.'
    },
    {
        Question:'Do you have pricing for high-volume email senders?',
        ans:'We do indeed. If you have more than 200,000 contacts, we have a high-volume plan that can meet your needs.'
    },
    {
        Question:'What happens if I hit my contact or sending limit?',
        ans:'Mailchimp will automatically bill you for your overages. As long as you pay for your overages on time, we will not stop your campaigns or pause your account.'
    },

]


const Faq = () => {

    const [selected, setSelected] = useState(null);

    const toggle = (i) =>{
        if( selected === i){
            return setSelected(null)
        }
        setSelected(i);
    }


    return (
    
    <div className='faq'>
        <div className='f123'>
            <h1>FAQs</h1>
        </div>
        <br/>
        <div className='wrap'>
            <div className='acc'>
                {faq_data.map((item,i)=>(
                    <div className='block'>
                        <div className='question' onClick={()=> toggle(i)}>
                            <h2>{item.Question}</h2>
                            <p className='plus'>  
                            {selected === i ? <AiOutlineMinusCircle size={25}/> : <AiOutlinePlusCircle size={25}/> }
                            </p>
                        </div>
                        <div className={selected === i? 'show': 'ans'}>
                            <p>{item.ans}</p>
                        </div>
                    </div>    
                ))}
            <div className='hori'></div>
            </div>
        </div>
</div>
  )
}

export default Faq;