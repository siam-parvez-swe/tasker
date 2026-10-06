
import Footer from "./Footer"
import Header from "./Header"
import HeroSection from "./HeroSection"
import TaskBoard from "./task/TaskBoard"

function App() {
  return (
    <div className="min-h-screen bg-black ">
      <Header></Header>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection></HeroSection>
        <TaskBoard></TaskBoard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App