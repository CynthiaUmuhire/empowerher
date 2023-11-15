interface StoryDetail extends Story{
  comments?: CommentsData[]
  likes: number
  post_date: string
  short_tittle:string
}
interface Story{
  id:string
  content:string
  author: string
  image:string
  title: string
}
interface CommentsData{
  author:string
  content:string
  post_date:string
}

interface UserData{
  username: string
  password: string
  email: string
  userId: string | number
}

export type{
  StoryDetail,
  Story,
  CommentsData,
  UserData
}