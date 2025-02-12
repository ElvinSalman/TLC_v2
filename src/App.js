import logo from './photos/logo (2).png';
import main from './photos/mainLog1.jpeg';
import about from './photos/aboutPhoto2.jpg';
import service1 from './photos/service1.jpg';
import service2 from './photos/service2.jpg';
import service3 from './photos/service3.png';
import service4 from './photos/service4.jpg';
import servicesBack from './photos/ship.jpg';
// import serviceLogo1 from './photos/icon 1.png'
import slider11 from './photos/slider1/avatr logo png.png';
import slider12 from './photos/slider1/Changan logo.png';
import slider13 from './photos/slider1/Lynk-Co-Logo.png';
import slider14 from './photos/slider1/byd logo.png';
import slider15 from './photos/slider1/immotors png 5.png';
import slider16 from './photos/slider1/leapmotor.png';
import slider17 from './photos/slider1/li auto logo.png';
import slider18 from './photos/slider1/skoda logo png.png';
import slider19 from './photos/slider1/skyvell logo.png';

import mapImg from './photos/Map.png';

import slider21 from './photos/slider2/alfa pack.png';
import slider22 from './photos/slider2/buxar logo.png';
import slider23 from './photos/slider2/imago logo.png';
import slider24 from './photos/slider2/Medsol_logo_0-removebg-preview.png';
import slider25 from './photos/slider2/stp logo.png';
import slider26 from './photos/slider2/unico logo.png';




import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Hamburger from 'hamburger-react'
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';




const responsiveThird = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};


function App() {

  const [isOpen, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default value
  const handleLanguageChange = (event) => {
    const value = event.target.value;
    changeLanguage(value);

    setSelectedLanguage(value);  // Update the selected language
  };

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Когда элемент появляется в видимой области
          }
        });
      },
      { threshold: 0.5 } // Элемент должен быть на 50% видимым, чтобы запустился процесс
    );

    if (counterRef.current) {
      observer.observe(counterRef.current); // Начинаем отслеживать этот элемент
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current); // Очищаем наблюдатель
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return; // Если элемент не в пределах видимости, не начинаем анимацию

    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 3000) {
          return prevCount + 10; // Увеличиваем число
        } else {
          clearInterval(interval); // Останавливаем интервал
          return 3000; // Максимальное значение
        }
      });
    }, 10);

    const interval2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < 10) {
          return prevCount + 1; // Увеличиваем число
        } else {
          clearInterval(interval2); // Останавливаем интервал
          return 10; // Максимальное значение
        }
      });
    }, 100);

    return () => { clearInterval(interval); clearInterval(interval2); }; // Очистка интервала, когда компонент размонтируется или isInView изменится


  }, [isInView]);


  return (

    <div className="App">
      {/* <h1 style={{ color: '#fff' }}>{t("test")}</h1> */}
      {isOpen ?
        <Slide >
          <ul className='animate__backInRight' id='mobileMenu'>
            <li>
              <select
                onChange={handleLanguageChange}
                value={selectedLanguage}
                style={{ boxShadow: 'none', fontSize: '18px', padding: "8px 13px ", backgroundColor: 'rgb(0, 35, 64)', color: '#fff', border: 'none', borderBottom: '2px solid white', outline: 'none' }}>
                <option value='az'>AZ</option>
                <option value='ru'>RU</option>
                <option selected value='en'>EN</option>
              </select>
            </li>
            <li><a onClick={() => { setOpen(false) }} href="#first">{t("menuHome")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#about">{t("menuAbout")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#servicesDiv">{t("menuServices")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#partnersFirst">{t("menuPartners")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#map">{t("menuMap")}</a></li>
          </ul>
        </Slide>
        : <></>}


      <header>
        <div className='logo'>
          <img src={logo} alt="logo" />
          <p>TLC GROUP</p>
        </div>
        <ul>
          <li><a href="#first">{t("menuHome")}</a></li>
          <li><a href="#about">{t("menuAbout")}</a></li>
          <li><a href="#servicesDiv">{t("menuServices")}</a></li>
          <li><a href="#partnersFirst">{t("menuPartners")}</a></li>
          <li><a href="#map">{t("menuMap")}</a></li>
          <li>
            <select
              onChange={handleLanguageChange}
              value={selectedLanguage}
              style={{ fontSize: '16px', padding: "8px 13px ", backgroundColor: 'transparent', color: '#fff', border: 'none', borderBottom: '2px solid white', outline: 'none' }}>
              <option style={{ color: 'black' }} value='az'>AZ</option>
              <option style={{ color: 'black' }} value='ru'>RU</option>
              <option style={{ color: 'black' }} selected value='en'>EN</option>
            </select>
          </li>
        </ul>
        <div id='hamMenu'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

      </header>
      <div id='first'>

        <Fade triggerOnce={true}>
          <div id='mainBlock'>
            <img src={main} alt="" />
            <div className='cover'></div>
            <div id='mainTxt'>
              <h1>{t("mainTxt1")}</h1>
              <div></div>
              <p>{t("mainTxt2")}</p>
            </div>
          </div>
        </Fade >
      </div>

      {/* <Zoom> */}
      <div className='wow animate__animated animate__slideInUp' id='about'>

        <div>
          <h1>{t("menuAbout")}</h1>
          <div id='line'></div>
          <p>
            {t("aboutTxt1")}
          </p>
          <p>
            {t("aboutTxt2")}
          </p>
        </div>
      </div>

   

      <div id='servicesDiv'>
        <div id='servicesMainContainer1'>
          <h1 className='wow animate__animated animate__fadeInUp'>{t("menuServices")}</h1>
          <div className='wow animate__animated animate__fadeInUp' id='lineInServices'></div>
          <div id='services'>
            <div className='blockServ wow animate__animated animate__slideInUp'>
              <img src={service1} alt="" />
              <h3>{t("service11")}</h3>
            </div>
            <div className='blockServ wow animate__animated animate__slideInUp'>
              <img src={service2} alt="" />
              <h3>{t("service12")}</h3>
            </div>
            <div className='blockServ wow animate__animated animate__slideInUp'>
              <img src={service3} alt="" />
              <h3>{t("service13")}</h3>
            </div>
            <div className='blockServ wow animate__animated animate__slideInUp'>
              <img src={service4} alt="" />
              <h3>{t("service14")}</h3>
              {/* <p>Эффективные методики лечения, основанные на передовых медицинских исследованиях</p> */}
            </div>
          </div>
        </div>
      </div>

      <div id='servicesBlocks'>
        <div>
          <p>{t("service21")}</p>
          <div>
            <i className="fa-solid fa-earth-americas wow animate__animated animate__flip"></i>
          </div>

          <i class="fa-regular fa-circle"></i>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-truck-ramp-box wow animate__animated animate__fadeInLeft"></i>
          </div>
          <p>{t("service22")}</p>

          <i class="fa-regular fa-circle"></i>
        </div>
        <div>
          <p>{t("service23")}</p>
          <div>
            <i className="fa-solid fa-boxes-packing wow animate__animated animate__bounceInUp"></i>
          </div>

          <i class="fa-regular fa-circle"></i>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-handshake wow animate__animated animate__shakeY"></i>
          </div>
          <p>{t("service24")}</p>

          <i class="fa-regular fa-circle"></i>
        </div>
      </div>

      <div id='partnersFirst' className='partners'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuPartners")}</h1>
        <div className='wow animate__animated animate__slideInUp' id='lineInpartners'></div>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={0}
          transitionDuration={2500}
          infinite={true}
          customTransition={'transform 3s linear'}
          containerClass="carousel-container"
          responsive={responsiveThird}
          arrows={false}>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider11} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider12} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider13} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider14} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider15} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider16} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider17} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider18} alt="" />
          </div>
          <div className='partnerDiv'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider19} alt="" />
          </div>
        </Carousel>
      </div>

      <div ref={counterRef} id='someInfo'>
        <div className='fInfoDiv'>
          <div>
            <i className="fa-solid fa-box"></i>
            <div>
              <h1>{count < 3000 ? count : '3K+'}</h1>
              <p>{t("count1Txt")}</p>
            </div>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h1>{count2 < 10 ? count2 : '10+'}</h1>
              <p>{t("count2Txt")}</p>
            </div>
          </div>
        </div>
        <div>
          <img src={mapImg} alt="" />
        </div>
      </div>

      <div className='partners'>
        <Carousel
          autoPlay={true}
          autoPlaySpeed={0}
          transitionDuration={2500}
          infinite={true}
          customTransition={'transform 3s linear'}
          containerClass="carousel-container"
          responsive={responsiveThird}
          arrows={false}>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider21} alt="" />
          </div>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider22} alt="" />
          </div>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider23} alt="" />
          </div>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider24} alt="" />
          </div>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider25} alt="" />
          </div>
          <div className='partnerDiv second'>
            <div style={{ position: "absolute", top: 0, left: 0, height: '100%', width: '100%', backgroundColor: ' rgba(255, 255, 255, 0)' }}></div>
            <img src={slider26} alt="" />
          </div>
        </Carousel>
      </div>

      <div id='map'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuMap")}</h1>
        {/* <div className='wow animate__animated animate__fadeInUp' id='lineInMap'></div> */}
        <div id='elageDiv'>
          <div>
            <div><div><i className="fa-solid fa-phone"></i></div> <a href="tel:+994774500521">+994 77 450 05 21</a></div>
            <div><div><i className="fa-solid fa-envelope"></i></div> <a href="mailto:logistics@tlcgroup.az">logistics@tlcgroup.az</a></div>
            <div><div><i class="fa-brands fa-square-instagram"></i></div> <a target='_blank' href="https://www.instagram.com/tlcgroup_az/">@tlcgroup_az</a></div>
            <div><div><i className="fa-solid fa-location-dot"></i></div> <span>Chinar Park Business Center , Baku , Azerbaijan</span></div>
          </div>
          <div>
            <iframe className='wow animate__animated animate__fadeInUp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.735688878328!2d49.85662227548291!3d40.41470575576343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087fef0e167f9%3A0x2d47dbedc1eea9e7!2sChinar%20Park!5e0!3m2!1sru!2saz!4v1739360673313!5m2!1sru!2saz" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <footer>
        <div className='ffooter'>
          <h3>TLC GROUP</h3>
          <p>{t("Copyright")}</p>
        </div>
        <div className='sfooter'>
          <ul>
            <li><a href="#first">{t("menuHome")}</a></li>
            <li><a href="#about">{t("menuAbout")}</a></li>
            <li><a href="#servicesDiv">{t("menuServices")}</a></li>
          </ul>
          <ul>
          <li><a href="#partnersFirst">{t("menuPartners")}</a></li>
          <li><a href="#map">{t("menuMap")}</a></li>
          </ul>
        </div>
      </footer>

      <div id='contact'>
        <a target='_blank' href="https://wa.me/994774500518">
          <i style={{ color: '#fff', fontSize: 36 }} className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    </div>

  );
}

export default App;
