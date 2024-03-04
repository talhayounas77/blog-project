import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/auth";
import { useEffect } from "react";

const AuthorLoyout = ({children}) => {

    const [auth] =useAuth();
    const router=useNavigate()
    
   useEffect(() => {
   if(!auth.token){
     router('/')
   }
   }, [auth.token ,router])
   

  return (
    <>
        <nav>Author's Dashboard Header</nav>
         {children}-
    </>
  )
}

export default AuthorLoyout
