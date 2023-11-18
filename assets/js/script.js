
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#js-eventSlide',eventSlideOptions).mount();
});


const eventSlideOptions={
    type :`loop`,
    gap :20,
    perPage:3,
    pagination:true,
    // focus:0,
    }


    new Splide('#js-eventSlide',eventSlideOptions).mount();

const tabs = document.querySelectorAll('[role="tab"]');
const tabList = document.querySelector('[role="tablist"]');

const changeTabs = e => {
const target = e.target;
const parent = target.parentNode;
const grandparent = parent.parentNode;


parent
    .querySelectorAll('[aria-selected="true"]')
    .forEach(t => t.setAttribute("aria-selected", false));

target.setAttribute("aria-selected", true);

grandparent
    .querySelectorAll('[role="tabpanel"]')
    .forEach(p => p.setAttribute("hidden", true));

grandparent.parentNode
    .querySelector(`#${target.getAttribute("aria-controls")}`)
    .removeAttribute("hidden");
}

tabs.forEach(tab => {
tab.addEventListener('click', changeTabs);
});

