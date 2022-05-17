import styled from "styled-components"

export const MainContainer = styled.div`
display: flex;
position: absolute;
top: 0;
height: 6%;
width: 100%;
background-color: #EDEDED;
@media screen and (min-width: 901px){
            height: 10%;
        }
.left{
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 3;
    img{
        height: 70%;
        justify-self: center;
    }
}
.right{
    display: flex;
    position: absolute;
    padding-right: 5%;
    right: 0;
    z-index: 6;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 70%;
    a{
        @media screen and (min-width: 901px){
            font-size: 2vw;
            :hover{
                opacity: 0.7;
                cursor: pointer;
            }
        }
    }
}
    a{
        font-family: 'Noto Sans';
        font-weight: 600;
        color: #4088CB;
        text-decoration: none;
    }
    .check{

    }
    .voltar{
    position: absolute;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 100%;
    width: 15%;
    z-index: 5;
    cursor: pointer;
    @media screen and (min-width: 901px){
        width: 6%;
        }
    svg{
        height: 50%;
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