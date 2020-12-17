import PostTemplate from "./components/PostTemplate";
import PostHeader from "./components/PostHeader";
import PostList from "./components/PostList";



function App() {
    return (
        <PostTemplate>
            <PostHeader/>
            <PostList/>
        </PostTemplate>
    )
}

export default App;