import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

// component
import Nav from './Nav'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <>
    <header className="py-6 xl:py-10 text-white">
        <div className="container mx-auto flex justify-between items-center">

            {/* Logo */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">Chiranjeet<span className="text-accent">.</span></h1>
            </Link>

            {/* navbar */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
            <Button>Hire me</Button>
            </Link>
            </div>

            {/* mobile navbar */}
            <div className="xl:hidden">
              <MobileNav/>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header