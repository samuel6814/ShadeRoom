import React from "react"
import styles from "./menu.module.css"
import MenuPosts from "../menuPosts/MenuPosts"
import MenuCategories from "../menuCategories/MenuCategories"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false}/>
      
<br></br>

{/* eerrrm, this is kinda like a new tab or something, i dont known how to put it, don't worry */}

      <h2 className={styles.subtitle}>Discover by Topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
<br></br>
{/*another tab or somethung comes in between the two tabs*/}
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editor's Pick</h1>
      <MenuPosts withImage={true}/>


    </div>
  )
}

export default Menu
