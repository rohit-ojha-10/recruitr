import Sidebar from './components/Sidebar'
import RecruitrFooter from './components/RecruitrFooter'
import RecruitrNavbar from './components/RecruitrNavbar'
function App() {
  return (
    <div className="w-100 grid ">
      <div>
        <RecruitrNavbar />
      </div>
      <h1 className="ml-6 mt-2 text-xl">PROFILE</h1>
      <div className="rounded border m-4 border-solid border-2 border-grey-500 p-2">
        <Sidebar />
      </div>
      <RecruitrFooter />
    </div>
  )
}

export default App
