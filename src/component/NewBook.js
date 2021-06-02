import styled from "styled-components"
import BigBook from "./BigBook"
import image1 from "../assets/image1.png"

const Wrapper = styled.div`
    background:  rgba(23, 32, 45, 1);
    height:403px;
    display:flex;
    flex-direction: column;

`
const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 700px;
`
const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const Circle = styled.button`
    background-color: #364050;
    border-radius: 50%;
    width:40px;
    height:40px;
    color:white;
    outline:none;
    border:none;
    margin-top :100px ;
    margin-right:25px;
    margin-left:10px;

`

function NewBook() {
    return (
        <div>
            <Wrapper>
                <Row>
                    <p style={{ color: "white", fontSize: "19px", marginTop: "37px" }}>집 앞 서점에 방금 나온 신간!</p>
                </Row>
                <Row2>
                    <Circle> {"<"}</Circle>
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} color={"white"} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <Circle> {">"}</Circle>
                </Row2>

            </Wrapper>

        </div >);
}

export default NewBook;