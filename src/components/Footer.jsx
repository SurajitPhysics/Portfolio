import React from 'react'
import FooterList from './FooterList'
import {Link } from 'react-router-dom';
import './Footer.css'
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <span className='blur'></span>
        <span className='blur'></span>
            <div className='footer-col1'>
              <Fade duration={1800} direction='up'>
                <h1 className='footer-col1-title'>Dr. Surajit Guin</h1>
                <p className='footer-col1-desc'>Dr. Surajit Guin, a physicist and educator passionate about theoretical physics, nanotechnology, and inspiring the next generation through teaching and research.</p>
              </Fade>
            </div>
            <Fade duration={1800} direction='up'>
            <div className='footer-col2'>
                <FooterList
                    heading="Important Links"
                    links={[
                      {
                        title: 'Home',
                        path: '/',
                        type: 'Link',
                      },
                      {
                        type: 'Link',
                        title: 'About',
                        path: '/about',
                      },
                      {
                        type: 'Link',
                        title: 'Project',
                        path: '/project',
                      },
                      {
                        type: 'Link',
                        title: 'Contact',
                        path: '/contact',
                      },
                    ]}
                />
            </div>
            </Fade>
            <div className='footer-col3'>
            <Fade duration={1800} direction='up'>
            <FooterList
            heading="Contact Info"
            links={[
              {
                title: '+91 9734707361',
                path: 'tel:+919734707361',
              },
              {
                title: 'Sourajit@gmail.com',
                path: 'mailto:surajitguin.physics@gmail.com',
              },
              {
                title: 'Arambagh, West Bengal, India',
                path: 'https://maps.app.goo.gl/3exKacyfRgioPM798',
              },
            ]}
          />
          </Fade>
          </div>
            <div className='footer-col4'>
            <Fade duration={1800} direction='up'>
            <FooterList
            heading="social Links"
            links={[
              {
                title: 'WhatsApp',
                path: "https://api.whatsapp.com/send?phone=+916291893304&text=I'd like to connect with you",
              },
              {
                title: 'Linkedin',
                path: 'https://in.linkedin.com/in/surajit-guin-174220238',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/surajit.guin.39/',
              },
              {
                title: 'Scholar',
                path: 'https://scholar.google.com/citations?user=2rsKIFwAAAAJ&hl=en',
              },
            ]}
          />
          </Fade>
          </div>
        </div>
        <div className="copyright">
        <div className="copyright-container">
        <Fade duration={2000}>
          <p>
            <Link rel="noreferrer" to='/privacy'>
            © 2023-Dr.Surajit Guin |{' '} All rights reserved
            </Link>{' '}
            <Link rel="noreferrer" to='/terms'>
            / Terms
            </Link>{' '}
          </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer