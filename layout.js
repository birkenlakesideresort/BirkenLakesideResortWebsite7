const { useEffect, useState, useRef } = React;
function Nav({ route, go, transparent }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    setMobileOpen(false);
  }, [route]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const overDark = transparent && !scrolled;
  const links = [
    { id: "home", label: "Home" },
    { id: "stay", label: "Stay" },
    { id: "gatherings", label: "Gatherings" },
    { id: "weddings", label: "Weddings" },
    { id: "grille", label: "The Grille" },
    { id: "area", label: "The Area" },
    { id: "about", label: "About" },
    { id: "book", label: "Bookings" },
    { id: "contact", label: "Contact" }
  ];
  const handleNav = (id) => {
    setMobileOpen(false);
    go(id);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", { className: `nav ${overDark ? "over-dark" : ""} ${scrolled ? "is-scrolled" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "nav-inner" }, /* @__PURE__ */ React.createElement("ul", { className: "nav-links" }, links.slice(0, 4).map((l) => /* @__PURE__ */ React.createElement("li", { key: l.id }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: route === l.id || l.id === "stay" && route === "cabin" ? "active" : "",
      onClick: () => go(l.id)
    },
    l.label
  )))), /* @__PURE__ */ React.createElement("div", { className: "nav-logo nav-logo-img", onClick: () => go("home") }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "Birken Lakeside Resort Logo \u2014 Since 1906" })), /* @__PURE__ */ React.createElement("div", { className: "nav-right" }, /* @__PURE__ */ React.createElement("ul", { className: "nav-links", style: { marginRight: 8 } }, links.slice(4, 7).map((l) => /* @__PURE__ */ React.createElement("li", { key: l.id }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: route === l.id ? "active" : "",
      onClick: () => go(l.id)
    },
    l.label
  )))), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "btn btn-primary",
      style: { padding: "12px 28px" },
      onClick: () => go("book")
    },
    "Bookings \u2192"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nav-hamburger",
      "aria-label": "Open menu",
      onClick: () => setMobileOpen(true)
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), /* @__PURE__ */ React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" }))
  )))), mobileOpen && /* @__PURE__ */ React.createElement("div", { className: "mobile-menu", role: "dialog", "aria-label": "Site navigation" }, /* @__PURE__ */ React.createElement("div", { className: "mobile-menu-top" }, /* @__PURE__ */ React.createElement("div", { className: "mobile-menu-logo" }, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "Birken Lakeside Resort Logo \u2014 Since 1906" })), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "mobile-menu-close",
      "aria-label": "Close menu",
      onClick: () => setMobileOpen(false)
    },
    /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))
  )), /* @__PURE__ */ React.createElement("ul", { className: "mobile-menu-list" }, links.map((l) => /* @__PURE__ */ React.createElement("li", { key: l.id }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: route === l.id || l.id === "stay" && route === "cabin" ? "active" : "",
      onClick: () => handleNav(l.id)
    },
    l.label
  )))), /* @__PURE__ */ React.createElement("div", { className: "mobile-menu-cta" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => handleNav("book") }, "Bookings \u2192")), /* @__PURE__ */ React.createElement("div", { className: "mobile-menu-meta" }, "(604) 452-3255", /* @__PURE__ */ React.createElement("br", null), "hello@birkenlakeside.ca", /* @__PURE__ */ React.createElement("br", null), "9179 Pemberton Portage Rd", /* @__PURE__ */ React.createElement("br", null), "Birken, BC V0N 2L0")));
}
function Marquee({ items }) {
  const list = items.concat(items);
  return /* @__PURE__ */ React.createElement("div", { className: "marquee" }, /* @__PURE__ */ React.createElement("div", { className: "marquee-track" }, list.map((t, i) => /* @__PURE__ */ React.createElement("span", { key: i }, t))));
}
function Footer({ go }) {
  return /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "footer-inner" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", { src: "assets/logo.png", alt: "Birken Lakeside Resort Logo \u2014 Since 1906", className: "footer-logo-img" }), /* @__PURE__ */ React.createElement("p", { className: "footer-tag italic-quote" }, "Woodsmoke. Pristine Water. Good People. Cabins with personalities, on a lake that's been here longer than any of us.")), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, "The Place"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { onClick: () => go("stay") }, "Stay"), /* @__PURE__ */ React.createElement("li", { onClick: () => go("gatherings") }, "Gatherings"), /* @__PURE__ */ React.createElement("li", { onClick: () => go("weddings") }, "Weddings"), /* @__PURE__ */ React.createElement("li", { onClick: () => go("grille") }, "The Grille"), /* @__PURE__ */ React.createElement("li", { onClick: () => go("area") }, "The Area"), /* @__PURE__ */ React.createElement("li", { onClick: () => go("about") }, "About"))), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, "Find Us"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", { style: { lineHeight: 1.5 } }, "9179 Pemberton Portage Rd", /* @__PURE__ */ React.createElement("br", null), "Birken, BC V0N 2L0"), /* @__PURE__ */ React.createElement("li", null, "(604) 452-3255"), /* @__PURE__ */ React.createElement("li", null, "hello@birkenlakeside.ca"), /* @__PURE__ */ React.createElement("li", { style: { marginTop: 8, fontSize: 14, color: "rgba(243,234,220,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" } }, "55 min from Whistler \xB7 2.5 hrs from Vancouver"))), /* @__PURE__ */ React.createElement("div", { className: "footer-col" }, /* @__PURE__ */ React.createElement("h4", null, "The Mailing List"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 15, color: "rgba(243,234,220,0.7)", lineHeight: 1.7, marginBottom: 14 } }, "Quarterly. Sometimes a recipe. Never spam."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", borderBottom: "0.5px solid rgba(243,234,220,0.3)" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      placeholder: "you@example.com",
      style: {
        flex: 1,
        background: "transparent",
        border: "none",
        outline: "none",
        color: "var(--cream)",
        fontSize: 15,
        padding: "10px 0",
        fontFamily: "var(--body)"
      }
    }
  ), /* @__PURE__ */ React.createElement("button", { className: "footer-send-btn", style: {
    fontFamily: "var(--ui)",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "var(--cedar)",
    padding: "10px 0"
  } }, "Send \u2192")))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("span", null, "\xA9 1906 \u2014 2026 \xB7 Birken Lakeside Resort"), /* @__PURE__ */ React.createElement("span", null, "Old enough to know better. Wild enough not to care.")));
}
function BookingBar({ onBook }) {
  const [stay, setStay] = useState({ in: "Fri, Jul 24", out: "Mon, Jul 27" });
  const [guests, setGuests] = useState(2);
  const [cabin, setCabin] = useState("Any cabin");
  return /* @__PURE__ */ React.createElement("div", { className: "booking-bar" }, /* @__PURE__ */ React.createElement("div", { className: "bb-field" }, /* @__PURE__ */ React.createElement("span", { className: "bb-label" }, "Check In"), /* @__PURE__ */ React.createElement("span", { className: "bb-value" }, stay.in), /* @__PURE__ */ React.createElement("span", { className: "bb-sub" }, "3 PM onwards")), /* @__PURE__ */ React.createElement("div", { className: "bb-field" }, /* @__PURE__ */ React.createElement("span", { className: "bb-label" }, "Check Out"), /* @__PURE__ */ React.createElement("span", { className: "bb-value" }, stay.out), /* @__PURE__ */ React.createElement("span", { className: "bb-sub" }, "11 AM")), /* @__PURE__ */ React.createElement("div", { className: "bb-field" }, /* @__PURE__ */ React.createElement("span", { className: "bb-label" }, "Guests"), /* @__PURE__ */ React.createElement("span", { className: "bb-value" }, guests, " ", guests === 1 ? "Guest" : "Guests"), /* @__PURE__ */ React.createElement("span", { className: "bb-sub", style: { display: "flex", gap: 10 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setGuests((g) => Math.max(1, g - 1)), style: { color: "var(--cabin)" } }, "\u2212 Less"), /* @__PURE__ */ React.createElement("button", { onClick: () => setGuests((g) => g + 1), style: { color: "var(--cabin)" } }, "More +"))), /* @__PURE__ */ React.createElement("div", { className: "bb-field" }, /* @__PURE__ */ React.createElement("span", { className: "bb-label" }, "Cabin"), /* @__PURE__ */ React.createElement("span", { className: "bb-value" }, cabin), /* @__PURE__ */ React.createElement("span", { className: "bb-sub" }, "All cabins available")), /* @__PURE__ */ React.createElement("button", { className: "bb-btn", onClick: onBook }, "Check Availability \u2192"));
}
function SectionHead({ num, title, intro }) {
  return /* @__PURE__ */ React.createElement("div", { className: "section-head" }, /* @__PURE__ */ React.createElement("div", { className: "left" }, /* @__PURE__ */ React.createElement("span", { className: "section-num" }, num), /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, title)), /* @__PURE__ */ React.createElement("div", { className: "right" }, intro));
}
Object.assign(window, { Nav, Footer, Marquee, BookingBar, SectionHead });
