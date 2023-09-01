import { createRef } from "react"
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post"
import { FormAddPost } from "../../FormAddPost/FormAddPost"
import state from "../../redux/state"

export const MyPosts = () => {
  const { posts } = state
  const postsRender = posts.map(i => (
    <Post
      key={i.id}
      message={i.post}
      countLikes={i.countLikes}
      countDislikes={i.countDislikes}
    />
  ))

  return (
    <div className={s.myPosts}>
      <div>
        <p className={s.newPostTitle}>My posts:</p>
        <FormAddPost item="post" placeholder="your news..." />
      </div>

      <ul className={s.posts}>{postsRender}</ul>
    </div>
  )
}
