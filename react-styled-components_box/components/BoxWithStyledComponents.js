import styled from "styled-components"

// const StyledBox= styled.div`
export default styled.div`
width: 100px;
height: 100px;
background-color: ${({$isBlack})=>$isBlack ? "black" : "green"};
margin: 2rem;

&:hover{
background-color: ${({$isBlack})=>$isBlack ? "grey" : "lightgreen"};
}
`

// export default function BoxWithStyledComponents({isBlack}){
//     return (
//     <StyledBox $isBlack={isBlack}>the {isBlack ? "black" : "green"} one</StyledBox>
// )}