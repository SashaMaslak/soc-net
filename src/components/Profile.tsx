import { useState } from "react"
import s from "./Profile.module.css"
import ava from "../img/def_ava.jpg"

export const Profile = () => {
  const [isAva] = useState(false)
  return (
    <div className={s.content}>
      <div className={s.img}>
        <img
          src="https://img3.akspic.ru/attachments/crops/2/7/4/8/98472/98472-palmovye_ostrova-karibskij_bassejn-plyazh-palma-poberezhe-1920x1080.jpg"
          alt="wallpaper"
          className={s.img}
        />
      </div>
      <div className={s.userInfo}>
        <img src={ava} alt="" className={s.ava} />
        <div className={s.descr}>
          <p className={s.name}>Mark Zuckerberg</p>
          <ul className={s.userData}>
            <li className={s.userData__item}>
              <p className={s.userData__rowName}>Date of birthday:</p>{" "}
              <p className={s.userData__rowData}>14 May 1984</p>
            </li>
            <li className={s.userData__item}>
              <p className={s.userData__rowName}>City:</p>{" "}
              <p className={s.userData__rowData}>New York</p>
            </li>
            <li className={s.userData__item}>
              <p className={s.userData__rowName}>Education:</p>{" "}
              <p className={s.userData__rowData}>
                Harvard University (2002–2004)
              </p>
            </li>
            <li className={s.userData__item}>
              <p className={s.userData__rowName}>Web Site:</p>{" "}
              <p className={s.userData__rowData}>https://facebook.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.myPosts}>
        <div className={s.newPost}>
          <p className={s.newPostTitle}>My posts</p>
          <p className={s.newPostAdd}>Add new post:</p>
          <textarea
            placeholder="your news..."
            className={s.newPostField}
          ></textarea>
          <button className={s.newPostBtn}>Send</button>
        </div>
        <ul className={s.posts}>
          <li className={s.itemPosts}>
            {isAva ? (
              <img className={s.imgPosts} src="" alt="" />
            ) : (
              <div className={s.imgPostsNone}></div>
            )}
            <p className={s.post}>post1</p>
          </li>
          <li className={s.itemPosts}>
            {isAva ? (
              <img className={s.imgPosts} src="" alt="" />
            ) : (
              <div className={s.imgPostsNone}></div>
            )}
            <p className={s.post}>post2</p>
          </li>
          <li className={s.itemPosts}>
            {isAva ? (
              <img className={s.imgPosts} src="" alt="" />
            ) : (
              <div className={s.imgPostsNone}></div>
            )}
            <p className={s.post}>post3</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
