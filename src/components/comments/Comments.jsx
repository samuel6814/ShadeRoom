import Link from "next/link"
import styles from "./comments.module.css"
import Image from "next/image"

const Comments = () => {

    const status = "authenticated"         
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>

            {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="write your commet..." className={styles.input}/>
                <button className={styles.button}>Send</button>
                 </div>)
             : (<Link href="/login">Login to Write Comment</Link>)}
             <div className={styles.comments}>
                <div className={styles.comment}>

                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50}
                         height={50}
                          className={styles.image} />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Samuel Quaigraine</span>
                            <span className={styles.date}>07.05.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Consectetur ex ex enim veniam eu. Cupidatat minim do sunt consectetur culpa do sunt dolor voluptate occaecat enim aute proident. Veniam ea dolore id excepteur nulla quis exercitation ut dolore dolore est elit. Aliqua aliquip non sit dolore do sint voluptate nisi ea qui nulla aute amet velit. Laboris occaecat dolor duis dolor eu laborum culpa Lorem.</p>
                </div>

                <div className={styles.comment}>

                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50}
                         height={50}
                          className={styles.image} />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Fafali Dorkuni</span>
                            <span className={styles.date}>07.05.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Sint fugiat ut eu commodo exercitation laborum sunt excepteur cillum. Aliqua exercitation excepteur nisi consectetur aliqua elit eiusmod irure adipisicing magna labore cillum sint. Consequat pariatur non consequat veniam consectetur. Culpa ipsum consequat voluptate eiusmod aute laborum nostrud esse aute. Ad sit sint labore nulla Lorem nisi. Irure officia ullamco cillum est velit do nulla officia irure esse Lorem irure ad proident.</p>
                </div>

                <div className={styles.comment}>

                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50}
                         height={50}
                          className={styles.image} />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Josephine DJ</span>
                            <span className={styles.date}>07.05.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Reprehenderit Lorem aliquip ex aute aliqua nisi qui ex. Qui in pariatur consequat ad enim dolore ullamco do proident mollit proident esse voluptate. Eiusmod ea reprehenderit ullamco sit ad. Et minim ex sunt aute et quis nisi tempor incididunt ipsum reprehenderit. Excepteur velit magna aliqua ea excepteur irure elit. Fugiat fugiat duis amet aute. Eu ullamco veniam voluptate labore in id sit dolore magna voluptate.</p>
                </div>

                <div className={styles.comment}>

                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50}
                         height={50}
                          className={styles.image} />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Peter Amoah</span>
                            <span className={styles.date}>07.05.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Mollit pariatur excepteur incididunt id non mollit laboris proident amet minim aliquip cillum ullamco. Proident consectetur aliquip tempor velit deserunt est ipsum dolor incididunt proident. Ipsum ea labore ullamco cupidatat sit velit nulla esse velit sit voluptate consectetur elit. Occaecat officia commodo consectetur fugiat quis enim anim nulla nostrud tempor dolor nulla do. Qui veniam dolore ea sunt ex do cupidatat pariatur. Velit tempor tempor incididunt ipsum aute.</p>
                </div>

                <div className={styles.comment}>

                    <div className={styles.user}>
                        <Image src="/p1.jpeg" alt="" width={50}
                         height={50}
                          className={styles.image} />

                        <div className={styles.userInfo}>
                            <span className={styles.username}>Samuel Quaigraine</span>
                            <span className={styles.date}>07.05.2024</span>
                        </div>
                    </div>
                    <p className={styles.desc}>Non deserunt aliquip aliquip culpa occaecat sunt laboris aute eu nostrud ad eu. Ullamco cupidatat laborum et elit eu cupidatat est cupidatat nisi nulla aliqua. In qui culpa pariatur dolore irure incididunt occaecat deserunt. Mollit nisi duis nostrud Lorem quis incididunt occaecat sunt est laborum tempor ea occaecat. Enim ut cillum dolore mollit occaecat duis adipisicing culpa ea id qui aute aliquip. Sunt Lorem laborum aute labore amet anim duis Lorem. Do ipsum veniam tempor anim eiusmod ipsum exercitation velit ut elit voluptate labore velit.</p>
                </div>

             </div>
        </div>
    )
}

export default Comments