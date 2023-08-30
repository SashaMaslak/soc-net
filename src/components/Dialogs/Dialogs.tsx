import s from "./Dialogs.module.css"
import { DialogItem } from "./DialogItem/DialogItem"
import { Messages } from "./Messages/Messages"

type DialogsPropsType = {}

export function Dialogs(props: DialogsPropsType) {
  const dialogsData = [
    { id: "1", name: "Vasya" },
    { id: "2", name: "Petya" },
    { id: "3", name: "Kolya" },
    { id: "4", name: "Nastya" },
    { id: "5", name: "Vanya" },
  ]

  const messagesData = [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is your life?" },
    { id: "3", message: "It`s my first post" },
    { id: "4", message: "I feel good" },
    { id: "5", message: "My super Message" },
  ]

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        {dialogsData.map(i => (
          <DialogItem name={i.name} id={i.id} />
        ))}
      </ul>
      <ul className={s.messages}>
        {messagesData.map(i => (
          <Messages message={i.message} id={i.id} />
        ))}
      </ul>
    </div>
  )
}
