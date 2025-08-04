'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

const Navbar: FunctionComponent = (props: PropsWithChildren) => {
  const { children } = props

  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const mainY = document
        .getElementsByTagName('main')[0]
        .getBoundingClientRect().y

      if (mainY < -200) {
        if (!scrolled) {
          setScrolled(true)
        }
      } else if (scrolled) {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const showNavbackground = scrolled || pathname !== '/'

  return (
    <div className="drawer h-screen w-full">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col h-screen justify-between">
        <div
          className={`w-full navbar fixed text-neutral-content z-10 transition-all delay-150 ease-in-out duration-500 ${
            showNavbackground ? 'bg-neutral' : ''
          }`}
        >
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div
              className={`transition-opacity delay-150 ease-in-out duration-500 ${
                showNavbackground ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Link href="/" passHref>
                <span className="inline-block cursor-pointer">
                  <Image
                    src="/logo.png"
                    width={135}
                    height={35}
                    alt="CodeRain"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex-none hidden lg:block pr-10">
            <ul className="menu menu-horizontal">
              <li>
                <Link className="link link-hover" href="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="link link-hover" href="/#portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="link link-hover" href="/#contact">
                  Kontakt
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li>
            <Link href="/#portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/#contact">Kontakt</Link>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
