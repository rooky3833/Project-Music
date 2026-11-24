const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const artistSearch = document.getElementById("artistSearch");
const randomArtistButton = document.getElementById("randomArtist");

const artists = [
  { name: "Ariana Grande", page: "arianagrande.html" },
  { name: "Bad Bunny", page: "bad-bunny.html" },
  { name: "Benson Boone", page: "benson-boone.html" },
  { name: "Clarent", page: "clarent.html" },
  { name: "De La Rose", page: "delarose.html" },
  { name: "Jay Wheeler", page: "jaywheeler.html" },
  { name: "Olivia Rodrigo", page: "oliviarodrigo.html" },
  { name: "Omar Courtz", page: "omar-courtz.html" },
  { name: "Bruno Mars", page: "bruno-mars.html" },
  { name: "Rauw Alejandro", page: "rauwalejandro.html" },
  { name: "Sabrina Carpenter", page: "sabrinacarpenter.html" },
  { name: "SZA", page: "sza.html" },
  { name: "The Weeknd", page: "theweekend.html" },
  { name: "Young Miko", page: "youngmiko.html" },
  { name: "Zhamira", page: "zhamira.html" },
];

if (randomArtistButton) {
  randomArtistButton.addEventListener("click", () => {
    const artist = artists[Math.floor(Math.random() * artists.length)];
    window.location.href = artist.page;
  });
}

if (searchInput && itemList && artistSearch) {
  function renderResults(matches, message) {
    itemList.replaceChildren();

    if (message) {
      const result = document.createElement("li");
      result.textContent = message;
      result.className = "no-results";
      itemList.append(result);
    } else {
      matches.forEach((artist) => {
        const result = document.createElement("li");
        const link = document.createElement("a");
        link.href = artist.page;
        link.textContent = artist.name;
        result.append(link);
        itemList.append(result);
      });
    }

    const isVisible = Boolean(searchInput.value.trim());
    itemList.hidden = !isVisible;
    searchInput.setAttribute("aria-expanded", String(isVisible));
  }

  function findMatches(query) {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return artists.filter((artist) =>
      artist.name.toLocaleLowerCase().includes(normalizedQuery),
    );
  }

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim();
    if (!query) {
      renderResults([], "");
      return;
    }

    const matches = findMatches(query);
    renderResults(matches, matches.length ? "" : "No matching artists");
  });

  artistSearch.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim().toLocaleLowerCase();
    if (!query) return;

    const exactMatch = artists.find(
      (artist) => artist.name.toLocaleLowerCase() === query,
    );
    const matches = findMatches(query);
    const artist = exactMatch || (matches.length === 1 ? matches[0] : null);

    if (artist) {
      window.location.href = artist.page;
    } else {
      renderResults(matches, matches.length ? "" : "No matching artists");
    }
  });
}

const suggestionForm = document.getElementById("suggestionForm");
const suggestionsList = document.getElementById("suggestionsList");
const suggestionStatus = document.getElementById("suggestionStatus");

if (suggestionForm && suggestionsList && suggestionStatus) {
  const storageKey = "tunelyArtistSuggestions";
  const artistNameInput = document.getElementById("artistName");
  const artistGenreInput = document.getElementById("artistGenre");
  const artistReasonInput = document.getElementById("artistReason");

  function showStorageError() {
    suggestionStatus.textContent =
      "Suggestions could not be saved in this browser. Check your browser storage settings and try again.";
  }

  function readSuggestions() {
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (!saved) return [];

      const suggestions = JSON.parse(saved);
      if (
        !Array.isArray(suggestions) ||
        suggestions.some(
          (suggestion) =>
            !suggestion ||
            typeof suggestion.name !== "string" ||
            typeof suggestion.genre !== "string" ||
            typeof suggestion.reason !== "string",
        )
      ) {
        throw new Error("Saved suggestions have an invalid format.");
      }

      return suggestions;
    } catch (error) {
      showStorageError();
      suggestionForm.querySelector('button[type="submit"]').disabled = true;
      return null;
    }
  }

  function renderSuggestions(suggestions) {
    suggestionsList.replaceChildren();

    if (!suggestions.length) {
      const emptyState = document.createElement("li");
      emptyState.textContent = "No suggestions yet.";
      suggestionsList.append(emptyState);
      return;
    }

    suggestions.forEach((suggestion) => {
      const item = document.createElement("li");
      const name = document.createElement("strong");
      name.textContent = suggestion.name;
      item.append(name);

      if (suggestion.genre) {
        const genre = document.createElement("span");
        genre.textContent = ` — ${suggestion.genre}`;
        item.append(genre);
      }

      if (suggestion.reason) {
        const reason = document.createElement("p");
        reason.textContent = suggestion.reason;
        item.append(reason);
      }

      suggestionsList.append(item);
    });
  }

  const savedSuggestions = readSuggestions();
  if (savedSuggestions) renderSuggestions(savedSuggestions);

  suggestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const suggestions = readSuggestions();
    if (!suggestions) return;

    const suggestion = {
      name: artistNameInput.value.trim(),
      genre: artistGenreInput.value.trim(),
      reason: artistReasonInput.value.trim(),
    };

    if (!suggestion.name) {
      artistNameInput.focus();
      return;
    }

    try {
      const updatedSuggestions = [...suggestions, suggestion];
      window.localStorage.setItem(storageKey, JSON.stringify(updatedSuggestions));
      renderSuggestions(updatedSuggestions);
      suggestionForm.reset();
      suggestionStatus.textContent = "Suggestion saved in this browser.";
    } catch (error) {
      showStorageError();
    }
  });
}
