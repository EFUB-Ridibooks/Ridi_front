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
    margin-right: 700px;
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


function GridBook({ title }) {

    const [data, setData] = useState();
    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/books/hot`);
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
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} />
                            );
                    }
                    )}
                </Column>
                <Column>
                    {data?.map((book, i) => {
                        if (i < 6 && i > 2)
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} />
                            );
                    }
                    )}
                </Column>
                <Column>
                    {data?.map((book, i) => {
                        if (i < 9 && i > 5)
                            return (<SmallBook src={book.photo} i={i + 1} title={book.name} author={book.author.name} />
                            );
                    }
                    )}
                </Column>
            </Row2>
        </Wrapper>
    );
}
export default GridBook;