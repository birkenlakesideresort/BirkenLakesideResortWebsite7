/* App shell — routing */
const { useState, useEffect } = React;

function App() {
  const VALID_ROUTES = ['home','stay','cabin','gatherings','weddings','grille','area','about','book','contact','404'];

  const parseHash = () => {
    const h = (window.location.hash || '').replace(/^#\/?/, '').trim();
    if (!h) return { route: 'home', cabinId: null };
    const [r, id] = h.split('/');
    if (r === 'cabin' && id) return { route: 'cabin', cabinId: id };
    if (VALID_ROUTES.includes(r)) return { route: r, cabinId: null };
    return { route: '404', cabinId: null };
  };

  const initial = parseHash();
  const [route, setRoute] = useState(initial.route);
  const [cabinId, setCabinId] = useState(initial.cabinId);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [route, cabinId]);

  useEffect(() => {
    const onHash = () => {
      const next = parseHash();
      setRoute(next.route);
      setCabinId(next.cabinId);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    loader.classList.add('is-fading');
    const t = setTimeout(() => loader.remove(), 500);
    return () => clearTimeout(t);
  }, []);

  const go = (r, id) => {
    if (r === 'cabin') {
      setCabinId(id); setRoute('cabin');
      window.history.pushState(null, '', '#/cabin/' + id);
    } else {
      setRoute(r);
      window.history.pushState(null, '', r === 'home' ? '#/' : '#/' + r);
    }
  };

  const transparent = route === 'home' || route === 'cabin' || route === 'weddings';

  let page;
  switch (route) {
    case 'home':       page = <Home go={go} />; break;
    case 'stay':       page = <Stay go={go} />; break;
    case 'cabin':      page = <CabinDetail cabinId={cabinId} go={go} />; break;
    case 'gatherings': page = <Gatherings go={go} />; break;
    case 'weddings':   page = <Weddings go={go} />; break;
    case 'grille':     page = <Grille go={go} />; break;
    case 'area':       page = <Area go={go} />; break;
    case 'about':      page = <About go={go} />; break;
    case 'book':       page = <Book go={go} />; break;
    case 'contact':    page = <Contact go={go} />; break;
    case '404':        page = <NotFound go={go} />; break;
    default:           page = <Home go={go} />;
  }

  return (
    <div className="app" data-screen-label={route}>
      <Nav route={route} go={go} transparent={transparent} />
      <main style={{ flex: 1 }}>{page}</main>
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
