import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}> 06.05.2024 -  </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/" className={styles.btext}>
            <h1>Deserunt magna eu proident quis mollit nostrud culpa anim enim ad anim laborum nostrud ea.</h1></Link>
            <p className={styles.desc}>Aliquip fugiat Lorem ea occaecat et labore ea qui sint et nulla. Aliqua cupidatat sit id adipisicing. Proident esse deserunt eu excepteur tempor minim eu anim voluptate aliquip ullamco eu fugiat dolor. Enim adipisicing voluptate exercitation deserunt exercitation officia irure. Minim duis veniam cupidatat incididunt cupidatat. Irure adipisicing exercitation elit commodo sint amet aliqua aliqua ex id voluptate.</p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card