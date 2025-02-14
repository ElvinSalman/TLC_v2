import logo from './photos/mainLogo.png';
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

import officePhoto from './photos/officebanner.jpg';

import azeFlag from './photos/flags/aze.png';
import rusFlag from './photos/flags/rus.png';
import engFlag from './photos/flags/eng.png';

import ref1 from './photos/refs/changan.jpeg';
import ref2 from './photos/refs/LynkCo.jpeg';
import ref3 from './photos/refs/leapmotors.jpeg';





import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import Hamburger from 'hamburger-react'
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';




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
  const handleLanguageChange = (value) => {
    // const value = event.target.value;
    changeLanguage(value);

    setSelectedLanguage(value);  // Update the selected language
  };

  const handleLanguageChangeForMobile = (event) => {
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




    const elements = document.querySelectorAll(".wow"); // Находим все элементы с классом wow

    // Настроим Intersection Observer
    const observer2 = new IntersectionObserver((entries, observer2) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Если элемент становится видимым и анимация ещё не была выполнена
          if (!entry.target.classList.contains("animate__animated")) {
            // Добавляем классы для анимации
            entry.target.classList.add("animate__animated");
            entry.target.classList.add(entry.target.dataset.animation); // Используем данные атрибута для анимации
          }
        } else {
          // Если элемент выходит из области видимости, убираем классы анимации
          entry.target.classList.remove("animate__animated");
          entry.target.classList.remove(entry.target.dataset.animation);
        }
      });
    }, {
      threshold: 0.5 // Элемент считается видимым, если 50% его содержимого видно на экране
    });




    // Отслеживаем каждый элемент
    elements.forEach(element => {
      observer2.observe(element);
    });

    // Убираем observer2 после использования
    return () => {
      elements.forEach(element => {
        observer2.unobserve(element);
      });

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


  const options = [
    { value: 'az', label: 'AZE', image: azeFlag },
    { value: 'ru', label: 'RUS', image: rusFlag },
    { value: 'en', label: 'ENG', image: engFlag },
  ];

  // Стили для компонента
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      borderBottom: '2px solid white',
      outline: 'none', // Убираем outline
      boxShadow: state.isFocused ? 'none' : 'none', // Убираем тень при фокусе
      position: 'relative',
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
    }),
    menuList: (provided) => ({
      ...provided,
      zIndex: 999999, // Увеличиваем zIndex для списка опций
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff', // Цвет текста для выбранного значения
    }),
  };

  const customStyles2 = {
    control: (provided, state) => ({
      ...provided,
      fontSize: '16px',
      backgroundColor: 'transparent',
      color: '#fff',
      border: 'none',
      borderBottom: '2px solid white',
      outline: 'none', // Убираем outline
      boxShadow: state.isFocused ? 'none' : 'none', // Убираем тень при фокусе
      position: 'relative',
      cursor: 'pointer',
    }),
    option: (provided) => ({
      ...provided,
    }),
    menu: (provided) => ({
      ...provided,
      position: 'relative',
      zIndex: 999999, // Увеличиваем zIndex для списка опций
    }),
    menuList: (provided) => ({
      ...provided,
      zIndex: 999999, // Увеличиваем zIndex для списка опций
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff', // Цвет текста для выбранного значения
    }),
  };

  // Кастомный рендеринг опции с изображением
  const CustomOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div className='menuLi' ref={innerRef} {...innerProps} style={{}}>
        <img src={data.image} alt={data.label} style={{ width: 20, height: 20, marginRight: 10 }} />
        <span style={{ fontSize: 18 }}>{data.label}</span>
      </div>
    );
  };

  const [activeService, setActiveService] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveService(index);
  };

  const handleMouseLeave = () => {
    setActiveService(null);
  };

  return (

    <div className="App">
      {/* <h1 style={{ color: '#fff' }}>{t("test")}</h1> */}
      {isOpen ?
        <Slide >
          <ul className='animate__backInRight' id='mobileMenu'>
            <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: "65%", position: 'relative', zIndex: 9999999 }}>
                <Select
                  value={options.find((option) => option.value === selectedLanguage)} // Привязываем выбранное значение
                  onChange={(selectedOption) => handleLanguageChange(selectedOption.value)} // Обработчик изменения
                  options={options}
                  styles={customStyles2} // Применяем стили
                  isSearchable={false}
                  getOptionLabel={(e) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img src={e.image} alt={e.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                      {e.label}
                    </div>
                  )}
                  components={{ Option: CustomOption }} // Используем кастомную опцию для отображения изображения
                  menuPlacement="top" // Указываем расположение меню
                  menuPosition="relative" // Позиционируем меню в фиксированном положении
                />
              </div>
            </li>
            <li><a onClick={() => { setOpen(false) }} href="#first">{t("menuHome")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#about">{t("menuAbout")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#servicesDiv">{t("menuServices")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#references">{t("menuReferences")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#partnersFirst">{t("menuPartners")}</a></li>
            <li><a onClick={() => { setOpen(false) }} href="#map">{t("addressHead")}</a></li>
          </ul>
        </Slide>
        : <></>}


      <header>
        <div className='logo'>
          <a href="#first">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul>
          <li><a href="#first">{t("menuHome")}</a></li>
          <li><a href="#about">{t("menuAbout")}</a></li>
          <li><a href="#servicesDiv">{t("menuServices")}</a></li>
          <li><a onClick={() => { setOpen(false) }} href="#references">{t("menuReferences")}</a></li>
          <li><a href="#partnersFirst">{t("menuPartners")}</a></li>
          <li><a href="#map">{t("addressHead")}</a></li>
          <li>
            {/* <select
              onChange={handleLanguageChange}
              value={selectedLanguage}
              style={{ fontSize: '16px', padding: "8px 13px ", backgroundColor: 'transparent', color: '#fff', border: 'none', borderBottom: '2px solid white', outline: 'none' }}>
              <option style={{ color: '#fff', backgroundColor: 'rgba(0, 98, 179, 0.705)' }} value='az'>AZE</option>
              <option style={{ color: '#fff', backgroundColor: 'rgba(0, 98, 179, 0.705)' }} value='ru'>RUS</option>
              <option style={{ color: '#fff', backgroundColor: 'rgba(0, 98, 179, 0.705)' }} selected value='en'>ENG</option>
            </select> */}
            <Select
              value={options.find((option) => option.value === selectedLanguage)} // Привязываем выбранное значение
              onChange={(selectedOption) => handleLanguageChange(selectedOption.value)} // Обработчик изменения
              options={options}
              styles={customStyles} // Применяем стили
              isSearchable={false}
              getOptionLabel={(e) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={e.image} alt={e.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                  {e.label}
                </div>
              )}
              components={{ Option: CustomOption }} // Используем кастомную опцию для отображения изображения
            />
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
              <h3>{t("mainTxt12")}</h3>
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
          <div id='services'
          //  className='wow' data-animation="animate__pulse"
          >
            <div
              className={`blockServ ${activeService === 1 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service1} alt="" />
              <h3>{t("service11")}</h3>
              {activeService === 1 && (
                <div className='serviceDetails'>
                  <p>Текст, который открывается при наведении.</p>
                </div>
              )}
            </div>
            <div
              className={`blockServ ${activeService === 2 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service2} alt="" />
              <h3>{t("service12")}</h3>
              {activeService === 2 && (
                <div className='serviceDetails'>
                  <p>Текст, который открывается при наведении.</p>
                </div>
              )}
            </div>
            <div
              className={`blockServ ${activeService === 3 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service3} alt="" />
              <h3>{t("service13")}</h3>
              {activeService === 3 && (
                <div className='serviceDetails'>
                  <p>Текст, который открывается при наведении.</p>
                </div>
              )}
            </div>
            <div
              className={`blockServ ${activeService === 4 ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={service4} alt="" />
              <h3>{t("service14")}</h3>
              {activeService === 4 && (
                <div className='serviceDetails'>
                  <p>Текст, который открывается при наведении.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id='servicesBlocks'>
        <div>
          <p>{t("service21")}</p>
          <div>
            <i className="fa-solid fa-earth-americas wow" data-animation="animate__bounce"></i>
          </div>

          <i className="fa-regular fa-circle"></i>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-truck-ramp-box wow" data-animation="animate__shakeX"></i>
          </div>
          <p>{t("service22")}</p>

          <i className="fa-regular fa-circle"></i>
        </div>
        <div>
          <p>{t("service23")}</p>
          <div>
            <i className="fa-solid fa-boxes-packing wow" data-animation="animate__wobble"></i>
          </div>

          <i className="fa-regular fa-circle"></i>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-handshake wow" data-animation="animate__shakeY"></i>
          </div>
          <p>{t("service24")}</p>

          <i className="fa-regular fa-circle"></i>
        </div>
      </div>

      <div id='references'>
        <h1 className='wow animate__animated animate__fadeInUp'>{t("menuReferences")}</h1>
        <div>
          <img src={ref1} alt="ref1" />
          <img src={ref2} alt="ref2" />
          <img src={ref3} alt="ref3" />
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
        <h1 className='wow animate__animated animate__fadeInUp'>{t("addressHead")}</h1>
        {/* <div className='wow animate__animated animate__fadeInUp' id='lineInMap'></div> */}
        <div id='elageDiv'>
          <div>
            <img src={officePhoto} alt="office" />
          </div>
          <div>
            <iframe className='wow animate__animated animate__fadeInUp' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.735688878328!2d49.85662227548291!3d40.41470575576343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087fef0e167f9%3A0x2d47dbedc1eea9e7!2sChinar%20Park!5e0!3m2!1sru!2saz!4v1739360673313!5m2!1sru!2saz" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <footer>
        <div className='ffooter'>

          <div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h3>{t("addressHead")}</h3>
              <p>{t("address")}</p>
            </div>
          </div>

          <div>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3>{t("menuContact")}</h3>
              <p><a href="mailto:logistics@tlcgroup.az">logistics@tlcgroup.az</a></p>
              <p><a href="tel:+994774500521">+994 77 450 05 21</a></p>
              <p><a target='_blank' href="https://www.instagram.com/tlcgroup_az/">@tlcgroup_az</a></p>
            </div>
          </div>

          <div>
            <div>
              <i className="fa-solid fa-clock"></i>
            </div>
            <div>
              <h3>{t("workTimeHead")}</h3>
              <p>{t("workTime")}</p>
              <p>09:00 - 18:00</p>
            </div>
          </div>

        </div>
        <div className='fsfooter'>
          <h3>TLC GROUP</h3>
          <p>{t("Copyright")}</p>
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
