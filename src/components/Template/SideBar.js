import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Wangyue (Angie) Zhao</h2>
        <p><a href="mailto:wz1342@nyu.edu">wangyue.angie.zhao@nyu.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Wangyue (Angie) Zhao.
        I am an undergraduate senior major in Computer Science at
        <a href="https://engineering.nyu.edu/"> New York University, Tandon School of Engineering</a>.
        I am also minor in Finance, Mathematics, and Game Design. I have been working
        at New York Univesity as student researchers and teaching assistants over years.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Wangyue Zhao <Link to="/">WAngieZhao.github.io/personal-site</Link>.</p>
    </section>
  </section>
);

export default SideBar;
