const todoTemplate = (todo, done) => {
  const element = document.createElement("div");
  element.onclick = () => removeToDo(element);
  element.className = "todoBlock";
  element.innerHTML = `<p id="todoText">${todo}</p>`;
  return element;
};

function updateCookies() {
  const cont = document.getElementById("ft_list");
  if (!cont) return;

  blocks = cont.getElementsByClassName("todoBlock");

  let newCookies = [];
  Array.from(blocks).forEach((block) => {
    const text = block.querySelector("#todoText").textContent || false;
    newCookies.push({ text: text });
  });

  const expires = new Date("2103-04-05").toUTCString();
  document.cookie = `todos=${JSON.stringify(
    newCookies
  )}; expires=${expires}; path=/`;
}

function insertToDo(text, checked, update = true) {
  const container = document.getElementById("ft_list");
  if (!container) return;

  container.insertAdjacentElement("afterbegin", todoTemplate(text, checked));

  if (update) updateCookies();
}

function removeToDo(element) {
  if (!confirm("Do you want to delete this To-Do?")) return;
  element.remove();
  updateCookies();
}

function createToDo() {
  let todo = prompt("Describe your ToDo!", "Go to the GYM!");
  if (todo === null || todo === "") return;
  insertToDo(todo, false);
}

$(document).ready(function () {
  $("#new", createToDo);

  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find((cookie) => cookie.startsWith("todos="));
  if (todoCookie) {
    try {
      const todos = JSON.parse(todoCookie.substring("todos=".length));
      todos.reverse().forEach((todo) => {
        insertToDo(todo.text, todo.checked, false);
      });
    } catch (e) {}
  }
});
