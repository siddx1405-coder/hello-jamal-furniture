import { useEffect, useState } from 'react'
import './index.css'

import curtainImage from './assets/projects/project-1.png'
import mediaWallImage from './assets/projects/project-3.png'
import wardrobeImage from './assets/projects/project-4.png'
import bedroomImage from './assets/projects/project-5.png'
import sofaImage from './assets/projects/project-6.png'
import majlisImage from './assets/projects/project-10.png'
import livingRoomImage from './assets/projects/project-11.png'
import classicRoomImage from './assets/projects/project-12.png'
import floorMajlisImage from './assets/projects/project-13.png'
import cabinetryImage from './assets/projects/project-14.png'
import dressingImage from './assets/projects/project-15.png'

type Language = 'ar' | 'en'

const content = {
  ar: {
    dir: 'rtl' as const,
    langLabel: 'English',
    nav: ['الرئيسية', 'خدماتنا', 'أعمالنا', 'تواصل معنا'],
    eyebrow: 'تصاميم مخصصة • تنفيذ متقن',
    heroTitle: 'نصنع لك منزلاً يشبه ذوقك',
    heroCopy:
      'حلول متكاملة للأثاث والديكور في قطر، من الفكرة والتصميم إلى التصنيع والتركيب بأعلى معايير الجودة.',
    call: 'اتصل الآن',
    whatsapp: 'تواصل عبر واتساب',
    scroll: 'اكتشف خدماتنا',
    aboutKicker: 'أهلاً بكم في هلو جمال للأثاث',
    aboutTitle: 'حِرفية تُرى في كل تفصيل',
    aboutCopy:
      'نقدّم حلولاً مصممة بعناية للمنازل والمجالس والمساحات التجارية. نجمع بين الخامات المختارة، والحرفية الدقيقة، والتصميم العصري لنحوّل رؤيتك إلى مساحة مريحة وجميلة تدوم.',
    stats: [
      ['حلول متكاملة', 'من التصميم إلى التركيب'],
      ['تفصيل حسب الطلب', 'مقاسات وألوان تناسب مساحتك'],
      ['خدمة داخل قطر', 'نصل إليك أينما كنت'],
    ],
    servicesKicker: 'ما نقدمه',
    servicesTitle: 'كل ما تحتاجه لمساحة متكاملة',
    servicesCopy: 'خدمات احترافية مصممة لتمنح منزلك الراحة والجمال في كل زاوية.',
    services: [
      ['تفصيل الكنب', 'تصميم وتصنيع الكنب والمجالس حسب الطلب بخامات مريحة وتشطيبات راقية.'],
      ['السجاد', 'توريد وتركيب السجاد والموكيت بتشكيلة من الألوان والنقوش المناسبة لمساحتك.'],
      ['الستائر', 'ستائر عصرية وكلاسيكية مصممة بدقة لتمنحك الخصوصية وأناقة متكاملة.'],
      ['الخزائن', 'خزائن ملابس ووحدات تخزين عملية بتصاميم ذكية وتفصيل حسب المساحة.'],
      ['ورق الجدران', 'خيارات متنوعة من ورق الجدران لإضافة شخصية وعمق إلى غرفك.'],
      ['الدهانات', 'دهانات داخلية وخارجية باحترافية عالية وتشطيبات نظيفة تدوم طويلاً.'],
      ['الباركيه', 'توريد وتركيب أرضيات الباركيه بلمسات دافئة وتشطيب احترافي.'],
    ],
    projectsKicker: 'أعمال مختارة',
    projectsTitle: 'مساحات صنعناها بعناية',
    projectsCopy: 'نماذج من أعمالنا في الأثاث والتصميم الداخلي والتنفيذ حسب الطلب.',
    projectNames: [
      'مجلس عربي متكامل',
      'غرفة معيشة كلاسيكية',
      'خزائن بتصميم عصري',
      'غرفة نوم متكاملة',
      'وحدة تلفاز مخصصة',
      'جلسة عربية أرضية',
      'تفصيل كنب فاخر',
      'خزانة وتسريحة مدمجة',
      'ستائر حسب الطلب',
    ],
    ctaKicker: 'لنبدأ مشروعك',
    ctaTitle: 'هل لديك فكرة لمساحتك؟',
    ctaCopy: 'تواصل معنا اليوم لمناقشة التصميم والمقاسات والحصول على عرض مناسب.',
    contactKicker: 'تواصل معنا',
    contactTitle: 'نحن بالقرب منك',
    phone: 'الهاتف وواتساب',
    email: 'البريد الإلكتروني',
    location: 'الموقع',
    locationValue: 'سوق الحراج، نجمة، الدوحة، قطر',
    hours: 'نسعد باستقبال استفساراتكم والرد على طلباتكم عبر الهاتف أو واتساب.',
    footerCopy: 'أثاث وديكور بتفصيل يليق بمنزلك.',
    rights: 'جميع الحقوق محفوظة',
    madeBy: 'تصميم وتطوير',
    cr: 'س.ت: ١٨٢٩٥٥',
  },
  en: {
    dir: 'ltr' as const,
    langLabel: 'العربية',
    nav: ['Home', 'Services', 'Projects', 'Contact'],
    eyebrow: 'Bespoke design • Precise execution',
    heroTitle: 'A home crafted around your taste',
    heroCopy:
      'Complete furniture and interior solutions in Qatar—from concept and design to manufacturing and installation.',
    call: 'Call now',
    whatsapp: 'WhatsApp us',
    scroll: 'Explore our services',
    aboutKicker: 'Welcome to Hello Jamal Furniture',
    aboutTitle: 'Craftsmanship in every detail',
    aboutCopy:
      'We create considered solutions for homes, majlis spaces, and commercial interiors. Selected materials, precise craftsmanship, and contemporary design come together to turn your vision into a comfortable, beautiful space made to last.',
    stats: [
      ['Complete solutions', 'From design to installation'],
      ['Made to measure', 'Sizes and finishes for your space'],
      ['Across Qatar', 'We come to you'],
    ],
    servicesKicker: 'What we do',
    servicesTitle: 'Everything for a complete interior',
    servicesCopy: 'Professional services designed to bring comfort and character to every corner.',
    services: [
      ['Custom sofas', 'Bespoke sofas and majlis seating with comfortable materials and refined finishing.'],
      ['Carpets', 'Supply and installation of carpets in a considered range of colours and patterns.'],
      ['Curtains', 'Modern and classic curtains tailored for privacy and a polished interior.'],
      ['Cupboards', 'Practical wardrobes and storage units made precisely for your space.'],
      ['Wallpaper', 'A versatile wallpaper selection to add personality and depth to your rooms.'],
      ['Painting', 'Professional interior and exterior painting with clean, durable finishes.'],
      ['Parquet', 'Supply and installation of warm, beautifully finished parquet flooring.'],
    ],
    projectsKicker: 'Selected work',
    projectsTitle: 'Spaces made with care',
    projectsCopy: 'A look at our bespoke furniture, interior design, and fit-out work.',
    projectNames: [
      'Complete Arabic Majlis',
      'Classic Living Room',
      'Contemporary Cabinetry',
      'Complete Bedroom',
      'Custom Media Wall',
      'Floor Majlis Seating',
      'Bespoke Sofa',
      'Built-in Dressing Unit',
      'Made-to-measure Curtains',
    ],
    ctaKicker: 'Start your project',
    ctaTitle: 'Have an idea for your space?',
    ctaCopy: 'Contact us today to discuss the design, measurements, and a tailored quotation.',
    contactKicker: 'Get in touch',
    contactTitle: 'We are close by',
    phone: 'Phone & WhatsApp',
    email: 'Email',
    location: 'Location',
    locationValue: 'Souq Al Haraj, Najma, Doha, Qatar',
    hours: 'We are happy to answer your questions and requests by phone or WhatsApp.',
    footerCopy: 'Furniture and interiors made for your home.',
    rights: 'All rights reserved',
    madeBy: 'Designed & developed by',
    cr: 'CR: 182955',
  },
}

const serviceIcons = [
  <path d="M4 12V9a3 3 0 0 1 6 0v3m4 0V9a3 3 0 0 1 6 0v3M4 12h16v7H4v-7Zm0 3H2m20 0h-2" />,
  <path d="M4 6h16v11H4zM7 17v3m10-3v3M7 9h10m-8 3h6" />,
  <path d="M5 3h14M7 3v18m10-18v18M7 7c2.5 1.5 2.5 8.5 0 10m10-10c-2.5 1.5-2.5 8.5 0 10" />,
  <path d="M5 3h14v18H5zM12 3v18m-2-9h.01m4 0h.01" />,
  <path d="M4 4h16v16H4zM4 9h16M9 4v16m6-11v11M9 15h6" />,
  <path d="m5 19 8-8m-6-2 4 4m1-8 3-2 4 4-2 3-5-5ZM4 20h7" />,
  <path d="M3 7h18M3 12h18M3 17h18M7 7v5m10 0v5m-5-10v5m-5 5v3m10-3v3" />,
]

const projectImages = [
  majlisImage,
  classicRoomImage,
  cabinetryImage,
  bedroomImage,
  mediaWallImage,
  floorMajlisImage,
  sofaImage,
  dressingImage,
  curtainImage,
]

function Icon({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      {children}
    </svg>
  )
}

export default function App() {
  const [language, setLanguage] = useState<Language>('ar')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const t = content[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = t.dir
    document.title = isArabic ? 'هلو جمال للأثاث | قطر' : 'Hello Jamal Furniture | Qatar'
  }, [language, t.dir, isArabic])

  const sections = ['home', 'services', 'projects', 'contact']

  return (
    <main dir={t.dir} className={isArabic ? 'font-arabic' : 'font-english'}>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>{t.cr}</span>
          <a href="tel:+97430132117" dir="ltr">
            +974 3013 2117
          </a>
        </div>
      </div>

      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="shell nav-wrap">
          <a href="#home" className="brand" aria-label={isArabic ? 'الرئيسية' : 'Home'}>
            <span className="brand-mark">HJ</span>
            <span>
              <strong>{isArabic ? 'هلو جمال' : 'HELLO JAMAL'}</strong>
              <small>{isArabic ? 'للأثاث والديكور' : 'FURNITURE & INTERIORS'}</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${sections[index]}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="lang-mobile" onClick={() => setLanguage(isArabic ? 'en' : 'ar')}>
              {t.langLabel}
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="lang-switch"
              onClick={() => setLanguage(isArabic ? 'en' : 'ar')}
              aria-label="Change language"
            >
              <Icon><path d="M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18M4.5 7h15m-15 10h15" /></Icon>
              {t.langLabel}
            </button>
            <button
              className={`menu-button ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label="Menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="hero-text">{t.heroCopy}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="tel:+97430132117">
                <Icon><path d="M7 4h3l1.5 4-2 1.5a14 14 0 0 0 5 5l1.5-2 4 1.5v3a3 3 0 0 1-3 3C9.8 19.5 4.5 14.2 4 7a3 3 0 0 1 3-3Z" /></Icon>
                {t.call}
              </a>
              <a
                className="button button-outline"
                href="https://wa.me/97430132117"
                target="_blank"
                rel="noreferrer"
              >
                <Icon><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 3 2 4.5 5 5" /></Icon>
                {t.whatsapp}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-main">
              <img src={classicRoomImage} alt={t.projectNames[1]} />
            </div>
            <div className="hero-image-small">
              <img src={livingRoomImage} alt={t.projectNames[0]} />
            </div>
            <div className="hero-badge">
              <span>100%</span>
              <small>{isArabic ? 'تفصيل حسب الطلب' : 'Bespoke work'}</small>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#services">
          <span>{t.scroll}</span>
          <Icon><path d="m7 10 5 5 5-5" /></Icon>
        </a>
      </section>

      <section className="about section">
        <div className="shell about-grid">
          <div className="about-image">
            <img src={dressingImage} alt={t.projectNames[7]} loading="lazy" />
            <div className="corner-frame" />
          </div>
          <div className="about-copy">
            <p className="section-kicker">{t.aboutKicker}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutCopy}</p>
            <div className="about-features">
              {t.stats.map(([title, text], index) => (
                <div className="feature" key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section">
        <div className="shell">
          <div className="section-heading centered">
            <p className="section-kicker">{t.servicesKicker}</p>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesCopy}</p>
          </div>
          <div className="services-grid">
            {t.services.map(([title, description], index) => (
              <article className="service-card" key={title}>
                <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="service-icon">
                  <Icon>{serviceIcons[index]}</Icon>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects section">
        <div className="shell">
          <div className="projects-head">
            <div>
              <p className="section-kicker">{t.projectsKicker}</p>
              <h2>{t.projectsTitle}</h2>
            </div>
            <p>{t.projectsCopy}</p>
          </div>
          <div className="project-grid">
            {projectImages.map((image, index) => (
              <figure className={`project-card project-${index + 1}`} key={image}>
                <img src={image} alt={t.projectNames[index]} loading="lazy" />
                <figcaption>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{t.projectNames[index]}</strong>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-bg" style={{ backgroundImage: `url(${wardrobeImage})` }} />
        <div className="shell cta-content">
          <p className="section-kicker">{t.ctaKicker}</p>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaCopy}</p>
          <div className="hero-actions">
            <a
              className="button button-gold"
              href="https://wa.me/97430132117"
              target="_blank"
              rel="noreferrer"
            >
              <Icon><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 3 2 4.5 5 5" /></Icon>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <div className="shell contact-grid">
          <div className="contact-intro">
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.hours}</p>
          </div>
          <div className="contact-cards">
            <a href="tel:+97430132117" className="contact-card">
              <Icon><path d="M7 4h3l1.5 4-2 1.5a14 14 0 0 0 5 5l1.5-2 4 1.5v3a3 3 0 0 1-3 3C9.8 19.5 4.5 14.2 4 7a3 3 0 0 1 3-3Z" /></Icon>
              <span><small>{t.phone}</small><strong dir="ltr">+974 3013 2117</strong></span>
            </a>
            <a href="mailto:akterjaman1985@gmail.com" className="contact-card">
              <Icon><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></Icon>
              <span><small>{t.email}</small><strong>akterjaman1985@gmail.com</strong></span>
            </a>
            <a
              href="https://maps.google.com/?q=Souq+Al+Haraj+Najma+Doha+Qatar"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <Icon><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>
              <span><small>{t.location}</small><strong>{t.locationValue}</strong></span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a href="#home" className="brand brand-light">
              <span className="brand-mark">HJ</span>
              <span>
                <strong>{isArabic ? 'هلو جمال' : 'HELLO JAMAL'}</strong>
                <small>{isArabic ? 'للأثاث والديكور' : 'FURNITURE & INTERIORS'}</small>
              </span>
            </a>
            <p>{t.footerCopy}</p>
          </div>
          <div className="footer-contact">
            <a href="tel:+97430132117" dir="ltr">+974 3013 2117</a>
            <a href="mailto:akterjaman1985@gmail.com">akterjaman1985@gmail.com</a>
            <span>{t.locationValue}</span>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Hello Jamal Furniture. {t.rights}.</span>
          <span>{t.cr}</span>
          <span>
            {t.madeBy}{' '}
            <a href="https://www.xenosysweb.com/" target="_blank" rel="noreferrer">
              @Xenosys Qatar
            </a>{' '}
            <a href="tel:+97470643918" dir="ltr">+974 7064 3918</a>
          </span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/97430132117"
        target="_blank"
        rel="noreferrer"
        aria-label={t.whatsapp}
      >
        <Icon><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" /><path d="M9 8.5c.5 3 2 4.5 5 5" /></Icon>
      </a>
    </main>
  )
}
