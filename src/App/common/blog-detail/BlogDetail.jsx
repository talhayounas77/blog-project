import { useParams } from "react-router-dom"


const BlogDetail = () => {
    const {id}= useParams()
  return (
    <div>
      blog page-{id}
    </div>
  )
}

export default BlogDetail
