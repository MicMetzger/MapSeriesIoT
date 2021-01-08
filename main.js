function activate_navbar() {
  x = document.getElementById("drop_button");
  var switcher = document.getElementById("arrow_icon");
  var nav = document.getElementById("Sidebar-Dropdown");
  var open_menu = document.getElementById("Sidebar-Dropdown").getElementsByClassName("docs-select-item");

  if (x.classList.contains("off")) {
      x.classList.remove("off");
      x.classList.add("on");

      switcher.classList.remove("fa-angle-double-up");
      switcher.classList.add("fa-angle-double-down");
      nav.classList.remove("inactive");
      nav.classList.add("active");

      // for (var i = 0; i < open_menu.length; i++) {
      //     if (open_menu[i].class === "docs-select-item") {
      //       open_menu[i].classList.remove("inactive");
      //       open_menu[i].classList.add("active");
      //     }
      // }
    }
    else {
        x.classList.remove("on");
        x.classList.add("off");
        
        switcher.classList.remove("fa-angle-double-down");
        switcher.classList.add("fa-angle-double-up");
        nav.classList.remove("active");
        nav.classList.add("inactive");

        // for (var i = 0; i < open_menu.length; i++) {
        //     if (open_menu[i].class === "docs-select-item") {
        //         open_menu[i].classList.remove("active");
        //         open_menu[i].classList.add("inactive");
        //     }
        // }
    }
      
    return
}

// Close the Side dropdown if the user clicks outside of division
window.onclick = function(event) {
    if (!event.target.matches('.drop_button')) {
      var dropdowns = document.getElementsByClassName("docs-select-item");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
  }