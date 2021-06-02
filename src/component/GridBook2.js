import styled from "styled-components"
import SmallBook from "./SmallBook"
import image2 from "../assets/image2.png"
const Wrapper = styled.div`

    height:403px;
    display:flex;
    flex-direction: column;

`
const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 850px;
`
const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;

`

const Column = styled.div`
    display:flex;
    flex-direction: column;
`


function GridBook2({ title }) {

    return (
        <Wrapper>
            <Row>
                <p style={{ color: "black", fontSize: "19px", marginTop: "37px" }}>{title}</p>
            </Row>

            <Row2>
                <Column>
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={1} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={2} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={3} score={2} author={"앤디위어"} />
                </Column>
                <Column>
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={4} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={5} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={6} score={2} author={"앤디위어"} />
                </Column>
                <Column>
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={7} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={8} score={2} author={"앤디위어"} />
                    <SmallBook src={image2} title={"프로젝트 헤일메리"} i={9} score={2} author={"앤디위어"} />
                </Column>
            </Row2>
        </Wrapper>
    );
}
export default GridBook2;