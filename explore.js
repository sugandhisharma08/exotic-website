/**
 * Explore page: masonry cards, Indian Heritage category, filter with fade.
 */
(function () {
  const exploreItems = [
    {
      id: 1,
      title: "Taj Mahal, First Light",
      category: "Indian Heritage",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=820&fit=crop&q=80",
      height: "tall",
    },
    {
      id: 2,
      title: "Ghats of Varanasi",
      category: "Indian Heritage",
      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=560&fit=crop&q=80",
      height: "medium",
    },

    {
      id: 4,
      title: "Diwali Glow",
      category: "Indian Heritage",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop&q=80",
      height: "xshort",
    },
    
  
    {
      id: 7,
      title: "Lotus Temple Lines",
      category: "Indian Heritage",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=520&fit=crop&q=80",
      height: "xshort",
    },
    
    {
      id: 9,
      title: "Backwater Calm, Kerala",
      category: "Indian Heritage",
      image:
        "https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=1260",
      height: "xshort",
    },
    
    {
      id: 11,
      title: "Misty Peaks",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop&q=80",
      height: "tall",
    },
    {
      id: 12,
      title: "Stillness is a superpower",
      category: "Quotes",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=600&h=500&fit=crop&q=80",
      height: "medium",
    },
    {
      id: 13,
      title: "Coastal Drift",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=700&fit=crop&q=80",
      height: "xlarge",
    },
    {
      id: 14,
      title: "Golden Hour Mindset",
      category: "Inspiration",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=520&fit=crop&q=80",
      height: "medium",
    },
    {
      id: 15,
      title: "Forest Whispers",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=650&fit=crop&q=80",
      height: "tall",
    },
    {
      id: 16,
      title: "Let the light find you",
      category: "Quotes",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=480&fit=crop&q=80",
      height: "short",
    },
    {
      id: 17,
      title: "Old Delhi Lanes",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=85",
      height: "tall",
    },
    {
      id: 18,
      title: "Soft Beginnings",
      category: "Inspiration",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=540&fit=crop&q=80",
      height: "xshort",
    },
    {
      id: 19,
      title: "Ocean Calm",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=500&fit=crop&q=80",
      height: "xshort",
    },
    {
      id: 20,
      title: "Bloom where you are",
      category: "Quotes",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=720&fit=crop&q=80",
      height: "tall",
    },
    {
      id: 21,
      title: "Desert Roads",
      category: "Travel",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=560&fit=crop&q=80",
      height: "medium",
    },
    {
      id: 22,
      title: "Quiet Courage",
      category: "Inspiration",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=680&fit=crop&q=80",
      height: "tall",
    },
    {
      id: 23,
      title: "Northern Lights",
      category: "Nature",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=500&fit=crop&q=80",
      height: "short",
    },
    {
      id: 24,
      title: "Small steps, big sky",
      category: "Quotes",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=760&fit=crop&q=80",
      height: "tall",
    },
    
   
   
    {
      id: 28,
      title: "Monsoon, Marine Drive",
      category: "Indian Heritage",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=85",
      height: "tall",
    },
  ];

  const grid = document.getElementById("exploreGrid");
  const filterBar = document.getElementById("filterBar");
  if (!grid || !filterBar) return;

  const CATEGORIES = [
    "Nature",
    "Quotes",
    "Inspiration",
    "Travel",
    "Indian Heritage",
  ];

  const ROTATING_QUOTES = [
    "Silence also speaks.",
    "Still waters hold depth.",
    "Beauty arrives without permission.",
    "Pause—then look again.",
    "Every frame holds a breath.",
    "Soft light tells true stories.",
    "Wander until you soften.",
    "Tradition meets the now.",
    "The world hums in color.",
    "Trust the slow reveal.",
    "Culture is a warm spell.",
    "You belong to the horizon.",
  ];

  function cardQuote(item) {
    if (item.quote) return item.quote;
    return ROTATING_QUOTES[item.id % ROTATING_QUOTES.length];
  }

  function createCard(item) {
    const article = document.createElement("article");
    article.className = "explore-card";
    article.setAttribute("role", "listitem");
    article.dataset.category = item.category;

    const link = document.createElement("a");
    link.href = "#";
    link.className = "explore-card-link";

    const wrap = document.createElement("div");
    wrap.className =
      "explore-card-image-wrap explore-card-image-wrap--" + item.height;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title + " — " + item.category;
    img.loading = "lazy";
    img.decoding = "async";

    const overlay = document.createElement("div");
    overlay.className = "explore-card-overlay";
    overlay.setAttribute("aria-hidden", "true");

    const cat = document.createElement("span");
    cat.className = "explore-card-cat";
    cat.textContent = item.category;

    const title = document.createElement("h2");
    title.className = "explore-card-heading";
    title.textContent = item.title;

    const quoteEl = document.createElement("p");
    quoteEl.className = "explore-card-quote";
    quoteEl.textContent = '"' + cardQuote(item) + '"';

    overlay.appendChild(cat);
    overlay.appendChild(title);
    overlay.appendChild(quoteEl);
    wrap.appendChild(img);
    wrap.appendChild(overlay);
    link.appendChild(wrap);
    article.appendChild(link);
    return article;
  }

  function buildGrid(filter) {
    const list =
      filter === "all"
        ? exploreItems
        : exploreItems.filter(function (item) {
            return item.category === filter;
          });

    list.forEach(function (item) {
      grid.appendChild(createCard(item));
    });
  }

  function render(filter, animate) {
    if (!animate) {
      grid.innerHTML = "";
      buildGrid(filter);
      return;
    }

    grid.classList.add("explore-grid--out");
    window.setTimeout(function () {
      grid.innerHTML = "";
      buildGrid(filter);
      grid.classList.remove("explore-grid--out");
      grid.offsetHeight;
      grid.classList.add("explore-grid--in");
      window.setTimeout(function () {
        grid.classList.remove("explore-grid--in");
      }, 480);
    }, 240);
  }

  function setFilter(filter, animate) {
    var btn = filterBar.querySelector('[data-filter="' + filter + '"]');
    if (!btn) return;
    filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.toggle("active", b === btn);
    });
    render(filter, animate);
  }

  function filterFromHash() {
    var h = decodeURIComponent(window.location.hash.slice(1));
    if (!h) return null;
    if (h === "all") return "all";
    if (CATEGORIES.indexOf(h) !== -1) return h;
    return null;
  }

  filterBar.addEventListener("click", function (e) {
    var clickBtn = e.target.closest(".filter-btn");
    if (!clickBtn) return;

    var filter = clickBtn.dataset.filter;
    if (filter === undefined) return;

    setFilter(filter, true);
    if (filter === "all") {
      if (window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      if (window.history.replaceState) {
        window.history.replaceState(null, "", "#" + encodeURIComponent(filter));
      }
    }
  });

  window.addEventListener("hashchange", function () {
    var f = filterFromHash();
    if (f) setFilter(f, true);
  });

  var initial = filterFromHash() || "all";
  setFilter(initial, false);
})();
