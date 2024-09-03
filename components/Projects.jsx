import React from "react";
import spaceximg from "../public/assets/projects/spacex.png";
import apparelsimg from "../public/assets/projects/apparels.png";
import awsimg from "../public/assets/projects/awsdemo.png";
import webportal from "../public/assets/projects/webportal.jpg";
import ideafloats from "../public/assets/projects/ideafloats.png";
import travelapp from "../public/assets/projects/travelapp.png";

import dashboardimg from "../public/assets/projects/coreyodashboard.jpg";

import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl font-medium tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Travel App"
            backgroundImg={travelapp}
            projectUrl="/travelapp"
            tech="Next JS | React Native | React JS"
          />
          <ProjectItem
            title="Coreyo Control Dashboard"
            backgroundImg={dashboardimg}
            projectUrl="/coreyodashboard"
            tech="Typescript | React"
          />
          <ProjectItem
            title="Coreyo Web User Portal "
            backgroundImg={webportal}
            projectUrl="/coreyoweb"
            tech="Typescript | React"
          />
          <ProjectItem
            title="Ideafloats landing page"
            backgroundImg={ideafloats}
            projectUrl="/ideafloats"
            tech="React JS"
          />
          <ProjectItem
            title="Apparels"
            backgroundImg={apparelsimg}
            projectUrl="/apparels"
            tech="Next JS"
          />
          <ProjectItem
            title="SpaceX UI"
            backgroundImg={spaceximg}
            projectUrl="/spacex"
            tech="React JS"
          />
          <ProjectItem
            title="AWS Redesign"
            backgroundImg={awsimg}
            projectUrl="/aws"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
