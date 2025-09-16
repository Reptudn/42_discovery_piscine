const todoTemplate = (todo) => {
  return $('<div class="todoBlock"></div>').text(`${todo}`);
};

function updateCookies() {
  const container = $("#ft_list");
  if (container.length === 0) return;

  const blocks = container.find(".todoBlock");

  let newCookies = [];
  blocks.each(function () {
    const text = $(this).find('#todoText').text();
    if (text) newCookies.push({ text: text });
  });

  const expires = new Date("2103-04-05").toUTCString();
  document.cookie = `todos=${JSON.stringify(
    newCookies
  )}; expires=${expires}; path=/`;
}

function insertToDo(text, update = true) {
  const container = document.getElementById("ft_list");
  if (!container) return;

  container.insertAdjacentElement("afterbegin", todoTemplate(text));

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
  insertToDo(todo);
}

$(document).ready(function () {
  $("#new", createToDo);

  const cookies = document.cookie.split("; ");
  const todoCookie = cookies.find((cookie) => cookie.startsWith("todos="));
  if (todoCookie) {
    try {
      const todos = JSON.parse(todoCookie.substring("todos=".length));
      todos.reverse().forEach((todo) => {
        insertToDo(todo.text, false);
      });
    } catch (e) {}
  }
});
