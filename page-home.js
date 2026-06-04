const HERO_SLIDES = [
  { src: "assets/lake-clear-beach.png",                alt: "Clear sandy beach on Gates Lake at Birken Lakeside Resort on a bright summer day" },
  { src: "assets/lake-clear-day..png",                 alt: "Calm glassy lake reflecting mountains and forest on a clear day at Birken Lakeside Resort" },
  { src: "assets/Starlit-Night-Forest. (1).jpeg",      alt: "Star-filled night sky above the forest at Birken Lakeside Resort on Gates Lake" },
  { src: "assets/Resort-Grounds-Night-Hour. (1).jpeg", alt: "Birken Lakeside Resort grounds glowing warmly at night, surrounded by trees" },
];

function Home({ go }) {
  const [slide, setSlide] = React.useState(0);
  const timerRef = React.useRef(null);

  const startTimer = React.useCallback(function() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(function() {
      setSlide(function(s) { return (s + 1) % HERO_SLIDES.length; });
    }, 5500);
  }, []);

  React.useEffect(function() {
    startTimer();
    return function() { clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = React.useCallback(function(idx) {
    setSlide(idx);
    startTimer();
  }, [startTimer]);

  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" },
    /* @__PURE__ */ React.createElement("section", { className: "hero", style: { padding: 0 } },
      HERO_SLIDES.map(function(s, i) {
        return /* @__PURE__ */ React.createElement("div", {
          key: i,
          className: "hero-img hero-img-slide" + (i === slide ? " hero-img-active" : ""),
          role: "img",
          "aria-label": s.alt,
          style: { backgroundImage: "url(" + s.src + ")" }
        });
      }),
      /* @__PURE__ */ React.createElement("div", { className: "hero-shade" }),
      /* @__PURE__ */ React.createElement("div", { className: "hero-grain" }),
      /* @__PURE__ */ React.createElement("div", { className: "hero-content" },
        /* @__PURE__ */ React.createElement("div", { className: "hero-eyebrow" }, "Gates Lake, BC \xB7 Since 1906"),
        /* @__PURE__ */ React.createElement("h1", { className: "hero-headline" },
          "CABINS", /* @__PURE__ */ React.createElement("br", null),
          "WITH",   /* @__PURE__ */ React.createElement("br", null),
          "PERSONALITIES."
        ),
        /* @__PURE__ */ React.createElement("p", { className: "hero-tagline" }, "Woodsmoke. Pristine Water. Good People."),
        /* @__PURE__ */ React.createElement("div", { className: "hero-actions" },
          /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }, "Book Now →"),
          /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost-light", onClick: () => go("stay") }, "See the Cabins")
        )
      ),
      /* @__PURE__ */ React.createElement("div", { className: "hero-meta" },
        /* @__PURE__ */ React.createElement("span", { className: "hero-meta-item" }, "55 min from Whistler"),
        /* @__PURE__ */ React.createElement("span", { className: "hero-meta-item" }, "On Gates Lake"),
        /* @__PURE__ */ React.createElement("span", { className: "hero-meta-item" }, "Open seasonally")
      ),
      /* @__PURE__ */ React.createElement("div", { className: "hero-dots" },
        HERO_SLIDES.map(function(_, i) {
          return /* @__PURE__ */ React.createElement("button", {
            key: i,
            className: "hero-dot" + (i === slide ? " hero-dot-active" : ""),
            "aria-label": "Go to photo " + (i + 1),
            onClick: function() { goTo(i); }
          });
        })
      ),
      /* @__PURE__ */ React.createElement("div", { className: "hero-scroll" },
        /* @__PURE__ */ React.createElement("span", null, "Scroll"),
        /* @__PURE__ */ React.createElement("div", { className: "hero-scroll-line" })
      )
    ),
    /* @__PURE__ */ React.createElement("section", { className: "story-strip" }, /* @__PURE__ */ React.createElement("div", { className: "story-inner" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow story-eyebrow" }, "— The Story —")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "story-quote" }, "Gates Lake is 55 minutes from Whistler", /* @__PURE__ */ React.createElement("br", null), "and a different planet ", /* @__PURE__ */ React.createElement("em", null, "entirely.")), /* @__PURE__ */ React.createElement("p", { className: "story-body" }, "We trade notifications for loon calls, and corporate stiffness for woodsmoke and the thwack of a screen door. Cabins, a bunkhouse, a lake that's been here longer than any of us. Come as you are. Bring the whole crew.")))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      num: "01 — Stay",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Cabins with", /* @__PURE__ */ React.createElement("br", null), "personalities."),
      intro: "Each cabin has its own unique character. Wild West has the wood-burning stove and a stone patio and deck. The Library has the books. The Love Shack has — well, a raised king bed and zero pretence. Pick your character."
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "cabin-grid" }, /* @__PURE__ */ React.createElement(CabinCard, { num: "01", cabin: CABINS[0], go, className: "cabin-tall" }), /* @__PURE__ */ React.createElement(CabinCard, { num: "02", cabin: CABINS[3], go, className: "cabin-wide" }), /* @__PURE__ */ React.createElement(CabinCard, { num: "03", cabin: CABINS[1], go, className: "cabin-third" }), /* @__PURE__ */ React.createElement(CabinCard, { num: "04", cabin: CABINS[5], go, className: "cabin-third" }), /* @__PURE__ */ React.createElement(CabinCard, { num: "05", cabin: CABINS[4], go, className: "cabin-third" })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 56 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => go("stay") }, "See all the cabins →")))), /* @__PURE__ */ React.createElement(Marquee, { items: [
    "Cosy, unpretentious fun",
    "No streaming, just dreaming",
    "Less scroll. More soul.",
    "Cabins with personalities",
    "Open seasonally"
  ] }), /* @__PURE__ */ React.createElement("section", { className: "dark-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      num: "02 — What's Here",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Less scroll.", /* @__PURE__ */ React.createElement("br", null), "More soul."),
      intro: "No spas, no signature cocktails, no programming. The lake. The fire. The people in front of you. Mountain Wi-Fi. Solid across all the cabins and common spaces. Use it sparingly."
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "threeup" }, /* @__PURE__ */ React.createElement("div", { className: "threeup-col" }, /* @__PURE__ */ React.createElement("span", { className: "threeup-num" }, "01"), /* @__PURE__ */ React.createElement("h3", { className: "threeup-title" }, "The Lake"), /* @__PURE__ */ React.createElement("p", { className: "threeup-body" }, "Jump off the dock. Paddle a kayak. Float on a noodle until your toes prune. The water is pristine. That is also by design.")), /* @__PURE__ */ React.createElement("div", { className: "threeup-col" }, /* @__PURE__ */ React.createElement("span", { className: "threeup-num" }, "02"), /* @__PURE__ */ React.createElement("h3", { className: "threeup-title" }, "The Fire"), /* @__PURE__ */ React.createElement("p", { className: "threeup-body" }, "Communal pit, kindling stacked, marshmallows and sticks at the front desk. Stories optional but encouraged.")), /* @__PURE__ */ React.createElement("div", { className: "threeup-col" }, /* @__PURE__ */ React.createElement("span", { className: "threeup-num" }, "03"), /* @__PURE__ */ React.createElement("h3", { className: "threeup-title" }, "The Grille"), /* @__PURE__ */ React.createElement("p", { className: "threeup-body" }, "The on-site spot. Burgers, milkshakes, pizza. Eat on the deck. Don't dress up.")))), /* @__PURE__ */ React.createElement("section", { style: { padding: 0, background: "var(--cream-2)" } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1440, margin: "0 auto", padding: "0 0" } }, /* @__PURE__ */ React.createElement("div", { className: "alt-block" }, /* @__PURE__ */ React.createElement("div", { className: "alt-img", role: "img", "aria-label": "Guests playing giant Jenga on a lakeside deck at twilight, with string lights overhead and Gates Lake in the background", style: { backgroundImage: "url(assets/campfire-jenga-night.jpeg)" } }), /* @__PURE__ */ React.createElement("div", { className: "alt-text" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "— Gatherings"), /* @__PURE__ */ React.createElement("h3", null, "Bring the", /* @__PURE__ */ React.createElement("br", null), "whole crew."), /* @__PURE__ */ React.createElement("p", null, "Whole-resort buyouts, family reunions, founder offsites that won't feel like one. The bunkhouse, all the cabins, the dock, the firepit. Yours."), /* @__PURE__ */ React.createElement("button", { className: "btn-text", onClick: () => go("gatherings") }, "Plan a Gathering →"))), /* @__PURE__ */ React.createElement("div", { className: "alt-block reverse" }, /* @__PURE__ */ React.createElement("div", { className: "alt-img", role: "img", "aria-label": "Outdoor forest wedding ceremony setup — rows of wooden chairs facing a fabric-draped arch, with a glimpse of the lake beyond", style: { backgroundImage: "url(assets/wedding_woods.png)" } }), /* @__PURE__ */ React.createElement("div", { className: "alt-text" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "— Weddings"), /* @__PURE__ */ React.createElement("h3", null, "Get married", /* @__PURE__ */ React.createElement("br", null), "in the woods."), /* @__PURE__ */ React.createElement("p", null, "A cedar deck on the lake. A hall built for music. Your people, your playlist, your kind of vows. We host one wedding at a time, and we host it well."), /* @__PURE__ */ React.createElement("button", { className: "btn-text", onClick: () => go("weddings") }, "See Weddings →"))))), /* @__PURE__ */ React.createElement("section", { style: { background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      num: "03 — The Word",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "What people", /* @__PURE__ */ React.createElement("br", null), "tell us."),
      intro: "Some of these are unprompted. Some we asked for. All of them came in by hand or by email — never paid, never edited."
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "reviews" }, /* @__PURE__ */ React.createElement(
    ReviewCard,
    {
      heading: "The Starry Night & Romance Vibe",
      quote: "We had campfires under a star-filled sky, went kayaking on the lake, and the bed was so comfortable. If you appreciate rustic charm and you're looking for a place to relax in peace, this is an absolute gem.",
      who: "Long Weekend Guest",
      stars: 5
    }
  ), /* @__PURE__ */ React.createElement(
    ReviewCard,
    {
      heading: "The Unpretentious & Cozy Vibe",
      quote: "The cabin was clean and cozy, the communal bathrooms were great, and the resort was extremely quiet and incredibly relaxing. Our son loved playing on the floating docks!",
      who: "Family Vacation Review",
      stars: 5
    }
  ), /* @__PURE__ */ React.createElement(
    ReviewCard,
    {
      heading: "The Comfort & Hospitality",
      quote: "Very kind service and hot water in cabin and showers. Kitchen is well-stocked, beds, and loft were great.",
      who: "Pablo G. & Crystal C. (Compiled from Google Reviews)",
      stars: 5
    }
  )))), /* @__PURE__ */ React.createElement("section", { className: "dark-section", style: { padding: "120px 40px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow eyebrow-light", style: { color: "var(--cedar)" } }, "— Ready when you are"), /* @__PURE__ */ React.createElement("h2", { style: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(72px, 10vw, 160px)",
    lineHeight: 0.9,
    color: "var(--cream)",
    letterSpacing: "0.02em",
    margin: "24px auto",
    maxWidth: 1200,
    textAlign: "center"
  } }, "COME AS YOU ARE.", /* @__PURE__ */ React.createElement("br", null), "BRING THE", /* @__PURE__ */ React.createElement("br", null), "WHOLE CREW."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, justifyContent: "center", marginTop: 40, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: BOOKING_URL, target: "_blank", rel: "noopener noreferrer" }, "Book a Cabin →"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost-light", onClick: () => go("about") }, "Read Our Story")))));
}
function CabinCard({ cabin, num, className, go }) {
  return /* @__PURE__ */ React.createElement("article", { className: `cabin-card ${className || ""}`, onClick: () => go("cabin", cabin.id) }, /* @__PURE__ */ React.createElement("div", { className: "cc-img", role: "img", "aria-label": `Exterior of ${cabin.name} cabin at Birken Lakeside Resort`, style: { backgroundImage: `url(${cabin.ext})` } }), /* @__PURE__ */ React.createElement("div", { className: "cc-shade" }), /* @__PURE__ */ React.createElement("div", { className: "cc-body" }, /* @__PURE__ */ React.createElement("span", { className: "cc-num" }, "— ", cabin.eyebrow || cabin.type), /* @__PURE__ */ React.createElement("h3", { className: "cc-title" }, cabin.name), /* @__PURE__ */ React.createElement("p", { className: "cc-sub" }, cabin.tag), /* @__PURE__ */ React.createElement("div", { className: "cc-meta" }, /* @__PURE__ */ React.createElement("span", null, "Sleeps ", cabin.sleeps), /* @__PURE__ */ React.createElement("span", null, cabin.beds), /* @__PURE__ */ React.createElement("span", null, "From $", cabin.price, "/nt"))));
}
function ReviewCard({ heading, quote, who, stars }) {
  return /* @__PURE__ */ React.createElement("div", { className: "review-card" }, /* @__PURE__ */ React.createElement("div", { className: "review-stars" }, "★".repeat(stars)), heading && /* @__PURE__ */ React.createElement("div", { className: "review-heading" }, heading), /* @__PURE__ */ React.createElement("p", { className: "review-quote" }, '"', quote, '"'), /* @__PURE__ */ React.createElement("div", { className: "review-meta" }, "— ", who));
}
Object.assign(window, { Home, CabinCard, ReviewCard });
