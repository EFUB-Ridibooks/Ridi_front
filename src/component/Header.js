import styled from "styled-components"
import logo from "../assets/logo.PNG"
import logo2 from "../assets/logo2.png"
import search from "../assets/magfifier.png"

const Wrapper = styled.div`
    background: #1f8ce6;
    height:113px;
    display:flex;
    flex-direction: column;


`
const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
`
const InputHere = styled.input`
 border: none;
 font-family: inherit;
 font-size: 1rem;
 width: 340px;
 height:36px;
 outline:none;
 margin-top: 19px;
 margin-left: 16px;
 margin-right: 219px;
`
const Button = styled.button`
  height: 30px;
  width: 77px;
  color:${(props) => props.color || "white"};
  background: ${(props) => props.background || "white"};
  font-weight: bold;
  outline:none;
  border:none;
  margin-top: 22px;
`

function Header() {
    return (<Wrapper>
        <Row>
            <img src={logo} style={{ height: "31px", marginTop: "20px" }} />
            <img src={logo2} style={{ height: "16px", width: "96px", marginTop: "29px", marginLeft: "3px" }} />
            <InputHere placeholder="제목, 저자 , 출판사 검색" />
            <Button color="#1f8ce6"></Button>
        </Row>
    </Wrapper>);
}

export default Header;