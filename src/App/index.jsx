import {Routes,Route} from 'react-router-dom'

import * as pages from "../utils/pages"
import { paths } from '../utils/paths'



const App = () => {
  return (
   <Routes>
    <Route path={paths.home} element={<pages.Home/>}/>
    <Route path={paths.login} element={<pages.Login/>}/>
    <Route path={paths.registration} element={<pages.Register/>}/>
    <Route path={paths.blogDetail('id')} element={<pages.BlogDetail/>}/>
    {/* <Route path={paths.blogDetail} element={<pages.BlogDetail/>}/> */}

    {/* Authors  */}
    <Route path={paths.author} element={<pages.CreateBlog/>}/>

    {/* admin  */}

   </Routes>
  )
}

export default App
