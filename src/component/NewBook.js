import styled from "styled-components"
import BigBook from "./BigBook"
import image1 from "../assets/image1.png"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
    const [data, setData] = useState();
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/books/new`);
            setData(response.data);
            console.log(response);

        } catch (e) {
            console.log(e)

        }
    }, []
    )
    return (
        <div>
            <Wrapper>
                <Row>
                    <p style={{ color: "white", fontSize: "19px", marginTop: "37px" }}>집 앞 서점에 방금 나온 신간!</p>
                </Row>
                <Row2>
                    <Circle> {"<"}</Circle>

                    {data?.map((book, i) => {
                        if (i < 6)
                            return (<BigBook src={book.photo} color={"white"} title={book.name} author={book.author.name} />
                            );
                    }
                    )}
                    <Circle> {">"}</Circle>
                </Row2>

            </Wrapper>

        </div >);
}

export default NewBook;