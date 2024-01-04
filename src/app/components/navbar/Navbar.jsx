import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
        <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
        <Image src="/twitter.png" alt="twitter" width={24} height={24}/>
        <Image src="/linkedin.png" alt="linkedin" width={24} height={24}/>
      </div>
      <div className={styles.logo}>Blog App</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href='/'>Homepage</Link>
        <Link href='/'>Contact</Link>
        <Link href='/'>About</Link>
        <AuthLinks/>
      </div>
        
    </div>
  )
}

export default Navbar
