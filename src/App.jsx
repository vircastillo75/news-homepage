import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"

function App() {
  return (
    <main className="px-4 pt-6">
      <Header/>
      <MainArticle />
      <NewContainer />

    </main>
  )
}

export default App
