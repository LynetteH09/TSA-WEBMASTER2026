// Event data - in a real app, this would come from an API or database
const events = [
  {
    date: "2026-02-15",
    title: "Second Thursdays at the Amon Carter Museum",
    tags: ["Performing Arts", "Family-Friendly"],
    time: "2:00 PM – 7:00 PM",
    location: "Amon Carter Museum of American Art, Fort Worth, TX ",
    cost: "Free admission",
    description: "A night of art, live music, cocktails, and community activities.",
    link: "#"
  },
  {
    date: "2026-01-22",
    title: "Movies @ the Library: Lilo & Stitch",
    tags: ["Library Event", "Family-Friendly"],
    time: "10:00 AM – 1:00 PM",
    location: "White Settlement Public Library, Fort Worth, TX",
    cost: "Free",
    description: "Free health screenings, wellness info, and community resources.",
    link: "#"
  },
  {
    date: "2026-02-06",
    title: "Annual Professional School Counselor Conference",
    tags: ["Education", "Professional Development"],
    time: "All Day",
    location: "Fort Worth Convention Center, Fort Worth, TX",
    cost: "Free",
    description: "A statewide conference for school counselors featuring workshops, speakers, and professional development.",
    link: "#"
  }
];

// Quick lookup map by date
const eventsByDate = new Map(events.map(e => [e.date, e]));

const monthLabel = document.getElementById("monthLabel");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const eventDetailsWrap = document.getElementById("eventDetails");
const eventTags = document.getElementById("eventTags");
const eventTitle = document.getElementById("eventTitle");
const eventDesc = document.getElementById("eventDesc");
const eventDate = document.getElementById("eventDate");
const eventTime = document.getElementById("eventTime");
const eventLocation = document.getElementById("eventLocation");
const eventCost = document.getElementById("eventCost");
const eventLink = document.getElementById("eventLink");

let current = new Date(); // today
let viewYear = current.getFullYear();
let viewMonth = current.getMonth(); // 0-11

function pad2(n) { return String(n).padStart(2, "0"); }

function formatISODate(y, m, d) {
  return `${y}-${pad2(m + 1)}-${pad2(d)}`;
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
    const hasEvent = eventsByDate.has(iso);

    const isToday =
      year === current.getFullYear() &&
      month === current.getMonth() &&
      day === current.getDate();

    if (isToday) cell.classList.add("cal-today");

    if (hasEvent) {
      cell.classList.add("cal-has-event");
      cell.setAttribute("aria-label", `${iso} has an event. Click for details.`);
      cell.addEventListener("click", () => showEvent(iso));
    } else {
      cell.setAttribute("aria-label", `${iso} no event`);
      cell.addEventListener("click", () => clearEvent());
    }

    calendarGrid.appendChild(cell);
  }
}

function showEvent(isoDate) {
  const e = eventsByDate.get(isoDate);
  if (!e) return;

  eventTags.innerHTML = "";
  (e.tags || []).forEach(t => {
    const tag = document.createElement("span");
    tag.className = "pill";
    tag.textContent = t;
    eventTags.appendChild(tag);
  });

  eventTitle.textContent = e.title;
  eventDesc.textContent = e.description;
  eventDate.textContent = isoDate;
  eventTime.textContent = e.time || "TBD";
  eventLocation.textContent = e.location || "TBD";
  eventCost.textContent = e.cost || "TBD";

  if (e.link && e.link !== "#") {
    eventLink.href = e.link;
    eventLink.classList.remove("hidden");
  } else {
    eventLink.href = "#";
    eventLink.classList.add("hidden");
  }

  eventDetailsWrap.classList.remove("hidden");
}

//This will keep the panel but hide details so users understand no event exists
function clearEvent() {
  eventDetailsWrap.classList.add("hidden");
}

prevMonthBtn.addEventListener("click", () => {
  viewMonth -= 1;
  if (viewMonth < 0) { viewMonth = 11; viewYear -= 1; }
  renderCalendar(viewYear, viewMonth);
  clearEvent();
});

nextMonthBtn.addEventListener("click", () => {
  viewMonth += 1;
  if (viewMonth > 11) { viewMonth = 0; viewYear += 1; }
  renderCalendar(viewYear, viewMonth);
  clearEvent();
});

// Initial render
renderCalendar(viewYear, viewMonth);