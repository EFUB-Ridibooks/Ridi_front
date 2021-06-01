import styled from "styled-components"
import BigBook from "./BigBook"
import image1 from "../assets/image1.png"

const Wrapper = styled.div`

    height:403px;
    display:flex;
    flex-direction: column;

`
const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 800px;
`
const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const Circle = styled.button`
    border: 1px solid #E5E5E5;
    background: white;
    border-radius: 50%;
    width:40px;
    height:40px;
    color:black;
    outline:none;
    margin-top :100px ;
    margin-right:25px;
    margin-left:10px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
`

function NewBook2({ save, score }) {
    return (
        <div>
            <Wrapper>
                <Row>
                    <p style={{ color: "black", fontSize: "19px", marginTop: "37px", width: "250px" }}>{save}</p>
                </Row>
                <Row2>
                    <Circle> {"<"}</Circle>
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <BigBook src={image1} score={score} title={"죄의 궤적"} author={"오쿠다 하데오"} />
                    <Circle> {">"}</Circle>
                </Row2>

            </Wrapper>

        </div >);
}

export default NewBook2;