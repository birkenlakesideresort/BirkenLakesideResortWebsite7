function Stay({ go }) {
  const [filter, setFilter] = useState("All");
  const types = ["All", "Cabin", "Glamping", "Couples", "Group"];
  const list = filter === "All" ? CABINS : CABINS.filter((c) => c.type === filter);
  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" }, /* @__PURE__ */ React.createElement("section", { className: "first-section", style: { padding: "80px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 02 / Stay"), /* @__PURE__ */ React.createElement("h1", { style: { color: "var(--forest)" } }, "CABINS.", /* @__PURE__ */ React.createElement("br", null), "ONE LAKE.", /* @__PURE__ */ React.createElement("br", null), "NO TWO ALIKE."), /* @__PURE__ */ React.createElement("p", { className: "italic-quote", style: { fontSize: 20, marginTop: 28, maxWidth: 640 } }, "Each one was named for a feeling, then built around it. Pick the one that sounds like the kind of week you've been needing."))), /* @__PURE__ */ React.createElement("section", { style: { padding: "0 40px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("div", { className: "cabin-filters" }, types.map((t) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: t,
      className: filter === t ? "active" : "",
      onClick: () => setFilter(t)
    },
    t === "All" ? "All cabins" : t
  ))))), /* @__PURE__ */ React.createElement("section", { style: { padding: "0 40px 120px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } }, list.map((c, i) => /* @__PURE__ */ React.createElement(CabinRow, { key: c.id, cabin: c, num: String(i + 1).padStart(2, "0"), go, reverse: i % 2 === 1 }))))), /* @__PURE__ */ React.createElement(Marquee, { items: ["Pet friendly", "Wood stoves", "Real beds", "No streaming, just dreaming", "Open seasonally"] }));
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
  } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } }, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "\u2014 Cabin ", num, " \xB7 ", cabin.type), /* @__PURE__ */ React.createElement("span", { className: "pill" }, "From $", cabin.price, "/nt")), /* @__PURE__ */ React.createElement("h2", { style: {
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
  return /* @__PURE__ */ React.createElement("div", { className: "page-fade" }, /* @__PURE__ */ React.createElement("section", { className: "cabin-hero", style: { padding: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-img", role: "img", "aria-label": `${cabin.name} \u2014 ${cabin.tag}`, style: { backgroundImage: `url(${cabin.ext})` } }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-shade" }), /* @__PURE__ */ React.createElement("div", { className: "cabin-hero-content" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow eyebrow-light", style: { color: "var(--cedar)" } }, "\u2014 Cabin \xB7 ", cabin.type), /* @__PURE__ */ React.createElement("h1", { style: { marginTop: 18 } }, cabin.name.toUpperCase()), /* @__PURE__ */ React.createElement("p", { className: "tagline" }, cabin.tag)), /* @__PURE__ */ React.createElement("div", { className: "price-card" }, /* @__PURE__ */ React.createElement("div", { className: "lbl" }, "From"), /* @__PURE__ */ React.createElement("div", { className: "pp" }, "$", cabin.price, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 16, letterSpacing: "0.18em", color: "var(--mist)" } }, " / NIGHT")), /* @__PURE__ */ React.createElement("div", { className: "sub" }, "2-night minimum \xB7 taxes extra"), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", style: { width: "100%" }, onClick: () => go("book") }, "Book ", cabin.name, " \u2192")))), /* @__PURE__ */ React.createElement("section", { className: "cabin-detail-section", style: { padding: "64px 40px", background: "var(--cream)" } }, /* @__PURE__ */ React.createElement("div", { className: "section-inner cabin-detail-specs", style: {
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
      title: /* @__PURE__ */ React.createElement(React.Fragment, null, "The other six."),
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
Object.assign(window, { Stay, CabinDetail, CabinRow });
