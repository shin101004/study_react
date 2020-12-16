import Users from './Users';
// import ButtonUsers from"./ButtonUsers";
import {UsersProvider, UserProvider} from "./UsersContext"

function App() {

return (
    <>
    <UsersProvider>

            <Users/>    

    </UsersProvider>
    </>
    )
}

export default App;
