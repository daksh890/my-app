import SearchBar from "./components/searchBar";
import PostData from "./posts/posts.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter name to search." data={PostData} />
      <h1>Hello!!</h1>
    </div>
  );
}

export default App;
