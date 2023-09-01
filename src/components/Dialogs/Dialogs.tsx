import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem"
import { Message } from "./Message/Message"
import { FormAddPost } from "../FormAddPost/FormAddPost"
import state from "../redux/state"

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  const { messages, friends } = state

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {friends.map(f => (
          <DialogItem key={f.id} name={f.name} id={f.id} />
        ))}
      </ul>
      <ul className={s.messages}>
        {messages.map(m => (
          <Message key={m.id} message={m.message} id={m.id} />
        ))}
      </ul>
      <div className={s.textarea}>
        <FormAddPost item="message" placeholder="your message..." />
      </div>
    </div>
  )
}
