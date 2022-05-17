import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Post from '../Pages/Post/Post'
import Comentario from '../Pages/Comentario/Comentario'
import Cadastro from '../Pages/Cadastro/Cadastro'
import Go from '../Components/Loading/Loading'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="post" element={<Post/>}/>
                <Route path="comentario" element={<Comentario/>}/>
                <Route path='go' element={<Go/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;