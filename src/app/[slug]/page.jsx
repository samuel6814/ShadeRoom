import Menu from "../../components/Menu/Menu"
import styles from "./singlePage.module.css"
import Image from "next/image"
import Comments from "../../components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Eu esse enim commodo sint commodo dolor nulla labore eiusmod veniam ad veniam qui sunt.</h1>
                <div className={styles.user}>
                <div className={styles.userImageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.avatar}/>
                </div>
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>Samuel Quaigraine</span>
                    <span className={styles.date}>07.05.2024</span>
                </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
        </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                    <p>Aliqua voluptate ad velit consectetur non exercitation sunt culpa anim exercitation reprehenderit. Fugiat sint tempor id commodo est incididunt pariatur eiusmod nostrud occaecat ullamco et deserunt amet. Minim magna sit aliquip minim velit.</p>
                    <h2>Irure aliqua aliqua nisi ut et consectetur culpa commodo eiusmod aliqua sint.</h2>
                    <p>Esse amet irure dolore qui. Id ad proident non proident amet enim. Consectetur do velit Lorem laborum ut sit laborum laboris tempor voluptate mollit excepteur. Laboris tempor tempor anim do amet enim fugiat sint nisi deserunt exercitation amet. Exercitation irure minim aute ad aute eu exercitation ut duis.</p>
                    <p>Sint et commodo adipisicing duis qui Lorem cillum enim proident do. Et occaecat minim occaecat proident excepteur sint eiusmod pariatur sint Lorem proident et aliqua. Dolore aliqua do ex laborum tempor tempor reprehenderit esse culpa id sit qui ut. Dolor ad officia proident cillum aute nisi voluptate.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
                </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SinglePage
