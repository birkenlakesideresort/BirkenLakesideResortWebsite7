const { useState, useEffect } = React;
function App() {
  const VALID_ROUTES = ["home", "stay", "cabin", "gatherings", "weddings", "grille", "area", "about", "book", "contact", "404"];
  const parseHash = () => {
    const h = (window.location.hash || "").replace(/^#\/?/, "").trim();
    if (!h) return { route: "home", cabinId: null };
    const [r, id] = h.split("/");
    if (r === "cabin" && id) return { route: "cabin", cabinId: id };
    if (VALID_ROUTES.includes(r)) return { route: r, cabinId: null };
    return { route: "404", cabinId: null };
  };
  const initial = parseHash();
  const [route, setRoute] = useState(initial.route);
  const [cabinId, setCabinId] = useState(initial.cabinId);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route, cabinId]);
  useEffect(() => {
    const onHash = () => {
      const next = parseHash();
      setRoute(next.route);
      setCabinId(next.cabinId);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (!loader) return;
    loader.classList.add("is-fading");
    const t = setTimeout(() => loader.remove(), 500);
    return () => clearTimeout(t);
  }, []);
  const go = (r, id) => {
    if (r === "cabin") {
      setCabinId(id);
      setRoute("cabin");
      window.history.pushState(null, "", "#/cabin/" + id);
    } else {
      setRoute(r);
      window.history.pushState(null, "", r === "home" ? "#/" : "#/" + r);
    }
  };
  const transparent = route === "home" || route === "cabin" || route === "weddings";
  let page;
  switch (route) {
    case "home":
      page = /* @__PURE__ */ React.createElement(Home, { go });
      break;
    case "stay":
      page = /* @__PURE__ */ React.createElement(Stay, { go });
      break;
    case "cabin":
      page = /* @__PURE__ */ React.createElement(CabinDetail, { cabinId, go });
      break;
    case "gatherings":
      page = /* @__PURE__ */ React.createElement(Gatherings, { go });
      break;
    case "weddings":
      page = /* @__PURE__ */ React.createElement(Weddings, { go });
      break;
    case "grille":
      page = /* @__PURE__ */ React.createElement(Grille, { go });
      break;
    case "area":
      page = /* @__PURE__ */ React.createElement(Area, { go });
      break;
    case "about":
      page = /* @__PURE__ */ React.createElement(About, { go });
      break;
    case "book":
      page = /* @__PURE__ */ React.createElement(Book, { go });
      break;
    case "contact":
      page = /* @__PURE__ */ React.createElement(Contact, { go });
      break;
    case "404":
      page = /* @__PURE__ */ React.createElement(NotFound, { go });
      break;
    default:
      page = /* @__PURE__ */ React.createElement(Home, { go });
  }
  return /* @__PURE__ */ React.createElement("div", { className: "app", "data-screen-label": route }, /* @__PURE__ */ React.createElement(Nav, { route, go, transparent }), /* @__PURE__ */ React.createElement("main", { style: { flex: 1 } }, page), /* @__PURE__ */ React.createElement(Footer, { go }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
