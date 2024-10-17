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
    const scrollButton1 = document.getElementById("scrollButton1");
    const scrollButton2 = document.getElementById("scrollButton2");
    const topButton = document.getElementById("topButton");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton1.style.display = "block"; // 画像を表示
        scrollButton2.style.display = "block"; // 画像を表示
        topButton.style.display = "block"; // ↑ボタンを表示
    } else {
        scrollButton1.style.display = "none"; // 画像を非表示
        scrollButton2.style.display = "none"; // 画像を非表示
        topButton.style.display = "none"; // ↑ボタンを非表示
    }
};

document.getElementById("topButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById("scrollButton1").onclick = function() {
    window.scrollBy({ top: 300, behavior: 'smooth' }); // 300px スクロール
};

document.getElementById("scrollButton2").onclick = function() {
    window.scrollBy({ top: 600, behavior: 'smooth' }); // 600px スクロール
};
