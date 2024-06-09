import { Books } from "./components/Books";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <SearchBar />
        <Books />
      </main>
    </div>
  );
}

export default App;
