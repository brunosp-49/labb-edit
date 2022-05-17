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

export const SubContainer = styled.div`
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
input{
    width: 87%;
    height: 25%;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    @media screen and (min-width: 1023px){
        height: 35%;
    }
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
.p2{
    font-weight: 300;
    font-size: 100%;
}
.button1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87%;
    height: 25%;
    background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
    border-radius: 27px;
    border: 0;
    color: #fff;
    font-family: 'Noto Sans';
    font-weight: 700;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: 900px){
        height: 35%;
        :hover{
            opacity: 0.8;
        }
    }
}
.button2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 87%;
    height: 25%;
    background: #fff;
    border-radius: 27px;
    color: #FE7E02;
    font-family: 'Noto Sans';
    font-weight: 700;
    border: 1px solid #FE7E02;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
    @media screen and (min-width: 900px){
        height: 35%;
        :hover{
            background-color: #FE7E02;
            opacity: 0.3;
            color: #fff;
        }
    }
}
.top{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 30%;
    p{
        margin: 0;
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
        height: 30%;
        gap: 8%;
    }
    input{
        @media screen and (min-width: 900px){
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
    width: 100%;
    height: 25%;
    padding-bottom: 5%;
}
`

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `

// export const MainContainer = styled.div`
// `
