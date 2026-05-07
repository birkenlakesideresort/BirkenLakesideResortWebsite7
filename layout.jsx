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
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
            <img src="assets/logo.png" alt="Birken Lakeside Resort Logo — Since 1906" />
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
            <button
              className="btn btn-primary"
              style={{ padding: '12px 28px' }}
              onClick={() => go('book')}>
              Bookings →
            </button>
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
              <img src="assets/logo.png" alt="Birken Lakeside Resort Logo" />
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
            {links.map(l => (
              <li key={l.id}>
                <button
                  className={route === l.id || (l.id === 'stay' && route === 'cabin') ? 'active' : ''}
                  onClick={() => handleNav(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-cta">
            <button className="btn btn-primary" onClick={() => handleNav('book')}>
              Bookings →
            </button>
          </div>
          <div className="mobile-menu-meta">
            (604) 452-3255<br/>
            hello@birkenlakeside.ca<br/>
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
          <img src="assets/logo.png" alt="Birken Lakeside Resort — Since 1906" className="footer-logo-img" />
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
            <li>hello@birkenlakeside.ca</li>
            <li style={{ marginTop: 8, fontSize: 14, color: 'rgba(243,234,220,0.55)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>55 min from Whistler · 2.5 hrs from Vancouver</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>The Mailing List</h4>
          <p style={{ fontSize: 15, color: 'rgba(243,234,220,0.7)', lineHeight: 1.7, marginBottom: 14 }}>
            Quarterly. Sometimes a recipe. Never spam.
          </p>
          <div style={{ display: 'flex', borderBottom: '0.5px solid rgba(243,234,220,0.3)' }}>
            <input
              type="email"
              placeholder="you@example.com"
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: 'var(--cream)', fontSize: 15, padding: '10px 0', fontFamily: 'var(--body)',
              }}
            />
            <button style={{
              fontFamily: 'var(--ui)', fontSize: 12, fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--cedar)', padding: '10px 0',
            }}>Send →</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 1906 — 2026 · Birken Lakeside Resort</span>
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
      <button className="bb-btn" onClick={onBook}>
        Check Availability →
      </button>
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
