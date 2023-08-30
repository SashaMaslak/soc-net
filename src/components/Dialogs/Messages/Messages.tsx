import s from "./Messages.module.css"

type MessagesPropsType = {
  message: string
  id: string
}

export const Messages = (props: MessagesPropsType) => {
  return <li className={s.item + " " + s.active}>{props.message}</li>
}
