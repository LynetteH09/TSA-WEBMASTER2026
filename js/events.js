// Event data - in a real app, this would come from an API or database
const events = [
  {
  title: "Fort Worth Herd Cattle Drive",
  tags: ["Western", "Family-Friendly", "Free"],
  recurrence: "weekly",
  weekdays: [4, 5, 6, 0], // Friday, Saturday, Sunday, Monday
  startDate: "2026-01-01",
  endDate: "2026-12-31",
  time: "11:30 AM and 4:00 PM",
  location: "Fort Worth Stockyards, East Exchange Avenue",
  cost: "Free",
  description:
    "Watch the Fort Worth Herd's cattle drive through the Stockyards on select days.",
  link: "https://www.fortworth.com/the-herd/"
},,
  {
    title: "Stockyards Championship Rodeo",
    tags: ["Western", "Family-Friendly"],
    recurrence: "weekly",
    weekdays: [5, 6], // Fri, Sat
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    time: "Evening",
    location: "Cowtown Coliseum, Fort Worth Stockyards",
    cost: "Ticketed",
    description:
      "The world's only year-round rodeo, held every Friday and Saturday night.",
    link: "https://www.fortworth.com/event/stockyards-championship-rodeo-2026/40430/"
  },
  {
    title: "Second Thursdays at the Carter",
    tags: ["Arts", "Museum", "Free"],
    recurrence: "monthlyNthWeekday",
    nth: 2,
    weekday: 4, // Thursday
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    time: "Evening",
    location: "Amon Carter Museum of American Art",
    cost: "Free",
    description:
      "A free monthly museum night with art, creativity, social activities, and themed programming.",
    link: "https://www.cartermuseum.org/events/public-programs/second-thursdays"
  },
  {
  title: "Butterflies in the Garden",
  tags: ["Outdoor", "Family-Friendly", "Museum"],
  recurrence: "weekly",
  weekdays: [0, 6], // Sunday, Saturday
  startDate: "2026-03-01",
  endDate: "2026-04-30",
  time: "Timed entry varies",
  location: "Fort Worth Botanic Garden",
  cost: "Ticketed",
  description:
    "A seasonal butterfly experience at the Fort Worth Botanic Garden's Rainforest Conservatory.",
  link: "https://fwbg.org/events/butterflies-in-the-garden/"
  },
  {
    date: "2026-01-02",
    title: "Lockheed Martin Armed Forces Bowl",
    tags: ["Sports"],
    time: "See official listing",
    location: "Fort Worth, TX",
    cost: "Ticketed",
    description:
      "Annual postseason college football bowl event in Fort Worth.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    startDate: "2026-01-16",
    endDate: "2026-02-07",
    title: "Fort Worth Stock Show and Rodeo",
    tags: ["Western", "Family-Friendly", "Festival"],
    time: "Varies by event",
    location: "Fort Worth, TX",
    cost: "Varies",
    description:
      "A signature Fort Worth tradition featuring rodeo events, livestock shows, and family activities.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    startDate: "2026-04-16",
    endDate: "2026-04-19",
    title: "MAIN ST. Fort Worth Arts Festival",
    tags: ["Arts", "Festival", "Family-Friendly"],
    time: "Varies by day",
    location: "Downtown Fort Worth",
    cost: "Free admission",
    description:
      "Major downtown arts festival with artists, live entertainment, and family activities.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    date: "2026-04-25",
    title: "Girl Scouts Workshop",
    tags: ["Museum", "Family-Friendly", "Arts"],
    time: "10:30 AM – 12:00 PM",
    location: "Kimbell Art Museum",
    cost: "See official listing",
    description:
      "A Kimbell workshop designed for Girl Scouts with guided museum activities.",
    link: "https://kimbellart.org/event/girl-scouts-workshop-1"
  },
  {
    startDate: "2026-04-30",
    endDate: "2026-05-03",
    title: "Mayfest",
    tags: ["Festival", "Family-Friendly", "Outdoor"],
    time: "Varies by day",
    location: "Trinity Park, Fort Worth",
    cost: "Varies",
    description:
      "Family-friendly festival in Trinity Park featuring music, arts, food, and activities.",
    link: "https://www.fortworth.com/events/annual-events/mayfest/"
  },
  {
    startDate: "2026-05-01",
    endDate: "2026-05-03",
    title: "Races at Texas Motor Speedway",
    tags: ["Sports"],
    time: "Varies by race",
    location: "Texas Motor Speedway",
    cost: "Ticketed",
    description:
      "Major racing weekend at Texas Motor Speedway.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    startDate: "2026-05-25",
    endDate: "2026-05-31",
    title: "Charles Schwab Challenge",
    tags: ["Sports"],
    time: "Varies by round",
    location: "Fort Worth, TX",
    cost: "Ticketed",
    description:
      "PGA Tour event held annually in Fort Worth.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    date: "2026-06-19",
    title: "Juneteenth",
    tags: ["Festival", "Community", "Family-Friendly"],
    time: "Varies",
    location: "Fort Worth, TX",
    cost: "Varies",
    description:
      "Juneteenth celebration and related community programming in Fort Worth.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    date: "2026-07-04",
    title: "Fort Worth Fourth",
    tags: ["Festival", "Family-Friendly", "Outdoor", "Free"],
    time: "Varies",
    location: "Fort Worth, TX",
    cost: "Free",
    description:
      "Fort Worth's annual Fourth of July celebration.",
    link: "https://www.fortworth.com/events/annual-events/"
  },
  {
    startDate: "2026-09-24",
    endDate: "2026-09-26",
    title: "Fort Worth Oktoberfest",
    tags: ["Festival", "Family-Friendly"],
    time: "Varies by day",
    location: "Fort Worth, TX",
    cost: "Varies",
    description:
      "Annual Oktoberfest celebration with food, music, and activities.",
    link: "https://www.fortworth.com/events/annual-events/"
  }
];

const monthLabel = document.getElementById("monthLabel");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const todayBtn = document.getElementById("todayBtn");

const eventSearch = document.getElementById("eventSearch");
const eventTagFilter = document.getElementById("eventTagFilter");
const selectionMessage = document.getElementById("selectionMessage");
const eventDetailsWrap = document.getElementById("eventDetails");
const selectedDateHeading = document.getElementById("selectedDateHeading");
const eventList = document.getElementById("eventList");
const upcomingList = document.getElementById("upcomingList");

let current = new Date();
let viewYear = current.getFullYear();
let viewMonth = current.getMonth();
let selectedISO = null;

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatISODate(y, m, d) {
  return `${y}-${pad2(m + 1)}-${pad2(d)}`;
}

function parseISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatReadableDate(iso) {
  const date = parseISO(iso);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate();
}

function inRange(target, start, end) {
  return target >= start && target <= end;
}

function matchesRecurringEvent(event, targetDate) {
  const start = parseISO(event.startDate);
  const end = parseISO(event.endDate);

  if (!inRange(targetDate, start, end)) return false;

  if (!event.recurrence) {
    return event.date === formatISODate(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      targetDate.getDate()
    );
  }

  if (event.recurrence === "daily") {
    return true;
  }

  if (event.recurrence === "weekly") {
    return (event.weekdays || []).includes(targetDate.getDay());
  }

  if (event.recurrence === "monthlyNthWeekday") {
    if (targetDate.getDay() !== event.weekday) return false;
    const nth = Math.ceil(targetDate.getDate() / 7);
    return nth === event.nth;
  }

  return false;
}

function getEventsForDate(iso) {
  const targetDate = parseISO(iso);

  return events.filter((event) => {
    if (event.date) return event.date === iso;
    if (event.startDate && event.endDate) return matchesRecurringEvent(event, targetDate);
    return false;
  });
}

function getFilteredEventsForDate(iso) {
  const searchTerm = eventSearch.value.trim().toLowerCase();
  const tagValue = eventTagFilter.value;

  return getEventsForDate(iso).filter((event) => {
    const haystack = [
      event.title,
      event.description,
      event.location,
      ...(event.tags || [])
    ].join(" ").toLowerCase();

    const matchesSearch = haystack.includes(searchTerm);
    const matchesTag =
      tagValue === "all" || (event.tags || []).includes(tagValue);

    return matchesSearch && matchesTag;
  });
}

function getEventsForMonth(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const found = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const iso = formatISODate(year, month, day);
    const dayEvents = getFilteredEventsForDate(iso);

    dayEvents.forEach((event) => {
      found.push({ iso, event });
    });
  }

  return found.sort((a, b) => a.iso.localeCompare(b.iso));
}

function clearSelectedCells() {
  document.querySelectorAll(".cal-selected").forEach((cell) => {
    cell.classList.remove("cal-selected");
  });
}

function renderCalendar(year, month) {
  calendarGrid.innerHTML = "";

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  monthLabel.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startWeekday; i++) {
    const blank = document.createElement("div");
    blank.className = "cal-cell cal-blank";
    calendarGrid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "cal-cell";
    cell.textContent = day;

    const iso = formatISODate(year, month, day);
    const dayEvents = getFilteredEventsForDate(iso);
    const hasEvent = dayEvents.length > 0;

    const isToday = isSameDay(new Date(year, month, day), current);

    if (isToday) cell.classList.add("cal-today");
    if (hasEvent) cell.classList.add("cal-has-event");
    if (selectedISO === iso) cell.classList.add("cal-selected");

    cell.setAttribute(
      "aria-label",
      hasEvent
        ? `${iso} has ${dayEvents.length} event${dayEvents.length > 1 ? "s" : ""}`
        : `${iso} has no events`
    );

    cell.addEventListener("click", () => {
      clearSelectedCells();
      cell.classList.add("cal-selected");
      selectedISO = iso;

      if (hasEvent) {
        showEvents(iso);
      } else {
        clearEvent();
      }
    });

    calendarGrid.appendChild(cell);
  }

  renderUpcoming();
}

function showEvents(isoDate) {
  const selectedEvents = getFilteredEventsForDate(isoDate);

  selectedDateHeading.textContent = formatReadableDate(isoDate);
  eventList.innerHTML = "";

  if (selectedEvents.length === 0) {
    clearEvent("No events on this date with the current filters.");
    return;
  }

  selectedEvents.forEach((e) => {
    const card = document.createElement("article");
    card.className = "event-item";

    const tagsHTML = (e.tags || [])
      .map((tag) => `<span class="pill">${tag}</span>`)
      .join("");

    const linkHTML =
      e.link && e.link !== "#"
        ? `<a class="details-link" href="${e.link}" target="_blank" rel="noreferrer">More Info →</a>`
        : "";

    card.innerHTML = `
      <div class="tag-row">${tagsHTML}</div>
      <h4>${e.title}</h4>
      <p>${e.description || ""}</p>
      <ul class="event-meta">
        <li><strong>Time:</strong> ${e.time || "TBD"}</li>
        <li><strong>Location:</strong> ${e.location || "TBD"}</li>
        <li><strong>Cost:</strong> ${e.cost || "TBD"}</li>
      </ul>
      ${linkHTML}
    `;

    eventList.appendChild(card);
  });

  selectionMessage.classList.add("hidden");
  eventDetailsWrap.classList.remove("hidden");
}

function clearEvent(message = "Select a date with an event to view information.") {
  selectionMessage.textContent = message;
  selectionMessage.classList.remove("hidden");
  eventDetailsWrap.classList.add("hidden");
}

function renderUpcoming() {
  const monthlyEvents = getEventsForMonth(viewYear, viewMonth);
  upcomingList.innerHTML = "";

  if (monthlyEvents.length === 0) {
    upcomingList.innerHTML = `<p class="muted">No events match the current filter this month.</p>`;
    return;
  }

  const limited = monthlyEvents.slice(0, 10);

  limited.forEach(({ iso, event }) => {
    const item = document.createElement("div");
    item.className = "upcoming-item";
    item.innerHTML = `
      <div class="upcoming-date">${formatReadableDate(iso)}</div>
      <div class="upcoming-title">${event.title}</div>
      <div class="upcoming-meta">${event.location || "TBD"}</div>
    `;

    item.addEventListener("click", () => {
      selectedISO = iso;
      showEvents(iso);
      renderCalendar(viewYear, viewMonth);
    });

    upcomingList.appendChild(item);
  });
}

prevMonthBtn.addEventListener("click", () => {
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  selectedISO = null;
  renderCalendar(viewYear, viewMonth);
  clearEvent();
});

nextMonthBtn.addEventListener("click", () => {
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  selectedISO = null;
  renderCalendar(viewYear, viewMonth);
  clearEvent();
});

todayBtn.addEventListener("click", () => {
  current = new Date();
  viewYear = current.getFullYear();
  viewMonth = current.getMonth();
  selectedISO = formatISODate(current.getFullYear(), current.getMonth(), current.getDate());
  renderCalendar(viewYear, viewMonth);

  if (getFilteredEventsForDate(selectedISO).length) {
    showEvents(selectedISO);
  } else {
    clearEvent("Today does not have a listed event with the current filters.");
  }
});

eventSearch.addEventListener("input", () => {
  renderCalendar(viewYear, viewMonth);

  if (selectedISO) {
    if (getFilteredEventsForDate(selectedISO).length) {
      showEvents(selectedISO);
    } else {
      clearEvent("No events on the selected date match your search.");
    }
  }
});

eventTagFilter.addEventListener("change", () => {
  renderCalendar(viewYear, viewMonth);

  if (selectedISO) {
    if (getFilteredEventsForDate(selectedISO).length) {
      showEvents(selectedISO);
    } else {
      clearEvent("No events on the selected date match that category.");
    }
  }
});

// Initial render
renderCalendar(viewYear, viewMonth);