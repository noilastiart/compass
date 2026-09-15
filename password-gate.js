// Pages-only password gate. GitHub Pages has no login of its own, so this exists purely to
// keep casual/accidental visitors off the fallback URL -- it is NOT real security (a wrong
// password wipes the page, but the source is still fully visible to anyone who inspects it).
// Real protection is Vercel Authentication on laporta.tech, which this must never touch.
//
// Scoped to GitHub Pages ONLY via a hostname check -- laporta.tech (and any other host this
// file might ever be served from) is left completely alone, no prompt, no wipe, nothing.
if (location.hostname.endsWith('.github.io')) {
  const PAGES_PASSWORD = "CHANGEME"; // <-- set the real password here
  const pw = prompt("Enter password:");
  if (pw !== PAGES_PASSWORD) {
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:40vh;'>Access denied</h1>";
    document.body.style.background = "#10141a";
    throw new Error("stopped");
  }
}
