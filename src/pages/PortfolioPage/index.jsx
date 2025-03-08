import React from "react";
import ProjectCard from "../../components/ProjectCard"; 
import "./style.css"; 
import PetTagMain from "../../assets/images/PetTagMain.png"
import WeatherDashboard from "../../assets/images/WeatherDashboard.png"
import NewFlowMainPage from "../../assets/images/NewFlowMainPage.png"
import KanbanMainPage from "../../assets/images/KanbanMainPage.png"
import Invyt from "../../assets/images/Invyt.png"
import BookSearch from "../../assets/images/BookSearch.png"

const projects = [
  {
    title: "Weather Dashboard",
    image: PetTagMain,
    repoLink: "https://github.com/achensen/Pet-Tag"
  },
  {
    title: "Project Two",
    image: WeatherDashboard,
    repoLink: "https://github.com/achensen/Weather-Dashboard"
  },
  {
    title: "NewFlow",
    image: NewFlowMainPage,
    repoLink: "https://github.com/achensen/New-Flow"
  },
  {
    title: "Kanban Board",
    image: KanbanMainPage,
    repoLink: "https://github.com/achensen/Kanban-Board"
  },
  {
    title: "Invyt (in progress)",
    image: Invyt,
    repoLink: "https://github.com/achensen/Invyt"
  },
  {
    title: "Book Search",
    image: BookSearch,
    repoLink: "https://github.com/achensen/Book_Search_Engine"
  },
];

const PortfolioPage = () => {
  return (
    <section className="portfolioContainer">
      <h2>My Portfolio</h2>
      <div className="portfolioGrid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioPage;
