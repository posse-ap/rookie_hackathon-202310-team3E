
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#js-eventSlide',eventSlideOptions).mount();
});


const eventSlideOptions={
    type :`loop`,
    gap :20,
    perPage:3,
    pagination:true,
    }



window.addEventListener('load', () => {
  // checkbox
  const checkbox1 = document.getElementById("hoge1");
  const checkbox2 = document.getElementById("hoge2");

  // label
  const label1 = document.getElementById("hoge1Label");
  const label2 = document.getElementById("hoge2Label");

  // タブの内容部分
  const hoge1Content = document.getElementById("left-container");
  const hoge2Content = document.getElementById("right-container");

  // hoge1タブのクリック時
  checkbox1.addEventListener("change", function () {
      if (this.checked) {
          // hoge1タブ見出しのチェックボックスがtrueの時
          label1.style.backgroundColor = "rgb(186, 238, 255)";
          hoge1Content.style.backgroundColor = "rgb(186, 238, 255)";
          hoge1Content.style.display = "block";

          label2.style.backgroundColor = "white";
          hoge2Content.style.display = "none";
          checkbox2.checked = false;
      } else {
          // hoge1タブ見出しのチェックボックスがfalseの時
          label1.style.backgroundColor = "white";
          hoge1Content.style.backgroundColor = "white";
      }
  });

  // hoge2タブのクリック時
  checkbox2.addEventListener("change", function () {
      if (this.checked) {
          // hoge2タブ見出しのチェックボックスがtrueの時
          label2.style.backgroundColor = "pink";
          label1.style.padding = "10px 20px 10px 20px;";
          hoge2Content.style.backgroundColor = "pink";
          hoge2Content.style.display = "block";

          label1.style.backgroundColor = "white";
          hoge1Content.style.display = "none";
          checkbox1.checked = false;
      } else {
          // hoge2タブ見出しのチェックボックスがfalseの時
          label2.style.backgroundColor = "white";
          hoge2Content.style.backgroundColor = "white";
      }
  });
});