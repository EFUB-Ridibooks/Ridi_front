import styled from "styled-components"
import logo from "../assets/logo.PNG"
import logo2 from "../assets/logo2.png"
import search from "../assets/magfifier.png"
import home from "../assets/home.png"
import my from "../assets/my.png"
import cart from "../assets/cart.png"
import alarm from "../assets/alarm.png"
import menu from "../assets/menu.png"

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
const Row2 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    height:37px;
    margin-left: 220px;
    margin-right: 700px;
    margin-top:21px;
`
const Row3 = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    height:37px;
    margin-left: 190px;
    margin-right: 700px;
    margin-top:15px;
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
 border-radius:2.5px;
`
const Button = styled.button`
  height: 30px;
  width: 77px;
  color:${(props) => props.color || "white"};
  background: ${(props) => props.background || "white"};
  font-weight: bold;
  outline:none;
  border:${(props) => props.border || "white"} solid 0.5px;
  border-radius:2.5px;
  margin-top: 22px;
  margin-right: 5px;
`

const Line = styled.div`
    height:0px;
    border: 1px solid #ebeef0;
    margin-top: 5px;;
`

function Header() {
    return (
        <div>
            <Wrapper>
                <Row>
                    <img src={logo} style={{ height: "31px", marginTop: "20px" }} />
                    <img src={logo2} style={{ height: "16px", width: "96px", marginTop: "29px", marginLeft: "3px" }} />
                    <InputHere placeholder="제목, 저자 , 출판사 검색" />
                    <Button background="#1f8ce6">회원가입</Button>
                    <Button color="#1f8ce6">로그인</Button>
                </Row>
                <Row2>
                    <img src={home} style={{ height: "17px" }} />
                    <p style={{ color: "white", marginTop: "0px", marginLeft: "16px", marginRight: "65px", fontSize: "14px" }}>홈 </p>
                    <img src={alarm} style={{ height: "17px" }} />
                    <p style={{ color: "white", marginTop: "0px", marginLeft: "16px", marginRight: "65px", fontSize: "14px" }}>알림 </p>
                    <img src={cart} style={{ height: "17px" }} />
                    <p style={{ color: "white", marginTop: "0px", marginLeft: "16px", marginRight: "65px", fontSize: "14px" }}>카트 </p>
                    <img src={my} style={{ height: "17px" }} />
                    <p style={{ color: "white", marginTop: "0px", marginLeft: "16px", marginRight: "65px", fontSize: "14px" }}>마이리디 </p>
                </Row2>
            </Wrapper>
            <Row3>
                <img src={menu} style={{ height: "24px" }} />
                <p style={{ color: "rgba(0, 119, 217, 1)", marginTop: "0px", marginLeft: "49px", marginRight: "47px", fontSize: "17px", fontWeight: "bold" }}>일반 </p>
                <p style={{ color: "rgba(64, 71, 77, 1)", marginTop: "0px", marginRight: "47px", fontSize: "17px", fontWeight: "bold" }}>로맨스 </p>
                <p style={{ color: "rgba(64, 71, 77, 1)", marginTop: "0px", marginRight: "47px", fontSize: "17px", fontWeight: "bold" }}>판타지 </p>
                <p style={{ color: "rgba(64, 71, 77, 1)", marginTop: "0px", marginRight: "47px", fontSize: "17px", fontWeight: "bold" }}>만화 </p>
                <p style={{ color: "rgba(64, 71, 77, 1)", marginTop: "0px", marginRight: "47px", fontSize: "17px" }}>BL </p>
            </Row3>
            <Line />
        </div>);
}

export default Header;