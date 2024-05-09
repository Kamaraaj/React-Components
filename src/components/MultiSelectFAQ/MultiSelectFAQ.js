import React, { useState } from 'react'
const data = [
    {
      id: 1,
      title: 'What is an FAQ page?',
      answer: 'An FAQ (Frequently Asked Questions) page is a key part of a knowledge base because it addresses the most common questions customers have and is useful to customers at all stages of the customer journey. FAQs start with a question and then answer it concisely. '
    },
    {
      id: 2,
      title: 'How to create an FAQ page?',
      answer: 'If you want to make an FAQ section that resonates with your customers, don’t just slap some ordinary questions and answers on a site page. Carefully think about what questions to include, consider who will answer (and how), and offer next-step solutions for when FAQs aren’t enough.'
    },
    {
      id: 3,
      title: 'FAQ page purpose?',
      answer: 'The purpose of an FAQ page is to provide quick answers to common questions that your business can anticipate. An FAQ page empowers customers to self-serve, enabling them to find solutions quickly on their own. FAQ pages are not meant to solve every issue, which is why it is important to include an option for customers to contact a live agent.'
    },
    {
      id: 4,
      title: 'Optimize your FAQ page for SEO?',
      answer: 'FAQ pages and help centers, in general, are great for SEO. Customers have adopted a “Google it” mantra when it comes to customer service. They check a company’s online resources first when they run into trouble and prefer self-service because it’s quick and convenient.'
    },
    {
      id: 5,
      title: 'FAQ page examples?',
      answer: 'Before you start building an FAQ page, you should know what features to include. We have rounded up a selection of FAQ pages with unique characteristics—such as customer personalization and expanded self-service offerings—that make them especially robust and informative.'
    },
  ]
const MultiSelectFAQ = () => {
    const [singleFAQ, setSingleFAQ] = useState(null);
    const [isMultiSelect, setMultiSelect] = useState(false);
    const [multiFAQ, setMultiFAQ] = useState([]);
  
    const getSingleFAQ = (id) => {
      setSingleFAQ((id === singleFAQ) ? null : id);
    }
    const getMultiFAQ = (id) => {
      const tempArr = [...multiFAQ]
      if (tempArr.includes(id)) {
        const index = tempArr.indexOf(id);
        tempArr.splice(index, 1)
  
      }
      else {
        tempArr.push(id);
      }
      setMultiFAQ(tempArr)
    }
  return (
<div className="flex flex-col justify-center items-center p-10 ">
      <div className='flex justify-end '>
        <button className='block w-[120px] h-[32px] bg-blue-400 text-[#FFF] mb-5' type='button' onClick={() => setMultiSelect((prev) => !prev)}> {isMultiSelect ? 'Multiple ' : 'Single '}Select</button>
      </div>
      <ul className='mx-auto min-w-[600px] max-w-[600px] flex flex-col space-y-8 '>
        {
          (data && data.length > 0) ? (data.map((faq) => (
            <li role='button' key={faq.id} className='bg-blue-400 p-2 rounded-[8px] text-[#FFF] p-8' onClick={isMultiSelect ? () => getMultiFAQ(faq.id) : () => getSingleFAQ(faq.id)}>
              <div className='flex flex-row justify-between '>
                <p>{faq.title}</p>
                <p>+</p>
              </div>
              {(isMultiSelect && multiFAQ.includes(faq.id)) ? <div>{faq.answer}</div> :
                (singleFAQ === faq.id) ? <div>{faq.answer}</div> : ''
              }

            </li>
          ))) : (<li>No data Found</li>)
        }
      </ul>

    </div>
  )
}

export default MultiSelectFAQ
