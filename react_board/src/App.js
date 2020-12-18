import PostTemplate from "./components/PostTemplate";
import PostHeader from "./components/PostHeader";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

function App() {
    return (
        <PostTemplate>
            <PostHeader/>
            <PostList/>
            <PostCreate/>
        </PostTemplate>
    )
}

export default App;