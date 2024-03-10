//     js for toggle menu

var sidebar = document.querySelector("#main-menu-items");

// Open Sidebar 
function openSidebar() {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

// Close Sidebar 
function closeSidebar() {

    if (sidebar.style.display === "" || sidebar.style.display === "none") {
        sidebar.style.display = "block";

    } else {
        sidebar.style.display = "none";

    }

}


/* Searchengine Functionality */

var searchInput = document.getElementById("searchitem");

var elementsToFilter = document.querySelectorAll(".small-container");

searchInput.addEventListener("keyup", function() {
    var searchText = searchInput.value.toUpperCase();

    elementsToFilter.forEach(function(element) {
        var textContent = element.textContent || element.innerText;
        if (textContent.toUpperCase().indexOf(searchText) > -1) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});