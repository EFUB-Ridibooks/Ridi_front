import styled from "styled-components"


const Wrapper = styled.div`
    width:308px;
    height:94px;
    display:flex;
    flex-direction: row;
    margin-right: 13px;
`
const BookImage = styled.img`
    width:50px;
    height:71px;
    background-image:  url(${(props) => props.src});
    background-size: 50px;
    margin-top: 14px;
    margin-right: 25px;
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
    height:6px;
    font-size: 6px;
`
const GrayStar = styled.div`
    color:lightgray;
    height:6px;
    font-size: 6px;
`
const Row = styled.div`
    display:flex;
    flex-direction: column;
    margin-left:20px;
    margin-top:15px;
`
const StarRow = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 2px;
`
const Line = styled.div`
    height:0px;
    width:229px;
    border: 1px solid #ebeef0;
    margin-top: 5px;;
`
function SmallBook({ src, title, author, score, i }) {

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
                <h3 style={{ marginTop: "35px" }}>{i}</h3>

                <Row>
                    <Title > {title}</Title>
                    <Author>{author}</Author>
                    <StarRow>
                        <Star>
                            {star} </Star>
                        <GrayStar>{nostar}</GrayStar></StarRow>
                </Row>

            </Wrapper>



        </div >);
}

export default SmallBook;