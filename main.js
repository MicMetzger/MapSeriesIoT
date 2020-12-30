function activate_navbar(x) {
    if (x === "off") {
        x.remove();
    }
    var open_menu = document.getElementById("Sidebar-Dropdown").getElementsByClassName("docs-select-item");
    for (var i = 0; i < open_menu.length; i++) {
        if (open_menu[i].class === "docs-select-item") {
            open_menu[i].classList.add("active");
        }
    }
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