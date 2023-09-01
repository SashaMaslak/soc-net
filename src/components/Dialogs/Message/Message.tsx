import s from "./Message.module.css"

type MessagePropsType = {
  message: string
  id: string
}

export const Message = (props: MessagePropsType) => {
  return <li className={s.item}>{props.message}</li>
}
