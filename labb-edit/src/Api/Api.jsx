import axios from "axios";


export const useSignup = (username, email, password) =>{
    const body = {
        "username": username,
        "email": email,
        "password": password
    }
    axios.post("https://labeddit.herokuapp.com/users/signup", body)
    .then((res)=>{
        alert("cadastro realizado com sucesso")
        localStorage.setItem('token', res.data.token)
    }).catch((err)=>{
        alert('Erro ao cadastrar')
    })
}

export function useLogin(email, password){
    const  body = {
        "email": email,
        "password": password
    }
    axios.post("https://labeddit.herokuapp.com/users/login", body)
    .then((res)=>{
        localStorage.setItem('token', res.data.token)
        setTimeout(window.location.reload(), 5)
    }).catch((err)=>{
        alert("Erro ao fazer o login")
    })
}

export const useGetPosts = () =>{
    const token = localStorage.getItem('token')
    axios.get("https://labeddit.herokuapp.com/posts?page=1&size=20", {
        headers: {
            Authorization: token
        }
    }).then((res)=>{    
        localStorage.setItem('post', JSON.stringify(res.data))
    }).catch((err)=>{
        // console.log(err.response)
    })
}

export const usePostPost = (title, post) =>{
    const token = localStorage.getItem('token')
    const body = {
        "title": title,
        "body": post
    }
    axios.post("https://labeddit.herokuapp.com/posts", body,{
        headers: {
            Authorization: token
        }
    }).then((res)=>{    
        alert("Postado")
    }).catch((err)=>{
        alert("Erro ao postar")
    })
}

export const useCreateComment = (comentario, id) =>{
    const token = localStorage.getItem('token')
    const body = {
        "body": comentario
    }
    axios.post(`https://labeddit.herokuapp.com/posts/${id}/comments`, body,{
        headers: {
            Authorization: token
        }
    }).then((res)=>{    
        alert("Comentário inserido com sucesso")
    }).catch((err)=>{
        alert("Erro ao Criar o comentário")
    })
}

export const useGetComments = () =>{
    const token = localStorage.getItem('token')
    const id = localStorage.getItem("id")
    axios.get(`https://labeddit.herokuapp.com/posts/${id}/comments`, {
        headers: {
            Authorization: token
        }
    }).then((res)=>{    
        localStorage.setItem('comentarios', JSON.stringify(res.data))
    }).catch((err)=>{
        // console.log(err.response)
    })
}

export const useCreatePostVotes = () =>{
    const token = localStorage.getItem('token')
    const id = localStorage.getItem("id")
    const body = {
        "direction": 1
    }
    axios.post(`https://labeddit.herokuapp.com/posts/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    }).then((res)=>{    
        window.location.reload()
        setTimeout(window.location.reload(), 1000)
    }).catch((err)=>{
        // console.log(err.response)
    })
}

export const useCreateCommentVotes = () =>{
    const token = localStorage.getItem('token')
    const id = localStorage.getItem("id")
    const body = {
        "direction": 1
    }
    axios.get(`https://labeddit.herokuapp.com/comments/${id}/votes`, body, {
        headers: {
            Authorization: token
        }
    }).then((res)=>{ 
    }).catch((err)=>{
        // console.log(err.response)
    })
}