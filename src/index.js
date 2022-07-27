const nodeOptions = {
  // querySelector
  qs(selector, scope) {
    return (scope || document).querySelector(selector);
  },
  // createElement
  createEl(tagName) {
    return document.createElement(tagName);
  },
  // setAttribute
  setAttr(target, key, value) {
    target.setAttribute(key, value);
  },
  // appendChild
  append(parent, target) {
    parent.appendChild(target);
  },
  innerHTML(target, value) {
    target.innerHTML = value;
  },
  inTextContent(target, value) {
    target.textContent = value;
  },
  onEve(target, eventName, callback) {
    target.addEventListener(eventName, callback);
  }
};

// const btn = document.createElement("button");
// btn.textContent = "test";
// document.body.append(btn);
// btn.addEventListener("click", () => {
//   btn.classList.toggle("test");
//   console.log(btn);
// });

// 次回は編集と完了ボタンの機能追加

const input = document.querySelector("input");

// 登録button
const addTodoBtn = document.querySelector("#add-todo-btn");
addTodoBtn.addEventListener("click", function () {
  // ----create-----
  // ul　をとってくる
  const ul = document.querySelector(".todo-list-area");
  console.log(ul);
  // li を作る
  const li = document.createElement("li");
  li.classList.add("todo-list");
  // p を作る
  const p = nodeOptions.createEl("p");
  p.textContent = input.value;
  console.log(p);
  // liにPタグを入れる
  li.appendChild(p);

  console.log(li);
  // 完了buttonを作る
  const completBtn = document.createElement("button");
  completBtn.textContent = "完了";
  // 削除buttonを作る
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  li.appendChild(completBtn);
  li.appendChild(deleteBtn);
  // ul にぶち込む
  ul.appendChild(li);
  // ----delete-----
  // 削除ボタンにイベント追加
  deleteBtn.addEventListener("click", () => {
    const parent = deleteBtn.parentNode;
    console.log("parent", parent);
    ul.removeChild(parent);
    // li.remove(li);
  });
  // removeメソッドを使用して消す
});

{
  /* <ul class="todo-list-area">
<li class="todo-list">
  <p>Todo1</p>
  <button>完了</button>
  <button>削除</button>
</li> */
}
