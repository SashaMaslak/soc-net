import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"

export const MyPosts = () => {
  const postsData = [
    { id: "1", message: "Hi, how are you?", countLikes: 20, countDislikes: 19 },
    {
      id: "2",
      message: "I am fine, thank you.",
      countLikes: 15,
      countDislikes: 14,
    },
    {
      id: "3",
      message: "It`s my first post.",
      countLikes: 30,
      countDislikes: 29,
    },
  ]

  const posts = postsData.map(i => (
    <Post
      message={i.message}
      countLikes={i.countLikes}
      countDislikes={i.countDislikes}
    />
  ))

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
      <ul className={s.posts}>{posts}</ul>
    </div>
  )
}
