import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: black;
font-family: 'IBM Plex Sans', sans-serif;
`
// height: 926px;
// width: 428px;
// left: -406px;
// top: -464px;
// border-radius: 0px;

export const SubContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 100%;
width: 40%;
min-height: 100%;
height: 100vh;
justify-self: center;
background-color: #fff;
@media screen and (max-width: 900px){
    min-height: 896px;
    height: 100vh; 
    }
@media screen and (max-width: 800px){
min-height: 800px;
height: 100vh; 
}
@media screen and (max-width: 700px){
min-height: 700px;
height: 100vh; 
}
@media screen and (max-width: 600px){
min-height: 600px;
height: 100vh; 
}
img{
    height: 40%;
}

hr{
    width: 87%;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: 0;
}
.p1{
    font-weight: 700;
    font-size: 240%;
    color: #373737;
}
.button1{
    width: 100%;
    height: 25%;
    min-height: 42px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: 0;
    color: #fff;
    font-family: 'Noto Sans';
    font-weight: 700;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: 900px){
        height: 35%;
        font-size: 1.5vw;
        :hover{
            opacity: 0.8;
        }
    }
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 87%;
    height: 25%;
    p{
        margin: 0;
    }
    @media screen and (min-width: 900px){
        justify-content: center;
    }
}
.mid{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4%;
    width: 100%;
    height: 25%;
    @media screen and (min-width: 900px){
        gap: 10%;
        height: 30%;
    }
    input{
    width: 87%;
    height: 25%;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    @media screen and (min-width: 1023px){
        height: 35%;
        font-size: 1.3vw;
    }
}
}
.bottom{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4%;
    width: 87%;
    height: 25%;
    padding-bottom: 5%;
    font-family: 'Noto Sans';
    font-weight: 400;
    font-size: 85%;
    /* background-color: #FF6489; */
    @media screen and (min-width: 901px){
            padding-bottom: 0;
        }
    a{
        color: #4088CB;
        cursor: pointer;
    }
    @media screen and (max-width: 900px){
    button{
        margin-top: 3%;
    }
    }
    @media screen and (min-width: 901px){
    height: 30%;
    button{
        margin-top: 2%;
        @media screen and (min-width: 901px){
            :hover{
                opacity: 0.9;
            }
        }
    }
    }
    label{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2%;
        width: 100%;
        @media screen and (min-width: 901px){
            gap: 0;
        }
    }
}
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `