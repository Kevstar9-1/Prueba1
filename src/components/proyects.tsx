import React, { useState } from 'react';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Proyect 1',
    description: 'Description Proyect1: Create a page in HTML',
    imageUrl: 'https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn',
    link: 'https://github.com/Kevstar9-1/KevinHernandez.github.io/tree/main/Asignacion%20I'
  },
  {
    name: 'Proyect 2',
    description: 'Description Proyect1: challenge-Asignament',
    imageUrl: 'https://www.shutterstock.com/image-vector/simple-target-line-icon-stroke-260nw-1683280771.jpg',
    link: 'https://github.com/Kevstar9-1/KevinHernandez.github.io/tree/main/Reto-Asignacion2'
  },
];

const ProjectCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = (): void => {
    if (currentSlide === projects.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = (): void => {
    if (currentSlide === 0) {
      setCurrentSlide(projects.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <section>
      <h3>Fulfilled projects</h3>
      <div className="project-carousel">
        <button className="prev-btn" onClick={prevSlide}>&lt;</button>
        <div className="project-slide">
          <h3>{projects[currentSlide].name}</h3>
          <img src={projects[currentSlide].imageUrl} alt={projects[currentSlide].name} />
          <p>{projects[currentSlide].description}</p>
          <a href={projects[currentSlide].link}>View more</a>
        </div>
        <button className="next-btn" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}

export default ProjectCarousel;
