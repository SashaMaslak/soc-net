import React from "react"
import s from "./Dialogs.module.css"

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <li className={s.item + " " + s.active}>Vasya</li>
        <li className={s.item}>Petya</li>
        <li className={s.item}>Kolya</li>
        <li className={s.item}>Nastya</li>
        <li className={s.item}>Vanya</li>
      </ul>
      <ul className={s.messages}>
        <li className={s.dialog}>Hi</li>
        <li className={s.dialog}>How is your life?</li>
        <li className={s.dialog}>Yo</li>
        <li className={s.dialog}>Cool</li>
        <li className={s.dialog}>Message</li>
      </ul>
    </div>
  )
}
