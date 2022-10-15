import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<LocalLibraryIcon />}
        >
          <h3 style={{fontFamily:'Silkscreen, cursive'}} className="vertical-timeline-element-title">
           Alchemy University
          </h3>
          <p>
            Web3.0 Development
          </p>
    
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<LocalLibraryIcon/>}
        >
          <h3 style={{fontFamily:'Silkscreen, cursive'}} className="vertical-timeline-element-title">
           LearnWeb3.io
          </h3>
          <p>
            BlockChain Development
          </p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 style={{fontFamily:'Silkscreen, cursive'}} className="vertical-timeline-element-title">
           Aptech , Karachi
          </h3>
          <p> Web Development Course</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 style={{fontFamily:'Silkscreen, cursive'}} className="vertical-timeline-element-title">
             University of Karachi , Undergraduate
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 style={{fontFamily:'Silkscreen, cursive'}} className="vertical-timeline-element-title">
            Dj Science College
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
           Engeeniring
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
       
      </VerticalTimeline>
    </div>
  );
}

export default Experience;