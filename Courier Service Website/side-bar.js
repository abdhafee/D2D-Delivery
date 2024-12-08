var menuIcon = document.getElementById("menu-icon");
        var sideBar = document.getElementById("side-bar");
        var closeBtn = document.getElementById("close-btn");

        menuIcon.onclick = function() {
            sideBar.style.display = "block";
        }

        closeBtn.onclick = function() {
            sideBar.style.display = "none";
        }

        var menuIcon = document.getElementById("menu-icon");
        var sideBar = document.getElementById("side-bar");
        var closeBtn = document.getElementById("close-btn");

        menuIcon.onclick = function() {
            sideBar.classList.add("active");
    }

        closeBtn.onclick = function() {
            sideBar.classList.remove("active");
    }