import React from 'react'
import Accordion from './accordion';

const FAQ = () => {
    return (
        <div className="container p-16 bg-gray-300">
            <div className="faqHeading font-semibold mb-8 flex justify-center text-4xl">
                FREQUENTLY ASKED QUESTIONS
            </div>
            <div className='ml-24 mr-24  justify-center'>
                <Accordion title='When will I get my car ?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis atque ducimus rerum adipis blanditiis, 
            eaque voluptas ab, quaerat debitis. Assumenda obcaecati ut error rem aliquid alias facere.' />
            </div>
            <div className='ml-24 mr-24 justify-center'>
                <Accordion title='When will I get my car ?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis atque ducimus rerum adipis blanditiis, 
            eaque voluptas ab, quaerat debitis. Assumenda obcaecati ut error rem aliquid alias facere.' />
            </div>
            <div className='ml-24 mr-24 justify-center'>
                <Accordion title='When will I get my car ?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis atque ducimus rerum adipis blanditiis, 
            eaque voluptas ab, quaerat debitis. Assumenda obcaecati ut error rem aliquid alias facere.' />
            </div>
            <div className='ml-24 mr-24 justify-center'>
                <Accordion title='When will I get my car ?' answer='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt facilis atque ducimus rerum adipis blanditiis, 
            eaque voluptas ab, quaerat debitis. Assumenda obcaecati ut error rem aliquid alias facere.' />
            </div>
        </div>
    )
}

export default FAQ;