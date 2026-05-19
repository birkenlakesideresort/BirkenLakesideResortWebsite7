function Stay({ go }) {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Cabin", "Glamping", "Couples", "Group", "Washroom"];
  const list = filter === "All" || filter === "Washroom" ? CABINS : CABINS.filter((c) => c.type === filter);
  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" }, /* @__PURE__ */ React.createElement("section", { className: "first-section", style: { padding: "80px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 02 / Stay"), /* @__PURE__ */ React.createElement("h1", { style: { color: "var(--forest)" } }, "CABINS.", /* @__PURE__ */ React.createElement("br", null), "ONE LAKE.", /* @__PURE__ */ React.createElement("br", null), "NO TWO ALIKE."), /* @__PURE__ */ React.createElement("p", { className: "italic-quote", style: { fontSize: 20, marginTop: 28, maxWidth: 640 } }, "Each one was named for a feeling, then built around it. Pick the one that sounds like the kind of week you've been needing."))), /* @__PURE__ */ React.createElement("section", { style: { padding: "0 40px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("div", { className: "cabin-filters" }, types.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      className: filter === t ? "active" : "",
      onClick: () => setFilter(t)
    },
    t === "All" ? "All cabins" : t
  ))))), /* @__PURE__ */ React.createElement("section", { style: { padding: "0 40px 120px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, filter !== "Washroom" && list.map((c, i) => /* @__PURE__ */ React.createElement(CabinRow, { key: c.id, cabin: c, num: String(i + 1).padStart(2, "0"), go, reverse: i % 2 === 1 })), (filter === "All" || filter === "Washroom") && /* @__PURE__ */ React.createElement(WashroomRow, { go })))), /* @__PURE__ */ React.createElement(Marquee, { items: ["Pet friendly", "Wood stoves", "Real beds", "No streaming, just dreaming", "Open seasonally"] }));
}
function CabinRow({ cabin, num, go, reverse }) {
  return /* @__PURE__ */ React.createElement("article", { className: "cabin-row-article", style: {
    display: "grid",
    gridTemplateColumns: reverse ? "1fr 1.4fr" : "1.4fr 1fr",
    gap: 0,
    border: "0.5px solid rgba(29,61,45,0.18)",
    background: "var(--cream)"
  } }, /* @__PURE__ */ React.createElement("div", { role: "img", "aria-label": `${cabin.name} cabin exterior`, style: {
    order: reverse ? 2 : 1,
    backgroundImage: `url(${cabin.ext})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 460
  } }), /* @__PURE__ */ React.createElement("div", { className: "cabin-row-text", style: {
    order: reverse ? 1 : 2,
    padding: "56px 56px 48px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    justifyContent: "center"
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 ", cabin.eyebrow || cabin.type), /* @__PURE__ */ React.createElement("span", { className: "pill" }, "From $", cabin.price, "/nt")), /* @__PURE__ */ React.createElement("h2", { style: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(48px, 5vw, 80px)",
    lineHeight: 0.95,
    color: "var(--forest)",
    letterSpacing: "0.02em"
  } }, cabin.name), /* @__PURE__ */ React.createElement("p", { className: "italic-quote", style: { fontSize: 19 } }, cabin.tag), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 17, lineHeight: 1.8, color: "var(--stone)", maxWidth: 480 } }, cabin.blurb), /* @__PURE__ */ React.createElement("ul", { style: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px 24px",
    marginTop: 4
  } }, cabin.features.map((f, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: {
    fontFamily: "var(--ui)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--forest)",
    padding: "8px 0",
    borderTop: "0.5px solid rgba(29,61,45,0.15)",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 4, height: 4, background: "var(--cedar)", borderRadius: "50%" } }), f))), /* @__PURE__ */ React.createElement("div", { className: "cabin-row-actions", style: { display: "flex", gap: 12, marginTop: 18 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => go("book") }, "Book ", cabin.name, " \u2192"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => go("cabin", cabin.id) }, "See more"))));
}
function CabinDetail({ cabinId, go }) {
  const cabin = CABINS.find((c) => c.id === cabinId) || CABINS[0];
  const others = CABINS.filter((c) => c.id !== cabin.id).slice(0, 3);
  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" }, /* @__PURE__ */ React.createElement("section", { className: "cabin-hero", style: { padding: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-img", role: "img", "aria-label": `${cabin.name} \u2014 ${cabin.tag}`, style: { backgroundImage: `url(${cabin.ext})` } }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-shade" }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-content" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow eyebrow-light", style: { color: "var(--cedar)" } }, "\u2014 ", cabin.eyebrow || cabin.type), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 18 } }, cabin.name.toUpperCase()), /* @__PURE__ */ React.createElement("p", { className: "tagline" }, cabin.tag)), /* @__PURE__ */ React.createElement("div", { className: "price-card" }, /* @__PURE__ */ React.createElement("div", { className: "lbl" }, "From"), /* @__PURE__ */ React.createElement("div", { className: "pp" }, "$", cabin.price, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, letterSpacing: "0.18em", color: "var(--mist)" } }, " / NIGHT")), /* @__PURE__ */ React.createElement("div", { className: "sub" }, "2-night minimum \xB7 taxes extra"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => go("book") }, "Book ", cabin.name, " \u2192")))), /* @__PURE__ */ React.createElement("section", { className: "cabin-detail-section", style: { padding: "64px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner cabin-detail-specs", style: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 0,
    borderTop: "0.5px solid rgba(29,61,45,0.18)",
    borderBottom: "0.5px solid rgba(29,61,45,0.18)"
  } }, [
    { l: "Sleeps", v: cabin.sleeps },
    { l: "Beds", v: cabin.beds },
    { l: "Bath", v: cabin.bath },
    { l: "Type", v: cabin.type }
  ].map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
    padding: "32px 24px",
    borderRight: i < 3 ? "0.5px solid rgba(29,61,45,0.18)" : "none"
  } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "\u2014 ", s.l), /* @__PURE__ */ React.createElement("div", { style: {
    fontFamily: "var(--serif)",
    fontSize: 38,
    color: "var(--forest)",
    letterSpacing: "0.02em",
    marginTop: 6
  } }, s.v))))), /* @__PURE__ */ React.createElement("section", { className: "cabin-detail-section", style: { padding: "40px 40px 120px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner cabin-detail-story", style: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 The Cabin"), /* @__PURE__ */ React.createElement("h2", { style: {
    fontFamily: "var(--serif)",
    fontSize: "clamp(40px, 4.5vw, 72px)",
    lineHeight: 0.95,
    color: "var(--forest)",
    letterSpacing: "0.02em",
    marginTop: 14
  } }, "What it feels like inside."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 19, lineHeight: 1.85, color: "var(--stone)", marginTop: 24 } }, cabin.blurb), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 19, lineHeight: 1.85, color: "var(--stone)", marginTop: 16 } }, "You'll find fresh linens, a stocked kitchen kit, the kettle on the stove. The cabin sleeps ", cabin.sleeps, " in a ", cabin.beds.toLowerCase(), " configuration."), /* @__PURE__ */ React.createElement("ul", { className: "cabin-detail-features", style: {
    listStyle: "none",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px 24px",
    marginTop: 28
  } }, cabin.features.map((f, i) => /* @__PURE__ */ React.createElement("li", { key: i, style: {
    fontFamily: "var(--ui)",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--forest)",
    padding: "10px 0",
    borderTop: "0.5px solid rgba(29,61,45,0.15)",
    display: "flex",
    alignItems: "center",
    gap: 10
  } }, /* @__PURE__ */ React.createElement("span", { style: { width: 4, height: 4, background: "var(--cedar)", borderRadius: "50%" } }), f)))), /* @__PURE__ */ React.createElement("div", { role: "img", "aria-label": `Interior of ${cabin.name}`, style: {
    backgroundImage: `url(${cabin.int})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 640
  } }))), /* @__PURE__ */ React.createElement("section", { className: "dark-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      num: "\u2014 More Cabins",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "The others."),
      intro: "Each one different. Pick the one that sounds like the kind of week you need."
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "cabin-grid" }, others.map((c, i) => /* @__PURE__ */ React.createElement(
    CabinCard,
    {
      key: c.id,
      cabin: c,
      num: String(i + 1).padStart(2, "0"),
      className: "cabin-third",
      go
    }
  ))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginTop: 40 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost-light", onClick: () => go("stay") }, "See all cabins \u2192")))));
}
function WashroomRow({ go }) {
  return /* @__PURE__ */ React.createElement("article", { className: "cabin-row-article", style: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr",
    gap: 0,
    border: "0.5px solid rgba(29,61,45,0.18)",
    background: "var(--cream)"
  } }, /* @__PURE__ */ React.createElement("div", { role: "img", "aria-label": "Exterior of the shared washroom facility at Birken Lakeside Resort", style: {
    order: 1,
    backgroundImage: "url(assets/shared_washroom_exterior.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 460,
    backgroundColor: "rgba(29,61,45,0.08)"
  } }), /* @__PURE__ */ React.createElement("div", { className: "cabin-row-text", style: { order: 2, padding: "56px 56px 48px", display: "flex", flexDirection: "column", gap: 16, justifyContent: "center" } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 What's Here"), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: "clamp(36px, 4vw, 64px)", lineHeight: 0.95, color: "var(--forest)", letterSpacing: "0.02em" } }, "Shared Washroom Facility"), /* @__PURE__ */ React.createElement("p", { className: "italic-quote", style: { fontSize: 19 } }, "Hot showers, good light, always clean."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 17, lineHeight: 1.8, color: "var(--stone)", maxWidth: 480 } }, "Six of seven cabins share a central washroom block \u2014 bright, clean, always stocked. The walk from any cabin is about thirty seconds."), /* @__PURE__ */ React.createElement("div", { className: "cabin-row-actions", style: { display: "flex", gap: 12, marginTop: 18 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: () => go("washroom") }, "See facility details \u2192"))));
}
function WashroomDetail({ go }) {
  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" }, /* @__PURE__ */ React.createElement("section", { className: "cabin-hero", style: { padding: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-img", role: "img", "aria-label": "Exterior of the shared washroom facility at Birken Lakeside Resort", style: { backgroundImage: "url(assets/shared_washroom_exterior.jpeg)", backgroundColor: "rgba(29,61,45,0.12)" } }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-shade" }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-content" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow eyebrow-light", style: { color: "var(--cedar)" } }, "\u2014 What's Here"), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 18 } }, "SHARED WASHROOM FACILITY"), /* @__PURE__ */ React.createElement("p", { className: "tagline" }, "Hot showers, good light, always clean.")), /* @__PURE__ */ React.createElement("div", { className: "price-card" }, /* @__PURE__ */ React.createElement("div", { className: "lbl" }, "Shared by"), /* @__PURE__ */ React.createElement("div", { className: "pp", style: { fontSize: 26, letterSpacing: "0.04em" } }, "6 of 7 cabins"), /* @__PURE__ */ React.createElement("div", { className: "sub" }, "The Chapel has its own private washroom"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost-light", style: { width: "100%", marginTop: 8 }, onClick: () => go("stay") }, "\u2190 Back to all cabins")))), /* @__PURE__ */ React.createElement("section", { className: "cabin-detail-section", style: { padding: "64px 40px 80px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner cabin-detail-story", style: { display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 The Facility"), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: "var(--serif)", fontSize: "clamp(40px, 4.5vw, 72px)", lineHeight: 0.95, color: "var(--forest)", letterSpacing: "0.02em", marginTop: 14 } }, "Bright. Clean. Always on."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 19, lineHeight: 1.85, color: "var(--stone)", marginTop: 24 } }, "One of the rules of staying at a hundred-year-old resort: the cabins are character, not infrastructure. Six of seven share a central washroom block \u2014 bright, clean, hot showers always on, set apart in its own building close to the cabins. It's not a flaw to apologise for. It's how the property was built, and how it still works. Spotless every morning. Stocked through the day. The Chapel is the only cabin with its own private washroom \u2014 if a private bathroom is a deal-breaker for you, that's the one to book. For everyone else, the walk's about thirty seconds, and the lake's right there.")), /* @__PURE__ */ React.createElement("div", { role: "img", "aria-label": "Interior of the shared washroom facility \u2014 clean, bright, and well-stocked", style: {
    backgroundImage: "url(assets/shared_washroom_interior.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 640,
    backgroundColor: "rgba(29,61,45,0.08)"
  } }))), /* @__PURE__ */ React.createElement("section", { className: "cabin-detail-section", style: { padding: "0 40px 120px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 } }, [
    { src: "assets/shared_washroom_shower.jpeg", alt: "Hot shower in the shared washroom facility" },
    { src: "assets/shared_washroom_mirror.jpeg", alt: "Mirror and vanity in the shared washroom facility" },
    { src: "assets/shared_washroom_interior.jpeg", alt: "Interior of the shared washroom facility \u2014 tiled, bright, clean" },
    { src: "assets/shared_washroom_exterior.jpeg", alt: "Exterior of the shared washroom building among the trees" }
  ].map((img, i) => /* @__PURE__ */ React.createElement("div", { key: i, role: "img", "aria-label": img.alt, style: {
    backgroundImage: `url(${img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: 320,
    backgroundColor: "rgba(29,61,45,0.08)"
  } }))))), /* @__PURE__ */ React.createElement("section", { className: "dark-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner", style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement(
    SectionHead,
    {
      num: "\u2014 Stay",
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Find your cabin."),
      intro: "Each one different. The Chapel is the only one with its own private washroom \u2014 book it if that matters to you."
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost-light", onClick: () => go("stay") }, "See all cabins \u2192")))));
}
Object.assign(window, { Stay, CabinDetail, CabinRow, WashroomRow, WashroomDetail });
