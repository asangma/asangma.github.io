(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var calcite = _interopRequire(require("calcite-web"));

var comment = document.querySelector(".js-commentbox");
var button = comment.querySelector(".btn");
var textarea = comment.querySelector("textarea");

var toggleButton = function toggleButton(e) {
  var button = comment.querySelector(".btn");
  calcite.toggleClass(button, "btn-disabled");
  calcite.toggleClass(button, "btn-clear");
  calcite.addEvent(button, calcite.click(), newComment);
};

var newComment = function newComment(e) {
  calcite.preventDefault(e);
  var commentBody = textarea.value;
  var commentTemplate = "\n  <div class=\"panel panel-white panel-bordered panel-no-padding leader-half trailer-half\">\n    <div class=\"comment-avatar leader-half\">\n      <img src=\"/_assets/img/comments/no-user-thumb.jpg\" alt=\"\" class=\"\">\n    </div>\n    <div class=\"comment-block\">\n      <p class=\"trailer-0 leader-half font-size--2\"><a href=\"\">You</a> <span class=\"text-gray\">Today</span></p>\n      <p class=\"trailer-half\">" + commentBody + "</p>\n    </div>\n  </div>\n  ";
  comment.insertAdjacentHTML("afterend", commentTemplate);
  textarea.value = "";
};

calcite.addEvent(comment, calcite.click(), toggleButton);

var DIV = document.querySelector(".js-edit-this-content");
var BTN = document.querySelector(".js-edit-this-toggle");

console.log(BTN);

var editThat = function editThat(e) {
  var rightNow = DIV.innerHTML;
  DIV.innerHTML = "\n <textarea name=\"Snippet!\" id=\"\" cols=\"30\" rows=\"4\">\nDepicts the ratio of dollars spent on food at home versus away from home in the USA. Think \"groceries\" versus \"restaurants\". Red area households spend noticeably more at home, blue area households spend noticeably more away from home\n </textarea>\n <div class=\"action-bar leader-half\">\n   <a href=\"#\" class=\"btn btn-clear\">Save</a>\n   <a href=\"#\" class=\"btn btn-transparent\">Cancel</a>\n </div>\n ";
};

calcite.addEvent(BTN, calcite.click(), editThat);

},{"calcite-web":2}],2:[function(require,module,exports){
/* calcite-web - v0.14.2 - 2015-10-07
*  https://github.com/esri/calcite-web
*  Copyright (c) 2015 Environmental Systems Research Institute, Inc.
*  Apache 2.0 License */
(function Calcite () {

  // ┌────────────┐
  // │ Public API │
  // └────────────┘
  // define all public api methods (excluding patterns)
  var calcite = {
    version: 'v0.14.1',
    click: click,
    addEvent: addEvent,
    removeEvent: removeEvent,
    eventTarget: eventTarget,
    preventDefault: preventDefault,
    stopPropagation: stopPropagation,
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    closest: closest,
    nodeListToArray: nodeListToArray,
    init: init
  };

  // ┌──────────────────────┐
  // │ Polyfills            │
  // └──────────────────────┘

  // string.includes()
  if (!String.prototype.includes) {
    String.prototype.includes = function() {'use strict';
      return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
  }

  // focusin event
  !function(){
      var w = window,
          d = w.document;

      if( w.onfocusin === undefined ){
          d.addEventListener('focus'    ,addPolyfill    ,true);
          d.addEventListener('blur'     ,addPolyfill    ,true);
          d.addEventListener('focusin'  ,removePolyfill ,true);
          d.addEventListener('focusout' ,removePolyfill ,true);
      }
      function addPolyfill(e){
          var type = e.type === 'focus' ? 'focusin' : 'focusout';
          var event = new CustomEvent(type, { bubbles:true, cancelable:false });
          event.c1Generated = true;
          e.target.dispatchEvent( event );
      }
      function removePolyfill(e){
          if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
              d.removeEventListener('focus'    ,addPolyfill    ,true);
              d.removeEventListener('blur'     ,addPolyfill    ,true);
              d.removeEventListener('focusin'  ,removePolyfill ,true);
              d.removeEventListener('focusout' ,removePolyfill ,true);
          }
          setTimeout(function(){
              d.removeEventListener('focusin'  ,removePolyfill ,true);
              d.removeEventListener('focusout' ,removePolyfill ,true);
          });
      }
  }();


  // ┌──────────────────────┐
  // │ DOM Event Management │
  // └──────────────────────┘

  // returns standard interaction event, later will add touch support
  function click () {
    return 'click';
  }

  // add a callback function to an event on a DOM node
  function addEvent (domNode, e, fn) {
    if (domNode.addEventListener) {
      return domNode.addEventListener(e, fn, false);
    } else if (domNode.attachEvent) {
      return domNode.attachEvent('on' + e, fn);
    }
  }

  // remove a specific function binding from a DOM node event
  function removeEvent (domNode, e, fn) {
    if (domNode.removeEventListener) {
      return domNode.removeEventListener(e, fn, false);
    } else if (domNode.detachEvent) {
      return domNode.detachEvent('on' + e,  fn);
    }
  }

  // get the target element of an event
  function eventTarget (e) {
    return e.target || e.srcElement;
  }

  // prevent default behavior of an event
  function preventDefault (e) {
    if (e.preventDefault) {
      return e.preventDefault();
    } else if (e.returnValue) {
      e.returnValue = false;
    }
  }

  // stop and event from bubbling up the DOM tree
  function stopPropagation (e) {
    e = e || window.event;
    if (e.stopPropagation) {
      return e.stopPropagation();
    }
    if (e.cancelBubble) {
      e.cancelBubble = true;
    }
  }

  // ┌────────────────────┐
  // │ Class Manipulation │
  // └────────────────────┘

  // check if an element has a specific class
  function hasClass (domNode, className) {
    var elementClass = ' ' + domNode.className + ' ';
    return elementClass.indexOf(' ' + className + ' ') !== -1;
  }

  // add one or more classes to an element
  function addClass (domNode, classes) {
    classes.split(' ').forEach(function (c) {
      if (!hasClass(domNode, c)) {
        domNode.className += ' ' + c;
      }
    });
  }

  // remove one or more classes from an element
  function removeClass (domNode, classes) {
    var elementClass = ' ' + domNode.className + ' ';
    classes.split(' ').forEach(function (c) {
      elementClass = elementClass.replace(' ' + c + ' ', ' ');
    });
    domNode.className = elementClass.trim();
  }

  // if domNode has the class, remove it, else add it
  function toggleClass (domNode, className) {
    if (hasClass(domNode, className)) {
      removeClass(domNode, className);
    } else {
      addClass(domNode, className);
    }
  }

  // ┌─────┐
  // │ DOM │
  // └─────┘

  // returns closest element up the DOM tree matching a given class
  function closest (className, context) {
    var result, current;
    for (current = context; current; current = current.parentNode) {
      if (current.nodeType === 1 && hasClass(current, className)) {
        result = current;
        break;
      }
    }
    return current;
  }

  // turn a domNodeList into an array
  function nodeListToArray (domNodeList) {
    return Array.prototype.slice.call(domNodeList);
  }

  // ┌─────────────┐
  // │ JS Patterns │
  // └─────────────┘
  // helper functions for ui patterns

  // return an array of elements matching a query
  function findElements (query, domNode) {
    var context = domNode || document;
    var elements = context.querySelectorAll(query);
    return nodeListToArray(elements);
  }

  // remove 'is-active' class from every element in an array
  function removeActive (array) {
    if (typeof array == 'object') {
      array = nodeListToArray(array);
    }
    array.forEach(function (item) {
      removeClass(item, 'is-active');
    });
  }

  function addActive (array) {
    if (typeof array == 'object') {
      array = nodeListToArray(array);
    }
    array.forEach(function (item) {
      addClass(item, 'is-active');
    });
  }


  // remove 'is-active' from array, add to element
  function toggleActive (array, el) {
    var isActive = hasClass(el, 'is-active');
    if (isActive) {
      removeClass(el, 'is-active');
    } else {
      removeActive(array);
      addClass(el, 'is-active');
    }
  }

  // toggles `aria-hidde="true"` on a domNode
  function toggleAriaHidden (array) {
    array.forEach(function (node) {
      var hidden = node.getAttribute('aria-hidden');
      if (hidden !== 'true') {
        node.setAttribute('aria-hidden', true);
      } else {
        node.removeAttribute('aria-hidden');
      }
    });
  }

  // ┌───────────┐
  // │ Accordion │
  // └───────────┘
  // collapsible accordion list
  calcite.accordion = function (domNode) {

    function toggleAriaExpanded(domNode) {
      var isExpanded = domNode.getAttribute('aria-expanded');
      if (domNode.getAttribute('aria-expanded')) {
        domNode.setAttribute('aria-expanded', 'false');
      } else {
        domNode.setAttribute('aria-expanded', 'true');
      }
    }

    findElements('.js-accordion', domNode).forEach(function (accordion) {
      accordion.setAttribute('aria-live', 'polite');
      accordion.setAttribute('role', 'tablist');
      nodeListToArray(accordion.children).forEach(function (child) {
        var firstChild = child.children[0];
        firstChild.setAttribute('role', 'tab');
        firstChild.setAttribute('tabindex', '0');
        if (hasClass(child, 'is-active')) {
          child.setAttribute('aria-expanded', 'true');
        } else {
          child.setAttribute('aria-expanded', 'false');
        }
        var sectionTitle = child.querySelector('.accordion-title');
        addEvent(sectionTitle, click(), toggleAccordion);
        addEvent(child, 'keyup', function(e) {
          if (e.keyCode === 13) {
            toggleAccordion(e);
          }
        });
      });
    });

    function toggleAccordion (e) {
      var parent = closest('accordion-section', eventTarget(e));
      toggleClass(parent, 'is-active');
      toggleAriaExpanded(parent);
    }
  };

  // ┌──────────┐
  // │ Dropdown │
  // └──────────┘
  // show and hide dropdown menus
  calcite.dropdown = function (domNode) {
    var toggles = findElements('.js-dropdown-toggle', domNode);
    var dropdowns = findElements('.js-dropdown', domNode);

    function closeAllDropdowns () {
      removeEvent(document.body, click(), closeAllDropdowns);
      dropdowns.forEach(function (dropdown) {
        removeClass(dropdown, 'is-active');
      });
    }

    function bindToggle (toggle) {
      addEvent(toggle, click(), function (e) {
        preventDefault(e);
        stopPropagation(e);
        var dropdown = closest('js-dropdown', toggle);
        var isOpen = hasClass(dropdown, 'is-active');
        closeAllDropdowns();
        if (!isOpen) {
          addClass(dropdown, 'is-active');
        }
        addEvent(document.body, click(), closeAllDropdowns);
      });
    }

    toggles.forEach(bindToggle);
  };

  // ┌────────┐
  // │ Drawer │
  // └────────┘
  // show and hide drawers
  calcite.drawer = function (domNode) {
    var wrapper = document.querySelector('.wrapper');
    var footer = document.querySelector('.footer');
    var toggles = findElements('.js-drawer-toggle', domNode);
    var drawers = findElements('.js-drawer', domNode);
    var lastOn;

    function fenceDrawer (e) {
      if ( !closest('js-drawer', e.target)) {
        drawers.forEach(function (drawer) {
          if (hasClass(drawer, 'is-active')) {
            drawer.focus();
          }
        });
      }
    }

    function escapeCloseDrawer (e) {
      if (e.keyCode === 27) {
        drawers.forEach(function (drawer) {
          removeClass(drawer, 'is-active');
          drawer.removeAttribute('tabindex');
        });
        toggleAriaHidden([wrapper, footer]);
        removeEvent(document, 'keyup', escapeCloseDrawer);
        removeEvent(document, 'focusin', fenceDrawer);
        lastOn.focus();
      }
    }

    function bindDrawerToggle (e) {
      preventDefault(e);
      var toggle = e.target;
      var drawerId = toggle.getAttribute('data-drawer');
      var drawer = document.querySelector('.js-drawer[data-drawer="' + drawerId + '"]');
      var isOpen = hasClass(drawer, 'is-active');

      toggleActive(drawers, drawer);
      toggleAriaHidden([wrapper, footer]);

      if (isOpen) {
        removeEvent(document, 'keyup', escapeCloseDrawer);
        removeEvent(document, 'focusin', fenceDrawer);
        lastOn.focus();
        drawer.removeAttribute('tabindex');
      } else {
        addEvent(document, 'keyup', escapeCloseDrawer);
        addEvent(document, 'focusin', fenceDrawer);

        lastOn = toggle;
        drawer.setAttribute('tabindex', 0);
        drawer.focus();
      }
    }

    toggles.forEach(function (toggle) {
      addEvent(toggle, click(), bindDrawerToggle);
    });

    drawers.forEach(function (drawer) {
      addEvent(drawer, click(), function (e) {
        if (hasClass(eventTarget(e), 'drawer')) {
          toggleActive(drawers, drawer);
          toggleAriaHidden([wrapper, footer]);
          removeEvent(document, 'keyup', escapeCloseDrawer);
        }
      });
    });
  };

  // ┌───────────────┐
  // │ Expanding Nav │
  // └───────────────┘
  // show and hide exanding nav located under topnav
  calcite.expandingNav = function (domNode) {
    var toggles = findElements('.js-expand-toggle', domNode);
    var sections = document.querySelectorAll('.js-expand');

    toggles.forEach(function (toggle) {
      addEvent(toggle, click(), function (e) {
        preventDefault(e);

        var sectionId = toggle.getAttribute('data-expand');
        var section = document.querySelector('.js-expand[data-expand="' + sectionId + '"]');
        var isOpen = hasClass(section, 'is-active');
        var shouldClose = hasClass(section, 'is-active');

        toggleActive(sections, section);

        if (isOpen && shouldClose) {
          removeClass(section, 'is-active');
        } else {
          addClass(section, 'is-active');
        }
      });
    });
  };

  // ┌───────┐
  // │ Modal │
  // └───────┘
  // show and hide modal dialogues
  calcite.modal = function (domNode) {
    var wrapper = document.querySelector('.wrapper');
    var footer = document.querySelector('.footer');
    var toggles = findElements('.js-modal-toggle', domNode);
    var modals = findElements('.js-modal', domNode);
    var lastOn;

    function fenceModal (e) {
      if ( !closest('js-modal', e.target)) {
        modals.forEach(function (modal) {
          if (hasClass(modal, 'is-active')) {
            modal.focus();
          }
        });
      }
    }

    function escapeCloseModal (e) {
      if (e.keyCode === 27) {
        modals.forEach(function (modal) {
          removeClass(modal, 'is-active');
          modal.removeAttribute('tabindex');
        });
        lastOn.focus();
        toggleAriaHidden([wrapper, footer]);
        removeEvent(document, 'keyup', escapeCloseModal);
        removeEvent(document, 'focusin', fenceModal);
      }
    }

    function bindModalToggle (e) {
      preventDefault(e);
      var toggle = e.target;
      var modal;
      var modalId = toggle.getAttribute('data-modal');
      if (modalId) {
        modal = document.querySelector('.js-modal[data-modal="' + modalId + '"]');
      } else {
        modal = closest('js-modal', toggle);
      }

      var isOpen = hasClass(modal, 'is-active');
      toggleActive(modals, modal);
      toggleAriaHidden([wrapper, footer]);

      if (isOpen) {
        removeEvent(document, 'keyup', escapeCloseModal);
        removeEvent(document, 'focusin', fenceModal);
        lastOn.focus();
        modal.removeAttribute('tabindex');
      } else {
        addEvent(document, 'keyup', escapeCloseModal);
        addEvent(document, 'focusin', fenceModal);
        lastOn = toggle;
        modal.setAttribute('tabindex', 0);
        modal.focus();
      }
    }

    toggles.forEach(function (toggle) {
      addEvent(toggle, click(), bindModalToggle);
    });

    modals.forEach(function (modal) {
      addEvent(modal, click(), function (e) {
        if (eventTarget(e) === modal) {
          toggleActive(modals, modal);
          toggleAriaHidden([wrapper, footer]);
          removeEvent(document, 'keyup', escapeCloseModal);
        }
      });
    });
  };

  // ┌──────┐
  // │ Tabs │
  // └──────┘
  // tabbed content pane
  calcite.tabs = function (domNode) {
    var tabs = findElements('.js-tab', domNode);
    var tabGroups = findElements('.js-tab-group', domNode);
    var tabSections = findElements('.js-tab-section', domNode);

    // set max width for each tab
    tabGroups.forEach(function (tab) {
      tab.setAttribute('aria-live', 'polite');
      tab.children[0].setAttribute('role', 'tablist');
      var tabsInGroup = tab.querySelectorAll('.js-tab');
      var percent = 100 / tabsInGroup.length;
      for (var i = 0; i < tabsInGroup.length; i++) {
        tabsInGroup[i].style.maxWidth = percent + '%';
      }
    });

    function switchTab (e) {
      preventDefault(e);

      var tab = closest('js-tab', eventTarget(e));
      var tabGroup = closest('js-tab-group', tab);
      var tabs = tabGroup.querySelectorAll('.js-tab');
      var contents = tabGroup.querySelectorAll('.js-tab-section');
      var index = nodeListToArray(tabs).indexOf(tab);

      removeActive(tabs);
      removeActive(contents);

      nodeListToArray(tabs).forEach(function (t){
        t.setAttribute('aria-expanded', false);
      });

      nodeListToArray(contents).forEach(function (c){
        c.setAttribute('aria-expanded', false);
      });

      addClass(tab, 'is-active');
      addClass(contents[index], 'is-active');

      tab.setAttribute('aria-expanded', 'true');
      contents[index].setAttribute('aria-expanded', 'true');
    }

    tabs.forEach(function (tab) {
      tab.setAttribute('aria-expanded', 'false');
      tab.setAttribute('role', 'tab');
      addEvent(tab, click(), switchTab);
      addEvent(tab, 'keyup', function(e) {
        if (e.keyCode === 13) {
          switchTab(e);
        }
      });
      tab.setAttribute('tabindex', '0');
    });

    tabSections.forEach(function (section) {
      section.setAttribute('role', 'tabpanel');
      var isOpen = hasClass(section, 'is-active');
      if (isOpen) {
        section.setAttribute('aria-expanded', 'true');
      } else {
        section.setAttribute('aria-expanded', 'false');
      }
    });
  };


  // ┌─────────────┐
  // │ Site Search │
  // └─────────────┘
  // Expanding search bar that lives in the top nav.
  calcite.siteSearch = function (domNode) {
    var searchForms = findElements('.js-site-search', domNode);

    function toggleForm (e) {
      var searchContainer = closest('js-site-search', e.target);
      var isOpen = hasClass(searchContainer, 'is-active');

      if (isOpen) {
        removeClass(searchContainer, 'is-active');
        e.target.value = '';
      } else {
        addClass(searchContainer, 'is-active');
      }
    }

    searchForms.forEach(function (search) {
      addEvent(search, 'focusin', toggleForm);
      addEvent(search, 'focusout', toggleForm);
    });
  };


  // ┌────────┐
  // │ Sticky │
  // └────────┘
  // sticks things to the window
  calcite.sticky = function (domNode) {
    var elements = findElements('.js-sticky', domNode);

    var stickies = elements.map(function (el) {
      var offset = el.offsetTop;
      var dataTop = el.getAttribute('data-top') || 0;
      el.style.top = dataTop + 'px';
      var parent = el.parentNode;
      var shim = el.cloneNode('deep');
      shim.style.visibility = 'hidden';
      shim.style.display = 'none';
      parent.insertBefore(shim, el);

      return {
        top: offset - parseInt(dataTop, 0),
        shim: shim,
        element: el
      };
    });

    function resize () {
      stickies.forEach(function (item) {
        var referenceElement = item.element;
        if (hasClass(item.element, 'is-sticky')) {
          referenceElement = item.shim;
        }
        var dataTop = referenceElement.getAttribute('data-top') || 0;
        item.top = referenceElement.offsetTop - parseInt(dataTop, 0);
      });
      scrollHandler();
    }

    var scrollHandler = function () {
      stickies.forEach(function (item) {
        if (item.top < window.pageYOffset) {
          addClass(item.element, 'is-sticky');
          item.shim.style.display = '';
        } else {
          removeClass(item.element, 'is-sticky');
          item.shim.style.display = 'none';
        }
      });
    };

    if (elements) {
      calcite.addEvent(window, 'scroll', scrollHandler);
      calcite.addEvent(window, 'resize', resize);
    }
  };

  // ┌───────────┐
  // │ Third Nav │
  // └───────────┘
  // sticks things to the window
  calcite.thirdNav = function (domNode) {
    var nav = findElements('.js-nav-overflow', domNode)[0];
    var leftBtn = findElements('.js-overflow-left', domNode)[0];
    var rightBtn = findElements('.js-overflow-right', domNode)[0];

    function scroll (distance) {
      nav.scrollLeft += distance;
    }

    function resize () {
      calcite.removeClass(leftBtn, 'is-active');
      calcite.removeClass(rightBtn, 'is-active');
      if (nav.scrollLeft > 0) calcite.addClass(leftBtn, 'is-active');
      if (nav.scrollLeft + nav.clientWidth + 5 < nav.scrollWidth) calcite.addClass(rightBtn, 'is-active');
    }

    if (nav) {
      calcite.addEvent(leftBtn, calcite.click(), scroll.bind(null, -40));
      calcite.addEvent(rightBtn, calcite.click(), scroll.bind(null, 40));
      calcite.addEvent(nav, 'scroll', resize);
      calcite.addEvent(window, 'resize', resize);
      resize();
    }
  };

  // ┌─────────────┐
  // │ Filter List │
  // └─────────────┘
  // Used for filtering lists
  calcite.filterList = function (value, items) {
    var results = items.filter(function (item) {
        var val = value.toLowerCase();
        var t = item.innerHTML.toLowerCase();
        return t.includes(val);
    });
    return results;
  };

  // ┌─────────────────┐
  // │ Filter Dropdown │
  // └─────────────────┘
  // Component used to select any number of things from an array of any number of things

  calcite.filterDropdown = function (domNode) {
    var context = domNode || document;
    var dropdowns = nodeListToArray(context.querySelectorAll('.js-filter-dropdown'));

    dropdowns.forEach(function (dropdown) {
      var container = dropdown.querySelector('.filter-dropdown-container');
      var list = dropdown.querySelector('.filter-dropdown-list');
      var input = dropdown.querySelector('.filter-dropdown-input');
      var clearButton = dropdown.querySelector('.filter-dropdown-clear');
      var items = dropdown.querySelectorAll('.filter-dropdown-link');

      list.setAttribute('aria-expanded', false);

      for (i = 0; i < items.length; i++) {
        var item = items[i];
        item.setAttribute('data-item-id', i);
        addEvent(item, 'click', toggleItem);
      }

      function showActive() {
        var activeItems = dropdown.querySelectorAll('.filter-dropdown-active');

        for (i = 0; i < activeItems.length; i++) {
          var activeItem = activeItems[i];
          activeItem.parentNode.removeChild(activeItem);
        }

        for (i = 0; i < items.length; i++) {
          var item = items[i];
          if (hasClass(item, 'is-active')) {
            var template = '<span class="filter-dropdown-active">' + item.innerHTML  + '<a class="filter-dropdown-remove" href="#" data-item-id='+ [i] +'></a></span>';
            container.insertAdjacentHTML('afterend', template);
          }
        }

        activeItems = dropdown.querySelectorAll('.filter-dropdown-active');

        for (i = 0; i < activeItems.length; i++) {
          var closeButton = activeItems[i].querySelector('.filter-dropdown-remove');
          addEvent(closeButton, 'click', clearItem);
        }
      }

      function clearAllItems (e) {
        if (e) e.preventDefault();
        for (i = 0; i < items.length; i++) {
          var item = items[i];
          if (hasClass(item, 'is-active')) removeClass(item, 'is-active');
        }
        showActive();
      }

      function clearItem (e) {
        e.preventDefault();
        var targetId = e.target.getAttribute('data-item-id');
        removeClass(items[targetId], 'is-active');
        showActive();
      }

      function openDropdown (e) {
        list.setAttribute('aria-expanded', true);
        addClass(list, 'is-active');
        addEvent(document.body, 'click', setDropdown);
        console.log('open the thingy')
      }

      function setDropdown (e) {
        addEvent(document.body, 'click', closeDropdown);
        addEvent(input, 'keyup', escapeCloseDropdown);
      }

      function escapeCloseDropdown (e) {
        if (e.keyCode == 27) {
          closeDropdown();
        }
      }

      function closeDropdown (e) {
        removeEvent(document.body, 'click', setDropdown);
        removeEvent(input, 'keyup', escapeCloseDropdown);
        removeEvent(document.body, 'click', closeDropdown);
        list.setAttribute('aria-expanded', false);
        removeClass(list, 'is-active');
      }

      function toggleItem (e) {
        e.preventDefault();
        toggleClass(e.target, 'is-active');
        showActive();
      }

      addEvent(input, 'keyup', function(e) {
        var itemsArray = nodeListToArray(items);
        itemsArray.forEach(function(item) {
          addClass(item, 'is-hidden');
        });

        calcite.filterList(input.value, itemsArray).forEach(function(item) {
          removeClass(item, 'is-hidden');
        });
      });

      container.addEventListener('focusin', openDropdown, true);
      if (clearButton) {
        addEvent(clearButton, 'click', clearAllItems);
      }
      showActive();
    });
  };

  // ┌────────────────────┐
  // │ Initialize Calcite │
  // └────────────────────┘
  // start up Calcite and attach all the patterns
  // optionally pass an array of patterns you'd like to watch
  function init (patterns) {
    patterns = patterns || ['sticky', 'accordion', 'dropdown', 'drawer', 'expandingNav', 'modal', 'tabs', 'siteSearch', 'thirdNav', 'filterDropdown'];
    patterns.forEach(function (pattern) {
      calcite[pattern]();
    });
  }

  // ┌────────────────┐
  // │ Expose Calcite │
  // └────────────────┘
  // make calcite available to amd, common-js, or globally
  if (typeof define === 'function' && define.amd) {
    define(function () { return calcite; });
  } else if (typeof exports === 'object') {
    module.exports = calcite;
  } else {
    // if something called calcite already exists,
    // save it for recovery via calcite.noConflict()
    var oldCalcite = window.calcite;
    calcite.noConflict = function () {
      window.calcite = oldCalcite;
      return this;
    };
    window.calcite = calcite;
  }

})();

},{}]},{},[1])
//# sourceMappingURL=comment-item.js.map
