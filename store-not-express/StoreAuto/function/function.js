import "./style.css";
const path_names = new Map([
  ["", "Главная"],
  ["index", "Главная"],
  ["auto_goods", "Автотовары"],
  ["auto_parts", "Автозапчасти"],
  ["tires", "Шины"],
  ["disks", "Диски"],
  ["battery", "Аккумуляторы"],
  ["detailling", "Детейлинг"],
]);

export function create_breadcrumbs() {
  const container = document.body;
  const section = document.createElement("section");
  section.classList.add("section-breadcrumbs");
  let str = window.location.pathname; // получаем путь от начала до данной страницы
  let array_path = [
    ...new Set(str.split("/").filter((item) => item != "index.html")),
  ];

  for (let i = 0; i < array_path.length; i++) {
    let a = document.createElement("a");
    a.classList.add("a-breadcrumb");
    let path = "/";
    for (let j = 0; j <= i; j++) {
      path += array_path[j];
      if (j != 0 && j != i) {
        path += "/";
      }
    }
    const key = array_path[i].replace(".html", "");

    a.textContent = path_names.get(key || array_path[i]) || "Ошибка";
    a.href = path;
    if (i == array_path.length - 1) {
      a.classList.add("a-breadcrumb-last");
    }
    section.append(a);
    if (i != array_path.length - 1) {
      let separation = document.createElement("span");
      separation.textContent = " -> ";
      section.append(separation);
    } else {
      a.classList.add("a-breadcrumb-last");
    }
  }

  container.append(section);
}

export function create_product_card() {
  const container = document.body;
  let section = document.getElementById("section-product_card-id");
  if (!section) {
    section = document.createElement("section");
    section.id = "section-product_card-id";

    container.append(section);
  }
  section.classList.add("section-product_card");
}
