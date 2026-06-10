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
            Birken was built for gatherings. For groups of sixteen to one hundred, the whole property is yours — seven cabins, three glamping tents, the Meeting Hall, the dock, the Grille on Saturday night. Full property exclusive use. No other guests. No surprises. Most weekends through peak season hold first for full-site book-outs and open second — so early enquiry matters. We send full details by email and walk you through the rest on a call.
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

          <div className="incl-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '0.5px solid rgba(29,61,45,0.18)',
          }}>
            {[
              { l: 'Lakeside firepit', d: 'Stocked, swept, lit on request.' },
              { l: '1 paddleboat + 4 kayaks', d: 'PFDs in the boathouse.' },
              { l: 'Sound system',     d: 'In the meeting hall. Bring the playlist.' },
              { l: 'Coffee',           d: 'For additional charge.' },
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
            <a className="btn btn-ghost-light" href="/BLR_Wedding_Inquiry_Pack_v4.html" target="_blank" rel="noopener">See the Options</a>
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
          <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Enquire →</a>
        </div>
      </section>
    </div>
  );
}

function GrilleMenuRow({ name, price, desc }) {
  return (
    <div>
      <div className="grille-menu-row">
        <span className="grille-menu-name">{name}</span>
        <span className="grille-menu-price">{price}</span>
      </div>
      {desc ? <div className="grille-menu-desc">{desc}</div> : null}
    </div>
  );
}

function Grille({ go }) {
  return (
    <div className="page-fade">

      {/* HERO */}
      <section className="first-section" style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="eyebrow">— 05 / The Grille</span>
          <h1 style={{ color: 'var(--forest)' }}>
            THE LAKESIDE<br/>GRILLE.
          </h1>
          <p style={{ fontFamily: 'var(--ui)', fontWeight: 700, fontSize: 15, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--cedar)', marginTop: 20, maxWidth: 560 }}>
            Fed by the Lake. Woodsmoke. Pristine water. Good people.
          </p>
          <p className="italic-quote" style={{ fontSize: 20, marginTop: 16, maxWidth: 640 }}>
            Weekends only. Local chefs, Birken Bakery buns, beef from down the road. Order at the window, eat on the deck, and let the lake do the rest.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
            <span className="pill">Weekends Only</span>
            <span className="pill">Walk-ins Welcome</span>
            <span className="pill">Kids Welcome</span>
            <span className="pill">Order at the Window</span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section style={{ padding: '80px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">

          {/* Menu header + PDF download */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 40 }}>
            <div>
              <span className="eyebrow">— The Menu</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--forest)', lineHeight: 0.95, letterSpacing: '0.02em', marginTop: 18 }}>
                WHAT IS ON.
              </h2>
            </div>
            <a href="/assets/Birken_Lakeside_Grille_Menu%20(2).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Download Full Menu (PDF) &#8594;
            </a>
          </div>

          <div className="grille-menu">

            {/* Lunch & Dinner */}
            <div className="grille-menu-col">
              <div className="grille-menu-col-head">Lunch &amp; Dinner</div>
              <p className="grille-menu-note">Beef patties on Birken Bakery brioche buns with lettuce, tomato, and onion.</p>
              <GrilleMenuRow name="Lakeside Burger" price="$18" desc="The house burger with mustard mayo." />
              <GrilleMenuRow name="Nick the Greek Burger" price="$20" desc="With feta and olives." />
              <GrilleMenuRow name="Popeye Burger" price="$20" desc="Mustard mayo, spinach, running fried egg." />
              <GrilleMenuRow name="Veggie or Vegan Burger" price="$18" desc="Same bun, same trimmings, no compromise." />
              <GrilleMenuRow name="Gourmet Grilled Cheese" price="$12" desc="Hot and melty with chutney or ketchup." />
              <GrilleMenuRow name="Smokie on a Bun" price="$12" desc="Pemberton Meat Co. smokie with sauerkraut." />
              <p className="grille-menu-addons">Add-ons: Cheddar, feta, mushrooms, peppers, avocado, onion +$2 &middot; Bacon +$3</p>
            </div>

            {/* Sunday Breakfast */}
            <div className="grille-menu-col">
              <div className="grille-menu-col-head">Sunday Breakfast</div>
              <p className="grille-menu-note">9:00 AM – Noon</p>
              <GrilleMenuRow name="Fruit & Berry Cup" price="$12" desc="Seasonal fruit, thick yogurt, house granola." />
              <GrilleMenuRow name="Waffles" price="$16" desc="Berries & cream OR bacon with maple syrup." />
              <GrilleMenuRow name="Bacon & Egg Buttie" price="$16" desc="Two bacon, two eggs on Birken Bakery brioche." />
              <GrilleMenuRow name="The Big Breakfast" price="$18" desc="Two hashbrowns, sausages or bacon, two fried eggs." />
              <p className="grille-menu-addons">Add-ons: Extra egg, bacon, tomato, cheese, avocado +$2 each</p>
            </div>

            {/* Sweets & Drinks */}
            <div className="grille-menu-col">
              <div className="grille-menu-col-head">Sweets &amp; Drinks</div>
              <p className="grille-menu-note">&nbsp;</p>
              <GrilleMenuRow name="Smoothies & Milkshakes" price="$8" desc="" />
              <GrilleMenuRow name="German Iced Coffee" price="$8" desc="Espresso, vanilla ice cream, cold milk." />
              <GrilleMenuRow name="Espresso, Cappuccino, or Latte" price="$6" desc="" />
              <GrilleMenuRow name="Black or Green Tea" price="$3" desc="" />
              <GrilleMenuRow name="Assorted Sodas" price="$2.50" desc="" />
              <GrilleMenuRow name="Water" price="$2" desc="" />
              <p className="grille-menu-addons">Prices exclude tax. Come as you are.</p>
            </div>

          </div>
        </div>
      </section>

      {/* HOURS */}
      <section style={{ padding: '80px 40px', background: 'var(--cream-2)' }}>
        <div className="section-inner">
          <span className="eyebrow">— Hours of Operation</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', color: 'var(--forest)', lineHeight: 0.95, letterSpacing: '0.02em', marginTop: 18, marginBottom: 48 }}>
            WHEN WE ARE OPEN.
          </h2>
          <div className="grille-hours">
            <div className="grille-day">
              <div className="grille-day-name">Friday</div>
              <div className="grille-day-hours">5:00 PM – 8:00 PM</div>
              <div className="grille-day-note">Dinner only</div>
            </div>
            <div className="grille-day">
              <div className="grille-day-name">Saturday</div>
              <div className="grille-day-hours">12:00 PM – 8:00 PM</div>
              <div className="grille-day-note">Lunch through dinner</div>
            </div>
            <div className="grille-day">
              <div className="grille-day-name">Sunday</div>
              <div className="grille-day-hours">9:00 AM – 6:00 PM</div>
              <div className="grille-day-note">Full Breakfast 9:00 AM – 11:30 AM &middot; Lunch from Noon – 6:00 PM</div>
            </div>
            <div className="grille-day grille-day--alt">
              <div className="grille-day-name">Long-Weekend Mondays</div>
              <div className="grille-day-hours">Sunday Hours</div>
              <div className="grille-day-note">BC Day Aug 3 &amp; Labour Day Sep 7</div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP BOOKINGS */}
      <section className="dark-section">
        <div className="section-inner">
          <SectionHead
            num="— Group Bookings & Special Events"
            title={<>Bring the<br/>whole table.</>}
            intro="We accommodate pre-arranged group lunches and small events (minimum 12 covers, maximum 30). Group bookings require a deposit-secured retainer at least 7 days out and feature a fixed three-option menu. Contact Sharon for availability and sign-off." />
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

      {/* Lake sunset — full bleed */}
      <section style={{ padding: 0, background: 'var(--cream)' }}>
        <div
          role="img"
          aria-label="Sunset over Gates Lake at Birken Lakeside Resort, BC"
          style={{
            width: '100%',
            height: 520,
            backgroundImage: 'url(assets/lake-sunset-birken.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 42%',
          }}
        />
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '14px 40px 80px',
          borderBottom: '0.5px solid rgba(29,61,45,0.18)',
          maxWidth: '100%',
        }}>
          <span style={{ fontFamily: 'var(--ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone)' }}>Gates Lake, BC</span>
          <span style={{ fontFamily: 'var(--ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone)' }}>The View</span>
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

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
}

const FAQS = [
  {
    category: '01 · Staying With Us',
    items: [
      { q: 'Where are you, exactly?', a: 'We sit on Gates Lake in the village of Birken, BC — about 45 minutes north of Whistler, 20 minutes from Birkenhead Provincial Park, and a world away from the freeway. The drive in tells you where you\'re going. Cell service gets patchy past Pemberton, so download your directions before you leave town.' },
      { q: 'How many cabins are there?', a: 'Seven. Each one has a name, a personality, and a different reason you\'d pick it. Morocco is small and full of charm. The Love Shack is built for two. The Library has a porch and a couch and nowhere to be. Mexico has a covered porch and a firepit. The Bunk House sleeps eight. Wild West has been here since 1906. The Chapel is the only cabin with its own private washroom. We also have three safari-style glamping tents in the woods, open seasonally.' },
      { q: 'What\'s actually in the cabins?', a: 'Real beds, real kitchens (or kitchenettes in Morocco), woodstoves or fireplaces in most, linens and towels, coffee makers, and the kind of furniture that looks like it has stories. Six of the seven cabins share a central washroom facility — clean, bright, hot showers always, men\'s and women\'s sides. The Chapel is the one cabin with its own private washroom.' },
      { q: 'Why a shared washroom?', a: 'Because the resort was built that way, and the building is good. It\'s a heated, central facility with stone floors, real hot water, and proper showers. We mention it up front so there are no surprises. If you\'d rather have your own, book the Chapel.' },
      { q: 'When can we check in and out?', a: 'Check-in is at 4:00 PM. Check-out is at 11:00 AM. Early or late arrangements aren\'t always possible in summer, but ask us — we\'ll do what we can.' },
      { q: 'Is there a minimum stay?', a: 'Two nights most of the time. Three nights on long weekends. We don\'t do one-night stays in peak season — the lake is too good to leave that quickly.' },
      { q: 'What does it cost to stay?', a: 'Cabin rates range from $145 per night for Morocco to $370 for the Chapel, with long-weekend pricing slightly higher. Rates are based on double occupancy — extra guests are $30 per person per night, and kids under 5 stay free. Full rates and live availability are on the booking page.' },
      { q: 'Are you open year-round?', a: 'The cabins run through the warm and shoulder seasons. The glamping tents are summer-only. The Grille runs weekends in season. We\'ll keep our booking calendar honest — if it\'s bookable on the site, it\'s open.' },
    ],
  },
  {
    category: '02 · Booking & Policies',
    items: [
      { q: 'How do I book a cabin?', a: 'Online, through our booking page. Pick your cabin, pick your dates, you\'re done. For 2026 summer, individual cabin reservations open April 1, 2026. Anything bigger than three cabins — group stays, full-resort buyouts, weddings, retreats — comes through us by phone or email, not the booking engine. That kind of stay deserves an actual conversation.' },
      { q: 'What about weekends? Why is so much marked unavailable?', a: 'Most peak-season weekends are held for groups and weddings, then released closer to the date if they don\'t book out. If the weekend you want is showing as unavailable, drop us a line — sometimes there\'s flexibility we can\'t show on the calendar.' },
      { q: 'What\'s your cancellation policy?', a: 'Deposits are non-refundable. Cabin bookings have a 30-day cancellation window. Weddings and group bookings have a 90-day window. If life happens, we can apply your deposit to a future stay — no blackout periods.' },
      { q: 'Do you have a loyalty discount?', a: 'We take care of our own. Returning guests get 20% off — just ask. Friends and family of our regulars get 10% off. We\'re a small place; we know who you are.' },
    ],
  },
  {
    category: '03 · Eating & Drinking',
    items: [
      { q: 'Is there food on site?', a: 'Yes. The Birken Lakeside Grille runs weekends in season — gourmet comfort food cooked by local chefs, with the kind of menu that doesn\'t try too hard. Outside of weekends, every cabin has a kitchen, and the General Store on site carries pantry essentials and a few things you didn\'t know you wanted.' },
      { q: 'What\'s at the General Store?', a: 'Firewood crates ($18 each, for indoor cabin use), local treats, artisan goods, the small stuff you forgot to pack, and gifts worth bringing home. Open through the season.' },
      { q: 'Can we cook in the cabins?', a: 'Most cabins have full kitchens — stove, oven, fridge, cookware. Morocco has a kitchenette (bar fridge, stove, oven, coffee maker). Bring groceries from Pemberton if you want to cook in, or bring nothing at all and let the Grille handle the weekend.' },
      { q: 'Can we have a fire?', a: 'Communal firepits are dotted around the property, and several cabins have private firepit areas. Firewood is $18 a crate from the General Store. We follow the BC fire ban rules — if there\'s a campfire ban in effect, we honour it. The propane fire tables stay open in most conditions.' },
    ],
  },
  {
    category: '04 · What\'s on the Property',
    items: [
      { q: 'Is there a beach? Can we swim?', a: 'Yes. Private lakefront on Gates Lake, a designated swimming area, and a private dock that\'s earned every cannonball it\'s ever taken. The water is cold, clear, and worth it.' },
      { q: 'What about boats and watercraft?', a: 'Gates Lake is a quiet, non-motorized lake — no jet skis, no speedboats, no waterskiing. That\'s part of what makes it what it is.' },
      { q: 'Is there Wi-Fi?', a: 'Solid Wi-Fi resort-wide. Use it sparingly. Great for checking an email, looking up a hike, sending a photo home. The rest of what\'s around you is more interesting.' },
      { q: 'What\'s there to do?', a: 'Swim, paddle, fish, hike, read, eat, sleep. Birkenhead Provincial Park is 20 minutes away — lake hikes, old-growth forest, the trail to Place Glacier viewpoint. Whistler is 45 minutes south if you want a day in town. On the property: sports cupboard with basketball, badminton, volleyball, bocce; a Meeting Hall with a lake-view deck; porches built for sitting on.' },
      { q: 'Is the Meeting Hall available for guests?', a: 'The Meeting Hall is primarily used for weddings, retreats, and full-property bookings. Individual cabin guests are welcome to use the outdoor common spaces and lake-view deck. If you have a specific need — a family birthday, a small workshop — ask us.' },
    ],
  },
  {
    category: '05 · Who\'s Welcome',
    items: [
      { q: 'Can we bring the dog?', a: 'Yes. We\'re PAW Friendly — dogs are part of the brand. There\'s a $15 per night pet fee. We ask that pets stay leashed on the property and off the beach and out of the common buildings (the Grille, the General Store, the Meeting Hall, the washroom facility). Otherwise, bring them everywhere.' },
      { q: 'Are kids welcome?', a: 'Bring the whole crew. Kids under 5 stay free. The dock, the lake, ice cream from the General Store, frogs in the rushes — this is the summer they\'ll remember.' },
      { q: 'Is the resort LGBTQ+ welcoming?', a: 'Always. Everyone who shows up here gets the same warm welcome and the same quiet corner of the lake.' },
      { q: 'Is the property accessible?', a: 'Honest answer: not fully. Cabins are reached via stairs over uneven terrain, and we are not wheelchair-accessible. Service animals are welcome. If you have mobility considerations, call us before booking and we\'ll talk through what\'s workable.' },
      { q: 'Is camping available?', a: 'Our campground isn\'t open for individual bookings in 2026. Extended family and friends of cabin guests can still use it — talk to us when you book. The glamping tents (which sleep two each) are bookable online during the summer season.' },
    ],
  },
  {
    category: '06 · Getting Here & Getting Around',
    items: [
      { q: 'How do we get there?', a: 'Drive. Vancouver to Birken is roughly two and a half hours up Highway 99 — the Sea-to-Sky, then through Whistler and Pemberton, then onto Portage Road. The last stretch is the prettiest. We\'ll send you full directions when you book.' },
      { q: 'Is there parking?', a: 'Free on-site parking at every cabin. Small RVs and trailers fit. If you\'re bringing something bigger, give us a heads-up so we can sort the spot.' },
      { q: 'What\'s the closest town for groceries and supplies?', a: 'Pemberton, 20 minutes south, has a full grocery store, gas, liquor, and the basics. Whistler is 45 minutes if you need anything more specialized. We recommend stocking up before you turn off the highway.' },
      { q: 'Is there cell service?', a: 'Spotty. Coverage drops in and out north of Pemberton. Download offline maps before you go, let people know they might not hear from you for a day or two, and lean into it. The Wi-Fi at the resort is solid when you need it.' },
    ],
  },
  {
    category: '07 · The Setting',
    items: [
      { q: 'Are there bears?', a: 'Yes. Black bears, mountain goats, ospreys, loons — these are our neighbours. We\'re not a hotel; we\'re hosts in someone else\'s habitat. All food has to be stored inside the cabins (never on porches, decks, or in coolers outside), and we\'ll walk you through the few rules at check-in. The wildlife is part of what makes this place what it is.' },
      { q: 'What\'s the weather like?', a: 'Summer days run warm and dry, with cool nights that earn the woodstove. Spring and fall are crisp and quiet. Bring layers, bring a swimsuit, bring something for the rain — coastal mountain weather has opinions of its own.' },
      { q: 'How old is the property?', a: 'Our original cabin — the Wild West — was built in 1906 as home to the BC Rail Foreman. We\'ve been a resort on Gates Lake for decades. Old enough to know better. Wild enough not to care.' },
    ],
  },
  {
    category: '08 · About Us',
    items: [
      { q: 'Who runs the place?', a: 'A small team, owner-led, who live and breathe this property. We\'re proud members of the Pemberton Chamber of Commerce. You\'ll meet us at check-in, you\'ll see us at the Grille, and you\'ll get a reply from a real person when you email.' },
      { q: 'Are you hiring?', a: 'Sometimes. Seasonal roles open up across the cabins, the Grille, and the General Store. If you\'d love to work here, send us a note any time.' },
    ],
  },
];

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

      {/* Owner photo — full bleed */}
      <section style={{ padding: 0, background: 'var(--cream)' }}>
        <div
          role="img"
          aria-label="The owners and friends celebrating on the dock at Birken Lakeside Resort"
          style={{
            width: '100%',
            height: 520,
            backgroundImage: 'url(assets/biken_dock_party.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
          }}
        />
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          padding: '14px 40px 80px',
          borderBottom: '0.5px solid rgba(29,61,45,0.18)',
          maxWidth: '100%',
        }}>
          <span style={{ fontFamily: 'var(--ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone)' }}>The crew</span>
          <span style={{ fontFamily: 'var(--ui)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--stone)' }}>Gates Lake, BC</span>
        </div>
      </section>


      <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="— Principles"
            title={<>How we think<br/>about this place.</>}
            intro="Six things we keep coming back to whenever there's a decision to make. They aren't on signs. They live behind every choice we make about the resort." />

          <div className="about-principles">
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

      {/* FAQ */}
      <section style={{ padding: '120px 40px', background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="— FAQ"
            title={<>Honest answers<br/>to real questions.</>}
            intro="Everything you probably want to know before you book. If something's missing, just ask." />
          <div className="faq-wrap">
            {FAQS.map((cat, ci) => (
              <div key={ci} className="faq-category">
                <div className="faq-category-head">{cat.category}</div>
                {cat.items.map((item, ii) => (
                  <FAQItem key={ii} q={item.q} a={item.a} />
                ))}
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--ui)', fontSize: 13, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--stone)', marginTop: 56, textAlign: 'center' }}>
            Still have a question? &mdash; <a href="mailto:hello@birkenlakesideresort.ca" style={{ color: 'var(--cedar)', textDecoration: 'none', borderBottom: '0.5px solid var(--cedar)', paddingBottom: 1 }}>hello@birkenlakesideresort.ca</a>
          </p>
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
            (604) 452-3255 · hello@birkenlakesideresort.ca
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
              <a href="mailto:hello@birkenlakesideresort.ca" style={{ fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--forest)', letterSpacing: '0.02em', display: 'block' }}>
                hello@birkenlakesideresort.ca
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

