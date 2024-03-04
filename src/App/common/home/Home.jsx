import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="container text-danger">
      home page
      <button><Link to={"/create-blog"}>Createblog</Link></button>
    </div>
  )
}

export default Home
