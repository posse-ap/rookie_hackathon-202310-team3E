
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

    // const tabs = document.querySelectorAll('[role="tab"]');
    // const tabList = document.querySelector('[role="tablist"]');
    
    // const changeTabs = e => {
    //   const target = e.target;
    //   const selectedPanelId = target.getAttribute('aria-controls');
    //  // const grandparent = parent.parentNode;
    
    //   // タブから現在すべての選択状態を取り除く
    //   parent
    //     .querySelectorAll('[aria-selected="true"]')
    //     .forEach(t => t.setAttribute("aria-selected", false));
    
    //   // このタブを選択されたタブとして設定
    //   target.setAttribute("aria-selected", true);
    
    //   // すべてのタブパネルを非表示
    //   grandparent
    //     .querySelectorAll('[role="tabpanel"]')
    //     .forEach(p => p.setAttribute("hidden", true));
    
    //   // 選択されたパネルを表示
    //   grandparent
    //     .querySelector(`#${target.getAttribute("aria-controls")}`)
    //     .removeAttribute("hidden");
    // }
    
    // tabs.forEach(tab => {
    //   tab.addEventListener('click', changeTabs);
    // });
    
    const tabs = document.querySelectorAll('[role="tab"]');
    const panels = document.querySelectorAll('[role="tabpanel"]');
    
    const changeTabs = e => {
      const target = e.target;
      const selectedPanelId = target.getAttribute('aria-controls');
    
      // Remove selected state from all tabs
      tabs.forEach(tab => tab.setAttribute('aria-selected', false));
    
      // Set selected state for the clicked tab
      target.setAttribute('aria-selected', true);
    
      // Hide all panels
      panels.forEach(panel => panel.setAttribute('hidden', true));
    
      // Show the selected panel
      document.getElementById(selectedPanelId).removeAttribute('hidden');
    };
    
    tabs.forEach(tab => {
      tab.addEventListener('click', changeTabs);
    });

