import React from "react";
import logo from './images/linkedin.png'
import logo2 from './images/github-mark-white.png'

import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import Home from './pages/home';
import Links from "./pages/links";
import About from "./pages/about";
const anchors = ["Home", "About", "Projects"];


const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["#7fff00","#00ffff","#29ab87" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div>
          <div className='flex-row'>
                        <a  href="https://github.com/zacharyd97"><img className=' w-10 h-10 p-2' src={logo2}/></a>
                        <a  href="https://www.linkedin.com/in/zachary-dowell-a18179243/"><img className=' w-10 h-10 p-2' src={logo}/></a>
                    </div>
          <div className="section">
            <div className="home">
              <Home/>
            </div>
          </div>
          <div className="section">
            <div className="about">
            <About/>
            </div>
          </div>
          <div className="section">
            <div className="contact">
              <Links/>
            </div>
          </div>
          
        </div>
      );
    }}
  />
);
export default App;