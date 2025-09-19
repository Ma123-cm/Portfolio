import project1 from './assets/project1.png';
import project2 from './assets/project2.jpg';
import project3 from './assets/project3.jpg';
import './project.css';

export default function Projects() {
  return (
    <section id="works">
      <h1 className="worksTitle">My Projects</h1>
      <p className="worksDesc">
        Here are some of my highlighted works, showcasing my skills in web design,
        development, and UI/UX.
      </p>

      <div className="worksImgs">
     
        <div>
          <img src={project1} alt="Project 1" className="worksImg" />
          <p><strong>Portfolio Website</strong><br/>Designed and developed a personal portfolio site.</p>
        </div>

        <div>
          <img src={project2} alt="Project 2" className="worksImg" />
          <p><strong>E-Commerce Store</strong><br/>Built an online shopping demo with cart and checkout.</p>
        </div>

      
        <div>
          <img src={project3} alt="Project 3" className="worksImg" />
          <p><strong>Mobile App UI</strong><br/>Created mobile app mockups with clean layouts.</p>
        </div>
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}
