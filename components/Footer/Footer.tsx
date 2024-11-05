import React from 'react'
import styles from '../Footer/Footer.module.css'

function Footer() {
  return (
    <div className={styles.containar}>

        <div className={styles.main}>

            <div className={styles.one}>
                <h1 className={styles.heading_one}>Want to work with me?</h1>
                <h2 className={styles.heading_two}>Always feel Free to Contact & Hire me</h2>
            </div>
            <div className={styles.two}>
                <button className={styles.btn} type="button">Hire me</button>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
