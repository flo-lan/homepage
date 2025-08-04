import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const Footer = (): ReactElement => (
  <>
    <div className="flex-1" />
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <Image src="/logo.png" width={97} height={25} alt="CodeRain" />
        <p>
          <br />
          Modern Software Solutions
        </p>
      </div>
      <div>
        <span className="footer-title">Firma</span>
        <div className="link link-hover">
          <Link href="/#company">Über uns</Link>
        </div>
        <div className="link link-hover">
          <Link href="/#portfolio">Portfolio</Link>
        </div>
        <div className="link link-hover">
          <Link href="/#contact">Kontakt</Link>
        </div>
      </div>
      <div>
        <span className="footer-title">Rechtliches</span>
        <div className="link link-hover">
          <Link href="/imprint/">Impressum</Link>
        </div>
      </div>
      <div>
        <span className="footer-title">Socials</span>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/company/coderain-modern-software-solutions"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>

        <div className="relative " style={{ height: '33px', width: '164px' }}>
          <Image
            src="/mail.png"
            alt="mail"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </footer>
    <footer className="footer py-4 bg-neutral text-neutral-content">
      <div className="justify-self-center">
        <p>All rights reserved © 2022 Florian Langeder</p>
      </div>
    </footer>
  </>
)

export default Footer
