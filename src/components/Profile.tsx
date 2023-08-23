import React from "react"
import s from "./Profile.module.css"

export const Profile = () => {
  return (
    <div className={s.content} style={{ backgroundColor: "Khaki" }}>
      <div>
        <img
          src="https://img3.akspic.ru/attachments/crops/2/7/4/8/98472/98472-palmovye_ostrova-karibskij_bassejn-plyazh-palma-poberezhe-1920x1080.jpg"
          alt="wallpaper"
          className={s.img}
        />
      </div>
      <div>ava + descr</div>
      <div>
        my-posts
        <div>new post</div>
        <div className={s.posts}>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
          <div className={s.item}>post3</div>
        </div>
      </div>
      Main content
    </div>
  )
}
