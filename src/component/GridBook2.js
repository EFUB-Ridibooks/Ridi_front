import styled from "styled-components"
import SmallBook from "./SmallBook"
import image2 from "../assets/image2.png"
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
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
const Line = styled.div`
    height:0px;
    width:229px;
    border: 1px solid #ebeef0;
    margin-top: 5px;;
`


function GridBook2({ title }) {
    const [data, setData] = useState();
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/books/bestseller`);
            setData(response.data);
            console.log(response);

        } catch (e) {
            console.log(e)

        }
    }, []
    )
    return (
        <Wrapper>
            <Row>
                <p style={{ color: "black", fontSize: "19px", marginTop: "37px" }}>{title}</p>
            </Row>

            <Row2>
                <Column>
                    {data?.map((book, i) => {
                        if (i < 3)
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} score={book.score} />

                            );
                    }
                    )}

                </Column>

                <Column>
                    {data?.map((book, i) => {
                        if (i < 6 && i > 2)
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} score={book.score} />
                            );
                    }
                    )}
                </Column>
                <Column>
                    {data?.map((book, i) => {
                        if (i < 9 && i > 5)
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} score={book.score} />
                            );
                    }
                    )}
                </Column>
            </Row2>
        </Wrapper>
    );
}
export default GridBook2;