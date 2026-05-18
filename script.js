const siteConfig = {
  siteUrl: "https://gradifysa.com/",
  domainLabel: "gradifysa.com",
  platforms: [
    {
      name: "TikTok",
      note: "محتوى تقني مختصر",
      icon: "fa-brands fa-tiktok",
      color: "linear-gradient(145deg, #020617, #111827)",
      url: "#"
    },
    {
      name: "Snapchat",
      note: "لقطات وتجارب سريعة",
      icon: "fa-brands fa-snapchat",
      color: "linear-gradient(145deg, #facc15, #fef08a)",
      darkIcon: true,
      url: "#"
    },
    {
      name: "Instagram",
      note: "منشورات وملخصات مرئية",
      icon: "fa-brands fa-instagram",
      color: "linear-gradient(145deg, #f97316, #db2777 48%, #7c3aed)",
      url: "#"
    },
    {
      name: "X",
      note: "أفكار وتحديثات قصيرة",
      icon: "fa-brands fa-x-twitter",
      color: "linear-gradient(145deg, #020617, #111827)",
      url: "#"
    },
    {
      name: "Facebook",
      note: "محتوى ومشاركات عامة",
      icon: "fa-brands fa-facebook-f",
      color: "linear-gradient(145deg, #2563eb, #60a5fa)",
      url: "#"
    },
    {
      name: "Telegram",
      note: "تنبيهات وروابط مباشرة",
      icon: "fa-brands fa-telegram",
      color: "linear-gradient(145deg, #0284c7, #67e8f9)",
      url: "#"
    },
    {
      name: "YouTube",
      note: "شروحات ومقاطع مفيدة",
      icon: "fa-brands fa-youtube",
      color: "linear-gradient(145deg, #ef4444, #f87171)",
      url: "#"
    },
    {
      name: "Email",
      note: "للتواصل والاستفسارات",
      icon: "fa-regular fa-envelope",
      color: "linear-gradient(145deg, #08224b, #1767cb)",
      url: "#"
    }
  ]
};

const platformGrid = document.getElementById("platformGrid");
const miniLinks = document.getElementById("miniLinks");
const domainLabel = document.getElementById("domainLabel");
const yearNode = document.getElementById("year");

domainLabel.textContent = siteConfig.domainLabel;
yearNode.textContent = new Date().getFullYear();

siteConfig.platforms.forEach((platform) => {
  const card = document.createElement("a");
  card.className = `platform-card ${platform.url === "#" ? "placeholder" : ""}`;
  card.href = platform.url;
  card.target = platform.url === "#" ? "_self" : "_blank";
  card.rel = platform.url === "#" ? "" : "noopener noreferrer";
  card.setAttribute("aria-label", platform.url === "#" ? `${platform.name} - الرابط سيضاف لاحقًا` : `زيارة ${platform.name}`);
  card.innerHTML = `
    <span class="platform-icon" style="--icon-bg: ${platform.color}; color: ${platform.darkIcon ? "#08224b" : "#fff"};">
      <i class="${platform.icon}"></i>
    </span>
    <h3>${platform.name}</h3>
    <p>${platform.note}</p>
    <span class="visit">زيارة المنصة <i class="fa-solid fa-arrow-left"></i></span>
  `;
  platformGrid.appendChild(card);

  const mini = document.createElement("a");
  mini.href = platform.url;
  mini.target = platform.url === "#" ? "_self" : "_blank";
  mini.rel = platform.url === "#" ? "" : "noopener noreferrer";
  mini.className = platform.url === "#" ? "placeholder" : "";
  mini.setAttribute("aria-label", platform.url === "#" ? `${platform.name} - الرابط سيضاف لاحقًا` : platform.name);
  mini.innerHTML = `<i class="${platform.icon}"></i>`;
  miniLinks.appendChild(mini);
});

// Keep placeholder clicks from jumping to top.
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
