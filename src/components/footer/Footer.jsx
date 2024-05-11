import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" width={50} height={50}/>
          <h1 className={styles.logoText}>ShadeRoom</h1>
        </div>
        <p className={styles.desc}>Tempor cillum deserunt dolore amet incididunt nisi. Esse magna incididunt aliqua ad. Laboris esse cupidatat ea cillum id minim id dolore adipisicing voluptate aliquip cupidatat. Voluptate pariatur aute non cupidatat officia proident incididunt proident veniam reprehenderit excepteur magna consectetur. Velit ad anim amet consequat cupidatat pariatur officia.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} />
          <Image src="/instagram.png" width={18} height={18} />
          <Image src="/tiktok.png" width={18} height={18} />
          <Image src="/youtube.png" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>
    </div>
  )
}

export default Footer