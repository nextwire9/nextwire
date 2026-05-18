const links = [
  { key: "TT", title: "TikTok", ar: "تيك توك", url: "#", color: "linear-gradient(135deg,#050505,#20242b)" },
  { key: "SC", title: "Snapchat", ar: "سناب شات", url: "#", color: "linear-gradient(135deg,#ffdf00,#ffd21d)" },
  { key: "IG", title: "Instagram", ar: "إنستقرام", url: "#", color: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)" },
  { key: "X", title: "X (Twitter)", ar: "إكس (تويتر)", url: "#", color: "linear-gradient(135deg,#000,#222)" },
  { key: "f", title: "Facebook", ar: "فيسبوك", url: "#", color: "linear-gradient(135deg,#1877f2,#4aa3ff)" },
  { key: "TG", title: "Telegram", ar: "تلغرام", url: "#", color: "linear-gradient(135deg,#229ed9,#5cc8ff)" },
  { key: "▶", title: "YouTube", ar: "يوتيوب", url: "#", color: "linear-gradient(135deg,#ff0000,#ff4444)" },
  { key: "✉", title: "Email", ar: "راسلنا", url: "mailto:contact@nextwire.dev", color: "linear-gradient(135deg,#061b3d,#0a2b5f)" }
];

const grid = document.getElementById("linksGrid");
const footerIcons = document.getElementById("footerIcons");

links.forEach(link => {
  const a = document.createElement("a");
  a.className = "platform-card";
  a.href = link.url;
  if (!link.url.startsWith("mailto:")) {
    a.target = "_blank";
    a.rel = "noopener";
  }
  a.innerHTML = `
    <div class="platform-icon" style="background:${link.color}">${link.key}</div>
    <h3>${link.title}</h3>
    <p>${link.ar}</p>
    <strong>انتقل الآن ←</strong>
  `;
  grid.appendChild(a);

  const icon = document.createElement("a");
  icon.href = link.url;
  icon.title = link.title;
  icon.textContent = link.key;
  if (!link.url.startsWith("mailto:")) {
    icon.target = "_blank";
    icon.rel = "noopener";
  }
  footerIcons.appendChild(icon);
});
