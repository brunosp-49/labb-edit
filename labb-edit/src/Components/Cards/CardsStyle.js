import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #FBFBFB;
width: 95%;
min-height: 26vw;
border: 1px solid #E0E0E0;
border-radius: 12px;
padding: 2vw;
@media screen and (min-width: 901px){
            min-height: 15vw;
        }
.enviado{
    color: #6F6F6F;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 2.9vw;
    @media screen and (min-width: 901px){
        font-size: 1.8vw;
            }
}
.title{
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 4.35vw;
    @media screen and (min-width: 901px){
    font-size: 3vw;     
    }
}
.divBottom{
    display: flex;
    width: 45%;
    justify-content: space-between;
    svg{
        height: 4vw;
        color: red;
        @media screen and (min-width: 901px){
        height: 2.5vw ;
        }
    }
    p{
        font-size: 4vw;
        @media screen and (min-width: 901px){
        font-size: 3vw ;
        }
    }
}
.primeiroContainer{
    display: flex;
    min-width: 45%;
    height: 7vw;
    justify-content: space-around;
    align-items: center;
    color: #6F6F6F;
    border: 1px solid #ececec;
    border-radius: 10px;
    svg:hover{
        cursor: pointer;
    }
}
.segundoContainer{
    display: flex;
    min-width: 35%;
    height: 7vw;
    justify-content: space-around;
    align-items: center;
    color: #6F6F6F;
    border: 1px solid #ececec;
    border-radius: 10px;
    :hover{
        cursor: pointer;
    }
}
`

export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 17%;
margin-bottom: 14%;
width: 87%;
min-height: 100vh;
gap: 2vw;
@media screen and (min-width: 901px){
            margin-top: 7%;
            width: 60%;
        }
textarea{
    width: 92%;
    height: 16vw;
    border: 0;
    background: #EDEDED;
    border-radius: 12px;
    resize: none;
    font-size: 5vw;
    padding: 4%;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 4.35vw;
    ::placeholder{
        color: #b3b3b3;
    }
    @media screen and (min-width: 901px){
        height: 12vw;
        font-size: 3vw;
            }
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
input{
    width: 96%;
    height: 8vw;
    border: 0;
    background: #EDEDED;
    border-radius: 10px;
    resize: none;
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    font-size: 4.1vw;
    padding-left: 4%;
    ::placeholder{
        color: #b3b3b3;
    }
    @media screen and (min-width: 901px){
        height: 5vw;
        font-size: 2vw;
            }
} 
hr{
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border: 0;
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
        height: 4vw;
        font-size: 1.5vw;
        :hover{
            opacity: 0.8;
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