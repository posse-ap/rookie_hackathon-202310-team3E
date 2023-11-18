const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

const changeTabs = e => {
const target = e.target;
const parent = target.parentNode;
const grandparent = parent.parentNode;


parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

  // このタブを選択されたタブとして設定
target.setAttribute("aria-selected", true);

  // すべてのタブパネルを非表示
grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

  // 選択されたパネルを表示
grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}

tabs.forEach(tab => {
tab.addEventListener('click', changeTabs);
});