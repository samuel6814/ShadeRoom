import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
            <h3 className={styles.postTitle}>Officia nisi aute voluptate irure excepteur minim et dolor sunt..</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Samuel Quaigraine</span>
              <span className={styles.date}> - 06.05.2024</span>
            </div>
            
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>Culture</span>
            <h3 className={styles.postTitle}>Sit cillum proident ex amet excepteur cillum tempor aute cillum in Lorem..</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Fafali Dukorni</span>
              <span className={styles.date}> - 06.05.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>food</span>
            <h3 className={styles.postTitle}>Culpa quis voluptate et consequat exercitation aliqua sint enim eu ea ut..</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Peter A Mensah</span>
              <span className={styles.date}> - 06.05.2024</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          {withImage && (
             <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>)}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
            <h3 className={styles.postTitle}>Et sunt sunt incididunt ea..</h3>
            <div className={styles.detail}>
              <span className={styles.username}>Emmanuella Amanourkor</span>
              <span className={styles.date}> - 06.05.2024</span>
            </div>
          </div>
        </Link>
    </div>

    
  )
}

export default MenuPosts