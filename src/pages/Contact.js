import React from 'react'
import Bredcrumb from '../components/layout/Bredcrumb'
import Button from '../components/layout/Button'
import Container from '../components/layout/Container'
import InputBox from '../components/layout/InputBox'

const Contact = () => {
  return (
    <Container>
        <Bredcrumb/>
        <div className='w-full md:w-2/4'>
            <h2 className='text-[39px] font-dm font-bold text-primary mb-[42px]'>Fill up a Form</h2>
            <InputBox as='input' placeholder='Your Name Hare ' title='Name'/>
            <InputBox as='input' placeholder='Your Email Hare ' title='Email'/>
            <InputBox as='textarea' placeholder='Your message here ' title='Message'/>
            <Button title='Post'/>
        </div>
    </Container>
  )
}

export default Contact