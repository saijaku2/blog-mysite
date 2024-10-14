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
