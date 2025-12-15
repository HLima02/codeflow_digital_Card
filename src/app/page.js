import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";

import Btn from './components/Btn';

export default function Home() {
  return (
    <main className='main_bg'>
      <section className='main_section'>
        <div className='box_element'></div>
        <div className='box_content'>
          <div className='box_logo_section'>
            <div className='box_logo_fundo'>
              <img src='/logo.png' />
            </div>
          </div>

          <div className='main_infos'>
            <h1 className='title'>CodeFlow Studio</h1>
            <p className='subtitle'>Websites | UX/UI Deseigner</p>
          </div>

          <div className='btn_section'>
            <Btn 
            label="Nosso site" 
            link="https://codeflowstudio.vercel.app/" 
            icon={<CiGlobe size={30} />} />

            <Btn 
            label="Instagram" 
            link="https://codeflowstudio.vercel.app/" 
            icon={<FaInstagram size={30} />} />

            <Btn 
            label="Whatsapp" 
            link="https://wa.me/13997716553?text=Ol%C3%A1%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" 
            icon={<FaWhatsapp size={30} />} />
          </div>
        </div>
      </section>
    </main>
  )
}
