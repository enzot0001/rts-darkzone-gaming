const games = [
  {
    title: "Euro Truck Simulator 2",
    platform: "PC",
    label: "Long-haul trucking",
    description:
      "Drive across Europe with realistic trucks, traffic packs, weather realism, and community-built map expansions.",
    image: "assets/images/games/ets2.jpeg",
    links: [
      {
        text: "Get on Steam",
        url: "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
        icon: "🔗",
        type: "primary"
      }
    ]
  },
  {
    title: "Proton Bus Simulator",
    platform: "Mobile",
    label: "Passenger driving",
    description:
      "Enjoy immersive bus routes, cockpit camera views, custom bus packs, sound mods, and mobile-friendly realism.",
    image: "assets/images/games/proton-bus.jpeg",
    links: [
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=aaa.core.pbs2",
        icon: "🔗",
        type: "primary"
      },
      {
        text: "APK Extras",
        url: "https://www.mediafire.com/file/vnnwe28zg203sc4/pbsc-extras-301.apk/file",
        icon: "📥",
        type: "secondary"
      }
    ]
  },
  {
    title: "Bus Simulator Indonesia",
    platform: "Mobile",
    label: "Liveries + culture",
    description:
      "Explore custom liveries, bus mods, detailed maps, and iconic road culture with one of the strongest mobile communities.",
    image: "assets/images/games/bussid.jpeg",
    links: [
      {
        text: "Get on Play Store",
        url: "https://play.google.com/store/apps/details?id=com.maleo.bussimulatorid",
        icon: "🔗",
        type: "primary"
      }
    ]
  },
  {
    title: "Open Simulator Hub",
    platform: "PC + Mobile",
    label: "Mods + maps + skins",
    description:
      "A universal space for any simulation game that supports vehicles, maps, sound packs, skins, weather, and add-ons.",
    image: "assets/images/games/simulator-hub.jpeg",
    links: [
      {
        text: "Browse Mods",
        url: "#mods",
        icon: "🎮",
        type: "primary",
        internal: true
      }
    ]
  }
];

const galleryItems = [
  {
    title: "Night Convoy in ETS2",
    text: "A dark neon-style convoy mood with highway reflections and long-haul atmosphere.",
    category: "ets2",
    theme: "ets2"
  },
  {
    title: "Premium Truck Dashboard",
    text: "Cockpit-inspired screenshot concept for immersive ETS2 dashboard driving.",
    category: "ets2",
    theme: "ets2"
  },
  {
    title: "Proton Bus Interior View",
    text: "Front cabin perspective with passenger route feel and realistic UI inspiration.",
    category: "proton",
    theme: "proton"
  },
  {
    title: "Proton Bus Evening Route",
    text: "Urban road visuals with glowing signs and simulator-focused motion style.",
    category: "proton",
    theme: "proton"
  },
  {
    title: "BUSSID Livery Showcase",
    text: "A concept preview for custom liveries and HD bus skin presentation cards.",
    category: "skins",
    theme: "skins"
  },
  {
    title: "BUSSID Bus Yard Scene",
    text: "Static bus yard mood board for custom mods and fleet showcase pages.",
    category: "bussid",
    theme: "bussid"
  },
  {
    title: "Indonesia Route Map",
    text: "Map expansion visual built for route previews, roads, and geography-based add-ons.",
    category: "maps",
    theme: "maps"
  },
  {
    title: "Mountain Road Expansion",
    text: "Scenic route concept with elevation curves and challenge-style driving ambiance.",
    category: "maps",
    theme: "maps"
  }
];

const videos = [
  {
    title: "ETS2 Realistic Night Drive",
    game: "Euro Truck Simulator 2",
    duration: "18 min",
    text: "Long-haul gameplay concept for convoy driving, dashboard view, and traffic realism.",
    theme: "ets2",
    link: "https://www.youtube.com/results?search_query=Euro+Truck+Simulator+2+realistic+night+drive"
  },
  {
    title: "Proton Bus Mod Review",
    game: "Proton Bus Simulator",
    duration: "11 min",
    text: "Bus mod showcase layout for engine sounds, cockpit camera angles, and route testing.",
    theme: "proton",
    link: "https://www.youtube.com/results?search_query=Proton+Bus+Simulator+mod+review"
  },
  {
    title: "BUSSID Livery + Map Showcase",
    game: "Bus Simulator Indonesia",
    duration: "13 min",
    text: "Designed for livery previews, custom route exploration, and mod presentation clips.",
    theme: "bussid",
    link: "https://www.youtube.com/results?search_query=Bus+Simulator+Indonesia+mod+showcase"
  },
  {
    title: "ETS2 Indonesia Map Preview",
    game: "Euro Truck Simulator 2",
    duration: "9 min",
    text: "Perfect for map expansion reviews, road detail showcases, and environment testing.",
    theme: "maps",
    link: "https://www.youtube.com/results?search_query=ETS2+Indonesia+map+mod+review"
  },
  {
    title: "Proton Bus Simulator",
    platform: "Mobile",
    label: "Passenger driving",
    description: "...",
    image: "assets/images/games/proton-bus.jpg",
    links: [
      {
        text: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.MissionStudio.ProtonBusRoad",
        icon: "🔗"
      },
      {
        text: "APK Extras",
        url: "https://www.mediafire.com/file/vnnwe28zg203sc4/pbsc-extras-301.apk/file",
        icon: "📥"
      }
    ]
  },
  {
    title: "BUSSID HD Skin Pack Preview",
    game: "Bus Simulator Indonesia",
    duration: "8 min",
    text: "A short showcase for liveries, paint packs, and bus customization previews.",
    theme: "skins",
    link: "https://www.youtube.com/results?search_query=BUSSID+HD+livery+pack"
  }
];

const mods = [
  {
    title: "BUSSID Mesh Replacer",
    game: "Bus Simulator Indonesia",
    platform: "PC",
    category: "Tool",
    version: "v1.0 Beta",
    size: "Check link",
    badge: "New",
    description:
      "Essential PC tool for replacing 3D mesh files in BUSSID. Perfect for advanced mod creators who want to customize bus models, vehicles, and assets. Note: Beta version, may contain bugs — backup recommended.",
    image: "https://placehold.co/600x300/0ea5e9/ffffff/png?text=BUSSID+Mesh+Replacer",
    downloadLink: "https://www.mediafire.com/file/d4kk965k4fx8af0/BussidMeshReplacer_v1_%2528mbola_misy_bugs_ity%252C_afaka_andramana%2529.exe/file",
    downloadText: "Download (.exe)",
    note: "⚠️ Beta version — may contain bugs"
  },
  {
    title: "BUSSID Mod Tool",
    game: "Bus Simulator Indonesia",
    platform: "PC",
    category: "Tool",
    version: "v4.5",
    size: "Check link",
    badge: "Popular",
    description:
      "Complete PC modding toolkit for Bus Simulator Indonesia. Helps you create, edit, and install custom mods, liveries, and add-ons with ease. License required to unlock full features.",
    image: "https://placehold.co/600x300/10b981/ffffff/png?text=BUSSID+Mod+Tool",
    downloadLink: "https://www.mediafire.com/file/zqc7s0y5uf5szji/BussidModTool_v4.5_%2528mila_license%2529.exe/file",
    downloadText: "Download (.exe)",
    note: "🔑 License required"
  },
  {
    title: "ETS2 Storm Weather FX",
    game: "Euro Truck Simulator 2",
    platform: "PC",
    category: "Weather",
    version: "v4.1",
    size: "215 MB",
    badge: "New",
    description: "Improves storm visuals, fog density, rain ambience, and darker sky transitions.",
    theme: "weather"
  },
  {
    title: "Proton Bus Luxury Coach Mod",
    game: "Proton Bus Simulator",
    platform: "Mobile",
    category: "Bus Mod",
    version: "v3.0",
    size: "164 MB",
    badge: "Popular",
    description: "A premium coach bus concept with detailed interior styling and immersive route presence.",
    theme: "proton"
  },
  {
    title: "Proton Bus Real Engine Sound Pack",
    game: "Proton Bus Simulator",
    platform: "Mobile",
    category: "Sound",
    version: "v1.7",
    size: "76 MB",
    badge: "Updated",
    description: "Enhances engine tone, idle layers, acceleration sound, and overall driving atmosphere.",
    theme: "sound"
  },
  {
    title: "Proton Bus Urban Route Toolkit",
    game: "Proton Bus Simulator",
    platform: "Mobile",
    category: "Tool",
    version: "v1.1",
    size: "54 MB",
    badge: "New",
    description: "A concept utility pack for route setup, organization, and quick simulator content management.",
    theme: "tool"
  },
  {
    title: "BUSSID HD Bus Livery Pack",
    game: "Bus Simulator Indonesia",
    platform: "Mobile",
    category: "Skin",
    version: "v5.4",
    size: "89 MB",
    badge: "Popular",
    description: "A high-definition livery pack made for stylish fleet customization and crisp paint detail.",
    theme: "skins"
  },
  {
    title: "BUSSID Java Map Add-on",
    game: "Bus Simulator Indonesia",
    platform: "Mobile",
    category: "Map",
    version: "v2.9",
    size: "312 MB",
    badge: "Updated",
    description: "Adds route variety, road detail, and a richer travel experience through expanded map content.",
    theme: "maps"
  },
  {
    title: "BUSSID Night Bus Mod",
    game: "Bus Simulator Indonesia",
    platform: "Mobile",
    category: "Bus Mod",
    version: "v2.5",
    size: "140 MB",
    badge: "New",
    description: "Built for late-night driving themes, neon liveries, and a more atmospheric road vibe.",
    theme: "bussid"
  },
  {
    title: "Universal Simulator Weather Pack",
    game: "Bus Simulator Indonesia",
    platform: "Mobile",
    category: "Weather",
    version: "v1.3",
    size: "96 MB",
    badge: "Popular",
    description: "Weather visuals concept that fits mod-heavy simulator setups and cinematic route sessions.",
    theme: "weather"
  },
  {
    title: "DarkZone Driver HUD Overlay",
    game: "Euro Truck Simulator 2",
    platform: "PC",
    category: "Tool",
    version: "v1.0",
    size: "38 MB",
    badge: "New",
    description: "A tactical HUD concept for content creators who want a dark, futuristic simulator interface.",
    theme: "hub"
  },
  {
    title: "Mobile Bus Camera Unlock Pack",
    game: "Proton Bus Simulator",
    platform: "Mobile",
    category: "Tool",
    version: "v2.0",
    size: "27 MB",
    badge: "Updated",
    description: "Expands camera-style setups for showcase clips, route previews, and smooth gameplay captures.",
    theme: "tool"
  }
];

const gamesGrid = document.getElementById("gamesGrid");
const galleryGrid = document.getElementById("galleryGrid");
const videosGrid = document.getElementById("videosGrid");
const modsGrid = document.getElementById("modsGrid");
const downloadList = document.getElementById("downloadList");
const resultsCount = document.getElementById("resultsCount");
const downloadTotal = document.getElementById("downloadTotal");
const downloadPC = document.getElementById("downloadPC");
const downloadMobile = document.getElementById("downloadMobile");
const toast = document.getElementById("toast");

function createParticles() {
  const container = document.getElementById("particles");
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const dot = document.createElement("span");
    dot.className = "particle";
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.animationDelay = `${Math.random() * 8}s`;
    dot.style.animationDuration = `${7 + Math.random() * 8}s`;
    dot.style.opacity = `${0.3 + Math.random() * 0.7}`;
    container.appendChild(dot);
  }
}

function renderGames() {
  gamesGrid.innerHTML = games
    .map((game) => {
      const buttonsHTML = game.links
        .map((link) => {
          const btnClass = link.type === "primary" 
            ? "btn btn-primary btn-small game-download-btn" 
            : "btn btn-secondary btn-small game-download-btn";
          
          const targetAttr = link.internal 
            ? "" 
            : 'target="_blank" rel="noopener"';

          return `
            <a href="${link.url}" class="${btnClass}" ${targetAttr}>
              ${link.icon} ${link.text}
            </a>
          `;
        })
        .join("");

      return `
        <article class="game-card reveal tilt">
          <div class="game-preview">
            <img src="${game.image}" alt="${game.title}" loading="lazy" />
            <span class="platform-tag-float">${game.platform}</span>
            <span class="game-label-float">${game.label}</span>
          </div>

          <div class="game-content">
            <h3>${game.title}</h3>
            <p class="game-platform-text">${game.platform}</p>
            <p>${game.description}</p>

            <div class="game-buttons">
              ${buttonsHTML}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGallery(filter = "all") {
  const filtered = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  galleryGrid.innerHTML = filtered
    .map((item, index) => {
      const actualIndex = galleryItems.findIndex((original) => original.title === item.title);
      return `
        <button class="gallery-card reveal" data-index="${actualIndex}">
          <div class="visual theme-${item.theme}">
            <span class="visual-chip file-pill">${item.category.toUpperCase()}</span>
            <span class="visual-label">${item.title}</span>
          </div>
          <div class="gallery-meta">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </div>
        </button>
      `;
    })
    .join("");

  observeRevealElements();
}

function renderVideos() {
  videosGrid.innerHTML = videos
    .map(
      (video) => `
      <article class="video-card glass reveal tilt">
        <div class="visual theme-${video.theme}">
          <span class="play-badge">▶</span>
          <span class="visual-chip file-pill">${video.game}</span>
          <span class="visual-label">${video.title}</span>
        </div>

        <div class="video-meta">
          <span>${video.game}</span>
          <span>${video.duration}</span>
        </div>

        <h3>${video.title}</h3>
        <p>${video.text}</p>

        <div class="video-actions">
          <a class="btn btn-secondary btn-small" href="${video.link}" target="_blank" rel="noopener">Watch Now</a>
        </div>
      </article>
    `
    )
    .join("");
}

function getFilteredMods() {
  const searchValue = document.getElementById("modSearch").value.trim().toLowerCase();
  const gameValue = document.getElementById("gameFilter").value;
  const platformValue = document.getElementById("platformFilter").value;
  const categoryValue = document.getElementById("categoryFilter").value;

  return mods.filter((mod) => {
    const matchesSearch =
      mod.title.toLowerCase().includes(searchValue) ||
      mod.description.toLowerCase().includes(searchValue) ||
      mod.game.toLowerCase().includes(searchValue) ||
      mod.category.toLowerCase().includes(searchValue);

    const matchesGame = gameValue === "all" || mod.game === gameValue;
    const matchesPlatform = platformValue === "all" || mod.platform === platformValue;
    const matchesCategory = categoryValue === "all" || mod.category === categoryValue;

    return matchesSearch && matchesGame && matchesPlatform && matchesCategory;
  });
}


function renderMods() {
  const filteredMods = getFilteredMods();

  resultsCount.textContent = `${filteredMods.length} file${filteredMods.length !== 1 ? "s" : ""} found`;

  if (!filteredMods.length) {
    modsGrid.innerHTML = `
      <div class="empty-state reveal">
        No matching files found. Try changing the search term or filters.
      </div>
    `;
    renderDownloadRows(filteredMods);
    observeRevealElements();
    return;
  }

  modsGrid.innerHTML = filteredMods
    .map(
      (mod) => `
      <article class="mod-card glass reveal tilt">
        <div class="visual ${mod.image ? 'visual-image' : `theme-${mod.theme || 'hub'}`}">
          ${mod.image 
            ? `<img src="${mod.image}" alt="${mod.title}" loading="lazy" />` 
            : ''
          }
          <span class="visual-chip badge ${mod.badge.toLowerCase()}">${mod.badge}</span>
          <span class="visual-label">${mod.category}</span>
        </div>

        <div class="mod-meta">
          <span class="file-pill">${mod.game}</span>
          <span class="file-pill">${mod.platform}</span>
          <span class="file-pill">${mod.category}</span>
        </div>

        <h3>${mod.title}</h3>
        <p>${mod.description}</p>

        ${mod.note ? `<p class="mod-note">${mod.note}</p>` : ''}

        <div class="meta-line">
          <span><strong>Version:</strong> ${mod.version}</span>
          <span><strong>Size:</strong> ${mod.size}</span>
        </div>

        <div class="mod-actions">
          ${mod.downloadLink 
            ? `<a href="${mod.downloadLink}" class="btn btn-primary btn-small" target="_blank" rel="noopener">
                📥 ${mod.downloadText || "Download"}
              </a>`
            : `<button class="btn btn-primary btn-small download-btn" data-title="${mod.title}" type="button">Download</button>`
          }
          <button class="btn btn-ghost btn-small info-btn" data-title="${mod.title}" type="button">More Info</button>
        </div>
      </article>
    `
    )
    .join("");

  renderDownloadRows(filteredMods);
  observeRevealElements();
}

function renderDownloadRows(list = mods) {
  downloadTotal.textContent = list.length;
  downloadPC.textContent = list.filter((item) => item.platform === "PC").length;
  downloadMobile.textContent = list.filter((item) => item.platform === "Mobile").length;

  if (!list.length) {
    downloadList.innerHTML = `
      <div class="empty-state">
        No downloadable items available for the current filter.
      </div>
    `;
    return;
  }

  downloadList.innerHTML = list
    .slice(0, 8)
    .map(
      (mod) => `
      <article class="download-row">
        <div>
          <div class="mod-meta">
            <span class="file-pill">${mod.game}</span>
            <span class="file-pill">${mod.platform}</span>
            <span class="file-pill">${mod.category}</span>
          </div>
          <h4>${mod.title}</h4>
          <p>${mod.description}</p>
          ${mod.note ? `<p class="mod-note">${mod.note}</p>` : ''}
          <p><strong>Version:</strong> ${mod.version} • <strong>Size:</strong> ${mod.size}</p>
        </div>

        <div class="download-row-actions">
          <span class="badge ${mod.badge.toLowerCase()}">${mod.badge}</span>
          ${mod.downloadLink 
            ? `<a href="${mod.downloadLink}" class="btn btn-secondary btn-small" target="_blank" rel="noopener">
                📥 Download
              </a>`
            : `<button class="btn btn-secondary btn-small download-btn" data-title="${mod.title}" type="button">Download</button>`
          }
        </div>
      </article>
    `
    )
    .join("");
}

function initGalleryFilters() {
  const buttons = document.querySelectorAll("[data-gallery]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderGallery(button.dataset.gallery);
    });
  });
}

function initModFilters() {
  ["modSearch", "gameFilter", "platformFilter", "categoryFilter"].forEach((id) => {
    const element = document.getElementById(id);
    element.addEventListener("input", renderMods);
    element.addEventListener("change", renderMods);
  });
}

function initNav() {
  const header = document.querySelector(".header");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = navMenu.querySelectorAll("a");
  const sections = document.querySelectorAll("main section[id]");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", navMenu.classList.contains("open"));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const setActiveLink = () => {
    header.classList.toggle("scrolled", window.scrollY > 10);

    let currentSection = "home";
    sections.forEach((section) => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) currentSection = section.id;
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentSection}`;
      link.classList.toggle("active", isActive);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();
}

let revealObserver;
function observeRevealElements() {
  const revealEls = document.querySelectorAll(".reveal");
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => revealObserver.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll(".count");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.dataset.target);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 28));

        const update = () => {
          current += step;
          if (current >= target) {
            el.textContent = target;
            return;
          }
          el.textContent = current;
          requestAnimationFrame(update);
        };

        update();
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxVisual = document.getElementById("lightboxVisual");
  const lightboxCategory = document.getElementById("lightboxCategory");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxText = document.getElementById("lightboxText");

  galleryGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".gallery-card");
    if (!card) return;

    const index = Number(card.dataset.index);
    const item = galleryItems[index];
    if (!item) return;

    lightboxVisual.className = `lightbox-visual theme-${item.theme}`;
    lightboxCategory.textContent = item.category.toUpperCase();
    lightboxTitle.textContent = item.title;
    lightboxText.textContent = item.text;
    lightbox.classList.add("open");
  });

  const closeLightbox = () => lightbox.classList.remove("open");

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function initDemoButtons() {
  document.addEventListener("click", (event) => {
    const downloadBtn = event.target.closest(".download-btn");
    const infoBtn = event.target.closest(".info-btn");
    const communityLink = event.target.closest(".link-btn[href='#']");

    if (downloadBtn) {
      const title = downloadBtn.dataset.title || "this file";
      showToast(`Demo action: connect "${title}" to your real download link.`);
    }

    if (infoBtn) {
      const title = infoBtn.dataset.title || "this item";
      showToast(`More info demo: create a detail page or modal for "${title}".`);
    }

    if (communityLink) {
      event.preventDefault();
      showToast("Demo link only. Replace # with your real community URL.");
    }
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Please fill in all fields before sending your message.";
      status.className = "form-status error";
      return;
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      status.textContent = "Please enter a valid email address.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Message sent successfully. You can now connect this form to EmailJS, Formspree, or a backend.";
    status.className = "form-status success";
    form.reset();
  });
}

function initTilt() {
  const isTouch = window.matchMedia("(pointer: coarse)").matches;
  if (isTouch) return;

  document.addEventListener("mousemove", () => {
    document.querySelectorAll(".tilt").forEach((card) => {
      if (card.dataset.tiltReady) return;

      card.dataset.tiltReady = "true";

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;
        const rotateX = (0.5 - y / rect.height) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  }, { once: true });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

function initLoader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader.classList.add("hidden"), 900);
  });
}

function init() {
  createParticles();
  renderGames();
  renderGallery();
  renderVideos();
  renderMods();
  initGalleryFilters();
  initModFilters();
  initNav();
  initCounters();
  initLightbox();
  initDemoButtons();
  initContactForm();
  initTilt();
  observeRevealElements();
  setYear();
  initLoader();
}

init();


function initBackgroundSlideshow() {
  const slideA = document.getElementById("bgSlideA");
  const slideB = document.getElementById("bgSlideB");
  const caption = document.getElementById("bgCaption");
  const captionTag = document.getElementById("bgCaptionTag");
  const captionText = document.getElementById("bgCaptionText");

  if (!slideA || !slideB) return;

  const slides = [
    {
      src: "assets/images/backgrounds/a(1).png",
      tag: "Countryside Route",
      title: "Mercedes Sprinter — Scenic Drive"
    },
    {
      src: "assets/images/backgrounds/a(2).png",
      tag: "European Road",
      title: "Volkswagen Crafter — Rural Highway"
    },
    {
      src: "assets/images/backgrounds/a(3).png",
      tag: "Golden Hour",
      title: "Mazda — Sunset Cruise"
    },
    {
      src: "assets/images/backgrounds/a(4).png",
      tag: "Morning Vibe",
      title: "Sprinter — Sunrise Route"
    },
    {
      src: "assets/images/backgrounds/a(5).png",
      tag: "Mountain Pass",
      title: "Crafter — Scenic Mountain Road"
    },
    {
      src: "assets/images/backgrounds/a(6).png",
      tag: "Open Highway",
      title: "Mazda — Countryside Highway"
    },
    {
      src: "assets/images/backgrounds/a(7).png",
      tag: "Tropical Route",
      title: "BUSSID Vibe — Tropical Countryside"
    },
    {
      src: "assets/images/backgrounds/a(8).png",
      tag: "Scenic Travel",
      title: "DarkZone Convoy — Open Road"
    }
  ];

  if (!slides.length) return;

  // Preload
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.src;
  });

  let currentIndex = 0;
  let activeSlide = slideA;
  let hiddenSlide = slideB;

  const applyBackground = (element, imageUrl) => {
    element.style.backgroundImage = `
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.02) 0%,
        rgba(255, 255, 255, 0.05) 45%,
        rgba(255, 255, 255, 0.15) 100%
      ),
      url("${imageUrl}")
    `;
  };

  const updateCaption = (slide) => {
    caption.classList.remove("show");

    setTimeout(() => {
      captionTag.textContent = slide.tag;
      captionText.textContent = slide.title;
      caption.classList.add("show");
    }, 250);
  };

  // Initial slide
  applyBackground(activeSlide, slides[currentIndex].src);
  activeSlide.classList.add("is-visible");
  updateCaption(slides[currentIndex]);

  if (slides.length === 1) return;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    const next = slides[currentIndex];

    applyBackground(hiddenSlide, next.src);
    hiddenSlide.classList.add("is-visible");
    activeSlide.classList.remove("is-visible");

    updateCaption(next);

    [activeSlide, hiddenSlide] = [hiddenSlide, activeSlide];
  }, 6500);
}

function init() {
  createParticles();
  renderGames();
  renderGallery();
  renderVideos();
  renderMods();
  initGalleryFilters();
  initModFilters();
  initNav();
  initCounters();
  initLightbox();
  initDemoButtons();
  initContactForm();
  initTilt();
  observeRevealElements();
  setYear();
  initBackgroundSlideshow(); // <-- ampio ity
  initLoader();
}

init();