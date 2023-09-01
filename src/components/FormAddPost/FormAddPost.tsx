import React, { createRef } from "react"
import s from "./FormAddPost.module.css"
import { addPost } from "../redux/state"

type FormAddPostPropsType = {
  item: string
  placeholder: string
}

export const FormAddPost = (props: FormAddPostPropsType) => {
  const newPostElement = createRef<HTMLTextAreaElement>()

  const onAddPost = () => {
    if (newPostElement.current?.value) {
      addPost(newPostElement.current?.value)
    }
  }

  return (
    <div className={s.newPost}>
      <p className={s.newPostAdd}>Add new {props.item}:</p>
      <textarea
        ref={newPostElement}
        placeholder={props.placeholder}
        className={s.newPostField}
      />
      <button onClick={onAddPost} className={s.newPostBtn}>
        Add {props.item}
      </button>
    </div>
  )
}
