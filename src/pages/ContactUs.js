import emailjs from '@emailjs/browser'
import React from 'react'
import '../styles/Contact.css'
import { useState,useRef } from 'react'


function ContactUs() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState([])



  const Submit = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_ih91jno", "template_6tqa6gg",form.current,"SNouuMuVhCFpeDe2A")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

    const details = { name: name, email: email, message: message }
    setSubmit([...submit, details])
    setEmail('')
    setMessage('')
    setName('')
   

   
   
  
  }

  return (
    <>

    <form ref={form} onSubmit={Submit} >
    <h2 className='contact'>Contact Me</h2>
      <label>
      <p>Good name</p>
        <input
          type="text"
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
      <p>hmm Email?</p>
        <input
          type="email"
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
      <p>Wanna text Something..</p>
        <textarea
          name='message'
           
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button>Submit</button>
    </form>


    
{
  submit.map((elem) => {
    return (
      <>
          <h1>Thanks {elem.name} for contacting me  .i will reach you out Soon</h1>
    
          </>
    )
  })
}

    </>



  )


  
}





export default ContactUs
