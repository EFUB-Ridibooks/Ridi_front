import Header from "./component/Header"
import NewBook from "./component/NewBook"
import NewBook2 from "./component/NewBook2"
import GridBook from "./component/GridBook"
import GridBook2 from "./component/GridBook2"

function App() {


  return (
    <div>
      <Header />
      <NewBook />
      <GridBook title={"사람들이 지금 많이 읽고 있는 책"} />
      <NewBook2 save={"오늘, 리디의 발견"} server={`http://localhost:8080/books/today`} />
      <GridBook2 title={"베스트셀러 > "} />
      <NewBook2 save={"금주의 신간"} server={`http://localhost:8080/books/thisWeek`} />
      <NewBook2 save={"봄 더위를 이겨낼 추리 소설 > "} server={`http://localhost:8080/books/modern`} score={5} />
      <NewBook2 save={"완벽한 부부의 세계 > "} server={`http://localhost:8080/books/hobby`} score={3} />

    </div>
  );
}

export default App;