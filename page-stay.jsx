/* Stay (cabins listing) and Cabin detail */

function Stay({ go }) {
  const [filter, setFilter] = useState('All');
  const types = ['All', 'Cabin', 'Glamping', 'Couples', 'Group'];
  const list = filter === 'All' ? CABINS : CABINS.filter(c => c.type === filter);

  return (
    <div className="page-fade">
      {/* Sub-hero */}
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 02 / Stay</span>
          <h1 style={{ color: 'var(--forest)' }}>
            CABINS.<br/>ONE LAKE.<br/>NO TWO ALIKE.
          </h1>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 28, maxWidth: 640 }}>
            Each one was named for a feeling, then built around it. Pick the one that sounds like the kind of week you've been needing.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '0 40px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="cabin-filters">
            {types.map(t => (
              <button key={t}
                className={filter === t ? 'active' : ''}
                onClick={() => setFilter(t)}>
                {t === 'All' ? 'All cabins' : t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cabin big list */}
      <section style={{ padding: '0 40px 120px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {list.map((c, i) => (
              <CabinRow key={c.id} cabin={c} num={String(i+1).padStart(2, '0')} go={go} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <Marquee items={['Pet friendly', 'Wood stoves', 'Real beds', 'No streaming, just dreaming', 'Open seasonally']} />
    </div>
  );
}

function CabinRow({ cabin, num, go, reverse }) {
  return (
    <article className="cabin-row-article" style={{
      display: 'grid',
      gridTemplateColumns: reverse ? '1fr 1.4fr' : '1.4fr 1fr',
      gap: 0,
      border: '0.5px solid rgba(29,61,45,0.18)',
      background: 'var(--cream)',
    }}>
      <div role="img" aria-label={`${cabin.name} cabin exterior`} style={{
        order: reverse ? 2 : 1,
        backgroundImage: `url(${cabin.ext})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: 460,
      }} />
      <div className="cabin-row-text" style={{
        order: reverse ? 1 : 2,
        padding: '56px 56px 48px',
        display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span className="eyebrow">— Cabin {num} · {cabin.type}</span>
          <span className="pill">From ${cabin.price}/nt</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 5vw, 80px)',
          lineHeight: 0.95, color: 'var(--forest)', letterSpacing: '0.02em',
        }}>{cabin.name}</h2>
        <p className="italic-quote" style={{ fontSize: 19 }}>{cabin.tag}</p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--stone)', maxWidth: 480 }}>{cabin.blurb}</p>
        <ul style={{
          listStyle: 'none', display: 'grid',
          gridTemplateColumns: '1fr 1fr', gap: '4px 24px', marginTop: 4,
        }}>
          {cabin.features.map((f, i) => (
            <li key={i} style={{
              fontFamily: 'var(--ui)', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--forest)',
              padding: '8px 0', borderTop: '0.5px solid rgba(29,61,45,0.15)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span style={{ width: 4, height: 4, background: 'var(--cedar)', borderRadius: '50%' }} />
              {f}
            </li>
          ))}
        </ul>
        <div className="cabin-row-actions" style={{ display: 'flex', gap: 12, marginTop: 18 }}>
          <button className="btn btn-primary" onClick={() => go('book')}>Book {cabin.name} →</button>
          <button className="btn btn-ghost" onClick={() => go('cabin', cabin.id)}>See more</button>
        </div>
      </div>
    </article>
  );
}

function CabinDetail({ cabinId, go }) {
  const cabin = CABINS.find(c => c.id === cabinId) || CABINS[0];
  const others = CABINS.filter(c => c.id !== cabin.id).slice(0, 3);

  return (
    <div className="page-fade">
      <section className="cabin-hero" style={{ padding: 0 }}>
        <div className="cabin-hero-img" role="img" aria-label={`${cabin.name} — ${cabin.tag}`} style={{ backgroundImage: `url(${cabin.ext})` }} />
        <div className="cabin-hero-shade" />
        <div className="cabin-hero-content">
          <div>
            <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— Cabin · {cabin.type}</span>
            <h1 style={{ marginTop: 18 }}>{cabin.name.toUpperCase()}</h1>
            <p className="tagline">{cabin.tag}</p>
          </div>
          <div className="price-card">
            <div className="lbl">From</div>
            <div className="pp">${cabin.price}<span style={{ fontSize: 16, letterSpacing: '0.18em', color: 'var(--mist)' }}> / NIGHT</span></div>
            <div className="sub">2-night minimum · taxes extra</div>
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => go('book')}>Book {cabin.name} →</button>
          </div>
        </div>
      </section>

      {/* Specs row */}
      <section style={{ padding: '64px 40px', background: 'var(--cream)' }}>
        <div className="section-inner" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
          borderTop: '0.5px solid rgba(29,61,45,0.18)',
          borderBottom: '0.5px solid rgba(29,61,45,0.18)',
        }}>
          {[
            { l: 'Sleeps',   v: cabin.sleeps },
            { l: 'Beds',     v: cabin.beds },
            { l: 'Bath',     v: cabin.bath },
            { l: 'Type',     v: cabin.type },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              borderRight: i < 3 ? '0.5px solid rgba(29,61,45,0.18)' : 'none',
            }}>
              <div className="eyebrow">— {s.l}</div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 38,
                color: 'var(--forest)', letterSpacing: '0.02em', marginTop: 6,
              }}>{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + interior */}
      <section style={{ padding: '40px 40px 120px', background: 'var(--cream)' }}>
        <div className="section-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>
          <div>
            <span className="eyebrow">— The Cabin</span>
            <h2 style={{
              fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 4.5vw, 72px)',
              lineHeight: 0.95, color: 'var(--forest)', letterSpacing: '0.02em', marginTop: 14,
            }}>What it feels like inside.</h2>
            <p style={{ fontSize: 19, lineHeight: 1.85, color: 'var(--stone)', marginTop: 24 }}>
              {cabin.blurb}
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.85, color: 'var(--stone)', marginTop: 16 }}>
              You'll find fresh linens, a stocked kitchen kit, the kettle on the stove. The cabin sleeps {cabin.sleeps} in a {cabin.beds.toLowerCase()} configuration.
            </p>
            <ul style={{
              listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '4px 24px', marginTop: 28,
            }}>
              {cabin.features.map((f, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--ui)', fontSize: 13, fontWeight: 600, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--forest)',
                  padding: '10px 0', borderTop: '0.5px solid rgba(29,61,45,0.15)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span style={{ width: 4, height: 4, background: 'var(--cedar)', borderRadius: '50%' }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div role="img" aria-label={`Interior of ${cabin.name}`} style={{
            backgroundImage: `url(${cabin.int})`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            minHeight: 640,
          }} />
        </div>
      </section>

      {/* Other cabins */}
      <section className="dark-section">
        <div className="section-inner">
          <SectionHead
            num="— More Cabins"
            title={<>The other six.</>}
            intro="Each one different. Pick the one that sounds like the kind of week you need." />
          <div className="cabin-grid">
            {others.map((c, i) => (
              <CabinCard key={c.id} cabin={c} num={String(i+1).padStart(2, '0')}
                className="cabin-third" go={go} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-ghost-light" onClick={() => go('stay')}>See all cabins →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Stay, CabinDetail, CabinRow });
