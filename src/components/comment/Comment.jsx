import React from 'react'
import styles from "./comment.module.css";
export const Comment = ({detail}) => {
    const {user} = detail;
    const userPics = ['https://static.vecteezy.com/system/resources/thumbnails/001/991/212/small_2x/avatar-profile-pink-neon-icon-brick-wall-background-colour-neon-icon-vector.jpg','https://static.vecteezy.com/system/resources/previews/005/266/979/original/avatar-profile-pink-neon-icon-brick-wall-background-colour-neon-icon-vector.jpg','https://static.vecteezy.com/system/resources/previews/003/174/434/original/planet-saturn-icon-elements-of-web-in-neon-style-icons-vector.jpg','https://cdn.shopify.com/s/files/1/0499/1211/9485/products/40_749d7e87-fef9-4ece-81a9-4e2337322135.jpg?v=1626117288']
    const randomPic = userPics[Math.floor(Math.random()*userPics.length)]
  return (
    <section  className={`${styles.containerComment} w-75`}>
        <div className={styles.userComment}><img className={styles.userPhoto} src={randomPic} alt="userphoto" />  <h6>{user.email}</h6> </div>
        <p className={styles.userCommentText}>{detail.comment}</p>
    </section>
  )
}