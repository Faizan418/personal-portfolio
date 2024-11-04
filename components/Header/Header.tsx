import React from 'react'
import styles from '../Header/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
  return (
    <div className={styles.containar}>

        <div className={styles.main}>


            <div className={styles.display}>

                 <div className={styles.profile_div}>
                    <Image className={styles.profile} src={'/images/done.png'} alt='profile-picture' width={100} height={100}/>
                 </div>
                 <div className={styles.tital_div}>
                    <span className={styles.tital}>- Muhammad Faizan -</span>
                 </div>
                 <div className={styles.subject_div}>
                    <h3><span className={styles.subject}>Front-end Web Devloper UI-UX</span></h3>
                 </div>
                 <div className={styles.icons_div}>

                    <Link href={'#'}><div className={styles.icon}><Image src={'/images/twitter-x.svg'} alt='twitter' width={20} height={20}/></div></Link>
                    <Link href={'#'}><div className={styles.icon}><Image src={'/images/linkedin.svg'} alt='linkedin' width={20} height={20}/></div></Link>
                    <Link href={'#'}><div className={styles.icon}><Image src={'/images/whatsapp.svg'} alt='whatsapp' width={20} height={20}/></div></Link>
                    <Link href={'#'}><div className={styles.icon}><Image src={'/images/instagram.svg'} alt='instagram' width={20} height={20}/></div></Link>

                 </div>

            </div>


        </div>

    </div>
  )
}

export default Header
