import styled from "styled-components"


const Wrapper = styled.div`
    width:140px;
    height:215px;
    display:flex;
    flex-direction: column;
    margin-right: 20px;
`
const BookImage = styled.img`
    width:138px;
    height:197px;
    background-image:  url(${(props) => props.src});
    background-size: 1897px;
    margin-top: 20px;
`
const Title = styled.div`
    font-weight: bold;
    font-size: 14px;  
    color:${(props) => props.color || "black"}; 
    line-height: 14px;
    margin-top: 15px;
    margin-bottom:5px;
     
`
const Author = styled.div`
    color:gray;
    font-size: 14px;
    font-weight : lighter ;
    line-height: 16px;
`
const Star = styled.div`
    color:orange;
    height:10px;
`
const GrayStar = styled.div`
    color:lightgray;
    height:10px;
`
const Row = styled.div`
    display:flex;
    flex-direction: row;
`
function BigBook({ src, title, author, color, score }) {

    let star = "";
    for (let i = 0; i < score; i++) {
        star = star + "★";
    }
    let nostar = "";
    for (let i = 0; i < 5 - score; i++) {
        nostar = nostar + "★";
    }


    return (
        <div>
            <Wrapper>
                <BookImage src={src} />
                <Title color={color}> {title}</Title>
                <Author>{author}</Author>
                <Row>
                    <Star>
                        {star} </Star>
                    <GrayStar>{nostar}</GrayStar>
                </Row>

            </Wrapper>

        </div >);
}

export default BigBook;