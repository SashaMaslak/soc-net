const state: stateType = {
  posts: [
    {
      id: "1",
      post: "Hi, how are you?",
      countLikes: 20,
      countDislikes: 19,
    },
    {
      id: "2",
      post: "I am fine, thank you.",
      countLikes: 15,
      countDislikes: 14,
    },
    {
      id: "3",
      post: "It`s my first post.",
      countLikes: 30,
      countDislikes: 29,
    },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is your life?" },
    { id: "3", message: "It`s my first post" },
    { id: "4", message: "I feel good" },
    { id: "5", message: "My super Message" },
  ],
  friends: [
    { id: "1", name: "Vasya", ava: "", age: 21, location: "Kyiv" },
    { id: "2", name: "Petya", ava: "", age: 20, location: "Dnipro" },
    { id: "3", name: "Kolya", ava: "", age: 19, location: "Lviv" },
    { id: "4", name: "Nastya", ava: "", age: 25, location: "Poltava" },
    { id: "5", name: "Vanya", ava: "", age: 38, location: "Lutsk" },
  ],
}

export const addPost = (postMessage: string) => {
  const newPost: postType = {
    id: "5",
    post: postMessage,
    countLikes: 0,
    countDislikes: 0,
  }
  state.posts.push(newPost)
}

export default state

type stateType = {
  posts: postType[]
  messages: messageType[]
  friends: friendType[]
}

type postType = {
  id: string
  post: string
  countLikes: number
  countDislikes: number
}

type messageType = {
  id: string
  message: string
}

type friendType = {
  id: string
  name: string
  ava?: string
  age?: number
  location?: string
}
