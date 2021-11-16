// mobile menu section


var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isclosed = header.clientHeight === headerHeight;
    if(isclosed) {
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}


var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for(var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }else {
            header.style.height = null;
        }
    }
}

