import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainChatList from "./pages/MainChatList";
import MainChatMembers from "./pages/MainChatMembers";
import MainChatPage from "./pages/MainChatPage";

function App() {
  return (
    <div className="App">
      <Router>
        <header></header>
        <main className="max-w-xl mx-auto">
          <Switch>
            <Route exact path="/">
              <MainChatList />
            </Route>
            <Route
              path="/chat"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={MainChatPage} exact />
                  <Route path={`${url}/:chatId`} component={MainChatMembers} />
                </>
              )}
            />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
