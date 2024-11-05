import React from 'react'
import styles from '../Work/Work.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Work() {
  return (
    <div className={styles.containar}>

                <div className={styles.tital_div}>
                  <h1 className={styles.tital}>Work</h1>
                </div>

        <div className={styles.main}>

            <div className={styles.grid_containar}>

                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-1.jpg'} alt='one' height={500} width={500}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-2.jpg'} alt='two' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-3.jpg'} alt='three' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-4.jpg'} alt='four' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-5.jpg'} alt='five' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-6.jpg'} alt='six' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-7.jpg'} alt='seven' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>
                <div className={styles.card}><Image className={styles.images} src={'/images/portfolio-8.jpg'} alt='eight' height={300} width={300}/> <h1 className={styles.image_bg}><Link className={styles.last_li} href={'#'}> Live Demo </Link></h1></div>

            </div>

        </div>
      
    </div>
  )
}

export default Work
