/* Pages: Home, Stay, CabinDetail, Gatherings, Weddings, Grille, Area, About, Book */

function Home({ go }) {
  return (
    <div className="page-fade">
      {/* HERO */}
      <section className="hero" style={{ padding: 0 }}>
        <div className="hero-img" role="img" aria-label="Two warm red-painted cabins connected by a wooden walkway, seen through tall conifers at Birken Lakeside Resort" style={{ backgroundImage: 'url(assets/red-cabins-grove.jpeg)' }} />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-content">
          <div className="hero-eyebrow">Gates Lake, BC · Since 1906</div>
          <h1 className="hero-headline">CABINS<br/>WITH<br/>PERSONALITIES.</h1>
          <p className="hero-tagline">Woodsmoke. Pristine Water. Good People.</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => go('book')}>Book Now →</button>
            <button className="btn btn-ghost-light" onClick={() => go('stay')}>See the Cabins</button>
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

      {/* STORY STRIP */}
      <section className="story-strip">
        <div className="story-inner">
          <div>
            <span className="eyebrow story-eyebrow">— The Story —</span>
          </div>
          <div>
            <p className="story-quote">
              Gates Lake is 55 minutes from Whistler<br/>and a different planet <em>entirely.</em>
            </p>
            <p className="story-body">
              We trade notifications for loon calls, and corporate stiffness for woodsmoke and the thwack of a screen door. Cabins, a bunkhouse, a lake that's been here longer than any of us. Come as you are. Bring the whole crew.
            </p>
          </div>
        </div>
      </section>

      {/* CABINS */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="01 — Stay"
            title={<>Cabins with<br/>personalities.</>}
            intro="Each cabin has its own unique character. Wild West has the wood stove and a porch by the lake. The Library has the books. The Love Shack has — well, a raised king bed and zero pretence. Pick your character." />

          <div className="cabin-grid">
            <CabinCard num="01" cabin={CABINS[0]} go={go} className="cabin-tall" />
            <CabinCard num="02" cabin={CABINS[3]} go={go} className="cabin-wide" />
            <CabinCard num="03" cabin={CABINS[1]} go={go} className="cabin-third" />
            <CabinCard num="04" cabin={CABINS[5]} go={go} className="cabin-third" />
            <CabinCard num="05" cabin={CABINS[4]} go={go} className="cabin-third" />
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <button className="btn btn-ghost" onClick={() => go('stay')}>See all the cabins →</button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee items={[
        'Cosy, unpretentious fun',
        'No streaming, just dreaming',
        'Less scroll. More soul.',
        'Cabins with personalities',
        'Open seasonally',
      ]} />

      {/* WHATS HERE — three up dark */}
      <section className="dark-section">
        <div className="section-inner">
          <SectionHead
            num="02 — What's Here"
            title={<>Less scroll.<br/>More soul.</>}
            intro="No spas, no signature cocktails, no programming. The lake. The fire. The people in front of you. Mountain Wi-Fi — great for an email, great for streaming. That's by design." />

          <div className="threeup">
            <div className="threeup-col">
              <span className="threeup-num">01</span>
              <h3 className="threeup-title">The Lake</h3>
              <p className="threeup-body">Jump off the dock. Paddle the canoe. Float on a noodle until your toes prune. The water is pristine. That is also by design.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">02</span>
              <h3 className="threeup-title">The Fire</h3>
              <p className="threeup-body">Communal pit, kindling stacked, marshmallows and sticks at the front desk. Stories optional but encouraged.</p>
            </div>
            <div className="threeup-col">
              <span className="threeup-num">03</span>
              <h3 className="threeup-title">The Grille</h3>
              <p className="threeup-body">The on-site spot. Cedar-plank salmon, wood-fired pizza, cold beer. Eat on the deck. Don't dress up.</p>
            </div>
          </div>

          <div className="stats" style={{ marginTop: 8 }}>
            <div className="stat"><div className="n">1906</div><div className="l">— Established</div></div>
            <div className="stat"><div className="n">120</div><div className="l">— Years on the lake</div></div>
            <div className="stat"><div className="n">∞</div><div className="l">— Loon calls per night</div></div>
          </div>
        </div>
      </section>

      {/* ALT BLOCKS — Gatherings + Weddings */}
      <section style={{ padding: 0, background: 'var(--cream-2)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 0' }}>
          <div className="alt-block">
            <div className="alt-img" role="img" aria-label="Guests playing giant Jenga on a lakeside deck at twilight, with string lights overhead and Gates Lake in the background" style={{ backgroundImage: 'url(assets/campfire-jenga-night.jpeg)' }} />
            <div className="alt-text">
              <span className="eyebrow">— Gatherings</span>
              <h3>Bring the<br/>whole crew.</h3>
              <p>Whole-resort buyouts, family reunions, founder offsites that won't feel like one. The bunkhouse, all the cabins, the dock, the firepit. Yours.</p>
              <button className="btn-text" onClick={() => go('gatherings')}>Plan a Gathering →</button>
            </div>
          </div>
          <div className="alt-block reverse">
            <div className="alt-img" role="img" aria-label="Outdoor forest wedding ceremony setup — rows of wooden chairs facing a fabric-draped arch, with a glimpse of the lake beyond" style={{ backgroundImage: 'url(assets/weddings-hero.png)' }} />
            <div className="alt-text">
              <span className="eyebrow">— Weddings</span>
              <h3>Get married<br/>in the woods.</h3>
              <p>A cedar deck on the lake. A hall built for music. Your people, your playlist, your kind of vows. We host one wedding at a time, and we host it well.</p>
              <button className="btn-text" onClick={() => go('weddings')}>See Weddings →</button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <SectionHead
            num="03 — The Word"
            title={<>What people<br/>tell us.</>}
            intro="Some of these are unprompted. Some we asked for. All of them came in by hand or by email — never paid, never edited." />

          <div className="reviews">
            <ReviewCard
              quote="Stayed in the Library. Read three books, swam every morning, came back a different person."
              who="Maya & Tom · Vancouver, BC"
              stars={5} />
            <ReviewCard
              quote="The Bunkhouse fit our whole engineering team and the crew still found time to play piano badly."
              who="Crew of 11 · Seattle, WA"
              stars={5} />
            <ReviewCard
              quote="My partner cried when we drove away. The cabin was called Morocco. The cat is called Steve."
              who="Anna · Whistler, BC"
              stars={5} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dark-section" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <div className="section-inner">
          <span className="eyebrow eyebrow-light" style={{ color: 'var(--cedar)' }}>— Ready when you are</span>
          <h2 style={{
            fontFamily: 'var(--serif)', fontSize: 'clamp(72px, 10vw, 160px)',
            lineHeight: 0.9, color: 'var(--cream)', letterSpacing: '0.02em',
            margin: '24px auto', maxWidth: 1200,
          }}>
            COME AS YOU ARE.<br/>
            BRING THE<br/>
            WHOLE CREW.
          </h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 40, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => go('book')}>Book a Cabin →</button>
            <button className="btn btn-ghost-light" onClick={() => go('about')}>Read Our Story</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CabinCard({ cabin, num, className, go }) {
  return (
    <article className={`cabin-card ${className || ''}`} onClick={() => go('cabin', cabin.id)}>
      <div className="cc-img" role="img" aria-label={`Exterior of ${cabin.name} cabin at Birken Lakeside Resort`} style={{ backgroundImage: `url(${cabin.ext})` }} />
      <div className="cc-shade" />
      <div className="cc-body">
        <span className="cc-num">— Cabin {num}</span>
        <h3 className="cc-title">{cabin.name}</h3>
        <p className="cc-sub">{cabin.tag}</p>
        <div className="cc-meta">
          <span>Sleeps {cabin.sleeps}</span>
          <span>{cabin.beds}</span>
          <span>From ${cabin.price}/nt</span>
        </div>
      </div>
    </article>
  );
}

function ReviewCard({ quote, who, stars }) {
  return (
    <div className="review-card">
      <div className="review-stars">{'★'.repeat(stars)}</div>
      <p className="review-quote">“{quote}”</p>
      <div className="review-meta">— {who}</div>
    </div>
  );
}

Object.assign(window, { Home, CabinCard, ReviewCard });
