import BBG from '../src/assets/shuai.jpeg';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/about.css'
export default function About() {
     return <>
     
     <section id="skill">
         
          <span className="skillTitle">About Me</span>
          <img src={BBG} alt="profile" className="bbg" width="720" height="1280" align="right" />
          <h1>Wenhao Ma</h1>
          <span className="skillDesc">I am WenHao Ma, studied in centennial college. A passionate web designer with a strong interest in creating clean, responsive, and user-friendly websites.</span> 
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>UI/UX Design</h2>
               <p>This is a demo text, you can write your own content here.</p>
               </div>

          </div>
          
          <div className="skillBar">
               <img src={web} alt="WebDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Web Design</h2>
               <p>This text can be changed while making production ready website.</p>
               </div>

          </div>

          <div className="skillBar">
               <img src={app} alt="AppDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>App Design</h2>
               <p>You can write text related to mobile app development.</p>
               </div>
          </div>
            <a 
          href="/assets/resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resumeLink"
        >
          View My Resume (PDF)
        </a>
     
     </section>
    

     </>
    }
    