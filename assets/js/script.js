
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


    document.addEventListener('DOMContentLoaded', function(){
      const tabs = document.getElementsByClassName('tab');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }
  function tabSwitch(){
    document.getElementsByClassName('is-active')[0].classList.remove('is-active');
    this.classList.add('is-active');
    document.getElementsByClassName('is-show')[0].classList.remove('is-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('panel')[index].classList.add('is-show');
  };
}, false);

    // const tabs = document.querySelectorAll('[role="tab"]');
    // const tabList = document.querySelector('[role="tablist"]');
    
    // const changeTabs = e => {
    // const target = e.target;
    // const parent = target.parentNode;
    // const grandparent = parent.parentNode;
    
    
    // parent
    //     .querySelectorAll('[aria-selected="true"]')
    //     .forEach(t => t.setAttribute("aria-selected", false));
    
    //   // このタブを選択されたタブとして設定
    // target.setAttribute("aria-selected", true);
    
    //   // すべてのタブパネルを非表示
    // grandparent
    //     .querySelectorAll('[role="tabpanel"]')
    //     .forEach(p => p.setAttribute("hidden", true));
    
    //   // 選択されたパネルを表示
    // grandparent.parentNode
    //     .querySelector(`#${target.getAttribute("aria-controls")}`)
    //     .removeAttribute("hidden");
    // }
    
    // tabs.forEach(tab => {
    // tab.addEventListener('click', changeTabs);
    // });

