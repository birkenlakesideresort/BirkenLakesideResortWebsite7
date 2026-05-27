/* Shared layout components */
const { useEffect, useState, useRef } = React;

function Nav({ route, go, transparent }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change + lock body scroll while open
  useEffect(() => { setMobileOpen(false); }, [route]);
  useEffect(() => {
    const el = document.documentElement;
    if (mobileOpen) {
      el.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      el.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      el.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileOpen]);

  const overDark = transparent && !scrolled;

  const links = [
    { id: 'home',       label: 'Home' },
    { id: 'stay',       label: 'Stay' },
    { id: 'gatherings', label: 'Gatherings' },
    { id: 'weddings',   label: 'Weddings' },
    { id: 'grille',     label: 'The Grille' },
    { id: 'area',       label: 'The Area' },
    { id: 'about',      label: 'About' },
    { id: 'book',       label: 'Bookings' },
    { id: 'contact',    label: 'Contact' },
  ];

  const handleNav = (id) => { setMobileOpen(false); go(id); };

  return (
    <React.Fragment>
      <nav className={`nav ${overDark ? 'over-dark' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-inner">
          <ul className="nav-links">
            {links.slice(0, 4).map(l => (
              <li key={l.id}>
                <button
                  className={route === l.id || (l.id === 'stay' && route === 'cabin') ? 'active' : ''}
                  onClick={() => go(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>

          <div className="nav-logo nav-logo-img" onClick={() => go('home')}>
            <img src="assets/Birken_Submark_Original.png" alt="Birken Lakeside Resort Logo — Since 1906" />
          </div>

          <div className="nav-right">
            <ul className="nav-links" style={{ marginRight: 8 }}>
              {links.slice(4, 7).map(l => (
                <li key={l.id}>
                  <button
                    className={route === l.id ? 'active' : ''}
                    onClick={() => go(l.id)}>{l.label}</button>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-primary"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: '12px 28px' }}>
              Bookings →
            </a>
            <button
              className="nav-hamburger"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Site navigation">
          <div className="mobile-menu-top">
            <div className="mobile-menu-logo">
              <img src="assets/Birken_Submark_Cream.png" alt="Birken Lakeside Resort Logo — Since 1906" />
            </div>
            <button
              className="mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <ul className="mobile-menu-list">
            {links.filter(l => l.id !== 'book').map(l => (
              <li key={l.id}>
                <button
                  className={route === l.id || (l.id === 'stay' && route === 'cabin') ? 'active' : ''}
                  onClick={() => handleNav(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-cta">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Bookings →
            </a>
          </div>
          <div className="mobile-menu-meta">
            (604) 452-3255<br/>
            hello@birkenlakesideresort.ca<br/>
            9179 Pemberton Portage Rd<br/>
            Birken, BC V0N 2L0
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Marquee({ items }) {
  const list = items.concat(items);
  return (
    <div className="marquee">
      <div className="marquee-track">
        {list.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <img src="assets/Birken_Submark_Cream.png" alt="Birken Lakeside Resort Logo — Since 1906" className="footer-logo-img" />
          <p className="footer-tag italic-quote">Woodsmoke. Pristine Water. Good People. Cabins with personalities, on a lake that's been here longer than any of us.</p>
        </div>
        <div className="footer-col">
          <h4>The Place</h4>
          <ul>
            <li onClick={() => go('stay')}>Stay</li>
            <li onClick={() => go('gatherings')}>Gatherings</li>
            <li onClick={() => go('weddings')}>Weddings</li>
            <li onClick={() => go('grille')}>The Grille</li>
            <li onClick={() => go('area')}>The Area</li>
            <li onClick={() => go('about')}>About</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Find Us</h4>
          <ul>
            <li style={{ lineHeight: 1.5 }}>9179 Pemberton Portage Rd<br/>Birken, BC V0N 2L0</li>
            <li>(604) 452-3255</li>
            <li>hello@birkenlakesideresort.ca</li>
            <li style={{ marginTop: 8, fontSize: 14, color: 'rgba(243,234,220,0.55)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>55 min from Whistler · 2.5 hrs from Vancouver</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>More Information</h4>
          <ul>
            <li><a href="/What%20to%20Bring.pdf" target="_blank" rel="noopener noreferrer" className="footer-legal-link">What to Bring</a></li>
            <li><a href="/The%20Local%20Guide.pdf" target="_blank" rel="noopener noreferrer" className="footer-legal-link">The Local Guide</a></li>
            <li><a href="/assets/2026%20Birken%20Lakeside%20Resort_%20Guest%20Terms%20%26%20Conditions.pdf" target="_blank" rel="noopener noreferrer" className="footer-legal-link">Guest Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
          <span>© 1906 — 2026 · Birken Lakeside Resort</span>
          <a
            href="/assets/2026%20Birken%20Lakeside%20Resort_%20Guest%20Terms%20%26%20Conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-legal-link"
          >
            Guest Terms &amp; Conditions
          </a>
        </span>
        <span>Old enough to know better. Wild enough not to care.</span>
      </div>
    </footer>
  );
}

function BookingBar({ onBook }) {
  const [stay, setStay]  = useState({ in: 'Fri, Jul 24', out: 'Mon, Jul 27' });
  const [guests, setGuests] = useState(2);
  const [cabin, setCabin] = useState('Any cabin');

  return (
    <div className="booking-bar">
      <div className="bb-field">
        <span className="bb-label">Check In</span>
        <span className="bb-value">{stay.in}</span>
        <span className="bb-sub">3 PM onwards</span>
      </div>
      <div className="bb-field">
        <span className="bb-label">Check Out</span>
        <span className="bb-value">{stay.out}</span>
        <span className="bb-sub">11 AM</span>
      </div>
      <div className="bb-field">
        <span className="bb-label">Guests</span>
        <span className="bb-value">{guests} {guests === 1 ? 'Guest' : 'Guests'}</span>
        <span className="bb-sub" style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => setGuests(g => Math.max(1, g - 1))} style={{ color: 'var(--cabin)' }}>− Less</button>
          <button onClick={() => setGuests(g => g + 1)} style={{ color: 'var(--cabin)' }}>More +</button>
        </span>
      </div>
      <div className="bb-field">
        <span className="bb-label">Cabin</span>
        <span className="bb-value">{cabin}</span>
        <span className="bb-sub">All cabins available</span>
      </div>
      <a className="bb-btn" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        Check Availability →
      </a>
    </div>
  );
}

function SectionHead({ num, title, intro }) {
  return (
    <div className="section-head">
      <div className="left">
        <span className="section-num">{num}</span>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="right">{intro}</div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, Marquee, BookingBar, SectionHead });
