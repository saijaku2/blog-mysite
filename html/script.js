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
    const downButton = document.getElementById("downButton");
    const topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       downButton.style.display:"block"
        topButton.style.display = "block"; // ↑ボタンを表示
    } else {
       downButton.style.display="none"
        topButton.style.display = "none"; // ↑ボタンを非表示
    }
};

document.getElementById("topButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById("downButton").onclick = function() {
    window.scrollBy({ top: 450, behavior: 'smooth' }); // 450px スクロール
};

