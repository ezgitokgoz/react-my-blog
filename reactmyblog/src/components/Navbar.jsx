
import React from "react";
import styled from "styled-components";


const Container = styled.div`
   padding-bottom: 25px;
   height: 60px;
   background-color: #000000;
`

const Wrapper = styled.div`
    padding: 10px 20px;  //10px shifted down,20px shifted right,,,margin creates extra space around an element
    display: flex;//child elements automatically align like columns or rows with auto width and auto height
    justify-content: space-between;
    align-items: center;
`

const Language = styled.span`
    font-size:14px ;
    cursor: pointer;
    margin-right: 16px;
    font-style: inherit;
    color: white;
`
const Left =styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`
const Center =styled.div`
    flex: 1;
    text-align: center;
`
const Right =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
   
`


const Input = styled.input`
    border:none;
    
`
const Logo = styled.h1`
    font-weight: bold;
    color: white;
    
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: white;
    
`


const navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                    <Input placeholder="Search"/>
                    
            </Left>
            <Center><Logo>EZGI TOKGOZ</Logo></Center>
            <Right>
                <MenuItem>EĞİTİMLER</MenuItem>
                <MenuItem>PROJELER</MenuItem>
                <MenuItem>İLETİŞİM</MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default navbar