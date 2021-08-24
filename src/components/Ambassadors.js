import React from 'react';

export default function Ambassadors() {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Boston University's Computer Science Ambassadors"
      />
      <meta
        name="keywords"
        content="BU, BUCSA, BU CSA, BU CS Ambassadors, Boston University, Boston University Computer Science"
      />
      <title>BU CS Ambassadors | Our Team</title>
      <link rel="stylesheet" href="/static/css/main.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,400;0,700;1,400&family=Rubik:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        sizes="32x32"
        href="/static/images/reg logo no background small.png"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="icon-bar">
        {/* https://css-tricks.com/simple-social-sharing-links/ */}
        {/* assuming link is https://www.bucsambassadors.bu.edu/ */}
        <a
          href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F"
          target="_blank"
          className="facebook"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.bucsambassadors.bu.edu%2F&text=Hey%21+BU+CS+Ambassadors+has+a+new+website%21+Take+a+look%21&hashtags=bostonuniversity,bucsambassadors"
          target="_blank"
          className="twitter"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          href="mailto:?subject=Check out this new website&body=Hey! BU CS Ambassadors has a new website! Take a look at https://www.bucsambassadors.bu.edu."
          title="Share by Email"
          className="mail"
        >
          <i className="fa fa-envelope" />
        </a>
      </div>
      <header className="header">
        <a href="index.html" className="logo">
          {/* Graphic as link => Alt attribute indicates path [MWAS] */}
          <img
            src="/static/images/reg logo no background small.png"
            alt="/views/index.html"
          />
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="mentor.html" className="link">
                Mentorship
              </a>
            </li>
            <li>
              <a href="ambassadors.html" className="link">
                Ambassadors
              </a>
            </li>
            <li>
              <a href="clubs.html" className="link">
                Clubs
              </a>
            </li>
            <li>
              <a href="resources.html" className="link">
                Resources
              </a>
            </li>
            <li>
              <a href="contactus.html" className="link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="ambassadors">
        <div className="ambassadors-landing-left">
          <h2>Ambassadors</h2>
          <h4>
            Reach out to an ambassador today to learn more about CS and grow
            your connections!
          </h4>
        </div>
        <div className="ambassadors-landing-right">
          {/* Decorative graphic => Blank alt attribute [MWAS] */}
          <img src="/static/images/ambassadors.svg" alt="" />
        </div>
      </section>
      <section className="ambassadors-profiles">
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/IMG-5560 - Dominic Maglione.jpg"
            alt="Dominic C. Maglione"
          />
          <h3>Dominic C. Maglione</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/headshot - Krish Sapru.jpeg"
            alt="Krish Sapru"
          />
          <h3>Krish Sapru</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Headshot - Vitor - Vitor Manuel Barros De Moura Vicente.jpg"
            alt="Vitor Vicente"
          />
          <h3>Vitor Vicente</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Manish Patel - Headshot - Manish Patel.jpg"
            alt="Manish Patel"
          />
          <h3>Manish Patel</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/IMG_5795 - Cici Chen.JPG"
            alt="Cici Chen"
          />
          <h3>Cici Chen</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Ayca Solmaz - Headshot - Ayca Solmaz.jpg"
            alt="Ayca B. Solmaz"
          />
          <h3>Ayca B. Solmaz</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Rachel  Huang- Headshot - Fangrui Huang.jpeg"
            alt="Rachel (Fangrui) Huang"
          />
          <h3>Rachel (Fangrui) Huang</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Medha Dhir - Headshot - Medha Dhir.jpg"
            alt="Medha Dhir"
          />
          <h3>Medha Dhir</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Amy Feng - Headshot - Amy Feng.jpg"
            alt="Amy Feng"
          />
          <h3>Amy Feng</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Shateva - Headshot - Shateva Long.jpg"
            alt="Shateva Long"
          />
          <h3>Shateva Long</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Eric Chao - Headshot - Eric Chao.jpg"
            alt="Eric Chao"
          />
          <h3>Eric Chao</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/csa - Shwetha Krishnan.JPG"
            alt="Shwetha Krishnan"
          />
          <h3>Shwetha Krishnan</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Evan Hsu - Headshot - Evan Hsu.jpg"
            alt="Evan Hsu"
          />
          <h3>Evan Hsu</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/img_4261-yangdong-zhang-3.jpg"
            alt="Anne Zhang"
          />
          <h3>Anne Zhang</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/a0fae9a6-94d7-43b4-980a-1d73ba76ffbf_1_201_a-tilak-agarwal-5.jpeg"
            alt="Tilak Agarwal"
          />
          <h3>Tilak Agarwal</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/1611629731750.jpg"
            alt="Neeraja Mehta"
          />
          <h3>Neeraja Mehta</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/1604017348007.jpg"
            alt="Jack Ruan"
          />
          <h3>Jack Ruan</h3>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/1572579265642.jpg"
            alt="Jane Feng"
          />
          <h3>Jane Feng</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/1616602220659.jpg"
            alt="Adriana Alvarado"
          />
          <h3>Adriana Alvarado</h3>
          <p>she/her/hers</p>
        </div>
      </section>
      <section className="ambassadors">
        <div className="ambassadors-board-left">
          {/* Decorative graphic => Blank alt attribute [MWAS] */}
          <img src="/static/images/ambassadors-board.svg" alt="" />
        </div>
        <div className="ambassadors-board-right">
          <h2>Officers</h2>
          <h4>
            Talk to an officer to learn how to get involved in the
            behind-the-scenes work!
          </h4>
        </div>
      </section>
      <section className="ambassadors-profiles">
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/IMG-20190310-WA0030 - Adit Mehta.jpg"
            alt="Adit Mehta"
          />
          <h3>Adit Mehta</h3>
          <p>
            <strong>Engagement Officer</strong>
          </p>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/img_0783-mikayla-steinberg-7.jpg"
            alt="Mikky Steinberg"
          />
          <h3>Mikky Steinberg</h3>
          <p>
            <strong>Documentation Officer</strong>
          </p>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/meinboston-kristen-lamb-8.jpeg"
            alt="Kristen Lamb"
          />
          <h3>Kristen Lamb</h3>
          <p>she/her/hers</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/Jack Giunta - Headshot - Jack Giunta.jpg"
            alt="Jack Giunta"
          />
          <h3>Jack Giunta</h3>
          <p>
            <strong>Director</strong>
          </p>
          <p>he/him/his</p>
        </div>
        <div className="profile-card">
          <img
            className="pic"
            src="/static/images/ambassadors/img_0407-kolade-adegbaye-8.jpg"
            alt="Kolade Adegbaye"
          />
          <h3>Kolade Adegbaye</h3>
          <p>
            <strong>Promotions Officer</strong>
          </p>
          <p>he/him/his</p>
        </div>
        {/* <div class="profile-card">
      <a href="https://www.linkedin.com/" target="_blank">
          <img class="pic" src="/static/images/stock-img-woman-1.png" alt="Insert Name Here">
      </a>
      <h3>Insert Name</h3>
      <p>she/her/hers</p>
  </div> */}
      </section>
      {/* <section class="ambassadors">
  <div class="ambassadors-landing-left">
      <h2>Advisors</h2>
      <h4>Contact a CS Advisor to get assistance with any and all course planning!</h4>
  </div>
  <div class="ambassadors-landing-right">
      !-- Decorative graphic => Blank alt attribute [MWAS] --
      <img src="/static/images/ambassadors-advising.svg" alt="">
  </div>
    </section>

    <section class="ambassadors-profiles">
  !-- find higher quality pics for them lol --
  <div class="profile-card">
      <a href="https://www.bu.edu/cs/profiles/edori/" target="_blank">
          <img class="pic" src="/static/images/stock-img-woman-1.png" alt="Professor Dora Erdos">
      </a>
      <h3>Dora Erdos</h3>
      <p>she/her/hers</p>
  </div>
  <div class="profile-card">
      <a href="https://www.bu.edu/cs/profiles/jacob-harrington/" target="_blank">
          <img class="pic" src="/static/images/stock-img-man-2.png" alt="Jacob Harrington">
      </a>
      <h3>Jacob Harrington</h3>
      <p>he/him/his</p>
  </div>
  <div class="profile-card">
      <a href="https://www.bu.edu/cs/profiles/wayne-snyder/" target="_blank">
          <img class="pic" src="/static/images/stock-img-man-1.png" alt="Wayne Snyder">
      </a>
      <h3>Wayne Snyder</h3>
      <p>he/him/his</p>
  </div>
    </section> */}
      <footer>
        <div className="social-icons footer-layer">
          <a href="https://www.facebook.com/csa.bu.397" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:facebook"
            />
          </a>
          <a href="https://twitter.com/BUCSAmbassadors" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:twitter"
            />
          </a>
          <a href="https://www.instagram.com/bucsambassadors/" className="icon">
            <span
              className="iconify"
              data-inline="false"
              data-icon="mdi:instagram"
            />
          </a>
        </div>
        <div className="footer-information footer-layer">
          <div className="info">
            <a href="https://www.bu.edu/cs/" target="_blank"></a>
            <p>
              <a href="https://www.bu.edu/cs/" target="_blank">
                <b>Boston University</b> Arts &amp; Sciences
                <br />
                Department of Computer Science
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              phone: (617)353-8919; email:{' '}
              <a href="mailto:cs@bu.edu">cs@bu.edu</a>
            </p>
          </div>
          <div className="info">
            <a href="/index.html"></a>
            <p>
              <a href="/index.html">
                <b>Boston University</b>
                <br />
                Computer Science Ambassadors
              </a>
              <br />
              111 Cummington Mall, Boston, MA 02215
              <br />
              email:{' '}
              <a href="mailto:bucsambassadors@gmail.com">
                bucsambassadors@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-links footer-layer">
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/copyright/" target="_blank">
              <p>
                <b>© 2021 Trustees of Boston University</b>
              </p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a
              href="https://www.bu.edu/policies/digital-privacy-statement/"
              target="_blank"
            >
              <p>
                <b>Privacy Statement</b>
              </p>
            </a>
          </div>
          <div className="footer-indiv-link">
            <a href="https://www.bu.edu/disability/" target="_blank">
              <p>
                <b>Accessibility</b>
              </p>
            </a>
          </div>
        </div>
        <div className="footer-bucsa footer-layer">
          <a href="/index.html">
            <p>
              <b>© 2021 Boston University Computer Science Ambassadors</b>
            </p>
          </a>
        </div>
        <div className="footer-bu footer-layer">
          <a href="https://www.bu.edu/" target="_blank">
            {/* Graphic as link => Alt attribute indicates path [MWAS] */}
            <img src="/static/images/BU-logo.png" alt="https://www.bu.edu/" />
          </a>
        </div>
      </footer>
      {/* iconify plugin */}
    </div>
  );
}
