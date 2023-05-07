import React, { useState, useEffect } from "react";
import fetchRepos from "../components/proyects";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchRepos();
        setRepos(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="projects-container">
      <h2 className="font-bold">My projects on Github:</h2>
      <ul>
        {repos.map(({ id, html_url, name, description }) => (
          <li key={id}>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;