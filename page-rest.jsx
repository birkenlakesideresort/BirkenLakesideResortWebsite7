/* Gatherings, Weddings, Grille, Area, About, Book */

function Gatherings({ go }) {
  return (
    <div className="page-fade">

      {/* Hero */}
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">GATHERINGS</span>
          <h1 style={{ color: 'var(--forest)' }}>Take over the<br/>whole place.</h1>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 28, maxWidth: 680 }}>
            Birken was built for gatherings. For groups of sixteen to thirty-two, the whole property is yours — seven cabins, three glamping tents, the Meeting Hall, the dock, the Grille on Saturday night. Full property exclusive use. No other guests. No surprises. Most weekends through peak season hold first for full-site book-outs and open second — so early enquiry matters. We send full details by email and walk you through the rest on a call.
          </p>
        </div>
      </section>

      {/* Meeting Hall */}
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

      {/* Buyouts */}
      <section className="dark-section">
        <div className="section-inner">
          <SectionHead
            num="— Buyouts"
            title={<>Take the<br/>whole place.</>}
            intro="The cabins, the bunkhouse, the meeting hall, the lake dock and the firepit. Your group, our property, no other guests. 2-night minimum stay required for group bookings (3-night minimum on long weekends)." />

          <div className="threeup">
            <div className="threeup-col">
              <span className="threeup-num">16–32</span>
              <h3 className="threeup-title">Exclusive use</h3>
              <p className="threeup-body">Seven cabins, three glamping tents, the Meeting Hall, dock, and grounds. The whole property is yours — no other guests, no shared spaces, no surprises.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">33+</span>
              <h3 className="threeup-title">Larger groups</h3>
              <p className="threeup-body">We can accommodate larger groups with additional glamping and accommodation options. Get in touch and we'll work out what's possible.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">Retreats</span>
              <h3 className="threeup-title">Birken hosts your weekend, not your itinerary.</h3>
              <p className="threeup-body">Corporate offsites that don't feel like work. Milestone birthdays. Anniversaries with the people who were there. Wellness weekends that include the wine. Whatever you're planning — if it needs the whole place, this is the place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: '120px 40px 64px', background: 'var(--cream)' }}>
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
              { l: 'A/V for talks',    d: 'Projector, screen, A/V ready in the meeting hall.' },
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
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 40px 80px', background: 'var(--cream)', textAlign: 'center' }}>
        <div className="section-inner">
          <p style={{ fontSize: 19, lineHeight: 1.8, color: 'var(--stone)', maxWidth: 600, margin: '0 auto 32px' }}>
            Ready to talk? We don't run buyouts through a checkout. Email us with your dates and your numbers, and we'll send a full inquiry pack within twenty-four hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="mailto:hello@birkenlakesideresort.ca">Enquire now →</a>
            {/* PDF placeholder — awaiting upload, href to be updated when file is available */}
            <a className="btn btn-ghost" href="#options-pdf-pending">See options →</a>
          </div>
        </div>
      </section>

      {/* Policy fact block */}
      <section style={{ padding: '0 40px 120px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '0.5px solid rgba(29,61,45,0.18)' }}>
            {[
              'Full property exclusive use. All seven cabins, three glamping tents, Meeting Hall, grounds, dock.',
              'From $6,000. Final pricing depends on dates, numbers, and add-ons.',
              '2-night minimum. 3-night minimum on long weekends.',
              '16–32 guests. Online booking is capped at 3 cabins per booking entity.',
              'The calendar typically books up by April 15. Early enquiry encouraged.',
            ].map((item, i) => (
              <li key={i} style={{
                fontFamily: 'var(--ui)', fontSize: 15, letterSpacing: '0.04em',
                color: 'var(--forest)', fontWeight: 500,
                padding: '18px 0', borderBottom: '0.5px solid rgba(29,61,45,0.18)',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <span style={{ width: 4, height: 4, background: 'var(--cedar)', borderRadius: '50%', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
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
        <div className="hero-img" role="img" aria-label="Outdoor wedding ceremony set in a cedar forest clearing at Birken Lakeside Resort, with wooden chairs and a fabric-draped arch overlooking Gates Lake" style={{ backgroundImage: 'url(assets/Wedding-outdoor-ceremony.jpeg)', backgroundPosition: 'center 85%' }} />
        <div className="hero-shade" />
        <div className="hero-grain" style={{ opacity: 0.09 }} />
        <div className="hero-content">
          <div className="hero-eyebrow">Gates Lake, BC · Since 1906</div>
          <h1 className="hero-headline">GET MARRIED<br/>IN THE WOODS.</h1>
          <p className="hero-tagline">One wedding at a time. Your people, your playlist, your kind of vows.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@birkenlakesideresort.ca?subject=Wedding%20Enquiry%20-%20Birken%20Lakeside%20Resort">Enquire Now →</a>
            <a className="btn btn-ghost-light" href="/assets/BLR_Wedding_Inquiry_Pack_v3.pdf" target="_blank" rel="noopener">See the Options</a>
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

          <div className="threeup" style={{ borderColor: 'rgba(29,61,45,0.15)', gridTemplateColumns: 'repeat(4, 1fr)' }}>
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
              <span className="threeup-num">9PM – 11PM</span>
              <h3 className="threeup-title">The Party</h3>
              <p className="threeup-body">Band on. Bar open. Lake out there somewhere, waiting for the brave ones.</p>
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
            The Sea-to-Sky doesn't end at Whistler. Push another fifty-five minutes north and the road climbs into Birken — old-growth fir, granite peaks, a turquoise lake the locals don't talk about much. This is the corridor's quiet side.
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
  const embedQ = 'Birken+Lakeside+Resort,+Birken,+BC';
  const linkQ  = 'Birken+Lakeside+Resort';
  return (
    <React.Fragment>
      <iframe
        title="Birken Lakeside Resort on Gates Lake, BC"
        src={`https://maps.google.com/maps?q=${embedQ}&z=15&output=embed`}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={`https://maps.google.com/maps?q=${linkQ}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'rgba(29,61,45,0.90)',
          color: 'var(--cream)',
          fontFamily: 'var(--ui)', fontSize: 12, fontWeight: 700,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          padding: '14px 20px', textAlign: 'center',
          textDecoration: 'none', display: 'block',
        }}
      >
        Open in Google Maps →
      </a>
    </React.Fragment>
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
              { t: 'Not too chill', b: 'We lean toward vibrancy and warmth.' },
              { t: 'Bring the whole crew', b: 'Kids belong here. Dogs belong here. The couple in Birkenstocks belongs here.' },
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

