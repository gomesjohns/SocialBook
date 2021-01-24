import "./App.css";
import Header from "./Header";

function App() {
  return (
    // BEM naming convention
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body*/}
      <div className="app__body">
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
