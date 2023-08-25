import { useState } from "react"
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import s from "./Post.module.css"

type PostPropsType = {
  message: string
  countLikes: number
  countDislikes: number
}

export const Post = (props: PostPropsType) => {
  const [isAva] = useState(false)
  console.log(props)
  return (
    <li className={s.post}>
      <div className={s.postFiled}>
        {isAva ? (
          <img className={s.imgPost} src="" alt="" />
        ) : (
          <div className={s.imgPostNone}></div>
        )}
        <p className={s.textPost}>{props.message}</p>
      </div>
      <div className={s.postOptions}>
        <p className={s.likePost}>
          <BiLike className={s.likeIconPost} color="MediumSeaGreen" size="20" />
          <span className={s.countLikes}>{props.countLikes}</span>
        </p>
        <p className={s.likePost}>
          <BiDislike className={s.likeIconPost} color="red" size="20" />
          <span className={s.countLikes}>{props.countDislikes}</span>
        </p>
      </div>
    </li>
  )
}
