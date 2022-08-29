const categoryInput = document.querySelector("#categories");
const itemSelect = document.querySelector("#category");

const categories = [
  {
    id: 1,
    name: "MMK",
  },
  {
    id: 2,
    name: "US Dollars",
  },
  {
    id: 3,
    name: "Euros",
  },
  {
    id: 4,
    name: "Canadian Dollars",
  },
  {
    id: 5,
    name: "Swiss Francs",
  },
  {
    id: 6,
    name: "Australian Dollars",
  },
  {
    id: 7,
    name: "Japanese Yen",
  },
  {
    id: 8,
    name: "Chinese Yuan",
  },
  {
    id: 9,
    name: "Indian Rupees",
  },
  {
    id: 10,
    name: "Brazilian Real",
  },
];

const items = [
  {
    id: 11,
    name: "United States",
  },
  {
    id: 12,
    name: "Canada(English)",
  },
  {
    id: 13,
    name: "Canada(Francais)",
  },
  {
    id: 14,
    name: "Brasil",
  },
  {
    id: 15,
    name: "Mexico",
  },
  {
    id: 16,
    name: "Argentina",
  },
  {
    id: 17,
    name: "Chile",
  },
  {
    id: 18,
    name: "Colombia",
  },
  {
    id: 19,
    name: "Peru",
  },
  {
    id: 12,
    name: "United Kingdom",
  },
];

function showAllCategories() {
  categories.forEach((category) => {
    addCategoryToList(category);
  });
  items.forEach((item) => {
    addItemToList(item);
  });
}

function addCategoryToList(category) {
  const optionEl = document.createElement("option");
  optionEl.setAttribute("value", category.id);
  optionEl.textContent = category.name;
  categoryInput.appendChild(optionEl);
}

function addItemToList(item) {
  const itemEl = document.createElement("option");
  itemEl.setAttribute("value", item.id);
  itemEl.textContent = item.name;
  itemSelect.appendChild(itemEl);
}

window.addEventListener("DOMContentLoaded", () => {
  showAllCategories();
});
