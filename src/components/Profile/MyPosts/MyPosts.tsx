import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <div className={s.newPost}>
        <p className={s.newPostTitle}>My posts</p>
        <p className={s.newPostAdd}>Add new post:</p>
        <textarea
          placeholder="your news..."
          className={s.newPostField}
        ></textarea>
        <button className={s.newPostBtn}>Send</button>
      </div>
      <ul className={s.posts}>
        <Post message="Hi, how are you?" countLikes={20} countDislikes={19} />
        <Post
          message="I am fine, thank you."
          countLikes={15}
          countDislikes={14}
        />
        <Post
          message="It`s my first post."
          countLikes={30}
          countDislikes={29}
        />
      </ul>
    </div>
  )
}
