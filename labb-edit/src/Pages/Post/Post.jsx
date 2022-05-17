import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../Components/Header/Header";
import {MainContainer} from "./PostStyle"
import PostCards from "../../Components/Cards/Cards";
import {useGetPosts} from "../../Api/Api"

function Post(){
    useGetPosts();
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    };

    useEffect(()=>{
        let teste = localStorage.getItem('token')
        if(teste === null){
            navigate("/")
        }else{
            
        }
        localStorage.setItem('page', 'post')
        setTimeout(togglePopup, 5);
    },[])
    return(
        <MainContainer>
            <Header/>
            {isOpen && (
            <PostCards/>
            )}
        </MainContainer>
    )
}

export default Post;