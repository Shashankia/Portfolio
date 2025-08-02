import './App.css'
import React from 'react';

// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return (
    <div className={`menu-container ${props.showMenu}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenu}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenu}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            shashank
            <strong>tiwari</strong>
          </p>
          <a
            onClick={props.toggleMenu}
            className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I Am</span>
          <span className="line">JavaScript Developer</span>
          <span className="line">
            <span className="color">&</span> Craftsman .
          </span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};


/***********************
  About Component
 ***********************/

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Shashank Tiwari.</h4>
            <p>
              I am a JavaScript developer based in the beautiful state of India,
              Uttar Pradesh.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better.  I also love nature retreats—a hobby that helps me recharge and find inspiration. Oh,  I have a
              passion for rice with milk!
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS. I also make the web pretty by using 
              CSS and, whenever needed, any of their friends: Bootstrap, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). 
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    js: 'fab fa-js',
  css: 'fab fa-css3-alt',
  html: 'fab fa-html5',
  react: 'fab fa-react',
  node: 'fab fa-node',
  redux: 'fab fa-redux',
  py: 'fab fa-python',
  python: 'fab fa-python',
  tailwind: 'fas fa-wind',
  };

  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working on lately. All of these
            were built during my academic journey on{' '}
            <a href="https://www.igntu.ac.in/" target="_blank" rel="noopener noreferrer">
              Indira Gandhi National Tribal University
            </a>
            , where I completed my graduation and acquired a wide range of skills.
        
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="RojgarSetu Job Platform."
            img={'https://raw.githubusercontent.com/Shashankia/rojgar-setu/main/Screenshot%202025-05-13%20184630.png'}
            tech="js css react node redux"
            link="https://rojgarsetu.netlify.app/"
            repo="https://github.com/Shashankia/rojgar-setu"
          >
            <small>
              Built using Node, Express, MongoDB, Tailwind  css, React.js and JavaScript.
            </small>
            <p>
              This is a Front-end website that I made which lets the students apply and recruiters post
              jobs and replies.
            </p>
          </Project>
          <Project
            title="Solar Business Showcase Platform"
            img={'https://raw.githubusercontent.com/Shashankia/calculator--py/main/Screenshot%202025-06-30%20003703.png'}

            tech="js css html"
            link="https://6862d16439345b8eaec30c57--bespoke-pixie-d45ea5.netlify.app/"
            repo="https://6862d16439345b8eaec30c57--bespoke-pixie-d45ea5.netlify.app/"
          >
            <small>
              Built using Html, CSS and JavaScript.
            </small>
            <p>
              Another front-end website to brand presentation and  lead generation for a solar manufacturing firm.
            </p>
          </Project>
          <Project
            title="Be My-Valentine"
            img={'https://raw.githubusercontent.com/Shashankia/be-my-valentine/main/img/cat-0.jpg'}

            tech="html js css"
            link="https://beemy-valentine.netlify.app/"
            repo="https://github.com/Shashankia/be-my-valentine"
          >
            <small>
              Built using Html, CSS and JavaScript.
            </small>
            <p>
              Another front-end website for A Love Story Etched in Pixels & Passion 💌.
            </p>
          </Project>
          <Project
            title="Space-Ship Game"
            img={'https://raw.githubusercontent.com/Shashankia/Spaceship-Game/main/Screenshot%20(216).png'}

            tech="py"
            link="https://raw.githubusercontent.com/Shashankia/Spaceship-Game/main/Spaceship%202025-08-02%2009-49-20.mp4"
            repo="https://github.com/Shashankia/Spaceship-Game"
          >
            <small>
              Built  Pygame  and  Python.
            </small>
            <p>
              Spaceship is a top-down 2D war game developed using Python and the Pygame library. The project simulates realistic alien movement, track boundaries, and war logic.
            </p>
          </Project>
          
          <Project
            title="A-Multiplayer 2D Racing Game."
            img={'https://raw.githubusercontent.com/Shashankia/A-Multiplayer-2D-Racing-Game/main/Screenshot%20(220).png'}
            tech="python"
             link="https://raw.githubusercontent.com/Shashankia/A-Multiplayer-2D-Racing-Game/main/Car%20race%202025-08-02%2004-07-53.mp4"
            repo="https://github.com/Shashankia/A-Multiplayer-2D-Racing-Game"
          >
            <small>Built using pygame python.</small>
            <p>
              RacerX is a top-down 2D racing game developed using Python and the Pygame library. The project simulates realistic car movement, track boundaries, and race logic.
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
};



/***********************
  Contact Component
 ***********************/

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting, Shashank will get back to you soon!");
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email to{" "}
              <a
                href="mailto:web.shashank03.q@gmail.com"
                className="mail"
              >
                shashank03.q@gmail.com
              </a>
              :
            </p>
          </div>
          <SocialLinks />
        </div>

        <form id="contact-form" onSubmit={handleSubmit}>
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          
          {/* ✅ Fixed: optional phone OR 10-digit number */}
          <input
            placeholder="Phone"
            name="phone"
            type="tel"
            pattern="^$|[0-9]{10}"
            title="Please enter a 10-digit phone number (numbers only)"
          />

          <textarea placeholder="Message" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};




/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Shashank Tiwari.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};




/***********************
  Social Links Component
 ***********************/
const SocialLinks = () => (
  <div className="social">
    <a
      href="https://x.com/Shashank03Q"
      target="_blank"
      rel="noopener noreferrer"
      title="Follow me on Twitter"
    >
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a
      href="https://github.com/Shashankia"
      target="_blank"
      rel="noopener noreferrer"
      title="Check out my GitHub"
    >
      <i className="fa-brands fa-github"></i>
    </a>
    <a
      href="https://www.linkedin.com/in/shashank-tiwari-1816082bb/"
      target="_blank"
      rel="noopener noreferrer"
      title="Visit my LinkedIn"
    >
      <i className="fa-brands fa-linkedin"></i>
    </a>
    <a
      href="mailto:shashank03.q@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      title="Send me an email"
    >
      <i className="fa-solid fa-envelope"></i>
    </a>
  </div>
);




/***********************
  Main Component
 ***********************/

class App extends React.Component {
  state = {
    menuState: false
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuState: !state.menuState
        ? 'active'
        : state.menuState === 'deactive'
          ? 'active'
          : 'deactive'
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility = header.style.visibility === 'hidden' && 'visible';
      else header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
      else navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth'
            });
          });
        }
      }
    })();
  }
}


// ⬇️ Add this at the very end
export default App;


