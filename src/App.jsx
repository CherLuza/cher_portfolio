import AskUser from './components/AskUser'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'


function App() {

  return (
         <div id="portfolio" style={{backgroundImage: `url("/background.JPG")`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
         }}>
        <h1>Cher Oliboni Luza</h1>
        <AskUser />
        <Sidebar />
        <MainContent />
      </div>
     )
}

export default App
