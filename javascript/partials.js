document.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

async function includeHTML() {
  // kör om så länge det finns något kvar att includa
  let el;
  while ((el = document.querySelector("[data-include]"))) {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file, { cache: "no-store" });
      if (!res.ok) throw new Error(res.statusText);
      const html = await res.text();
      // byt ut hela elementet mot den hämtade html:en
      el.outerHTML = html;
    } catch (err) {
      console.error("include failed for", file, err);
      el.outerHTML = "";
    }
  }
}
//bara en gång i botten på index.html HJÄLP AV CHATGPT