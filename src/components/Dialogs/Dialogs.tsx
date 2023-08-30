import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem"
import { Messages } from "./Messages/Messages"

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        <DialogItem name="Vasya" id="1" />
        <DialogItem name="Petya" id="2" />
        <DialogItem name="Kolya" id="3" />
        <DialogItem name="Nastya" id="4" />
        <DialogItem name="Vanya" id="5" />
      </ul>
      <ul className={s.messages}>
        <Messages message="Hi" />
        <Messages message="How is your life?" />
        <Messages message="Yo" />
        <Messages message="Cool" />
        <Messages message="My super Message" />
      </ul>
    </div>
  )
}
