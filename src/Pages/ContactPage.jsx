import React, { useContext, useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa6';
import { ThemeContext } from '../Context/Project_Context';

const ContactPage = () => {
  const { dark } = useContext(ThemeContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  const isFormComplete = () => {
    return firstName && email && message;
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (isFormComplete()) {
      alert('Message Submitted Successfully');
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompanyName('');
      setMessage('');
      e.target.submit();
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <>
      <div id ='contact' className={`w-full ${dark ? 'bg-zinc-400/40 text-zinc-900/90' : 'bg-[#f2ff412e] text-[#5031FF]'}`}>
        <div className="flex flex-wrap px-[3vw] py-[10vw] justify-between gap-10">
          <div className="flex flex-col text-[44px] leading-tight">
            <h1>Questions?</h1>
            <h2>Reach out.</h2>
          </div>
          <div className="flex flex-wrap font-font2">
            <form onSubmit={submitMessage} action="https://api.web3forms.com/submit" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <input type="hidden" name="access_key" value="27b3ab42-d879-4e58-af67-ccaa8662d933" />
              <input type="hidden" name="redirect" value="http://localhost:5173" target="_blank"/>
              <div className="flex flex-col w-[45vh] md:w-[17vh] lg:w-[50vh]">
                <label htmlFor="firstname" className="text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center">
                  First Name <FaStarOfLife className="text-red-700 text-[7px]" />
                </label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="firstname"
                  name="first_name"
                  type="text"
                  placeholder="Type"
                  className={`px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 ${dark ? 'border-zinc-950' : 'border-[#CB0000]'} border-dashed`}
                  required/>
              </div>
              <div className="flex flex-col w-[45vh] md:w-[17vh] lg:w-[50vh]">
                <label htmlFor="lastname" className="text-lg md:text-xl">Last Name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  name="last_name"
                  type="text"
                  placeholder="Type"
                  className={`px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 ${dark ? 'border-zinc-950' : 'border-[#CB0000]'} border-dashed`}/>
              </div>
              <div className="flex flex-col w-[45vh] md:w-[17vh] lg:w-[50vh]">
                <label htmlFor="email" className="text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center">
                  Email <FaStarOfLife className="text-red-700 text-[7px]" />
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Type"
                  className={`px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 ${dark ? 'border-zinc-950' : 'border-[#CB0000]'} border-dashed`}
                  required/>
              </div>
              <div className="flex flex-col w-[45vh] md:w-[17vh] lg:w-[50vh]">
                <label htmlFor="companyname" className="text-lg md:text-xl">Company Name</label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  id="companyname"
                  name="company_name"
                  type="text"
                  placeholder="Type"
                  className={`px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 ${dark ? 'border-zinc-950' : 'border-[#CB0000]'} border-dashed`}/>
              </div>
              <div className="flex flex-col w-[45vh] md:w-[17vh] lg:w-[50vh]">
                <label htmlFor="message" className="text-lg md:text-xl flex flex-row flex-nowrap gap-1 items-center">
                  Message <FaStarOfLife className="text-red-700 text-[7px]" />
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Type / NA"
                  className={`px-2 py-3 font-semibold text-base sm:text-lg lg:text-xl bg-transparent outline-none border-b-2 ${dark ? 'border-zinc-950' : 'border-[#CB0000]'} border-dashed resize-none overflow-hidden`}
                  required
                  rows="2"/>
              </div>
              <div className="flex flex-col justify-end w-[20vh]">
                <button
                  type="submit"
                  className={`px-4 py-2 font-semibold rounded-3xl ${isFormComplete() ? `${dark ? 'bg-zinc-950 text-zinc-50' : 'bg-[#ff0000] text-[#2600ff]'} cursor-pointer` : `${dark ? 'bg-zinc-950/70 text-zinc-50/80' : 'bg-[#cb000078] text-[#2600ffb0]'} cursor-not-allowed`}`}>
                  Submit
                </button>
              </div>
            </form>
            <div className="font-sans w-full py-[7vh] text-lg font-semibold leading-normal">
              <h1>Reach out directly at</h1>
              <h1 className={`underline underline-offset-8 ${dark ? 'text-zinc-950' : 'text-[#CB0000]'} cursor-pointer`}> <a href="mailto: dpy9572@gmail.com">dpy9572@gmail.com</a> </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
