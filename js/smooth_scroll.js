const  $topBtn = document.querySelector(".moveTopBtn");


$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });  
}

const $bottomBtn = document.querySelector(".moveBottomBtn");

$bottomBtn.onclick = () => {
  window.scrollTo({ 
    top: document.body.scrollHeight, behavior: "smooth" });
};