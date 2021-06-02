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
      <NewBook2 save={"오늘, 리디의 발견"} />
      <GridBook2 title={"베스트셀러 > "} />
      <NewBook2 save={"금주의 신간"} />
      <NewBook2 save={"봄 더위를 이겨낼 추리 소설 > "} score={5} />
      <NewBook2 save={"완벽한 부부의 세계 > "} score={3} />

    </div>
  );
}

export default App;
