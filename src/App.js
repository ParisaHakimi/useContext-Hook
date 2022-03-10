import "./App.css";
import Header from "./Header";
import UserContext from "./user-context";
function App() {
  return (
    <UserContext.Provider value={{ userName: "parisa" }}>
      <div className="App">
        <Header />
      </div>
    </UserContext.Provider>
  );
}

export default App;
