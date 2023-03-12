import React from "react";
import Intro from "@/components/Intro";
import expressImg from "../../../assets/web-design/desktop/image-express.jpg";
import transferImg from "../../../assets/web-design/desktop/image-transfer.jpg";
import photonImg from "../../../assets/web-design/desktop/image-photon.jpg";
import builderImg from "../../../assets/web-design/desktop/image-builder.jpg";
import blogrImg from "../../../assets/web-design/desktop/image-blogr.jpg";
import campImg from "../../../assets/web-design/desktop/image-camp.jpg";
import ProjectTile from "@/components/ProjectTile";

const projects = [
  {
    title: "Express",
    desc: "A multi-carrier shipping website for ecommerce websites",
    image: expressImg,
  },
  {
    title: "Transfer",
    desc: "Site for low-cost money transfers and sending money within seconds",
    image: transferImg,
  },
  {
    title: "Photon",
    desc: "A state-of-the-art music player with high-resolution audio and DSP effects",
    image: photonImg,
  },
  {
    title: "Builder",
    desc: "Connects users with local contractors based on their location",
    image: builderImg,
  },
  {
    title: "Blogr",
    desc: "Blogr is a platform for creating an online blog or publication",
    image: blogrImg,
  },
  {
    title: "Camp",
    desc: "Get expert training in coding, data, design, and digital marketing",
    image: campImg,
  },
];

const WebDesign = () => {
  return (
    <div className="pageWrapper flex flex-col gap-24 md:gap-[7.5rem] lg:gap-40">
      <Intro
        title={"web design"}
        desc={
          "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        }
      />
      <section className="mdmax:px-6 ">
        <ul className="grid grid-flow-row gap-y-10 lg:grid-cols-3  lg:gap-x-10 mdmax:auto-rows-fr">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectTile {...project} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default WebDesign;
