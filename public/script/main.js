(() => {
  // ns-hugo-imp:/usr/local/google/home/mmcewen/qec-website/themes/devfest-theme-hugo/assets/script/submenus.js
  document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".has-children > a");
    menuItems.forEach((item) => {
      item.addEventListener("click", function(e) {
        if (window.innerWidth < 1200) {
          e.preventDefault();
          const parent = this.parentElement;
          parent.classList.toggle("active");
          menuItems.forEach((other) => {
            if (other !== this) {
              other.parentElement.classList.remove("active");
            }
          });
        }
      });
    });
    document.addEventListener("click", function(e) {
      if (!e.target.closest("nav")) {
        menuItems.forEach((item) => {
          item.parentElement.classList.remove("active");
        });
      }
    });
  });

  // ns-hugo-imp:/usr/local/google/home/mmcewen/qec-website/themes/devfest-theme-hugo/assets/script/polyfills.js
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
      thisArg = thisArg || window;
      for (let i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // ns-hugo-imp:/usr/local/google/home/mmcewen/qec-website/themes/devfest-theme-hugo/assets/script/shuffle.js
  document.querySelectorAll("ul.shuffle").forEach((listElt) => {
    for (let i = listElt.children.length; i >= 0; i--) {
      listElt.appendChild(listElt.children[Math.random() * i | 0]);
    }
  });

  // ns-hugo-imp:/usr/local/google/home/mmcewen/qec-website/themes/devfest-theme-hugo/assets/script/sort.js
  function surnameSorter(a, b) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
    return 0;
  }
  document.querySelectorAll("ul.sort").forEach((listElt) => {
    var surnames = [];
    len = listElt.children.length;
    for (let i2 = 0; i2 < len; i2++) {
      var surnames_temp = listElt.children[i2].innerText.split(/\s+/).slice(2, 4);
      if (surnames_temp[0] == "de" || surnames_temp[0] == "van") {
        var surname = surnames_temp[1];
      } else {
        var surname = surnames_temp[0];
      }
      surnames.push([surname, i2]);
    }
    surnames.sort(surnameSorter);
    var items = listElt.childNodes;
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }
    for (i = 0; i < itemsArr.length; ++i) {
      listElt.appendChild(itemsArr[surnames[i][1]]);
    }
  });

  // ns-hugo-imp:/usr/local/google/home/mmcewen/qec-website/themes/devfest-theme-hugo/assets/script/background.js
  setTimeout(function() {
    const jumboOverlay = document.querySelector("#jumbo-overlay");
    if (jumboOverlay) {
      jumboOverlay.classList.add("show");
    }
  }, 500);
})();
