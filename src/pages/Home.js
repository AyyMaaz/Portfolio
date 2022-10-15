import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Home.css";




function Home({theme}) {

  return (
    <div className="home" >
      <div className="about" id={theme}>
        <h2> Hi, My Name is Maaz</h2>
        <div className="prompt">
          <p>A Web3 developer with a passion for learning and creating.</p>

          <GitHubIcon  />         
          <LinkedInIcon />
          <TwitterIcon />

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
  
        <ol className="list">
          <li className="item">
            <h2>BlockChain</h2>
            <span>
            Solidity, Oppenzeppelin, Hardhat, Chainlinks,
              Ether.js, Thirdweb
            </span> 
          </li>
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJs,NextJs Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java , ExpressJS, GraphQL,
              MySQL, MongoDB, MSSQL,Firebase, Sanity
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Solidity,JavaScript, Java, Python, C,C++, TypeScript, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;