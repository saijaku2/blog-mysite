function toggleSidebar() {
      var sidebar = document.getElementById("sidebar");
      var toggleButton = document.getElementById("toggleButton");

      if (sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");  // サイドバーを閉じる
        toggleButton.innerHTML = "☰";     // ボタンを「☰」に戻す
      } else {
        sidebar.classList.add("open");     // サイドバーを開く
        toggleButton.innerHTML = "×";      // ボタンを「×」に変更
      }
    }
window.onscroll = function() {
    const button = document.getElementById("topButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};
document.getElementById("topButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
