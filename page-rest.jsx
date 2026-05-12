/* Gatherings, Weddings, Grille, Area, About, Book */

function Gatherings({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 03 / Gatherings</span>
          <h1 style={{ color: 'var(--forest)' }}>BRING THE<br/>WHOLE CREW.</h1>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 28, maxWidth: 680 }}>
            Whole-resort buyouts. Family reunions. Founder offsites that won't feel like one. The meeting hall, all the cabins, the dock, the firepit. Yours for as long as you book.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 0', background: 'var(--cream)' }}>
        <div className="alt-block" style={{ maxWidth: 1440, margin: '0 auto' }}>
          <div className="alt-img" role="img" aria-label="Interior of the resort meeting hall — wood-panelled room with round tables, a piano, foosball table, and fairy lights" style={{ backgroundImage: 'url(assets/meeting-hall-int.jpeg)' }} />
          <div className="alt-text">
            <span className="eyebrow">— The Meeting Hall</span>
            <h3>The hub of any group booking.</h3>
            <p>Projector, sound system, a screen that actually works. Space for 30 to sit, present, and argue the afternoon away. Included in site buyout.</p>
            <ul>
              <li>Projector + screen</li><li>Sound system</li>
              <li>Wood stove + AC</li>
              <li>A/V ready</li><li>Group hub</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="section-inner">
          <SectionHead
            num="— Buyouts"
            title={<>Take the<br/>whole place.</>}
            intro="The cabins, the bunkhouse, the meeting hall, the lake dock and the firepit. Your group, our property, no other guests. Three-night minimum on buyouts." />

          <div className="threeup">
            <div className="threeup-col">
              <span className="threeup-num">8–18</span>
              <h3 className="threeup-title">Small group</h3>
              <p className="threeup-body">A handful of cabins + the bunkhouse. Right-size for an offsite of 8 to 18 humans. Sleeping included in site buyout.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">18–32</span>
              <h3 className="threeup-title">Full property</h3>
              <p className="threeup-body">Every cabin, every bed, every chair on the deck. We bring in extra cooks for The Grille if you want full meal service.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">+</span>
              <h3 className="threeup-title">Day-only events</h3>
              <p className="threeup-body">Workshops, retreats, day-rate rentals of the meeting hall and the lakeside deck. Bring catering or use ours.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="— What's Included"
            title={<>What's here<br/>for your group.</>}
            intro="It comes with the place. We don't charge extra for what was already going to be on." />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '0.5px solid rgba(29,61,45,0.18)',
          }}>
            {[
              { l: 'Lakeside firepit', d: 'Stocked, swept, lit on request.' },
              { l: 'Canoes + kayaks',  d: 'Three of each. PFDs in the boathouse.' },
              { l: 'Sound system',     d: 'In the meeting hall. Bring the playlist.' },
              { l: 'Coffee',           d: 'Local beans ground each morning.' },
              { l: 'Linens + towels',  d: 'Crisp, white, fresh on arrival.' },
              { l: 'Catered meals',    d: 'Optional. Add The Grille team to your booking.' },
              { l: 'A/V for talks',    d: 'Projector, screen, mics in the meeting hall.' },
              { l: 'A real human',     d: 'The crew is on site. Texts back fast.' },
            ].map((x, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                borderRight: i % 4 !== 3 ? '0.5px solid rgba(29,61,45,0.18)' : 'none',
                borderBottom: '0.5px solid rgba(29,61,45,0.18)',
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--forest)',
                  letterSpacing: '0.02em', marginBottom: 8,
                }}>{x.l}</div>
                <div style={{ fontSize: 15, color: 'var(--stone)', lineHeight: 1.6 }}>{x.d}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn btn-primary" onClick={() => go('book')}>Enquire about a buyout →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Weddings({ go }) {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-img" role="img" aria-label="Outdoor wedding ceremony set in a cedar forest clearing at Birken Lakeside Resort, with wooden chairs and a fabric-draped arch overlooking Gates Lake" style={{ backgroundImage: 'url(assets/Wedding-outdoor-ceremony-hero.jpg)', backgroundPosition: 'center bottom' }} />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-eyebrow">Gates Lake, BC · Since 1906</div>
          <h1 className="hero-headline">GET MARRIED<br/>IN THE WOODS.</h1>
          <p className="hero-tagline">One wedding at a time. Your people, your playlist, your kind of vows.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@birkenlakesideresort.ca?subject=Wedding%20Enquiry%20-%20Birken%20Lakeside%20Resort">Enquire Now →</a>
            <a className="btn btn-ghost-light" href="assets/BLR_Wedding_Inquiry_Pack_v3.pdf" target="_blank" rel="noopener">See the Options</a>
          </div>
        </div>
        <div className="hero-meta">
          <span className="hero-meta-item">55 min from Whistler</span>
          <span className="hero-meta-item">On Gates Lake</span>
          <span className="hero-meta-item">Open seasonally</span>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="— The Day"
            title={<>How it goes.</>}
            intro="The lakeside deck for the ceremony. The meeting hall for dinner. The firepit for after. The cabins for the people who needed to lie down." />

          <div className="threeup" style={{ borderColor: 'rgba(29,61,45,0.15)' }}>
            <div className="threeup-col" style={{ background: 'var(--forest)' }}>
              <span className="threeup-num">04 PM</span>
              <h3 className="threeup-title">Ceremony</h3>
              <p className="threeup-body">Lakeside deck, 60 chairs, a wood arch the local carpenter built. Cedar smell, no roof, no fuss.</p>
            </div>
            <div className="threeup-col" style={{ background: 'var(--forest)' }}>
              <span className="threeup-num">07 PM</span>
              <h3 className="threeup-title">Dinner</h3>
              <p className="threeup-body">Long tables in the hall. Family-style menu from The Grille. Speeches encouraged, kept short.</p>
            </div>
            <div className="threeup-col" style={{ background: 'var(--forest)' }}>
              <span className="threeup-num">LATE</span>
              <h3 className="threeup-title">After</h3>
              <p className="threeup-body">Firepit. Acoustic guitars if anyone brought one. Stragglers welcome until the embers go out.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 40px 120px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="wed-grid">
            <div role="img" aria-label="Outdoor wedding ceremony chairs arranged on grass, facing a fabric-draped wooden arch backed by cedar trees" style={{ backgroundImage: 'url(assets/wedding-ceremony-arch.jpeg)' }} />
            <div role="img" aria-label="Wedding party silhouetted against the sparkling surface of Gates Lake with mountain peaks behind them" style={{ backgroundImage: 'url(assets/wedding-party-lakeshore.jpeg)' }} />
            <div role="img" aria-label="Wedding reception tables set on the lakeside deck with a red 'Love' bunting banner, wine glasses, and Gates Lake through the trees" style={{ backgroundImage: 'url(assets/wedding-love-bunting.jpeg)' }} />
            <div role="img" aria-label="Interior of the resort meeting hall with dining tables, chairs, a piano, and wood-panelled walls" style={{ backgroundImage: 'url(assets/meeting-hall-int.jpeg)' }} />
            <div role="img" aria-label="Two Adirondack chairs on a small dock at the edge of Gates Lake, framed by trees and mountain peaks" style={{ backgroundImage: 'url(assets/lake-dock-chairs.jpeg)' }} />
            <div role="img" aria-label="Exterior of the resort meeting hall with a wide wooden deck, outdoor tables, and surrounding cedar trees" style={{ backgroundImage: 'url(assets/meeting-hall-ext.jpeg)' }} />
            <div role="img" aria-label="The Chapel cabin with timber-framed open doors revealing a queen bed inside, set between tall trees" style={{ backgroundImage: 'url(assets/chapel-ext.jpeg)' }} />
            <div role="img" aria-label="The Library cabin — a red-painted cedar building with a wooden deck and red Adirondack chairs among tall conifers" style={{ backgroundImage: 'url(assets/library-ext.jpeg)' }} />
            <div role="img" aria-label="Sunset over Gates Lake with snow-capped peaks silhouetted against a pink and purple sky" style={{ backgroundImage: 'url(assets/lake-mtn-sunset.jpeg)' }} />
          </div>
        </div>
      </section>

      <section className="dark-section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— Buyouts start at</span>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(80px, 12vw, 200px)', color: 'var(--cream)', letterSpacing: '0.02em', lineHeight: 0.95, margin: '20px 0' }}>$16,000</div>
          <p style={{ color: 'rgba(243,234,220,0.78)', fontSize: 18, maxWidth: 580, margin: '0 auto 12px', lineHeight: 1.6 }}>
            For the run of the property — your people, your ceremony, your weekend.
          </p>
          <p style={{ color: 'rgba(243,234,220,0.66)', fontSize: 16, maxWidth: 580, margin: '0 auto 32px', lineHeight: 1.6, fontStyle: 'italic' }}>
            Custom options available — food, tents, full event management. Call for details.
          </p>
          <button className="btn btn-primary" onClick={() => go('book')}>Enquire →</button>
        </div>
      </section>
    </div>
  );
}

function Grille({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 05 / The Grille</span>
          <h1 style={{ color: 'var(--forest)' }}>
            LAKE-FACING.<br/>HONEST FOOD.
          </h1>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 28, maxWidth: 680 }}>
            On site, open to guests and walk-ins. Cedar deck, mismatched chairs, the chef shouting at the line through an open door. Eat with your hands. Don't dress up.
          </p>
          <div style={{ display: 'flex', gap: 24, marginTop: 36, flexWrap: 'wrap' }}>
            <span className="pill">Open Thu–Sun</span>
            <span className="pill">5 PM – 10 PM</span>
            <span className="pill">Walk-ins welcome</span>
            <span className="pill">Kids welcome</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 40px 160px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div style={{
            border: '0.5px solid rgba(29,61,45,0.18)',
            padding: '120px 40px',
            textAlign: 'center',
            background: 'var(--cream-2)',
          }}>
            <span className="eyebrow">— The Menu</span>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(56px, 7vw, 104px)',
              lineHeight: 0.95,
              color: 'var(--forest)',
              letterSpacing: '0.02em',
              marginTop: 18,
            }}>
              MENU<br/>COMING SOON.
            </h2>
            <p className="italic-quote" style={{ fontSize: 19, marginTop: 22, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
              We're still finalising it. Check back closer to opening — or ask the crew what's on the fire that night.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MenuItem({ name, price, desc }) {
  return (
    <div className="menu-item">
      <div className="row">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
}

function Area({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 06 / The Area</span>
          <h1 style={{ color: 'var(--forest)' }}>
            55 MINUTES<br/>FROM WHISTLER.<br/>A DIFFERENT<br/>PLANET.
          </h1>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 28, maxWidth: 680 }}>
            Old-growth cedar, swimming holes, a Saturday market, mountain country on the dry side. Here's what's near.
          </p>
        </div>
      </section>

      <section style={{ padding: '40px 40px 120px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <div className="area-grid" style={{ gap: 64 }}>
            <div className="area-list">
              {AREA.map((a, i) => (
                <article key={i} className="area-item">
                  <div className="num">{a.num}</div>
                  <div>
                    <h4>{a.name}</h4>
                    <p>{a.desc}</p>
                  </div>
                  <div className="dist">{a.dist}</div>
                </article>
              ))}
            </div>
            <div className="area-map">
              <AreaMap />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AreaMap() {
  // Hand-illustrated decorative map
  return (
    <svg viewBox="0 0 400 500" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="rgba(143,168,158,0.2)" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="#1D3D2D" />
      <rect width="400" height="500" fill="url(#dots)" />
      {/* Lake */}
      <path d="M 60 220 Q 120 180 200 200 Q 280 220 340 200 Q 360 260 320 320 Q 240 360 160 340 Q 80 320 60 280 Z"
        fill="#0F2017" stroke="#8FA89E" strokeWidth="0.5" />
      <text x="200" y="280" textAnchor="middle"
        fontFamily="Bebas Neue" fontSize="22" fill="#8FA89E" letterSpacing="3">GATES LAKE</text>

      {/* Roads */}
      <path d="M 0 100 Q 100 120 200 110 Q 300 100 400 130" stroke="#C4743A" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M 200 110 L 200 200" stroke="#C4743A" strokeWidth="1" fill="none" strokeDasharray="3 3" />
      <path d="M 60 220 Q 30 320 50 420" stroke="#C4743A" strokeWidth="1" fill="none" strokeDasharray="3 3" />

      {/* Trees scattered */}
      {Array.from({length: 28}).map((_, i) => {
        const x = (i * 47 + 13) % 400;
        const y = ((i * 73 + 31) % 500);
        if (y > 180 && y < 360 && x > 60 && x < 340) return null;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <path d="M 0 0 L -4 8 L 4 8 Z" fill="#8FA89E" opacity="0.5" />
            <line x1="0" y1="8" x2="0" y2="11" stroke="#8FA89E" opacity="0.5" />
          </g>
        );
      })}

      {/* Decorative pins (no numbers) */}
      {[
        { x: 200, y: 270 },
        { x: 130, y: 200 },
        { x: 320, y: 110 },
        { x: 360, y: 60  },
        { x: 30,  y: 80  },
        { x: 60,  y: 440 },
      ].map((p, i) => (
        <g key={i} transform={`translate(${p.x},${p.y})`}>
          <circle r="5" fill="#9B2B1F" />
          <circle r="9" fill="none" stroke="#9B2B1F" strokeWidth="0.6" opacity="0.55" />
        </g>
      ))}

      <text x="20" y="30" fontFamily="Montserrat" fontSize="9" fontWeight="700"
        fill="#C4743A" letterSpacing="3">— THE AREA</text>
      <text x="380" y="490" textAnchor="end" fontFamily="Montserrat" fontSize="9"
        fill="#8FA89E" letterSpacing="2">N ↑</text>
    </svg>
  );
}

function About({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 07 / About</span>
          <h1 style={{ color: 'var(--forest)' }}>
            OLD ENOUGH<br/>TO KNOW BETTER.<br/>WILD ENOUGH<br/>NOT TO CARE.
          </h1>
        </div>
      </section>

      <section className="story-strip" style={{ padding: '120px 40px' }}>
        <div className="story-inner" style={{ maxWidth: 1100 }}>
          <div>
            <span className="eyebrow story-eyebrow">— Since 1906</span>
          </div>
          <div>
            <p className="story-quote">
              The first cabin went up in 1906, the year that has been carved into the door frame ever since. It is still standing. So are we.
            </p>
            <p className="story-body">
              Birken Lakeside started as a lodge for the railway foreman, became a family resort, then a hippie hideaway, then a wedding venue, then this. We took it on and have been slowly putting it back together — keeping the old wood, keeping the old soul, throwing out the bad furniture.
            </p>
            <p className="story-body">
              We aren't a luxury resort. We aren't a wellness retreat. We're a place where the kids can run barefoot, the dog gets its own treat at check-in, the screen door slams, and the kettle is always on the stove.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="— Principles"
            title={<>How we think<br/>about this place.</>}
            intro="Six things we keep coming back to whenever there's a decision to make. They aren't on signs. They live behind every choice we make about the resort." />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {[
              { t: 'Cosy, unpretentious fun', b: 'If it feels forced, fancy, or stiff — it\'s not us.' },
              { t: 'No streaming, just dreaming', b: 'We replace the scroll with something better. The lake. The fire.' },
              { t: 'Unplug. Go analogue.', b: 'We don\'t tell guests to put their phones away — we give them something better to look at.' },
              { t: 'Rustic elegance', b: 'Weathered wood, crisp linens. Never one without the other.' },
              { t: 'Not too chill', b: 'We lean toward vibrancy and warmth over meditative silence.' },
              { t: 'Bring the whole crew', b: 'Kids belong here. Dogs belong here. The couple in Blundstones belongs here.' },
            ].map((p, i) => (
              <div key={i} style={{
                background: 'var(--forest)', color: 'var(--cream)', padding: 32,
              }}>
                <div className="eyebrow" style={{ color: 'var(--cedar)' }}>— 0{i+1}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 34, color: 'var(--cream)', letterSpacing: '0.02em', margin: '14px 0 12px' }}>{p.t}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(243,234,220,0.72)' }}>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section" style={{ textAlign: 'center' }}>
        <div className="section-inner">
          <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— Come find us</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(72px, 9vw, 144px)', color: 'var(--cream)', letterSpacing: '0.02em', lineHeight: 0.92, margin: '20px auto 32px', maxWidth: 1100 }}>
            GATES LAKE, BC.<br/>WE'LL LEAVE THE<br/>PORCH LIGHT ON.
          </h2>
          <button className="btn btn-primary" onClick={() => go('book')}>Book a Cabin →</button>
        </div>
      </section>
    </div>
  );
}

function Book({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '120px 40px', background: 'var(--forest)', color: 'var(--cream)', textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— Bookings</span>
          <h1 style={{ color: 'var(--cream)', textAlign: 'left' }}>
            BOOKINGS<br/>COMING SOON.
          </h1>
          <p style={{ color: 'rgba(243,234,220,0.82)', fontSize: 21, lineHeight: 1.7, marginTop: 28, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            We're currently setting up our booking system. In the meantime, please contact us directly to make a booking and we'll get back to you as soon as possible.
          </p>
          <div style={{ marginTop: 44 }}>
            <button className="btn btn-primary" onClick={() => go('contact')}>Contact Us →</button>
          </div>
          <div style={{ marginTop: 32, fontSize: 14, color: 'rgba(243,234,220,0.55)', fontFamily: 'var(--ui)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            (604) 452-3255 · hello@birkenlakeside.ca
          </div>
        </div>
      </section>
    </div>
  );
}

function NotFound({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '120px 40px', background: 'var(--forest)', color: 'var(--cream)', textAlign: 'center' }}>
        <div className="section-inner" style={{ maxWidth: 760 }}>
          <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— 404</span>
          <h1 style={{ color: 'var(--cream)' }}>
            LOST IN<br/>THE WOODS.
          </h1>
          <p style={{ color: 'rgba(243,234,220,0.82)', fontSize: 21, lineHeight: 1.7, marginTop: 28, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            That page wandered off the trail. Let's get you back to the cabins.
          </p>
          <div style={{ marginTop: 44, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('home')}>Back to home →</button>
            <button className="btn btn-ghost-light" onClick={() => go('stay')}>See the cabins</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Contact({ go }) {
  return (
    <div className="page-fade">
      <section className="first-section" style={{ padding: '100px 40px', background: 'var(--cream)' }}>
        <div className="section-inner" style={{ maxWidth: 1100, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
          <span className="eyebrow">— Contact</span>
          <h1 style={{ color: 'var(--forest)' }}>
            DROP US<br/>A LINE.
          </h1>
          <p className="italic-quote" style={{ fontSize: 21, marginTop: 22, maxWidth: 620 }}>
            Bookings, buyouts, weddings, the dog rules — anything at all. The crew reads everything and gets back fast.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, marginTop: 64 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>— Phone</div>
              <a href="tel:+16044523255" style={{ fontFamily: 'var(--serif)', fontSize: 38, color: 'var(--forest)', letterSpacing: '0.02em', display: 'block' }}>
                (604) 452-3255
              </a>
              <div style={{ fontSize: 14, color: 'var(--stone)', marginTop: 6 }}>9 AM – 7 PM, every day</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>— Email</div>
              <a href="mailto:hello@birkenlakeside.ca" style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--forest)', letterSpacing: '0.02em', display: 'block' }}>
                hello@birkenlakeside.ca
              </a>
              <div style={{ fontSize: 14, color: 'var(--stone)', marginTop: 6 }}>Replies usually within a day</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>— Find Us</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 30, color: 'var(--forest)', letterSpacing: '0.02em', lineHeight: 1.15 }}>
                9179 Pemberton<br/>Portage Rd<br/>Birken, BC V0N 2L0
              </div>
              <div style={{ fontSize: 14, color: 'var(--stone)', marginTop: 10, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--ui)', fontWeight: 700 }}>
                55 min from Whistler · 2.5 hrs from Vancouver
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


Object.assign(window, { Gatherings, Weddings, Grille, Area, About, Book, Contact, MenuItem, NotFound });

