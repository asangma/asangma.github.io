(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/**
* Item Data tab
*/

var Store = _interopRequire(require("./lib/store.js"));

var data = _interopRequire(require("./item-data/data/service-query"));

var Intent = _interopRequire(require("./item-data/intent"));

var Model = _interopRequire(require("./item-data/model"));

var View = _interopRequire(require("./item-data/view"));

data.selected = [];

var store = Store("item-data-test", data);
var state = store();
state.editing = {};
store(state);

var ROOT = document.querySelector(".js-data-view");

var intent = Intent(ROOT);
var model = Model(intent, store);
var view = View(model, ROOT);

},{"./item-data/data/service-query":2,"./item-data/intent":3,"./item-data/model":4,"./item-data/view":6,"./lib/store.js":9}],2:[function(require,module,exports){
"use strict";

module.exports = {
  objectIdFieldName: "FID",
  globalIdFieldName: "",
  geometryType: "esriGeometryPoint",
  spatialReference: {
    wkid: 102100,
    latestWkid: 3857
  },
  fields: [{
    name: "stop_id",
    type: "esriFieldTypeInteger",
    alias: "stop_id",
    sqlType: "sqlTypeInteger",
    domain: null,
    defaultValue: null
  }, {
    name: "stop_code",
    type: "esriFieldTypeInteger",
    alias: "stop_code",
    sqlType: "sqlTypeInteger",
    domain: null,
    defaultValue: null
  }, {
    name: "stop_name",
    type: "esriFieldTypeString",
    alias: "stop_name",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "stop_desc",
    type: "esriFieldTypeString",
    alias: "stop_desc",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "stop_lat",
    type: "esriFieldTypeDouble",
    alias: "stop_lat",
    sqlType: "sqlTypeFloat",
    domain: null,
    defaultValue: null
  }, {
    name: "stop_lon",
    type: "esriFieldTypeDouble",
    alias: "stop_lon",
    sqlType: "sqlTypeFloat",
    domain: null,
    defaultValue: null
  }, {
    name: "zone_id",
    type: "esriFieldTypeString",
    alias: "zone_id",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "stop_url",
    type: "esriFieldTypeString",
    alias: "stop_url",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "location_type",
    type: "esriFieldTypeInteger",
    alias: "location_type",
    sqlType: "sqlTypeInteger",
    domain: null,
    defaultValue: null
  }, {
    name: "direction",
    type: "esriFieldTypeString",
    alias: "direction",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "position",
    type: "esriFieldTypeString",
    alias: "position",
    sqlType: "sqlTypeNVarchar",
    length: 256,
    domain: null,
    defaultValue: null
  }, {
    name: "FID",
    type: "esriFieldTypeInteger",
    alias: "FID",
    sqlType: "sqlTypeInteger",
    domain: null,
    defaultValue: null
  }],
  exceededTransferLimit: true,
  features: [{
    attributes: {
      stop_id: 2,
      stop_code: 2,
      stop_name: "A Ave & Chandler",
      stop_desc: "Eastbound stop in Lake Oswego (Stop ID 2)",
      stop_lat: 45.420595,
      stop_lon: -122.675676,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=2",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 1
    }
  }, {
    attributes: {
      stop_id: 791,
      stop_code: 791,
      stop_name: "E Burnside & NE 58th",
      stop_desc: "Westbound stop in Portland (Stop ID 791)",
      stop_lat: 45.522942,
      stop_lon: -122.604216,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=791",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 2
    }
  }, {
    attributes: {
      stop_id: 792,
      stop_code: 792,
      stop_name: "W Burnside & SW 6th",
      stop_desc: "Eastbound stop in Portland (Stop ID 792)",
      stop_lat: 45.522961,
      stop_lon: -122.676924,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=792",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 3
    }
  }, {
    attributes: {
      stop_id: 3,
      stop_code: 3,
      stop_name: "A Ave & Second St",
      stop_desc: "Eastbound stop in Lake Oswego (Stop ID 3)",
      stop_lat: 45.419386,
      stop_lon: -122.665341,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=3",
      location_type: 0,
      direction: "East",
      position: "Farside",
      FID: 4
    }
  }, {
    attributes: {
      stop_id: 793,
      stop_code: 793,
      stop_name: "E Burnside & SE 60th",
      stop_desc: "Eastbound stop in Portland (Stop ID 793)",
      stop_lat: 45.522783,
      stop_lon: -122.602492,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=793",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 5
    }
  }, {
    attributes: {
      stop_id: 4,
      stop_code: 4,
      stop_name: "A Ave & 10th St",
      stop_desc: "Westbound stop in Lake Oswego (Stop ID 4)",
      stop_lat: 45.420703,
      stop_lon: -122.675152,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=4",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 6
    }
  }, {
    attributes: {
      stop_id: 794,
      stop_code: 794,
      stop_name: "E Burnside & NE 60th",
      stop_desc: "Westbound stop in Portland (Stop ID 794)",
      stop_lat: 45.522946,
      stop_lon: -122.602155,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=794",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 7
    }
  }, {
    attributes: {
      stop_id: 796,
      stop_code: 796,
      stop_name: "E Burnside & NE 62nd",
      stop_desc: "Westbound stop in Portland (Stop ID 796)",
      stop_lat: 45.52294,
      stop_lon: -122.59948,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=796",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 8
    }
  }, {
    attributes: {
      stop_id: 6,
      stop_code: 6,
      stop_name: "A Ave & 8th St",
      stop_desc: "Eastbound stop in Lake Oswego (Stop ID 6)",
      stop_lat: 45.420217,
      stop_lon: -122.67307,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=6",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 9
    }
  }, {
    attributes: {
      stop_id: 799,
      stop_code: 799,
      stop_name: "E Burnside & SE 67th",
      stop_desc: "Eastbound stop in Portland (Stop ID 799)",
      stop_lat: 45.523045,
      stop_lon: -122.595376,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=799",
      location_type: 0,
      direction: "East",
      position: "Opposite",
      FID: 10
    }
  }, {
    attributes: {
      stop_id: 7,
      stop_code: 7,
      stop_name: "A Ave & 8th St",
      stop_desc: "Westbound stop in Lake Oswego (Stop ID 7)",
      stop_lat: 45.420411,
      stop_lon: -122.67268,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=7",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 11
    }
  }, {
    attributes: {
      stop_id: 800,
      stop_code: 800,
      stop_name: "E Burnside & NE 67th",
      stop_desc: "Westbound stop in Portland (Stop ID 800)",
      stop_lat: 45.523182,
      stop_lon: -122.594959,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=800",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 12
    }
  }, {
    attributes: {
      stop_id: 801,
      stop_code: 801,
      stop_name: "E Burnside & NE 69th",
      stop_desc: "Westbound stop in Portland (Stop ID 801)",
      stop_lat: 45.523175,
      stop_lon: -122.591818,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=801",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 13
    }
  }, {
    attributes: {
      stop_id: 8,
      stop_code: 8,
      stop_name: "900 Block Abernethy",
      stop_desc: "Eastbound stop in Oregon City (Stop ID 8)",
      stop_lat: 45.363509,
      stop_lon: -122.593886,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=8",
      location_type: 0,
      direction: "East",
      position: "At",
      FID: 14
    }
  }, {
    attributes: {
      stop_id: 806,
      stop_code: 806,
      stop_name: "E Burnside & SE 72nd",
      stop_desc: "Eastbound stop in Portland (Stop ID 806)",
      stop_lat: 45.523035,
      stop_lon: -122.589044,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=806",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 15
    }
  }, {
    attributes: {
      stop_id: 807,
      stop_code: 807,
      stop_name: "E Burnside & NE 72nd",
      stop_desc: "Westbound stop in Portland (Stop ID 807)",
      stop_lat: 45.523167,
      stop_lon: -122.588825,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=807",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 16
    }
  }, {
    attributes: {
      stop_id: 9,
      stop_code: 9,
      stop_name: "Abernethy & Barclay",
      stop_desc: "Northbound stop in Gladstone (Stop ID 9)",
      stop_lat: 45.384616,
      stop_lon: -122.602835,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=9",
      location_type: 0,
      direction: "North",
      position: "Nearside",
      FID: 17
    }
  }, {
    attributes: {
      stop_id: 808,
      stop_code: 808,
      stop_name: "E Burnside & SE 74th",
      stop_desc: "Eastbound stop in Portland (Stop ID 808)",
      stop_lat: 45.522796,
      stop_lon: -122.586915,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=808",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 18
    }
  }, {
    attributes: {
      stop_id: 809,
      stop_code: 809,
      stop_name: "E Burnside & NE 74th",
      stop_desc: "Westbound stop in Portland (Stop ID 809)",
      stop_lat: 45.522884,
      stop_lon: -122.586722,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=809",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 19
    }
  }, {
    attributes: {
      stop_id: 10,
      stop_code: 10,
      stop_name: "Abernethy & Barclay",
      stop_desc: "Southbound stop in Gladstone (Stop ID 10)",
      stop_lat: 45.384749,
      stop_lon: -122.603202,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=10",
      location_type: 0,
      direction: "South",
      position: "Opposite",
      FID: 20
    }
  }, {
    attributes: {
      stop_id: 811,
      stop_code: 811,
      stop_name: "E Burnside & NE 79th",
      stop_desc: "Westbound stop in Portland (Stop ID 811)",
      stop_lat: 45.522859,
      stop_lon: -122.58231,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=811",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 21
    }
  }, {
    attributes: {
      stop_id: 812,
      stop_code: 812,
      stop_name: "E Burnside & SE 79th",
      stop_desc: "Eastbound stop in Portland (Stop ID 812)",
      stop_lat: 45.522748,
      stop_lon: -122.582532,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=812",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 22
    }
  }, {
    attributes: {
      stop_id: 11,
      stop_code: 11,
      stop_name: "Abernethy & Beatrice",
      stop_desc: "Eastbound stop in Gladstone (Stop ID 11)",
      stop_lat: 45.384046,
      stop_lon: -122.601099,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=11",
      location_type: 0,
      direction: "East",
      position: "Farside",
      FID: 23
    }
  }, {
    attributes: {
      stop_id: 813,
      stop_code: 813,
      stop_name: "E Burnside & SE 82nd",
      stop_desc: "Eastbound stop in Portland (Stop ID 813)",
      stop_lat: 45.522729,
      stop_lon: -122.579492,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=813",
      location_type: 0,
      direction: "East",
      position: "Nearside",
      FID: 24
    }
  }, {
    attributes: {
      stop_id: 814,
      stop_code: 814,
      stop_name: "E Burnside & NE 82nd",
      stop_desc: "Westbound stop in Portland (Stop ID 814)",
      stop_lat: 45.522856,
      stop_lon: -122.578872,
      zone_id: "B",
      stop_url: "http://trimet.org/arrivals/tracker?locationID=814",
      location_type: 0,
      direction: "West",
      position: "Nearside",
      FID: 25
    }
  }]
};

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var most = _interopRequire(require("most"));

var Delegate = _interopRequire(require("../lib/delegate.js"));

var closest = _interopRequire(require("dom-closest"));

var isEnter = function (e) {
  return e.keyCode === 13;
};
var isESC = function (e) {
  return e.keyCode === 27;
};
var getId = function (e) {
  return closest(e.target, ".js-row").getAttribute("data-id");
};

function getIntent(domNode) {
  var delegate = Delegate(domNode);

  var editCell = delegate("dblclick", ".js-data-cell").map(function (e) {
    return {
      id: getId(e),
      attribute: e.target.getAttribute("data-attribute")
    };
  });

  var toggleSelect = delegate("click", ".js-row-checkbox").map(function (e) {
    return { id: getId(e), selected: e.target.checked };
  });

  var editKeys = delegate("keyup", ".data-cell-edit");
  var editEnd = editKeys.filter(isESC);

  return {
    editCell: editCell,
    editEnd: editEnd,
    toggleSelect: toggleSelect
  };
}

module.exports = getIntent

/* Actions:
*  - editCell
*  - saveCell
*  - cancelEditCell
*  - deleteRows
*  - addColumn
*  - editColumn
*  - saveColumn
*  - cancelEditColumn
*  - bulkEdit
*  - bulkEditSave
*  - bulkEditCancel
*  - filter
*  - selectRow
*/
;

},{"../lib/delegate.js":7,"dom-closest":11,"most":74}],4:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var most = _interopRequire(require("most"));

var Store = _interopRequire(require("../lib/store.js"));

// set up app store
var store = undefined;

// wrap store events as a most stream
function publisher(add, end, error) {
  store.on("changed", function (state) {
    add(state);
  });
}

/**
* Store update functions
*/
function edit(event) {
  var state = store();
  console.log(event);
  state.editing = {
    id: event.id,
    attribute: event.attribute
  };
  console.log(state);
  store(state);
}

function editEnd(event) {
  var state = store();
  state.editing = {};
  store(state);
}

function editCommit(event) {
  var state = store();
  store(state);
}

function toggleSelect(row) {
  var state = store();
  state.selected = state.selected.filter(function (id) {
    return id !== row.id;
  });
  if (row.selected) {
    state.selected.push(row.id);
  }
  store(state);
}

/**
* Observe intent streams
* export a stream of store updates
*/
function getModel(intent, Store) {
  store = Store;
  intent.editCell.observe(edit);
  intent.toggleSelect.observe(toggleSelect);
  intent.editEnd.observe(editEnd);
  var currentState = store();
  currentState.selected = [];
  store(currentState);
  return most.create(publisher).startWith(currentState);
}

module.exports = getModel;

},{"../lib/store.js":9,"most":74}],5:[function(require,module,exports){
module.exports = function anonymous(it
/**/) {
var out='<header class="grid-container grid-full leader-half"> <!-- actions for selected items here --> <!-- default is add column --> <div class="column-8"> ';if(it.selected.length){out+=' <a href="" class="btn btn-clear trailer-half leader-0 left">Delete '+(it.selected.length)+' Row';if(it.selected.length > 1){out+='s';}out+='</a> ';}else{out+=' <a href="" class="btn btn-clear trailer-half leader-0 left">Add Column</a> ';}out+=' </div></header><div class="overflow-auto data-table-wrap"> <table> <thead> <!-- schema --> <tr> <th></th> ';var arr1=it.fields;if(arr1){var field,i1=-1,l1=arr1.length-1;while(i1<l1){field=arr1[i1+=1];out+=' <th class="data-th"> <div class="dropdown js-dropdown"> <!-- js-dropdown .is-active --> <h6 class="trailer-0 alias-header js-dropdown-toggle">'+(field.alias)+' <span class="right icon-ui-down-arrow font-size--3 text-dark-gray"></span></h6> <!-- js-dropdown-toggle --> <nav class="dropdown-menu modifier-class"> <div class="data-sort"> Sort: <a href="" class="data-sort-link font-size--3">Asc</a> <!-- .is-active --> <a href="" class="data-sort-link font-size--3">Desc</a> </div> <a href="#" class="dropdown-link">Edit Column</a> <a href="#" class="dropdown-link">Delete Column</a> <a href="#" class="dropdown-link">Filter by Column</a> </nav> </div> <code class="schema-type">'+(field.type)+'</code> </th> ';} } out+=' </tr> </thead> <tbody> <!-- data rows --> <!-- .is-selected when selected --> ';var arr2=it.features;if(arr2){var feature,i2=-1,l2=arr2.length-1;while(i2<l2){feature=arr2[i2+=1];out+=' <tr class="js-row data-row ';if(feature.selected){out+='is-selected';}out+='" data-id="'+(feature.id)+'"> <td class="row-checkbox"> <input class="js-row-checkbox" type="checkbox" ';if(feature.selected){out+='checked';}out+='> </td> ';var arr3=feature.attributes;if(arr3){var attribute,i3=-1,l3=arr3.length-1;while(i3<l3){attribute=arr3[i3+=1];out+=' <td class="js-data-cell data-cell ';if(it.editing.attribute == attribute.alias && it.editing.id == feature.id){out+='is-editing';}out+='" data-attribute="'+(attribute.alias)+'"> <!-- .is-editing --> '+(attribute.value)+' <input class="data-cell-edit" type="text" value="'+(attribute.value)+'"> <p class="data-cell-edit-help code-face">Press Enter to save and Esc to cancel</p> </td> ';} } out+=' </tr> ';} } out+=' </tbody> </table></div>';return out;
}
},{}],6:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var most = _interopRequire(require("most"));

var virtualize = _interopRequire(require("vdom-virtualize"));

var template = _interopRequire(require("./view.dot"));

var render = _interopRequire(require("../lib/render.js"));

var calcite = _interopRequire(require("calcite-web"));

// virtualize creates null dom nodes,
// not sure why, but removing them allows the diff to work
function parseState(state) {
  var features = state.features.map(function (feature) {
    var attributes = Object.keys(feature.attributes);
    feature.id = feature.attributes.FID;
    if (state.selected.indexOf(feature.id.toString()) > -1) {
      feature.selected = true;
    }
    feature.attributes = attributes.map(function (key) {
      return {
        alias: key,
        value: feature.attributes[key]
      };
    });
    return feature;
  });
  state.features = features;
  return state;
}

/**
* Render current state to DOM Node
* @param  {Stream}  model   Event stream of changes to model
* @param  {Element} domNode Render target for view (DOM Element)
*/
function getView(model, domNode) {
  var tree = virtualize(domNode);
  model.forEach(function (state) {
    var data = parseState(state);
    var html = template(data);
    tree = render(domNode, html, tree);
    calcite.dropdown(domNode);
  });
}

module.exports = getView;

},{"../lib/render.js":8,"./view.dot":5,"calcite-web":10,"most":74,"vdom-virtualize":84}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var most = _interopRequire(require("most"));

var matches = _interopRequire(require("matches-selector"));

/**
* @param  {String} event DOM Event like 'click' or 'mousemove'
* @param  {String} query Query Selector string like 'ul li.x'
* @return {Stream}       Return a most stream of the correct events
*/
function Stream(event, query) {
  var stream = most.fromEvent(event, this.domNode).filter(function (e) {
    return matches(e.target, query);
  });
  return stream;
}

/**
* All events are attached to a root DOM element,
* @param  {String} query CSS selector for root dom node ex. '#my-id'
*/
function getStream(domNode) {
  return Stream.bind({ domNode: domNode });
}

module.exports = getStream;

},{"matches-selector":13,"most":74}],8:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var virtualize = _interopRequire(require("vdom-virtualize"));

var diff = _interopRequire(require("virtual-dom/diff"));

var patch = _interopRequire(require("virtual-dom/patch"));

function deleteNullProperties(tree) {
  if (tree.children) {
    tree.children = tree.children.filter(function (child) {
      return child;
    });
    tree.children.forEach(function (child) {
      deleteNullProperties(child);
    });
  }
}

/**
* Render anything that has changed to a DOM Node
* @param  {Element} node Root DOM Node to be rendered to
* @param  {String}  html String representing desired html state
* @param  {Object}  tree Current virtual DOM tree
* @return {Object}       Updated virtual DOM tree
*/
function render(node, html, tree) {
  var tmp = node.cloneNode(false);
  tmp.innerHTML = html;
  var newTree = virtualize(tmp);
  deleteNullProperties(newTree);
  var patches = diff(tree, newTree);
  patch(node, patches);
  return newTree;
}

module.exports = render;

},{"vdom-virtualize":84,"virtual-dom/diff":92,"virtual-dom/patch":96}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

// Save items to local storage
// maybe should be its own little module (l-store, l-s)

var Emitter = _interopRequire(require("tiny-emitter"));

function get(KEY) {
  if (localStorage[KEY]) {
    return JSON.parse(localStorage[KEY]);
  } else {
    return undefined;
  }
}

function set(KEY, value) {
  localStorage[KEY] = JSON.stringify(value);
  return get(KEY);
}

function Store(ee, arg) {
  var KEY = this.KEY;
  if (!arg) {
    return get(KEY);
  } else {
    if (typeof arg === "function") {
      var newValue = arg(get(KEY));
      set(KEY, newValue);
    } else {
      set(KEY, arg);
    }
    ee.emit("changed", get(KEY));
    return get(KEY);
  }
}

function getStore(KEY, defaults) {
  var ee = new Emitter();
  var store = Store.bind({ KEY: KEY }, ee);

  if (!get(KEY) && defaults) {
    set(KEY, defaults);
  }

  store.on = ee.on;
  store.emit = ee.emit;

  ee.on("changed", function (value) {
    store.emit("changed", value);
  });

  return store;
}

module.exports = getStore;

},{"tiny-emitter":83}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
/**
 * Module dependencies
 */

var matches = require('dom-matches');

/**
 * @param element {Element}
 * @param selector {String}
 * @param context {Element}
 * @return {Element}
 */
module.exports = function (element, selector, context) {
  context = context || document;
  // guard against orphans
  element = { parentNode: element };

  while ((element = element.parentNode) && element !== context) {
    if (matches(element, selector)) {
      return element;
    }
  }
};

},{"dom-matches":12}],12:[function(require,module,exports){
'use strict';

/**
 * Vendor-specific implementations of `Element.prototype.matches()`.
 */

var proto = Element.prototype;

var nativeMatches = proto.matches ||
  proto.mozMatchesSelector ||
  proto.msMatchesSelector ||
  proto.oMatchesSelector ||
  proto.webkitMatchesSelector;

/**
 * Determine if the browser supports matching orphan elements. IE 9's
 * vendor-specific implementation doesn't work with orphans and neither does
 * the fallback for older browsers.
 */

var matchesOrphans = (function () {
  return nativeMatches ? nativeMatches.call(document.createElement('a'), 'a') : false;
}());

/**
 * Determine if a DOM element matches a CSS selector
 *
 * @param {Element} elem
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function matches(elem, selector) {
  if (!elem || elem.nodeType !== 1) {
    return false;
  }

  var parentElem = elem.parentNode;

  // create a parent for orphans if the browser requires it
  if (!parentElem && !matchesOrphans) {
    parentElem = document.createDocumentFragment();
    parentElem.appendChild(elem);
  }

  // use native 'matches'
  if (nativeMatches) {
      return nativeMatches.call(elem, selector);
  }

  // native support for `matches` is missing and a fallback is required
  var nodes = parentElem.querySelectorAll(selector);
  var len = nodes.length;

  for (var i = 0; i < len; i++) {
    if (nodes[i] === elem) {
      return true;
    }
  }

  return false;
}

/**
 * Expose `matches`
 */

module.exports = matches;

},{}],13:[function(require,module,exports){
'use strict';

var proto = Element.prototype;
var vendor = proto.matches
  || proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i] == el) return true;
  }
  return false;
}
},{}],14:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Promise = require('./Promise');

var all = Promise.all;
var resolve = Promise.resolve;

module.exports = LinkedList;

/**
 * Doubly linked list
 * @constructor
 */
function LinkedList() {
	this.head = null;
	this.length = 0;
}

/**
 * Add a node to the end of the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to add
 */
LinkedList.prototype.add = function(x) {
	if(this.head !== null) {
		this.head.prev = x;
		x.next = this.head;
	}
	this.head = x;
	++this.length;
};

/**
 * Remove the provided node from the list
 * @param {{prev:Object|null, next:Object|null, dispose:function}} x node to remove
 */
LinkedList.prototype.remove = function(x) {
	--this.length;
	if(x === this.head) {
		this.head = this.head.next;
	}
	if(x.next !== null) {
		x.next.prev = x.prev;
		x.next = null;
	}
	if(x.prev !== null) {
		x.prev.next = x.next;
		x.prev = null;
	}
};

/**
 * @returns {boolean} true iff there are no nodes in the list
 */
LinkedList.prototype.isEmpty = function() {
	return this.length === 0;
};

/**
 * Dispose all nodes
 * @returns {Promise} promise that fulfills when all nodes have been disposed,
 *  or rejects if an error occurs while disposing
 */
LinkedList.prototype.dispose = function() {
	if(this.isEmpty()) {
		return resolve();
	}

	var promises = [];
	var x = this.head;
	this.head = null;
	this.length = 0;

	while(x !== null) {
		promises.push(x.dispose());
		x = x.next;
	}

	return all(promises);
};
},{"./Promise":15}],15:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var unhandledRejection = require('when/lib/decorators/unhandledRejection');
module.exports = unhandledRejection(require('when/lib/Promise'));

},{"when/lib/Promise":75,"when/lib/decorators/unhandledRejection":77}],16:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

// Based on https://github.com/petkaantonov/deque

module.exports = Queue;

function Queue(capPow2) {
	this._capacity = capPow2||32;
	this._length = 0;
	this._head = 0;
}

Queue.prototype.push = function (x) {
	var len = this._length;
	this._checkCapacity(len + 1);

	var i = (this._head + len) & (this._capacity - 1);
	this[i] = x;
	this._length = len + 1;
};

Queue.prototype.shift = function () {
	var head = this._head;
	var x = this[head];

	this[head] = void 0;
	this._head = (head + 1) & (this._capacity - 1);
	this._length--;
	return x;
};

Queue.prototype.isEmpty = function() {
	return this._length === 0;
};

Queue.prototype.length = function () {
	return this._length;
};

Queue.prototype._checkCapacity = function (size) {
	if (this._capacity < size) {
		this._ensureCapacity(this._capacity << 1);
	}
};

Queue.prototype._ensureCapacity = function (capacity) {
	var oldCapacity = this._capacity;
	this._capacity = capacity;

	var last = this._head + this._length;

	if (last > oldCapacity) {
		copy(this, 0, this, oldCapacity, last & (oldCapacity - 1));
	}
};

function copy(src, srcIndex, dst, dstIndex, len) {
	for (var j = 0; j < len; ++j) {
		dst[j + dstIndex] = src[j + srcIndex];
		src[j + srcIndex] = void 0;
	}
}


},{}],17:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Stream;

function Stream(source) {
	this.source = source;
}

},{}],18:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.noop = noop;
exports.identity = identity;
exports.compose = compose;

exports.cons = cons;
exports.append = append;
exports.drop = drop;
exports.tail = tail;
exports.copy = copy;
exports.map = map;
exports.reduce = reduce;
exports.replace = replace;
exports.remove = remove;
exports.removeAll = removeAll;
exports.findIndex = findIndex;

function noop() {}

function identity(x) {
	return x;
}

function compose(f, g) {
	return function(x) {
		return f(g(x));
	};
}

function cons(x, array) {
	var l = array.length;
	var a = new Array(l + 1);
	a[0] = x;
	for(var i=0; i<l; ++i) {
		a[i + 1] = array[i];
	}
	return a;
}

function append(x, a) {
	var l = a.length;
	var b = new Array(l+1);
	for(var i=0; i<l; ++i) {
		b[i] = a[i];
	}

	b[l] = x;
	return b;
}

function drop(n, array) {
	var l = array.length;
	if(n >= l) {
		return [];
	}

	l -= n;
	var a = new Array(l);
	for(var i=0; i<l; ++i) {
		a[i] = array[n+i];
	}
	return a;
}

function tail(array) {
	return drop(1, array);
}

function copy(array) {
	var l = array.length;
	var a = new Array(l);
	for(var i=0; i<l; ++i) {
		a[i] = array[i];
	}
	return a;
}

function map(f, array) {
	var l = array.length;
	var a = new Array(l);
	for(var i=0; i<l; ++i) {
		a[i] = f(array[i]);
	}
	return a;
}

function reduce(f, z, array) {
	var r = z;
	for(var i=0, l=array.length; i<l; ++i) {
		r = f(r, array[i], i);
	}
	return r;
}

function replace(x, i, array) {
	var l = array.length;
	var a = new Array(l);
	for(var j=0; j<l; ++j) {
		a[j] = i === j ? x : array[j];
	}
	return a;
}

function remove(index, array) {
	var l = array.length;
	if(index >= array) { // exit early if index beyond end of array
		return array;
	}

	if(l === 1) { // exit early if index in bounds and length === 1
		return [];
	}

	l -= 1;
	var b = new Array(l);
	var i;
	for(i=0; i<index; ++i) {
		b[i] = array[i];
	}
	for(i=index; i<l; ++i) {
		b[i] = array[i+1];
	}

	return b;
}

function removeAll(f, a) {
	var l = a.length;
	var b = new Array(l);
	for(var x, i=0, j=0; i<l; ++i) {
		x = a[i];
		if(!f(x)) {
			b[j] = x;
			++j;
		}
	}

	b.length = j;
	return b;
}

function findIndex(x, a) {
	for (var i = 0, l = a.length; i < l; ++i) {
		if (x === a[i]) {
			return i;
		}
	}
	return -1;
}

},{}],19:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Pipe = require('../sink/Pipe');
var runSource = require('../runSource');
var noop = require('../base').noop;

exports.scan = scan;
exports.reduce = reduce;

/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream stream to scan
 * @returns {Stream} new stream containing successive reduce results
 */
function scan(f, initial, stream) {
	return new Stream(new Scan(f, initial, stream.source));
}

function Scan(f, z, source) {
	this.f = f;
	this.value = z;
	this.source = source;
}

Scan.prototype.run = function(sink, scheduler) {
	return this.source.run(new ScanSink(this.f, this.value, sink), scheduler);
};

function ScanSink(f, z, sink) {
	this.f = f;
	this.value = z;
	this.sink = sink;
	this.init = true;
}

ScanSink.prototype.event = function(t, x) {
	if(this.init) {
		this.init = false;
		this.sink.event(t, this.value);
	}

	var f = this.f;
	this.value = f(this.value, x);
	this.sink.event(t, this.value);
};

ScanSink.prototype.error = Pipe.prototype.error;

ScanSink.prototype.end = function(t) {
	this.sink.end(t, this.value);
};

/**
 * Reduce a stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @param {Stream} stream to reduce
 * @returns {Promise} promise for the file result of the reduce
 */
function reduce(f, initial, stream) {
	return runSource(noop, new Accumulate(f, initial, stream.source));
}

function Accumulate(f, z, source) {
	this.f = f;
	this.value = z;
	this.source = source;
}

Accumulate.prototype.run = function(sink, scheduler) {
	return this.source.run(new AccumulateSink(this.f, this.value, sink), scheduler);
};

function AccumulateSink(f, z, sink) {
	this.f = f;
	this.value = z;
	this.sink = sink;
}

AccumulateSink.prototype.event = function(t, x) {
	var f = this.f;
	this.value = f(this.value, x);
	this.sink.event(t, this.value);
};

AccumulateSink.prototype.error = Pipe.prototype.error;

AccumulateSink.prototype.end = function(t) {
	this.sink.end(t, this.value);
};

},{"../Stream":17,"../base":18,"../runSource":54,"../sink/Pipe":60}],20:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var combine = require('./combine').combine;

exports.ap  = ap;

/**
 * Assume fs is a stream containing functions, and apply the latest function
 * in fs to the latest value in xs.
 * fs:         --f---------g--------h------>
 * xs:         -a-------b-------c-------d-->
 * ap(fs, xs): --fa-----fb-gb---gc--hc--hd->
 * @param {Stream} fs stream of functions to apply to the latest x
 * @param {Stream} xs stream of values to which to apply all the latest f
 * @returns {Stream} stream containing all the applications of fs to xs
 */
function ap(fs, xs) {
	return combine(apply, fs, xs);
}

function apply(f, x) {
	return f(x);
}

},{"./combine":22}],21:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var streamOf = require('../source/core').of;
var fromArray = require('../source/fromArray').fromArray;
var concatMap = require('./concatMap').concatMap;
var Sink = require('../sink/Pipe');
var Promise = require('../Promise');
var identity = require('../base').identity;

exports.concat = concat;
exports.cycle = cycle;
exports.cons = cons;

/**
 * @param {*} x value to prepend
 * @param {Stream} stream
 * @returns {Stream} new stream with x prepended
 */
function cons(x, stream) {
	return concat(streamOf(x), stream);
}

/**
 * @param {Stream} left
 * @param {Stream} right
 * @returns {Stream} new stream containing all events in left followed by all
 *  events in right.  This *timeshifts* right to the end of left.
 */
function concat(left, right) {
	return concatMap(identity, fromArray([left, right]));
}

/**
 * Tie stream into a circle, thus creating an infinite stream
 * @param {Stream} stream
 * @returns {Stream} new infinite stream
 */
function cycle(stream) {
	return new Stream(new Cycle(stream.source));
}

function Cycle(source) {
	this.source = source;
}

Cycle.prototype.run = function(sink, scheduler) {
	return new CycleSink(this.source, sink, scheduler);
};

function CycleSink(source, sink, scheduler) {
	this.active = true;
	this.sink = sink;
	this.scheduler = scheduler;
	this.source = source;
	this.disposable = source.run(this, scheduler);
}

CycleSink.prototype.error = Sink.prototype.error;

CycleSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.event(t, x);
};

CycleSink.prototype.end = function(t) {
	if(!this.active) {
		return;
	}

	var self = this;
	Promise.resolve(this.disposable.dispose()).catch(function(e) {
		self.error(t, e);
	});
	this.disposable = this.source.run(this, this.scheduler);
};

CycleSink.prototype.dispose = function() {
	this.active = false;
	return this.disposable.dispose();
};
},{"../Promise":15,"../Stream":17,"../base":18,"../sink/Pipe":60,"../source/core":64,"../source/fromArray":67,"./concatMap":23}],22:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var transform = require('./transform');
var core = require('../source/core');
var Pipe = require('../sink/Pipe');
var IndexSink = require('../sink/IndexSink');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var base = require('../base');
var invoke = require('../invoke');

var hasValue = IndexSink.hasValue;
var getValue = IndexSink.getValue;

var map = base.map;
var tail = base.tail;

exports.combineArray = combineArray;
exports.combine = combine;

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combine(f /*, ...streams */) {
	return new Stream(new Combine(f, map(getSource, tail(arguments))));
}

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @param {[Stream]} streams most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
function combineArray(f, streams) {
	return streams.length === 0 ? core.empty()
		 : streams.length === 1 ? transform.map(f, streams[0])
		 : new Stream(new Combine(f, map(getSource, streams)));
}

function getSource(stream) {
	return stream.source;
}

function Combine(f, sources) {
	this.f = f;
	this.sources = sources;
}

Combine.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l);
	var sinks = new Array(l);

	var combineSink = new CombineSink(this.f, sinks, sink);

	for(var indexSink, i=0; i<l; ++i) {
		indexSink = sinks[i] = new IndexSink(i, combineSink);
		disposables[i] = this.sources[i].run(indexSink, scheduler);
	}

	return new CompoundDisposable(disposables);
};

function CombineSink(f, sinks, sink) {
	this.f = f;
	this.sinks = sinks;
	this.sink = sink;
	this.ready = false;
	this.activeCount = sinks.length;
}

CombineSink.prototype.event = function(t /*, indexSink */) {
	if(!this.ready) {
		this.ready = this.sinks.every(hasValue);
	}

	if(this.ready) {
		// TODO: Maybe cache values in their own array once this.ready
		this.sink.event(t, invoke(this.f, map(getValue, this.sinks)));
	}
};

CombineSink.prototype.end = function(t, indexedValue) {
	if(--this.activeCount === 0) {
		this.sink.end(t, indexedValue.value);
	}
};

CombineSink.prototype.error = Pipe.prototype.error;

},{"../Stream":17,"../base":18,"../disposable/CompoundDisposable":45,"../invoke":52,"../sink/IndexSink":58,"../sink/Pipe":60,"../source/core":64,"./transform":42}],23:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var mergeConcurrently = require('./mergeConcurrently').mergeConcurrently;
var map = require('./transform').map;

exports.concatMap = concatMap;

/**
 * Map each value in stream to a new stream, and concatenate them all
 * stream:              -a---b---cX
 * f(a):                 1-1-1-1X
 * f(b):                        -2-2-2-2X
 * f(c):                                -3-3-3-3X
 * stream.concatMap(f): -1-1-1-1-2-2-2-2-3-3-3-3X
 * @param {function(x:*):Stream} f function to map each value to a stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function concatMap(f, stream) {
	return mergeConcurrently(1, map(f, stream));
}

},{"./mergeConcurrently":33,"./transform":42}],24:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var PropagateTask = require('../scheduler/PropagateTask');

exports.delay = delay;

/**
 * @param {Number} delayTime milliseconds to delay each item
 * @param {Stream} stream
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
function delay(delayTime, stream) {
	return delayTime <= 0 ? stream
		 : new Stream(new Delay(delayTime, stream.source));
}

function Delay(dt, source) {
	this.dt = dt;
	this.source = source;
}

Delay.prototype.run = function(sink, scheduler) {
	var delaySink = new DelaySink(this.dt, sink, scheduler);
	return new CompoundDisposable([delaySink, this.source.run(delaySink, scheduler)]);
};

function DelaySink(dt, sink, scheduler) {
	this.dt = dt;
	this.sink = sink;
	this.scheduler = scheduler;
}

DelaySink.prototype.dispose = function() {
	var self = this;
	this.scheduler.cancelAll(function(task) {
		return task.sink === self.sink;
	});
};

DelaySink.prototype.event = function(t, x) {
	this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink));
};

DelaySink.prototype.end = function(t, x) {
	this.scheduler.delay(this.dt, PropagateTask.end(x, this.sink));
};

DelaySink.prototype.error = Sink.prototype.error;

},{"../Stream":17,"../disposable/CompoundDisposable":45,"../scheduler/PropagateTask":55,"../sink/Pipe":60}],25:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var ValueSource = require('../source/ValueSource');

exports.flatMapError = flatMapError;
exports.throwError   = throwError;

/**
 * If stream encounters an error, recover and continue with items from stream
 * returned by f.
 * @param {function(error:*):Stream} f function which returns a new stream
 * @param {Stream} stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
function flatMapError(f, stream) {
	return new Stream(new FlatMapError(f, stream.source));
}

/**
 * Create a stream containing only an error
 * @param {*} e error value, preferably an Error or Error subtype
 * @returns {Stream} new stream containing only an error
 */
function throwError(e) {
	return new Stream(new ValueSource(error, e));
}

function error(t, e, sink) {
	sink.error(t, e);
}

function FlatMapError(f, source) {
	this.f = f;
	this.source = source;
}

FlatMapError.prototype.run = function(sink, scheduler) {
	return new FlatMapErrorSink(this.f, this.source, sink, scheduler);
};

function FlatMapErrorSink(f, source, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;
	this.disposable = source.run(this, scheduler);
}

FlatMapErrorSink.prototype.error = function(t, e) {
	if(!this.active) {
		return;
	}

	// TODO: forward dispose errors
	this.disposable.dispose();
	//resolve(this.disposable.dispose()).catch(function(e) { sink.error(t, e); });

	var f = this.f;
	var stream = f(e);
	this.disposable = stream.source.run(this.sink, this.scheduler);
};

FlatMapErrorSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.event(t, x);
};

FlatMapErrorSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.end(t, x);
};

FlatMapErrorSink.prototype.dispose = function() {
	this.active = false;
	return this.disposable.dispose();
};
},{"../Stream":17,"../source/ValueSource":63}],26:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');
var Filter = require('../fusion/Filter');

exports.filter = filter;
exports.skipRepeats = skipRepeats;
exports.skipRepeatsWith = skipRepeatsWith;

/**
 * Retain only items matching a predicate
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @param {Stream} stream stream to filter
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
function filter(p, stream) {
	return new Stream(Filter.create(p, stream.source));
}

/**
 * Skip repeated events, using === to detect duplicates
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeats(stream) {
	return skipRepeatsWith(same, stream);
}

/**
 * Skip repeated events using the provided equals function to detect duplicates
 * @param {function(a:*, b:*):boolean} equals optional function to compare items
 * @param {Stream} stream stream from which to omit repeated events
 * @returns {Stream} stream without repeated events
 */
function skipRepeatsWith(equals, stream) {
	return new Stream(new SkipRepeats(equals, stream.source));
}

function SkipRepeats(equals, source) {
	this.equals = equals;
	this.source = source;
}

SkipRepeats.prototype.run = function(sink, scheduler) {
	return this.source.run(new SkipRepeatsSink(this.equals, sink), scheduler);
};

function SkipRepeatsSink(equals, sink) {
	this.equals = equals;
	this.sink = sink;
	this.value = void 0;
	this.init = true;
}

SkipRepeatsSink.prototype.end   = Sink.prototype.end;
SkipRepeatsSink.prototype.error = Sink.prototype.error;

SkipRepeatsSink.prototype.event = function(t, x) {
	if(this.init) {
		this.init = false;
		this.value = x;
		this.sink.event(t, x);
	} else if(!this.equals(this.value, x)) {
		this.value = x;
		this.sink.event(t, x);
	}
};

function same(a, b) {
	return a === b;
}

},{"../Stream":17,"../fusion/Filter":49,"../sink/Pipe":60}],27:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var mergeConcurrently = require('./mergeConcurrently').mergeConcurrently;
var map = require('./transform').map;

exports.flatMap = flatMap;
exports.join = join;

/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @param {Stream} stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
function flatMap(f, stream) {
	return join(map(f, stream));
}

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @param {Stream<Stream<X>>} stream stream of streams
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
function join(stream) {
	return mergeConcurrently(Infinity, stream);
}

},{"./mergeConcurrently":33,"./transform":42}],28:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');
var AwaitingDisposable = require('../disposable/AwaitingDisposable');
var CompoundDisposable = require('../disposable/CompoundDisposable');

exports.flatMapEnd = flatMapEnd;

function flatMapEnd(f, stream) {
	return new Stream(new FlatMapEnd(f, stream.source));
}

function FlatMapEnd(f, source) {
	this.f = f;
	this.source = source;
}

FlatMapEnd.prototype.run = function(sink, scheduler) {
	return new FlatMapEndSink(this.f, this.source, sink, scheduler);
};

function FlatMapEndSink(f, source, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;
	this.disposable = new AwaitingDisposable(source.run(this, scheduler));
}

FlatMapEndSink.prototype.error = Sink.prototype.error;

FlatMapEndSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.sink.event(t, x);
};

FlatMapEndSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}

	this.dispose();

	var f = this.f;
	var stream = f(x);
	var disposable = stream.source.run(this.sink, this.scheduler);
	this.disposable = new CompoundDisposable([this.disposable, disposable]);
};

FlatMapEndSink.prototype.dispose = function() {
	this.active = false;
	return this.disposable.dispose();
};
},{"../Stream":17,"../disposable/AwaitingDisposable":44,"../disposable/CompoundDisposable":45,"../sink/Pipe":60}],29:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var combine = require('./combine').combineArray;

var paramsRx = /\(([^)]*)/;
var liftedSuffix = '_most$Stream$lifted';

exports.lift = lift;

/**
 * @deprecated
 * Lift a function to operate on streams.  For example:
 * lift(function(x:number, y:number):number) -> function(xs:Stream, ys:Stream):Stream
 * @param {function} f function to be lifted
 * @returns {function} function with the same arity as f that accepts
 *  streams as arguments and returns a stream
 */
function lift (f) {
	/*jshint evil:true*/
	var m = paramsRx.exec(f.toString());
	var body = 'return function ' + f.name + liftedSuffix + ' (' + m[1] + ') {\n' +
			'  return combine(f, arguments);\n' +
			'};';

	return (new Function('combine', 'f', body)(combine, f));
}
},{"./combine":22}],30:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var PropagateTask = require('../scheduler/PropagateTask');

exports.throttle = throttle;
exports.debounce = debounce;

/**
 * Limit the rate of events by suppressing events that occur too often
 * @param {Number} period time to suppress events
 * @param {Stream} stream
 * @returns {Stream}
 */
function throttle(period, stream) {
	return new Stream(new Throttle(period, stream.source));
}

function Throttle(period, source) {
	this.dt = period;
	this.source = source;
}

Throttle.prototype.run = function(sink, scheduler) {
	return this.source.run(new ThrottleSink(this.dt, sink), scheduler);
};

function ThrottleSink(dt, sink) {
	this.time = 0;
	this.dt = dt;
	this.sink = sink;
}

ThrottleSink.prototype.event = function(t, x) {
	if(t >= this.time) {
		this.time = t + this.dt;
		this.sink.event(t, x);
	}
};

ThrottleSink.prototype.end   = function(t, e) {
	return Sink.prototype.end.call(this, t, e);
};

ThrottleSink.prototype.error = Sink.prototype.error;

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * @param {Number} period events occuring more frequently than this
 *  will be suppressed
 * @param {Stream} stream stream to debounce
 * @returns {Stream} new debounced stream
 */
function debounce(period, stream) {
	return new Stream(new Debounce(period, stream.source));
}

function Debounce(dt, source) {
	this.dt = dt;
	this.source = source;
}

Debounce.prototype.run = function(sink, scheduler) {
	return new DebounceSink(this.dt, this.source, sink, scheduler);
};

function DebounceSink(dt, source, sink, scheduler) {
	this.dt = dt;
	this.sink = sink;
	this.scheduler = scheduler;
	this.value = void 0;
	this.timer = null;

	var sourceDisposable = source.run(this, scheduler);
	this.disposable = new CompoundDisposable([this, sourceDisposable]);
}

DebounceSink.prototype.event = function(t, x) {
	this._clearTimer();
	this.value = x;
	this.timer = this.scheduler.delay(this.dt, PropagateTask.event(x, this.sink));
};

DebounceSink.prototype.end = function(t, x) {
	if(this._clearTimer()) {
		this.sink.event(t, this.value);
		this.value = void 0;
	}
	this.sink.end(t, x);
};

DebounceSink.prototype.error = function(t, x) {
	this._clearTimer();
	this.sink.error(t, x);
};

DebounceSink.prototype.dispose = function() {
	this._clearTimer();
};

DebounceSink.prototype._clearTimer = function() {
	if(this.timer === null) {
		return false;
	}
	this.timer.cancel();
	this.timer = null;
	return true;
};

},{"../Stream":17,"../disposable/CompoundDisposable":45,"../scheduler/PropagateTask":55,"../sink/Pipe":60}],31:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Pipe = require('../sink/Pipe');

exports.loop = loop;

/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @param {Stream} stream event stream
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
function loop(stepper, seed, stream) {
	return new Stream(new Loop(stepper, seed, stream.source));
}

function Loop(stepper, seed, source) {
	this.step = stepper;
	this.seed = seed;
	this.source = source;
}

Loop.prototype.run = function(sink, scheduler) {
	return this.source.run(new LoopSink(this.step, this.seed, sink), scheduler);
};

function LoopSink(stepper, seed, sink) {
	this.step = stepper;
	this.seed = seed;
	this.sink = sink;
}

LoopSink.prototype.error = Pipe.prototype.error;

LoopSink.prototype.event = function(t, x) {
	var result = this.step(this.seed, x);
	this.seed = result.seed;
	this.sink.event(t, result.value);
};

LoopSink.prototype.end = function(t) {
	this.sink.end(t, this.seed);
};

},{"../Stream":17,"../sink/Pipe":60}],32:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var empty = require('../Stream').empty;
var fromArray = require('../source/fromArray').fromArray;
var mergeConcurrently = require('./mergeConcurrently').mergeConcurrently;
var copy = require('../base').copy;

exports.merge = merge;
exports.mergeArray = mergeArray;

/**
 * @returns {Stream} stream containing events from all streams in the argument
 * list in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function merge(/*...streams*/) {
	return mergeArray(copy(arguments));
}

/**
 * @param {Array} streams array of stream to merge
 * @returns {Stream} stream containing events from all input observables
 * in time order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
function mergeArray(streams) {
	var l = streams.length;
    return l === 0 ? empty()
		 : l === 1 ? streams[0]
		 : mergeConcurrently(l, fromArray(streams));
}

},{"../Stream":17,"../base":18,"../source/fromArray":67,"./mergeConcurrently":33}],33:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var AwaitingDisposable = require('../disposable/AwaitingDisposable');
var LinkedList = require('../LinkedList');
var Promise = require('../Promise');

var resolve = Promise.resolve;
var all = Promise.all;

exports.mergeConcurrently = mergeConcurrently;

function mergeConcurrently(concurrency, stream) {
	return new Stream(new MergeConcurrently(concurrency, stream.source));
}

function MergeConcurrently(concurrency, source) {
	this.concurrency = concurrency;
	this.source = source;
}

MergeConcurrently.prototype.run = function(sink, scheduler) {
	return new Outer(this.concurrency, this.source, sink, scheduler);
};

function Outer(concurrency, source, sink, scheduler) {
	this.concurrency = concurrency;
	this.sink = sink;
	this.scheduler = scheduler;
	this.pending = [];
	this.current = new LinkedList();
	this.disposable = new AwaitingDisposable(source.run(this, scheduler));
	this.active = true;
}

Outer.prototype.event = function(t, x) {
	this._addInner(t, x);
};

Outer.prototype._addInner = function(t, stream) {
	if(this.current.length < this.concurrency) {
		this._startInner(t, stream);
	} else {
		this.pending.push(stream);
	}
};

Outer.prototype._startInner = function(t, stream) {
	var innerSink = new Inner(t, this, this.sink);
	this.current.add(innerSink);
	innerSink.disposable = stream.source.run(innerSink, this.scheduler);
};

Outer.prototype.end = function(t, x) {
	this.active = false;
	this.disposable.dispose();
	this._checkEnd(t, x);
};

Outer.prototype.error = function(t, e) {
	this.active = false;
	this.sink.error(t, e);
};

Outer.prototype.dispose = function() {
	this.active = false;
	this.pending.length = 0;
	return all([this.disposable.dispose(), this.current.dispose()]);
};

Outer.prototype._endInner = function(t, x, inner) {
	this.current.remove(inner);
	var self = this;
	resolve(inner.dispose()).catch(function(e) {
		self.error(t, e);
	});

	if(this.pending.length === 0) {
		this._checkEnd(t, x);
	} else {
		this._startInner(t, this.pending.shift());
	}
};

Outer.prototype._checkEnd = function(t, x) {
	if(!this.active && this.current.isEmpty()) {
		this.sink.end(t, x);
	}
};

function Inner(time, outer, sink) {
	this.prev = this.next = null;
	this.time = time;
	this.outer = outer;
	this.sink = sink;
	this.disposable = void 0;
}

Inner.prototype.event = function(t, x) {
	this.sink.event(Math.max(t, this.time), x);
};

Inner.prototype.end = function(t, x) {
	this.outer._endInner(Math.max(t, this.time), x, this);
};

Inner.prototype.error = function(t, e) {
	this.outer.error(Math.max(t, this.time), e);
};

Inner.prototype.dispose = function() {
	return this.disposable.dispose();
};

},{"../LinkedList":14,"../Promise":15,"../Stream":17,"../disposable/AwaitingDisposable":44}],34:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var runSource = require('../runSource');
var noop = require('../base').noop;

exports.observe = observe;
exports.drain = drain;

/**
 * Observe all the event values in the stream in time order. The
 * provided function `f` will be called for each event value
 * @param {function(x:T):*} f function to call with each event value
 * @param {Stream<T>} stream stream to observe
 * @return {Promise} promise that fulfills after the stream ends without
 *  an error, or rejects if the stream ends with an error.
 */
function observe(f, stream) {
	return runSource(f, stream.source);
}

/**
 * "Run" a stream by
 * @param stream
 * @return {*}
 */
function drain(stream) {
	return runSource(noop, stream.source);
}

},{"../base":18,"../runSource":54}],35:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var resolve = require('../Promise').resolve;
var fatal = require('../fatalError');

exports.fromPromise = fromPromise;
exports.await = await;

function fromPromise(p) {
	return new Stream(new PromiseSource(p));
}

function PromiseSource(p) {
	this.promise = p;
}

PromiseSource.prototype.run = function(sink, scheduler) {
	return new PromiseProducer(this.promise, sink, scheduler);
};

function PromiseProducer(p, sink, scheduler) {
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var self = this;
	resolve(p).then(function(x) {
		self._emit(self.scheduler.now(), x);
	}).catch(function(e) {
		self._error(self.scheduler.now(), e);
	});
}

PromiseProducer.prototype._emit = function(t, x) {
	if(!this.active) {
		return;
	}

	this.sink.event(t, x);
	this.sink.end(t, void 0);
};

PromiseProducer.prototype._error = function(t, e) {
	if(!this.active) {
		return;
	}

	this.sink.error(t, e);
};

PromiseProducer.prototype.dispose = function() {
	this.active = false;
};

function await(stream) {
	return new Stream(new Await(stream.source));
}

function Await(source) {
	this.source = source;
}

Await.prototype.run = function(sink, scheduler) {
	return this.source.run(new AwaitSink(sink, scheduler), scheduler);
};

function AwaitSink(sink, scheduler) {
	this.sink = sink;
	this.scheduler = scheduler;
	this.queue = void 0;
}

AwaitSink.prototype.event = function(t, promise) {
	var self = this;
	this.queue = resolve(this.queue).then(function() {
		return self._event(t, promise);
	}).catch(function(e) {
		return self._error(t, e);
	});
};

AwaitSink.prototype.end = function(t, x) {
	var self = this;
	this.queue = resolve(this.queue).then(function() {
		return self._end(t, x);
	}).catch(function(e) {
		return self._error(t, e);
	});
};

AwaitSink.prototype.error = function(t, e) {
	var self = this;
	this.queue = resolve(this.queue).then(function() {
		return self._error(t, e);
	}).catch(fatal);
};

AwaitSink.prototype._error = function(t, e) {
	try {
		// Don't resolve error values, propagate directly
		this.sink.error(Math.max(t, this.scheduler.now()), e);
	} catch(e) {
		fatal(e);
		throw e;
	}
};

AwaitSink.prototype._event = function(t, promise) {
	var self = this;
	return promise.then(function(x) {
		self.sink.event(Math.max(t, self.scheduler.now()), x);
	});
};

AwaitSink.prototype._end = function(t, x) {
	var self = this;
	return resolve(x).then(function(x) {
		self.sink.end(Math.max(t, self.scheduler.now()), x);
	});
};

},{"../Promise":15,"../Stream":17,"../fatalError":48}],36:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Pipe = require('../sink/Pipe');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var base = require('../base');
var invoke = require('../invoke');

exports.sample = sample;
exports.sampleWith = sampleWith;
exports.sampleArray = sampleArray;

/**
 * When an event arrives on sampler, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @param {Stream} sampler streams will be sampled whenever an event arrives
 *  on sampler
 * @returns {Stream} stream of sampled and transformed values
 */
function sample(f, sampler /*, ...streams */) {
	return sampleArray(f, sampler, base.drop(2, arguments));
}

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  stream's latest value will be propagated
 * @param {Stream} stream stream of values
 * @returns {Stream} sampled stream of values
 */
function sampleWith(sampler, stream) {
	return new Stream(new Sampler(base.identity, sampler.source, [stream.source]));
}

function sampleArray(f, sampler, streams) {
	return new Stream(new Sampler(f, sampler.source, base.map(getSource, streams)));
}

function getSource(stream) {
	return stream.source;
}

function Sampler(f, sampler, sources) {
	this.f = f;
	this.sampler = sampler;
	this.sources = sources;
}

Sampler.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l+1);
	var sinks = new Array(l);

	var sampleSink = new SampleSink(this.f, sinks, sink);

	for(var hold, i=0; i<l; ++i) {
		hold = sinks[i] = new Hold(sampleSink);
		disposables[i] = this.sources[i].run(hold, scheduler);
	}

	disposables[i] = this.sampler.run(sampleSink, scheduler);

	return new CompoundDisposable(disposables);
};

function Hold(sink) {
	this.sink = sink;
	this.hasValue = false;
}

Hold.prototype.event = function(t, x) {
	this.value = x;
	this.hasValue = true;
	this.sink._notify(this);
};

Hold.prototype.end = base.noop;
Hold.prototype.error = Pipe.prototype.error;

function SampleSink(f, sinks, sink) {
	this.f = f;
	this.sinks = sinks;
	this.sink = sink;
	this.active = false;
}

SampleSink.prototype._notify = function() {
	if(!this.active) {
		this.active = this.sinks.every(hasValue);
	}
};

SampleSink.prototype.event = function(t) {
	if(this.active) {
		this.sink.event(t, invoke(this.f, base.map(getValue, this.sinks)));
	}
};

SampleSink.prototype.end = Pipe.prototype.end;
SampleSink.prototype.error = Pipe.prototype.error;

function hasValue(hold) {
	return hold.hasValue;
}

function getValue(hold) {
	return hold.value;
}

},{"../Stream":17,"../base":18,"../disposable/CompoundDisposable":45,"../invoke":52,"../sink/Pipe":60}],37:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');
var core = require('../source/core');
var AwaitingDisposable = require('../disposable/AwaitingDisposable');

exports.take = take;
exports.skip = skip;
exports.slice = slice;
exports.takeWhile = takeWhile;
exports.skipWhile = skipWhile;

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream containing only up to the first n items from stream
 */
function take(n, stream) {
	return slice(0, n, stream);
}

/**
 * @param {number} n
 * @param {Stream} stream
 * @returns {Stream} new stream with the first n items removed
 */
function skip(n, stream) {
	return slice(n, Infinity, stream);
}

/**
 * Slice a stream by index. Negative start/end indexes are not supported
 * @param {number} start
 * @param {number} end
 * @param {Stream} stream
 * @returns {Stream} stream containing items where start <= index < end
 */
function slice(start, end, stream) {
	return end <= start ? core.empty()
		: new Stream(new Slice(start, end, stream.source));
}

function Slice(min, max, source) {
	this.skip = min;
	this.take = max - min;
	this.source = source;
}

Slice.prototype.run = function(sink, scheduler) {
	return new SliceSink(this.skip, this.take, this.source, sink, scheduler);
};

function SliceSink(skip, take, source, sink, scheduler) {
	this.skip = skip;
	this.take = take;
	this.sink = sink;
	this.disposable = new AwaitingDisposable(source.run(this, scheduler));
}

SliceSink.prototype.end   = Sink.prototype.end;
SliceSink.prototype.error = Sink.prototype.error;

SliceSink.prototype.event = function(t, x) {
	if(this.skip > 0) {
		this.skip -= 1;
		return;
	}

	if(this.take === 0) {
		return;
	}

	this.take -= 1;
	this.sink.event(t, x);
	if(this.take === 0) {
		this.dispose();
		this.sink.end(t, x);
	}
};

SliceSink.prototype.dispose = function() {
	return this.disposable.dispose();
};

function takeWhile(p, stream) {
	return new Stream(new TakeWhile(p, stream.source));
}

function TakeWhile(p, source) {
	this.p = p;
	this.source = source;
}

TakeWhile.prototype.run = function(sink, scheduler) {
	return new TakeWhileSink(this.p, this.source, sink, scheduler);
};

function TakeWhileSink(p, source, sink, scheduler) {
	this.p = p;
	this.sink = sink;
	this.active = true;
	this.disposable = new AwaitingDisposable(source.run(this, scheduler));
}

TakeWhileSink.prototype.end   = Sink.prototype.end;
TakeWhileSink.prototype.error = Sink.prototype.error;

TakeWhileSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}

	var p = this.p;
	this.active = p(x);
	if(this.active) {
		this.sink.event(t, x);
	} else {
		this.dispose();
		this.sink.end(t, x);
	}
};

TakeWhileSink.prototype.dispose = function() {
	return this.disposable.dispose();
};

function skipWhile(p, stream) {
	return new Stream(new SkipWhile(p, stream.source));
}

function SkipWhile(p, source) {
	this.p = p;
	this.source = source;
}

SkipWhile.prototype.run = function(sink, scheduler) {
	return this.source.run(new SkipWhileSink(this.p, sink), scheduler);
};

function SkipWhileSink(p, sink) {
	this.p = p;
	this.sink = sink;
	this.skipping = true;
}

SkipWhileSink.prototype.end   = Sink.prototype.end;
SkipWhileSink.prototype.error = Sink.prototype.error;

SkipWhileSink.prototype.event = function(t, x) {
	if(this.skipping) {
		var p = this.p;
		this.skipping = p(x);
		if(this.skipping) {
			return;
		}
	}

	this.sink.event(t, x);
};

},{"../Stream":17,"../disposable/AwaitingDisposable":44,"../sink/Pipe":60,"../source/core":64}],38:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var MulticastSource = require('../source/MulticastSource');
var until = require('./timeslice').takeUntil;
var mergeConcurrently = require('./mergeConcurrently').mergeConcurrently;
var map = require('./transform').map;

exports.switch = switchLatest;

/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @param {Stream} stream of streams on which to switch
 * @returns {Stream} switching stream
 */
function switchLatest(stream) {
	var upstream = new Stream(new MulticastSource(stream.source));

	return mergeConcurrently(1, map(untilNext, upstream));

	function untilNext(s) {
		return until(upstream, s);
	}
}

},{"../Stream":17,"../source/MulticastSource":62,"./mergeConcurrently":33,"./timeslice":39,"./transform":42}],39:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Pipe = require('../sink/Pipe');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var core = require('../source/core');
var join = require('../combinator/flatMap').join;
var take = require('../combinator/slice').take;
var noop = require('../base').noop;

var streamOf = core.of;
var never = core.never;

exports.during    = during;
exports.takeUntil = takeUntil;
exports.skipUntil = skipUntil;

function takeUntil(signal, stream) {
	return between(streamOf(), signal, stream);
}

function skipUntil(signal, stream) {
	return between(signal, never(), stream);
}

function during(timeWindow, stream) {
	return between(timeWindow, join(timeWindow), stream);
}

function between(start, end, stream) {
	return new Stream(new Within(take(1, start).source, take(1, end).source, stream.source));
}

function Within(minSignal, maxSignal, source) {
	this.minSignal = minSignal;
	this.maxSignal = maxSignal;
	this.source = source;
}

Within.prototype.run = function(sink, scheduler) {
	var min = new MinBound(this.minSignal, sink, scheduler);
	var max = new MaxBound(this.maxSignal, sink, scheduler);
	var disposable = this.source.run(new WithinSink(min, max, sink), scheduler);

	return new CompoundDisposable([min, max, disposable]);
};

function WithinSink(min, max, sink) {
	this.min = min;
	this.max = max;
	this.sink = sink;
}

WithinSink.prototype.event = function(t, x) {
	if(t >= this.min.value && t < this.max.value) {
		this.sink.event(t, x);
	}
};

WithinSink.prototype.error = Pipe.prototype.error;
WithinSink.prototype.end = Pipe.prototype.end;

function MinBound(signal, sink, scheduler) {
	this.value = Infinity;
	this.sink = sink;
	this.disposable = signal.run(this, scheduler);
}

MinBound.prototype.event = function(t /*, x */) {
	if(t < this.value) {
		this.value = t;
	}
};

MinBound.prototype.end = noop;
MinBound.prototype.error = Pipe.prototype.error;

MinBound.prototype.dispose = function() {
	return this.disposable.dispose();
};

function MaxBound(signal, sink, scheduler) {
	this.value = Infinity;
	this.sink = sink;
	this.disposable = signal.run(this, scheduler);
}

MaxBound.prototype.event = function(t, x) {
	if(t < this.value) {
		this.value = t;
		this.sink.end(t, x);
	}
};

MaxBound.prototype.end = noop;
MaxBound.prototype.error = Pipe.prototype.error;

MaxBound.prototype.dispose = function() {
	return this.disposable.dispose();
};

},{"../Stream":17,"../base":18,"../combinator/flatMap":27,"../combinator/slice":37,"../disposable/CompoundDisposable":45,"../sink/Pipe":60,"../source/core":64}],40:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Sink = require('../sink/Pipe');

exports.timestamp = timestamp;

function timestamp(stream) {
	return new Stream(new Timestamp(stream.source));
}

function Timestamp(source) {
	this.source = source;
}

Timestamp.prototype.run = function(sink, scheduler) {
	return this.source.run(new TimestampSink(sink), scheduler);
};

function TimestampSink(sink) {
	this.sink = sink;
}

TimestampSink.prototype.end   = Sink.prototype.end;
TimestampSink.prototype.error = Sink.prototype.error;

TimestampSink.prototype.event = function(t, x) {
	this.sink.event(t, new TimeValue(t, x));
};

function TimeValue(t, x) {
	this.time = t;
	this.value = x;
}
},{"../Stream":17,"../sink/Pipe":60}],41:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');

exports.transduce = transduce;

/**
 * Transform a stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @param  {Stream} stream stream whose events will be passed through the
 *  transducer
 * @return {Stream} stream of events transformed by the transducer
 */
function transduce(transducer, stream) {
	return new Stream(new Transduce(transducer, stream.source));
}

function Transduce(transducer, source) {
	this.transducer = transducer;
	this.source = source;
}

Transduce.prototype.run = function(sink, scheduler) {
	var xf = this.transducer(new Transformer(sink));
	return this.source.run(new TransduceSink(getTxHandler(xf), sink), scheduler);
};

function TransduceSink(adapter, sink) {
	this.xf = adapter;
	this.sink = sink;
}

TransduceSink.prototype.event = function(t, x) {
	var next = this.xf.step(t, x);

	return this.xf.isReduced(next)
		? this.sink.end(t, this.xf.getResult(next))
		: next;
};

TransduceSink.prototype.end = function(t, x) {
	return this.xf.result(x);
};

TransduceSink.prototype.error = function(t, e) {
	return this.sink.error(t, e);
};

function Transformer(sink) {
	this.time = -Infinity;
	this.sink = sink;
}

Transformer.prototype['@@transducer/init'] = Transformer.prototype.init = function() {};

Transformer.prototype['@@transducer/step'] = Transformer.prototype.step = function(t, x) {
	if(!isNaN(t)) {
		this.time = Math.max(t, this.time);
	}
	return this.sink.event(this.time, x);
};

Transformer.prototype['@@transducer/result'] = Transformer.prototype.result = function(x) {
	return this.sink.end(this.time, x);
};

/**
 * Given an object supporting the new or legacy transducer protocol,
 * create an adapter for it.
 * @param {object} tx transform
 * @returns {TxAdapter|LegacyTxAdapter}
 */
function getTxHandler(tx) {
	return typeof tx['@@transducer/step'] === 'function'
		? new TxAdapter(tx)
		: new LegacyTxAdapter(tx);
}

/**
 * Adapter for new official transducer protocol
 * @param {object} tx transform
 * @constructor
 */
function TxAdapter(tx) {
	this.tx = tx;
}

TxAdapter.prototype.step = function(t, x) {
	return this.tx['@@transducer/step'](t, x);
};
TxAdapter.prototype.result = function(x) {
	return this.tx['@@transducer/result'](x);
};
TxAdapter.prototype.isReduced = function(x) {
	return x != null && x['@@transducer/reduced'];
};
TxAdapter.prototype.getResult = function(x) {
	return x['@@transducer/value'];
};

/**
 * Adapter for older transducer protocol
 * @param {object} tx transform
 * @constructor
 */
function LegacyTxAdapter(tx) {
	this.tx = tx;
}

LegacyTxAdapter.prototype.step = function(t, x) {
	return this.tx.step(t, x);
};
LegacyTxAdapter.prototype.result = function(x) {
	return this.tx.result(x);
};
LegacyTxAdapter.prototype.isReduced = function(x) {
	return x != null && x.__transducers_reduced__;
};
LegacyTxAdapter.prototype.getResult = function(x) {
	return x.value;
};

},{"../Stream":17}],42:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Map = require('../fusion/Map');

exports.map = map;
exports.constant = constant;
exports.tap = tap;

/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @param {Stream} stream stream to map
 * @returns {Stream} stream containing items transformed by f
 */
function map(f, stream) {
	return new Stream(Map.create(f, stream.source));
}

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @param {Stream} stream
 * @returns {Stream} stream containing items replaced with x
 */
function constant(x, stream) {
	return map(function() {
		return x;
	}, stream);
}

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @param {Stream} stream stream to tap
 * @returns {Stream} new stream containing the same items as this stream
 */
function tap(f, stream) {
	return map(function(x) {
		f(x);
		return x;
	}, stream);
}

},{"../Stream":17,"../fusion/Map":51}],43:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var transform = require('./transform');
var core = require('../source/core');
var Sink = require('../sink/Pipe');
var IndexSink = require('../sink/IndexSink');
var CompoundDisposable = require('../disposable/CompoundDisposable');
var base = require('../base');
var invoke = require('../invoke');
var Queue = require('../Queue');

var map = base.map;
var tail = base.tail;

exports.zip = zip;
exports.zipArray = zipArray;

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zip(f /*,...streams */) {
	return zipArray(f, tail(arguments));
}

/**
 * Combine streams pairwise (or tuple-wise) by index by applying f to values
 * at corresponding indices.  The returned stream ends when any of the input
 * streams ends.
 * @param {function} f function to combine values
 * @param {[Stream]} streams streams to zip using f
 * @returns {Stream} new stream with items at corresponding indices combined
 *  using f
 */
function zipArray(f, streams) {
	return streams.length === 0 ? core.empty()
		 : streams.length === 1 ? transform.map(f, streams[0])
		 : new Stream(new Zip(f, map(getSource, streams)));
}

function getSource(stream) {
	return stream.source;
}

function Zip(f, sources) {
	this.f = f;
	this.sources = sources;
}

Zip.prototype.run = function(sink, scheduler) {
	var l = this.sources.length;
	var disposables = new Array(l);
	var sinks = new Array(l);
	var buffers = new Array(l);

	var zipSink = new ZipSink(this.f, buffers, sinks, sink);

	for(var indexSink, i=0; i<l; ++i) {
		buffers[i] = new Queue();
		indexSink = sinks[i] = new IndexSink(i, zipSink);
		disposables[i] = this.sources[i].run(indexSink, scheduler);
	}

	return new CompoundDisposable(disposables);
};

function ZipSink(f, buffers, sinks, sink) {
	this.f = f;
	this.sinks = sinks;
	this.sink = sink;
	this.buffers = buffers;
}

ZipSink.prototype.event = function(t, indexedValue) {
	var buffers = this.buffers;
	var buffer = buffers[indexedValue.index];

	buffer.push(indexedValue.value);

	if(buffer.length() === 1) {
		if(!ready(this.buffers)) {
			return;
		}

		emitZipped(this.f, t, buffers, this.sink);

		if (ended(this.buffers, this.sinks)) {
			this.sink.end(t, void 0);
		}
	}
};

ZipSink.prototype.end = function(t, indexedValue) {
	var buffer = this.buffers[indexedValue.index];
	if(buffer.isEmpty()) {
		this.sink.end(t, indexedValue.value);
	}
};

ZipSink.prototype.error = Sink.prototype.error;

function emitZipped (f, t, buffers, sink) {
	sink.event(t, invoke(f, map(head, buffers)));
}

function head(buffer) {
	return buffer.shift();
}

function ended(buffers, sinks) {
	for(var i=0, l=buffers.length; i<l; ++i) {
		if(buffers[i].isEmpty() && !sinks[i].active) {
			return true;
		}
	}
	return false;
}

function ready(buffers) {
	for(var i=0, l=buffers.length; i<l; ++i) {
		if(buffers[i].isEmpty()) {
			return false;
		}
	}
	return true;
}

},{"../Queue":16,"../Stream":17,"../base":18,"../disposable/CompoundDisposable":45,"../invoke":52,"../sink/IndexSink":58,"../sink/Pipe":60,"../source/core":64,"./transform":42}],44:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = AwaitingDisposable;

function AwaitingDisposable(disposable) {
	this.disposed = false;
	this.disposable = disposable;
	this.value = void 0;
}

AwaitingDisposable.prototype.dispose = function() {
	if(!this.disposed) {
		this.disposed = true;
		this.value = this.disposable.dispose();
	}
	return this.value;
};

},{}],45:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var all = require('../Promise').all;
var map = require('../base').map;

module.exports = CompoundDisposable;

function CompoundDisposable(disposables) {
	this.disposed = false;
	this.disposables = disposables;
}

CompoundDisposable.prototype.dispose = function() {
	if(this.disposed) {
		return;
	}
	this.disposed = true;
	return all(map(dispose, this.disposables));
};

function dispose(disposable) {
	return disposable.dispose();
}
},{"../Promise":15,"../base":18}],46:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Disposable;

function Disposable(f, data) {
	this.disposed = false;
	this._dispose = f;
	this._data = data;
}

Disposable.prototype.dispose = function() {
	if(this.disposed) {
		return;
	}
	this.disposed = true;
	return this._dispose(this._data);
};

},{}],47:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var noop = require('../base').noop;

module.exports = EmptyDisposable;

function EmptyDisposable() {}

EmptyDisposable.prototype.dispose = noop;
},{"../base":18}],48:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = fatalError;

function fatalError (e) {
	setTimeout(function() {
		throw e;
	}, 0);
}
},{}],49:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = require('../sink/Pipe');

module.exports = Filter;

function Filter(p, source) {
	this.p = p;
	this.source = source;
}

/**
 * Create a filtered source, fusing adjacent filter.filter if possible
 * @param {function(x:*):boolean} p filtering predicate
 * @param {{run:function}} source source to filter
 * @returns {Filter} filtered source
 */
Filter.create = function createFilter(p, source) {
	if (source instanceof Filter) {
		return new Filter(and(source.p, p), source.source);
	}

	return new Filter(p, source);
};

Filter.prototype.run = function(sink, scheduler) {
	return this.source.run(new FilterSink(this.p, sink), scheduler);
};

function FilterSink(p, sink) {
	this.p = p;
	this.sink = sink;
}

FilterSink.prototype.end   = Pipe.prototype.end;
FilterSink.prototype.error = Pipe.prototype.error;

FilterSink.prototype.event = function(t, x) {
	var p = this.p;
	p(x) && this.sink.event(t, x);
};

function and(p, q) {
	return function(x) {
		return p(x) && q(x);
	};
}

},{"../sink/Pipe":60}],50:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = require('../sink/Pipe');

module.exports = FilterMap;

function FilterMap(p, f, source) {
	this.p = p;
	this.f = f;
	this.source = source;
}

FilterMap.prototype.run = function(sink, scheduler) {
	return this.source.run(new FilterMapSink(this.p, this.f, sink), scheduler);
};

function FilterMapSink(p, f, sink) {
	this.p = p;
	this.f = f;
	this.sink = sink;
}

FilterMapSink.prototype.event = function(t, x) {
	var f = this.f;
	var p = this.p;
	p(x) && this.sink.event(t, f(x));
};

FilterMapSink.prototype.end = Pipe.prototype.end;
FilterMapSink.prototype.error = Pipe.prototype.error;

},{"../sink/Pipe":60}],51:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Pipe = require('../sink/Pipe');
var Filter = require('./Filter');
var FilterMap = require('./FilterMap');
var base = require('../base');

module.exports = Map;

function Map(f, source) {
	this.f = f;
	this.source = source;
}

/**
 * Create a mapped source, fusing adjacent map.map, filter.map,
 * and filter.map.map if possible
 * @param {function(*):*} f mapping function
 * @param {{run:function}} source source to map
 * @returns {Map|FilterMap} mapped source, possibly fused
 */
Map.create = function createMap(f, source) {
	if(source instanceof Map) {
		return new Map(base.compose(f, source.f), source.source);
	}

	if(source instanceof Filter) {
		return new FilterMap(source.p, f, source.source);
	}

	if(source instanceof FilterMap) {
		return new FilterMap(source.p, base.compose(f, source.f), source.source);
	}

	return new Map(f, source);
};

Map.prototype.run = function(sink, scheduler) {
	return this.source.run(new MapSink(this.f, sink), scheduler);
};

function MapSink(f, sink) {
	this.f = f;
	this.sink = sink;
}

MapSink.prototype.end   = Pipe.prototype.end;
MapSink.prototype.error = Pipe.prototype.error;

MapSink.prototype.event = function(t, x) {
	var f = this.f;
	this.sink.event(t, f(x));
};

},{"../base":18,"../sink/Pipe":60,"./Filter":49,"./FilterMap":50}],52:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = invoke;

function invoke(f, args) {
	/*jshint maxcomplexity:7*/
	switch(args.length) {
		case 0: return f();
		case 1: return f(args[0]);
		case 2: return f(args[0], args[1]);
		case 3: return f(args[0], args[1], args[2]);
		case 4: return f(args[0], args[1], args[2], args[3]);
		case 5: return f(args[0], args[1], args[2], args[3], args[4]);
		default:
			return f.apply(void 0, args);
	}
}
},{}],53:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

exports.isIterable = isIterable;
exports.getIterator = getIterator;
exports.makeIterable = makeIterable;

/*global Set, Symbol*/
var iteratorSymbol;
// Firefox ships a partial implementation using the name @@iterator.
// https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
if (typeof Set === 'function' && typeof new Set()['@@iterator'] === 'function') {
	iteratorSymbol = '@@iterator';
} else {
	iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator ||
	'_es6shim_iterator_';
}

function isIterable(o) {
	return typeof o[iteratorSymbol] === 'function';
}

function getIterator(o) {
	return o[iteratorSymbol]();
}

function makeIterable(f, o) {
	o[iteratorSymbol] = f;
	return o;
}
},{}],54:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Promise = require('./Promise');
var Observer = require('./sink/Observer');
var scheduler = require('./scheduler/defaultScheduler');

var resolve = Promise.resolve;

module.exports = runSource;

function runSource(f, source) {
	return new Promise(function (res, rej) {
		var disposable;
		var observer = new Observer(f,
			function (x) {
				disposeThen(res, rej, disposable, x);
			}, function (e) {
				disposeThen(rej, rej, disposable, e);
			});

		disposable = source.run(observer, scheduler);
	});
}

function disposeThen(res, rej, disposable, x) {
	resolve(disposable.dispose()).then(function () {
		res(x);
	}, rej);
}


},{"./Promise":15,"./scheduler/defaultScheduler":57,"./sink/Observer":59}],55:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var fatal = require('../fatalError');

module.exports = PropagateTask;

function PropagateTask(run, value, sink) {
	this._run = run;
	this.value = value;
	this.sink = sink;
	this.active = true;
}

PropagateTask.event = function(value, sink) {
	return new PropagateTask(emit, value, sink);
};

PropagateTask.end = function(value, sink) {
	return new PropagateTask(end, value, sink);
};

PropagateTask.error = function(value, sink) {
	return new PropagateTask(error, value, sink);
};

PropagateTask.prototype.dispose = function() {
	this.active = false;
};

PropagateTask.prototype.run = function(t) {
	if(!this.active) {
		return;
	}
	this._run(t, this.value, this.sink);
};

PropagateTask.prototype.error = function(t, e) {
	if(!this.active) {
		return fatal(e);
	}
	this.sink.error(t, e);
};

function error(t, e, sink) {
	sink.error(t, e);
}

function emit(t, x, sink) {
	sink.event(t, x);
}

function end(t, x, sink) {
	sink.end(t, x);
}

},{"../fatalError":48}],56:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var base = require('./../base');
var Promise = require('./../Promise');

var findIndex = base.findIndex;

module.exports = Scheduler;

function ScheduledTask(delay, period, task, scheduler) {
	this.time = delay;
	this.period = period;
	this.task = task;
	this.scheduler = scheduler;
	this.active = true;
}

ScheduledTask.prototype.run = function() {
	return this.task.run(this.time);
};

ScheduledTask.prototype.error = function(e) {
	return this.task.error(this.time, e);
};

ScheduledTask.prototype.cancel = function() {
	this.scheduler.cancel(this);
	return this.task.dispose();
};

function runTask(task) {
	try {
		return task.run();
	} catch(e) {
		return task.error(e);
	}
}

function Scheduler(setTimer, clearTimer, now) {
	this.now = now;
	this._setTimer = setTimer;
	this._clearTimer = clearTimer;

	this._timer = null;
	this._nextArrival = 0;
	this._tasks = [];

	var self = this;
	this._runReadyTasksBound = function() {
		self._runReadyTasks();
	};
}

Scheduler.prototype.asap = function(task) {
	var scheduled = new ScheduledTask(0, -1, task, this);
	return Promise.resolve(scheduled).then(runTask);
};

Scheduler.prototype.delay = function(delay, task) {
	return this.schedule(delay, -1, task);
};

Scheduler.prototype.periodic = function(period, task) {
	return this.schedule(0, period, task);
};

Scheduler.prototype.schedule = function(delay, period, task) {
	var st = new ScheduledTask(this.now() + Math.max(0, delay), period, task, this);

	insertByTime(st, this._tasks);
	this._scheduleNextRun(st);
	return st;
};

Scheduler.prototype.cancel = function(task) {
	task.active = false;
	var i = findIndex(task, this._tasks);

	if(i >= 0) {
		this._tasks.splice(i, 1);
		this._reschedule();
	}
};

Scheduler.prototype.cancelAll = function(f) {
	this._tasks = base.removeAll(f, this._tasks);
	this._reschedule();
};

Scheduler.prototype._reschedule = function() {
	if(this._tasks.length === 0) {
		this._unschedule();
	} else {
		this._scheduleNextRun(this.now());
	}
};

Scheduler.prototype._unschedule = function() {
	this._clearTimer(this._timer);
	this._timer = null;
};

Scheduler.prototype._runReadyTasks = function() {
	/*jshint maxcomplexity:6*/
	this._timer = null;

	var now = this.now();
	var tasks = this._tasks;
	var l = tasks.length;
	var toRun = [];

	var task, i;

	// Collect all active tasks with time <= now
	// TODO: Consider using findInsertion instead of linear scan
	for(i=0; i<l; ++i) {
		task = tasks[i];
		if(task.time > now) {
			break;
		}
		if(task.active) {
			toRun.push(task);
		}
	}

	this._tasks = base.drop(i, tasks);

	// Run all ready tasks
	for(i=0, l=toRun.length; i<l; ++i) {
		task = toRun[i];
		runTask(task);

		// Reschedule periodic repeating tasks
		// Check active again, since a task may have canceled itself
		if(task.period >= 0 && task.active) {
			task.time = task.time + task.period;
			insertByTime(task, this._tasks);
		}
	}

	this._scheduleNextRun(this.now());
};

Scheduler.prototype._scheduleNextRun = function(now) {
	if(this._tasks.length === 0) {
		return;
	}

	var nextArrival = this._tasks[0].time;

	if(this._timer === null) {
		this._schedulerNextArrival(nextArrival, now);
	} else if(nextArrival < this._nextArrival) {
		this._unschedule();
		this._schedulerNextArrival(nextArrival, now);
	}
};

Scheduler.prototype._schedulerNextArrival = function(nextArrival, now) {
	this._nextArrival = nextArrival;
	var delay = Math.max(0, nextArrival - now);
	this._timer = this._setTimer(this._runReadyTasksBound, delay);
};

function insertByTime(task, tasks) {
	tasks.splice(findInsertion(task, tasks), 0, task);
}

function findInsertion(task, tasks) {
	var i = binarySearch(task, tasks);
	var l = tasks.length;
	var t = task.time;

	while(i<l && t === tasks[i].time) {
		++i;
	}

	return i;
}

function binarySearch(x, sortedArray) {
	var lo = 0;
	var hi = sortedArray.length;
	var mid, y;

	while (lo < hi) {
		mid = Math.floor((lo + hi) / 2);
		y = sortedArray[mid];

		if (x.time === y.time) {
			return mid;
		} else if (x.time < y.time) {
			hi = mid;
		} else {
			lo = mid + 1;
		}
	}
	return hi;
}

},{"./../Promise":15,"./../base":18}],57:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Scheduler = require('./Scheduler');

module.exports = new Scheduler(defaultSetTimer, defaultClearTimer, Date.now);

// Default timer functions
function defaultSetTimer(f, ms) {
	return setTimeout(f, ms);
}

function defaultClearTimer(t) {
	return clearTimeout(t);
}


},{"./Scheduler":56}],58:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Sink = require('./Pipe');

module.exports = IndexSink;

IndexSink.hasValue = hasValue;
IndexSink.getValue = getValue;

function hasValue(indexSink) {
	return indexSink.hasValue;
}

function getValue(indexSink) {
	return indexSink.value;
}

function IndexSink(i, sink) {
	this.index = i;
	this.sink = sink;
	this.active = true;
	this.hasValue = false;
	this.value = void 0;
}

IndexSink.prototype.event = function(t, x) {
	if(!this.active) {
		return;
	}
	this.value = x;
	this.hasValue = true;
	this.sink.event(t, this);
};

IndexSink.prototype.end = function(t, x) {
	if(!this.active) {
		return;
	}
	this.active = false;
	this.sink.end(t, { index: this.index, value: x });
};

IndexSink.prototype.error = Sink.prototype.error;

},{"./Pipe":60}],59:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Observer;

/**
 * Sink that accepts functions to apply to each event, and to end, and error
 * signals.
 * @param {function(x:*):void} event function to be applied to each event
 * @param {function(x:*):void} end function to apply to end signal value.
 * @param {function(e:Error|*):void} error function to apply to error signal value.
 * @constructor
 */
function Observer(event, end, error) {
	this._event = event;
	this._end = end;
	this._error = error;
	this.active = true;
}

Observer.prototype.event = function(t, x) {
	if (!this.active) {
		return;
	}
	this._event(x);
};

Observer.prototype.end = function(t, x) {
	if (!this.active) {
		return;
	}
	this.active = false;
	this._end(x);
};

Observer.prototype.error = function(t, e) {
	this.active = false;
	this._error(e);
};

},{}],60:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

module.exports = Pipe;

/**
 * A sink mixin that simply forwards event, end, and error to
 * another sink.
 * @param sink
 * @constructor
 */
function Pipe(sink) {
	this.sink = sink;
}

Pipe.prototype.event = function(t, x) {
	return this.sink.event(t, x);
};

Pipe.prototype.end = function(t, x) {
	return this.sink.end(t, x);
};

Pipe.prototype.error = function(t, e) {
	return this.sink.error(t, e);
};

},{}],61:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var base = require('../base');
var resolve = require('../Promise').resolve;
var Disposable = require('../disposable/Disposable');

module.exports = AsyncSource;

function AsyncSource(source) {
	this.source = source;
}

AsyncSource.prototype.run = function(sink, scheduler) {
	var task = new StartAsyncTask(this.source, sink, scheduler);
	var disposable = scheduler.asap(task);

	return new Disposable(asyncDispose, disposable);
};

function asyncDispose(disposable) {
	return resolve(disposable).then(dispose);
}

function dispose(disposable) {
	if(disposable === void 0) {
		return;
	}
	return disposable.dispose();
}

function StartAsyncTask(source, sink, scheduler) {
	this.source = source;
	this.sink = sink;
	this.scheduler = scheduler;
}

StartAsyncTask.prototype.run = function() {
	return this.source.run(this.sink, this.scheduler);
};

StartAsyncTask.prototype.error = function(t, e) {
	this.sink.error(t, e);
};

StartAsyncTask.prototype.dispose = base.noop;
},{"../Promise":15,"../base":18,"../disposable/Disposable":46}],62:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var base = require('../base');
var resolve = require('../Promise').resolve;

module.exports = MulticastSource;

function MulticastSource(source) {
	this.source = source;
	this.sink = new MulticastSink();
	this._disposable = void 0;
}

MulticastSource.prototype.run = function(sink, scheduler) {
	var n = this.sink.add(sink);
	if(n === 1) {
		this._disposable = this.source.run(this.sink, scheduler);
	}

	return new MulticastDisposable(this, sink);
};

MulticastSource.prototype._dispose = function() {
	return resolve(this._disposable).then(dispose);
};

function dispose(disposable) {
	if(disposable === void 0) {
		return;
	}
	return disposable.dispose();
}

function MulticastDisposable(source, sink) {
	this.source = source;
	this.sink = sink;
}

MulticastDisposable.prototype.dispose = function() {
	var s = this.source;
	var remaining = s.sink.remove(this.sink);
	return remaining === 0 && s._dispose();
};

function MulticastSink() {
	this.sinks = [];
}

MulticastSink.prototype.add = function(sink) {
	this.sinks = base.append(sink, this.sinks);
	return this.sinks.length;
};

MulticastSink.prototype.remove = function(sink) {
	this.sinks = base.remove(base.findIndex(sink, this.sinks), this.sinks);
	return this.sinks.length;
};

MulticastSink.prototype.event = function(t, x) {
	var s = this.sinks;
	for(var i=0; i<s.length; ++i) {
		s[i].event(t, x);
	}
};

MulticastSink.prototype.end = function(t, x) {
	var s = this.sinks;
	for(var i=0; i<s.length; ++i) {
		s[i].end(t, x);
	}
};

MulticastSink.prototype.error = function(t, e) {
	var s = this.sinks;
	for (var i=0; i<s.length; ++i) {
		s[i].error(t, e);
	}
};
},{"../Promise":15,"../base":18}],63:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var PropagateTask = require('../scheduler/PropagateTask');

module.exports = ValueSource;

function ValueSource(emit, x) {
	this.emit = emit;
	this.value = x;
}

ValueSource.prototype.run = function(sink, scheduler) {
	return new ValueProducer(this.emit, this.value, sink, scheduler);
};

function ValueProducer(emit, x, sink, scheduler) {
	this.task = new PropagateTask(emit, x, sink);
	scheduler.asap(this.task);
}

ValueProducer.prototype.dispose = function() {
	return this.task.dispose();
};

},{"../scheduler/PropagateTask":55}],64:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var ValueSource = require('../source/ValueSource');
var Disposable = require('../disposable/Disposable');
var EmptyDisposable = require('../disposable/EmptyDisposable');
var PropagateTask = require('../scheduler/PropagateTask');

exports.of = streamOf;
exports.empty = empty;
exports.never = never;

/**
 * Stream containing only x
 * @param {*} x
 * @returns {Stream}
 */
function streamOf(x) {
	return new Stream(new ValueSource(emit, x));
}

function emit(t, x, sink) {
	sink.event(0, x);
	sink.end(0, void 0);
}

/**
 * Stream containing no events and ends immediately
 * @returns {Stream}
 */
function empty() {
	return EMPTY;
}

function EmptySource() {}

EmptySource.prototype.run = function(sink, scheduler) {
	var task = PropagateTask.end(void 0, sink);
	scheduler.asap(task);

	return new Disposable(dispose, task);
};

function dispose(task) {
	return task.dispose();
}

var EMPTY = new Stream(new EmptySource());

/**
 * Stream containing no events and never ends
 * @returns {Stream}
 */
function never() {
	return NEVER;
}

function NeverSource() {}

NeverSource.prototype.run = function() {
	return new EmptyDisposable();
};

var NEVER = new Stream(new NeverSource());

},{"../Stream":17,"../disposable/Disposable":46,"../disposable/EmptyDisposable":47,"../scheduler/PropagateTask":55,"../source/ValueSource":63}],65:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var MulticastSource = require('./MulticastSource');
var AsyncSource = require('./AsyncSource');

exports.create = create;

function create(run) {
	return new Stream(new MulticastSource(new AsyncSource(new SubscriberSource(run))));
}

function SubscriberSource(subscribe) {
	this._subscribe = subscribe;
}

SubscriberSource.prototype.run = function(sink, scheduler) {
	return new Subscription(sink, scheduler, this._subscribe);
};

function Subscription(sink, scheduler, subscribe) {
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var s = this;

	this._unsubscribe = subscribe(add, end, error);

	function add(x) {
		s._add(x);
	}
	function end(x) {
		s._end(x);
	}
	function error(e) {
		s._error(e);
	}
}

Subscription.prototype._add = function(x) {
	if(!this.active) {
		return;
	}
	tryEvent(this.scheduler.now(), x, this.sink);
};

Subscription.prototype._end = function(x) {
	if(!this.active) {
		return;
	}
	this.active = false;
	tryEnd(this.scheduler.now(), x, this.sink);
};

Subscription.prototype._error = function(x) {
	this.active = false;
	this.sink.error(this.scheduler.now(), x);
};

Subscription.prototype.dispose = function() {
	this.active = false;
	if(typeof this._unsubscribe === 'function') {
		return this._unsubscribe();
	}
};

function tryEvent(t, x, sink) {
	try {
		sink.event(t, x);
	} catch(e) {
		sink.error(t, e);
	}
}

function tryEnd(t, x, sink) {
	try {
		sink.end(t, x);
	} catch(e) {
		sink.error(t, e);
	}
}
},{"../Stream":17,"./AsyncSource":61,"./MulticastSource":62}],66:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var fromArray = require('./fromArray').fromArray;
var isIterable = require('../iterable').isIterable;
var fromIterable = require('./fromIterable').fromIterable;

exports.from = from;

function from(a) {
	if(Array.isArray(a)) {
		return fromArray(a);
	}

	if(isIterable(a)) {
		return fromIterable(a);
	}

	throw new TypeError('not iterable: ' + a);
}
},{"../iterable":53,"./fromArray":67,"./fromIterable":69}],67:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var PropagateTask = require('../scheduler/PropagateTask');

exports.fromArray = fromArray;

function fromArray (a) {
	return new Stream(new ArraySource(a));
}

function ArraySource(a) {
	this.array = a;
}

ArraySource.prototype.run = function(sink, scheduler) {
	return new ArrayProducer(this.array, sink, scheduler);
};

function ArrayProducer(array, sink, scheduler) {
	this.scheduler = scheduler;
	this.task = new PropagateTask(runProducer, array, sink);
	scheduler.asap(this.task);
}

ArrayProducer.prototype.dispose = function() {
	return this.task.dispose();
};

function runProducer(t, array, sink) {
	return produce(this, array, sink, 0);
}

function produce(task, array, sink, k) {
	for(var i=k, l=array.length; i<l && task.active; ++i) {
		sink.event(0, array[i]);
	}

	return end();

	function end() {
		return task.active && sink.end(0);
	}
}

},{"../Stream":17,"../scheduler/PropagateTask":55}],68:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var MulticastSource = require('./MulticastSource');
var PropagateTask = require('../scheduler/PropagateTask');
var base = require('../base');

exports.fromEvent = fromEvent;

/**
 * Create a stream from an EventTarget, such as a DOM Node, or EventEmitter.
 * @param {String} event event type name, e.g. 'click'
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter
 * @returns {Stream} stream containing all events of the specified type
 * from the source.
 */
function fromEvent(event, source) {
	var s;
	if(typeof source.addEventListener === 'function') {
		s = new MulticastSource(new EventSource(event, source));
	} else if(typeof source.addListener === 'function') {
		s = new EventEmitterSource(event, source);
	} else {
		throw new Error('source must support addEventListener or addListener');
	}

	return new Stream(s);
}

function EventSource(event, source) {
	this.event = event;
	this.source = source;
}

EventSource.prototype.run = function(sink, scheduler) {
	return new EventAdapter(this.event, this.source, sink, scheduler);
};

function EventAdapter(event, source, sink, scheduler) {
	this.event = event;
	this.source = source;
	this.sink = sink;

	var self = this;
	function addEvent(ev) {
		tryEvent(scheduler.now(), ev, self.sink);
	}

	this._addEvent = this._init(addEvent, event, source);
}

EventAdapter.prototype._init = function(addEvent, event, source) {
	source.addEventListener(event, addEvent, false);
	return addEvent;
};

EventAdapter.prototype.dispose = function() {
	if (typeof this.source.removeEventListener !== 'function') {
		throw new Error('source must support removeEventListener or removeListener');
	}

	this.source.removeEventListener(this.event, this._addEvent, false);
};

function EventEmitterSource(event, source) {
	this.event = event;
	this.source = source;
}

EventEmitterSource.prototype.run = function(sink, scheduler) {
	return new EventEmitterAdapter(this.event, this.source, sink, scheduler);
};

function EventEmitterAdapter(event, source, sink, scheduler) {
	this.event = event;
	this.source = source;
	this.sink = sink;

	var self = this;
	function addEvent(ev) {
		// NOTE: Because EventEmitter allows events in the same call stack as
		// a listener is added, use the scheduler to buffer all events
		// until the stack clears, then propagate.
		scheduler.asap(new PropagateTask(tryEvent, ev, self.sink));
	}

	this._addEvent = this._init(addEvent, event, source);
}

EventEmitterAdapter.prototype._init = function(addEvent, event, source) {
	var doAddEvent = addEvent;

	// EventEmitter supports varargs (eg: emitter.emit('event', a, b, c, ...)) so
	// have to support it here by turning into an array
	doAddEvent = function addVarargs(a) {
		return arguments.length > 1 ? addEvent(base.copy(arguments)) : addEvent(a);
	};

	source.addListener(event, doAddEvent);

	return doAddEvent;
};

EventEmitterAdapter.prototype.dispose = function() {
	if (typeof this.source.removeListener !== 'function') {
		throw new Error('source must support removeEventListener or removeListener');
	}

	this.source.removeListener(this.event, this._addEvent);
};

function tryEvent (t, x, sink) {
	try {
		sink.event(t, x);
	} catch(e) {
		sink.error(t, e);
	}
}
},{"../Stream":17,"../base":18,"../scheduler/PropagateTask":55,"./MulticastSource":62}],69:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var getIterator = require('../iterable').getIterator;
var PropagateTask = require('../scheduler/PropagateTask');

exports.fromIterable = fromIterable;

function fromIterable(iterable) {
	return new Stream(new IterableSource(iterable));
}

function IterableSource(iterable) {
	this.iterable = iterable;
}

IterableSource.prototype.run = function(sink, scheduler) {
	return new IteratorProducer(getIterator(this.iterable), sink, scheduler);
};

function IteratorProducer(iterator, sink, scheduler) {
	this.scheduler = scheduler;
	this.iterator = iterator;
	this.task = new PropagateTask(runProducer, this, sink);
	scheduler.asap(this.task);
}

IteratorProducer.prototype.dispose = function() {
	return this.task.dispose();
};

function runProducer(t, producer, sink) {
	var x = producer.iterator.next();
	if(x.done) {
		sink.end(t, x.value);
	} else {
		sink.event(t, x.value);
	}

	producer.scheduler.asap(producer.task);
}

},{"../Stream":17,"../iterable":53,"../scheduler/PropagateTask":55}],70:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Promise = require('../Promise');
var base = require('../base');

exports.generate = generate;

/**
 * Compute a stream using an *async* generator, which yields promises
 * to control event times.
 * @param f
 * @returns {Stream}
 */
function generate(f /*, ...args */) {
	return new Stream(new GenerateSource(f, base.tail(arguments)));
}

function GenerateSource(f, args) {
	this.f = f;
	this.args = args;
}

GenerateSource.prototype.run = function(sink, scheduler) {
	return new Generate(this.f.apply(void 0, this.args), sink, scheduler);
};

function Generate(iterator, sink, scheduler) {
	this.iterator = iterator;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	Promise.resolve(this).then(next).catch(err);
}

function next(generate, x) {
	return generate.active ? handle(generate, generate.iterator.next(x)) : x;
}

function handle(generate, result) {
	if (result.done) {
		return generate.sink.end(generate.scheduler.now(), result.value);
	}

	return Promise.resolve(result.value).then(function (x) {
		return emit(generate, x);
	}, function(e) {
		return error(generate, e);
	});
}

function emit(generate, x) {
	generate.sink.event(generate.scheduler.now(), x);
	return next(generate, x);
}

function error(generate, e) {
	return handle(generate, generate.iterator.throw(e));
}

Generate.prototype.dispose = function() {
	this.active = false;
};
},{"../Promise":15,"../Stream":17,"../base":18}],71:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Promise = require('../Promise');

exports.iterate = iterate;

/**
 * Compute a stream by iteratively calling f to produce values
 * Event times may be controlled by returning a Promise from f
 * @param {function(x:*):*|Promise<*>} f
 * @param {*} x initial value
 * @returns {Stream}
 */
function iterate(f, x) {
	return new Stream(new IterateSource(f, x));
}

function IterateSource(f, x) {
	this.f = f;
	this.value = x;
}

IterateSource.prototype.run = function(sink, scheduler) {
	return new Iterate(this.f, this.value, sink, scheduler);
};

function Iterate(f, initial, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var x = initial;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	function start(iterate) {
		return stepIterate(iterate, x);
	}

	Promise.resolve(this).then(start).catch(err);
}

Iterate.prototype.dispose = function() {
	this.active = false;
};

function stepIterate(iterate, x) {
	iterate.sink.event(iterate.scheduler.now(), x);

	if(!iterate.active) {
		return x;
	}

	var f = iterate.f;
	return Promise.resolve(f(x)).then(function(y) {
		return continueIterate(iterate, y);
	});
}

function continueIterate(iterate, x) {
	return !iterate.active ? iterate.value : stepIterate(iterate, x);
}

},{"../Promise":15,"../Stream":17}],72:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Disposable = require('../disposable/Disposable');
var MulticastSource = require('./MulticastSource');
var PropagateTask = require('../scheduler/PropagateTask');

exports.periodic = periodic;

/**
 * Create a stream that emits the current time periodically
 * @param {Number} period periodicity of events in millis
 * @param {*) value value to emit each period
 * @returns {Stream} new stream that emits the current time every period
 */
function periodic(period, value) {
	return new Stream(new MulticastSource(new Periodic(period, value)));
}

function Periodic(period, value) {
	this.period = period;
	this.value = value;
}

Periodic.prototype.run = function(sink, scheduler) {
	var task = scheduler.periodic(this.period, new PropagateTask(emit, this.value, sink));
	return new Disposable(cancelTask, task);
};

function cancelTask(task) {
	task.cancel();
}

function emit(t, x, sink) {
	sink.event(t, x);
}

},{"../Stream":17,"../disposable/Disposable":46,"../scheduler/PropagateTask":55,"./MulticastSource":62}],73:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('../Stream');
var Promise = require('../Promise');

exports.unfold = unfold;

/**
 * Compute a stream by unfolding tuples of future values from a seed value
 * Event times may be controlled by returning a Promise from f
 * @param {function(seed:*):{value:*, seed:*, done:boolean}|Promise<{value:*, seed:*, done:boolean}>} f unfolding function accepts
 *  a seed and returns a new tuple with a value, new seed, and boolean done flag.
 *  If tuple.done is true, the stream will end.
 * @param {*} seed seed value
 * @returns {Stream} stream containing all value of all tuples produced by the
 *  unfolding function.
 */
function unfold(f, seed) {
	return new Stream(new UnfoldSource(f, seed));
}

function UnfoldSource(f, seed) {
	this.f = f;
	this.value = seed;
}

UnfoldSource.prototype.run = function(sink, scheduler) {
	return new Unfold(this.f, this.value, sink, scheduler);
};

function Unfold(f, x, sink, scheduler) {
	this.f = f;
	this.sink = sink;
	this.scheduler = scheduler;
	this.active = true;

	var self = this;
	function err(e) {
		self.sink.error(self.scheduler.now(), e);
	}

	function start(unfold) {
		return stepUnfold(unfold, x);
	}

	Promise.resolve(this).then(start).catch(err);
}

Unfold.prototype.dispose = function() {
	this.active = false;
};

function stepUnfold(unfold, x) {
	var f = unfold.f;
	return Promise.resolve(f(x)).then(function(tuple) {
		return continueUnfold(unfold, tuple);
	});
}

function continueUnfold(unfold, tuple) {
	if(tuple.done) {
		unfold.sink.end(unfold.scheduler.now(), tuple.value);
		return tuple.value;
	}

	unfold.sink.event(unfold.scheduler.now(), tuple.value);

	if(!unfold.active) {
		return tuple.value;
	}
	return stepUnfold(unfold, tuple.seed);
}
},{"../Promise":15,"../Stream":17}],74:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2015 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

var Stream = require('./lib/Stream');
var base = require('./lib/base');
var core = require('./lib/source/core');
var from = require('./lib/source/from').from;
var periodic = require('./lib/source/periodic').periodic;

/**
 * Core stream type
 * @type {Stream}
 */
exports.Stream = Stream;

// Add of and empty to constructor for fantasy-land compat
exports.of       = Stream.of    = core.of;
exports.empty    = Stream.empty = core.empty;
exports.never    = core.never;
exports.from     = from;
exports.periodic = periodic;

//-----------------------------------------------------------------------
// Creating

var create = require('./lib/source/create');

/**
 * Create a stream by imperatively pushing events.
 * @param {function(add:function(x), end:function(e)):function} run function
 *  that will receive 2 functions as arguments, the first to add new values to the
 *  stream and the second to end the stream. It may *return* a function that
 *  will be called once all consumers have stopped observing the stream.
 * @returns {Stream} stream containing all events added by run before end
 */
exports.create = create.create;

//-----------------------------------------------------------------------
// Adapting other sources

var events = require('./lib/source/fromEvent');

/**
 * Create a stream of events from the supplied EventTarget or EventEmitter
 * @param {String} event event name
 * @param {EventTarget|EventEmitter} source EventTarget or EventEmitter. The source
 *  must support either addEventListener/removeEventListener (w3c EventTarget:
 *  http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget),
 *  or addListener/removeListener (node EventEmitter: http://nodejs.org/api/events.html)
 * @returns {Stream} stream of events of the specified type from the source
 */
exports.fromEvent = events.fromEvent;

//-----------------------------------------------------------------------
// Lifting functions

var lift = require('./lib/combinator/lift').lift;

/**
 * Lift a function that accepts values and returns a value, and return a function
 * that accepts streams and returns a stream.
 * @type {function(f:function(...args):*):function(...streams):Stream<*>}
 */
exports.lift = lift;

//-----------------------------------------------------------------------
// Observing

var observe = require('./lib/combinator/observe');

exports.observe = observe.observe;
exports.forEach = observe.observe;
exports.drain   = observe.drain;

/**
 * Process all the events in the stream
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.observe = Stream.prototype.forEach = function(f) {
	return observe.observe(f, this);
};

/**
 * Consume all events in the stream, without providing a function to process each.
 * This causes a stream to become active and begin emitting events, and is useful
 * in cases where all processing has been setup upstream via other combinators, and
 * there is no need to process the terminal events.
 * @returns {Promise} promise that fulfills when the stream ends, or rejects
 *  if the stream fails with an unhandled error.
 */
Stream.prototype.drain = function() {
	return observe.drain(this);
};

//-------------------------------------------------------

var loop = require('./lib/combinator/loop').loop;

exports.loop = loop;

/**
 * Generalized feedback loop. Call a stepper function for each event. The stepper
 * will be called with 2 params: the current seed and the an event value.  It must
 * return a new { seed, value } pair. The `seed` will be fed back into the next
 * invocation of stepper, and the `value` will be propagated as the event value.
 * @param {function(seed:*, value:*):{seed:*, value:*}} stepper loop step function
 * @param {*} seed initial seed value passed to first stepper call
 * @returns {Stream} new stream whose values are the `value` field of the objects
 * returned by the stepper
 */
Stream.prototype.loop = function(stepper, seed) {
	return loop(stepper, seed, this);
};

//-------------------------------------------------------

var accumulate = require('./lib/combinator/accumulate');

exports.scan   = accumulate.scan;
exports.reduce = accumulate.reduce;

/**
 * Create a stream containing successive reduce results of applying f to
 * the previous reduce result and the current stream item.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial initial value
 * @returns {Stream} new stream containing successive reduce results
 */
Stream.prototype.scan = function(f, initial) {
	return accumulate.scan(f, initial, this);
};

/**
 * Reduce the stream to produce a single result.  Note that reducing an infinite
 * stream will return a Promise that never fulfills, but that may reject if an error
 * occurs.
 * @param {function(result:*, x:*):*} f reducer function
 * @param {*} initial optional initial value
 * @returns {Promise} promise for the file result of the reduce
 */
Stream.prototype.reduce = function(f, initial) {
	return accumulate.reduce(f, initial, this);
};

//-----------------------------------------------------------------------
// Building and extending

var unfold = require('./lib/source/unfold');
var iterate = require('./lib/source/iterate');
var generate = require('./lib/source/generate');
var build = require('./lib/combinator/build');

exports.unfold    = unfold.unfold;
exports.iterate   = iterate.iterate;
exports.generate  = generate.generate;
exports.concat    = build.cycle;
exports.concat    = build.concat;
exports.startWith = build.cons;

/**
 * Tie this stream into a circle, thus creating an infinite stream
 * @returns {Stream} new infinite stream
 */
Stream.prototype.cycle = function() {
	return build.cycle(this);
};

/**
 * @param {Stream} tail
 * @returns {Stream} new stream containing all items in this followed by
 *  all items in tail
 */
Stream.prototype.concat = function(tail) {
	return build.concat(this, tail);
};

/**
 * @param {*} x value to prepend
 * @returns {Stream} a new stream with x prepended
 */
Stream.prototype.startWith = function(x) {
	return build.cons(x, this);
};

//-----------------------------------------------------------------------
// Transforming

var transform = require('./lib/combinator/transform');
var applicative = require('./lib/combinator/applicative');

exports.map      = transform.map;
exports.constant = transform.constant;
exports.tap      = transform.tap;
exports.ap       = applicative.ap;

/**
 * Transform each value in the stream by applying f to each
 * @param {function(*):*} f mapping function
 * @returns {Stream} stream containing items transformed by f
 */
Stream.prototype.map = function(f) {
	return transform.map(f, this);
};

/**
 * Assume this stream contains functions, and apply each function to each item
 * in the provided stream.  This generates, in effect, a cross product.
 * @param {Stream} xs stream of items to which
 * @returns {Stream} stream containing the cross product of items
 */
Stream.prototype.ap = function(xs) {
	return applicative.ap(this, xs);
};

/**
 * Replace each value in the stream with x
 * @param {*} x
 * @returns {Stream} stream containing items replaced with x
 */
Stream.prototype.constant = function(x) {
	return transform.constant(x, this);
};

/**
 * Perform a side effect for each item in the stream
 * @param {function(x:*):*} f side effect to execute for each item. The
 *  return value will be discarded.
 * @returns {Stream} new stream containing the same items as this stream
 */
Stream.prototype.tap = function(f) {
	return transform.tap(f, this);
};

//-----------------------------------------------------------------------
// Transducer support

var transduce = require('./lib/combinator/transduce');

exports.transduce = transduce.transduce;

/**
 * Transform this stream by passing its events through a transducer.
 * @param  {function} transducer transducer function
 * @return {Stream} stream of events transformed by the transducer
 */
Stream.prototype.transduce = function(transducer) {
	return transduce.transduce(transducer, this);
};

//-----------------------------------------------------------------------
// FlatMapping

var flatMap = require('./lib/combinator/flatMap');

exports.flatMap = exports.chain = flatMap.flatMap;
exports.join    = flatMap.join;

/**
 * Map each value in the stream to a new stream, and merge it into the
 * returned outer stream. Event arrival times are preserved.
 * @param {function(x:*):Stream} f chaining function, must return a Stream
 * @returns {Stream} new stream containing all events from each stream returned by f
 */
Stream.prototype.flatMap = Stream.prototype.chain = function(f) {
	return flatMap.flatMap(f, this);
};

/**
 * Monadic join. Flatten a Stream<Stream<X>> to Stream<X> by merging inner
 * streams to the outer. Event arrival times are preserved.
 * @returns {Stream<X>} new stream containing all events of all inner streams
 */
Stream.prototype.join = function() {
	return flatMap.join(this);
};

var flatMapEnd = require('./lib/combinator/flatMapEnd').flatMapEnd;

exports.flatMapEnd = flatMapEnd;

/**
 * Map the end event to a new stream, and begin emitting its values.
 * @param {function(x:*):Stream} f function that receives the end event value,
 * and *must* return a new Stream to continue with.
 * @returns {Stream} new stream that emits all events from the original stream,
 * followed by all events from the stream returned by f.
 */
Stream.prototype.flatMapEnd = function(f) {
	return flatMapEnd(f, this);
};

var concatMap = require('./lib/combinator/concatMap').concatMap;

exports.concatMap = concatMap;

Stream.prototype.concatMap = function(f) {
	return concatMap(f, this);
};

//-----------------------------------------------------------------------
// Merging

var merge = require('./lib/combinator/merge');

exports.merge = merge.merge;

/**
 * Merge this stream and all the provided streams
 * @returns {Stream} stream containing items from this stream and s in time
 * order.  If two events are simultaneous they will be merged in
 * arbitrary order.
 */
Stream.prototype.merge = function(/*...streams*/) {
	return merge.mergeArray(base.cons(this, arguments));
};

//-----------------------------------------------------------------------
// Combining

var combine = require('./lib/combinator/combine');

exports.combine = combine.combine;

/**
 * Combine latest events from all input streams
 * @param {function(...events):*} f function to combine most recent events
 * @returns {Stream} stream containing the result of applying f to the most recent
 *  event of each input stream, whenever a new event arrives on any stream.
 */
Stream.prototype.combine = function(f /*, ...streams*/) {
	return combine.combineArray(f, base.replace(this, 0, arguments));
};

//-----------------------------------------------------------------------
// Sampling

var sample = require('./lib/combinator/sample');

exports.sample = sample.sample;
exports.sampleWith = sample.sampleWith;

/**
 * When an event arrives on sampler, emit the latest event value from stream.
 * @param {Stream} sampler stream of events at whose arrival time
 *  signal's latest value will be propagated
 * @returns {Stream} sampled stream of values
 */
Stream.prototype.sampleWith = function(sampler) {
	return sample.sampleWith(sampler, this);
};

/**
 * When an event arrives on this stream, emit the result of calling f with the latest
 * values of all streams being sampled
 * @param {function(...values):*} f function to apply to each set of sampled values
 * @returns {Stream} stream of sampled and transformed values
 */
Stream.prototype.sample = function(f /* ...streams */) {
	return sample.sampleArray(f, this, base.tail(arguments));
};

//-----------------------------------------------------------------------
// Zipping

var zip = require('./lib/combinator/zip');

exports.zip = zip.zip;

/**
 * Pair-wise combine items with those in s. Given 2 streams:
 * [1,2,3] zipWith f [4,5,6] -> [f(1,4),f(2,5),f(3,6)]
 * Note: zip causes fast streams to buffer and wait for slow streams.
 * @param {function(a:Stream, b:Stream, ...):*} f function to combine items
 * @returns {Stream} new stream containing pairs
 */
Stream.prototype.zip = function(f /*, ...streams*/) {
	return zip.zipArray(f, base.replace(this, 0, arguments));
};

//-----------------------------------------------------------------------
// Switching

var switchLatest = require('./lib/combinator/switch').switch;

exports.switch       = switchLatest;
exports.switchLatest = switchLatest;

/**
 * Given a stream of streams, return a new stream that adopts the behavior
 * of the most recent inner stream.
 * @returns {Stream} switching stream
 */
Stream.prototype.switch = Stream.prototype.switchLatest = function() {
	return switchLatest(this);
};

//-----------------------------------------------------------------------
// Filtering

var filter = require('./lib/combinator/filter');

exports.filter          = filter.filter;
exports.skipRepeats     = exports.distinct   = filter.skipRepeats;
exports.skipRepeatsWith = exports.distinctBy = filter.skipRepeatsWith;

/**
 * Retain only items matching a predicate
 * stream:                           -12345678-
 * filter(x => x % 2 === 0, stream): --2-4-6-8-
 * @param {function(x:*):boolean} p filtering predicate called for each item
 * @returns {Stream} stream containing only items for which predicate returns truthy
 */
Stream.prototype.filter = function(p) {
	return filter.filter(p, this);
};

/**
 * Skip repeated events, using === to compare items
 * stream:           -abbcd-
 * distinct(stream): -ab-cd-
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeats = function() {
	return filter.skipRepeats(this);
};

/**
 * Skip repeated events, using supplied equals function to compare items
 * @param {function(a:*, b:*):boolean} equals function to compare items
 * @returns {Stream} stream with no repeated events
 */
Stream.prototype.skipRepeatsWith = function(equals) {
	return filter.skipRepeatsWith(equals, this);
};

//-----------------------------------------------------------------------
// Slicing

var slice = require('./lib/combinator/slice');

exports.take      = slice.take;
exports.skip      = slice.skip;
exports.slice     = slice.slice;
exports.takeWhile = slice.takeWhile;
exports.skipWhile = slice.skipWhile;

/**
 * stream:          -abcd-
 * take(2, stream): -ab|
 * @param {Number} n take up to this many events
 * @returns {Stream} stream containing at most the first n items from this stream
 */
Stream.prototype.take = function(n) {
	return slice.take(n, this);
};

/**
 * stream:          -abcd->
 * skip(2, stream): ---cd->
 * @param {Number} n skip this many events
 * @returns {Stream} stream not containing the first n events
 */
Stream.prototype.skip = function(n) {
	return slice.skip(n, this);
};

/**
 * Slice a stream by event index. Equivalent to, but more efficient than
 * stream.take(end).skip(start);
 * NOTE: Negative start and end are not supported
 * @param {Number} start skip all events before the start index
 * @param {Number} end allow all events from the start index to the end index
 * @returns {Stream} stream containing items where start <= index < end
 */
Stream.prototype.slice = function(start, end) {
	return slice.slice(start, end, this);
};

/**
 * stream:                        -123451234->
 * takeWhile(x => x < 5, stream): -1234|
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items up to, but not including, the
 * first item for which p returns falsy.
 */
Stream.prototype.takeWhile = function(p) {
	return slice.takeWhile(p, this);
};

/**
 * stream:                        -123451234->
 * skipWhile(x => x < 5, stream): -----51234->
 * @param {function(x:*):boolean} p predicate
 * @returns {Stream} stream containing items following *and including* the
 * first item for which p returns falsy.
 */
Stream.prototype.skipWhile = function(p) {
	return slice.skipWhile(p, this);
};

//-----------------------------------------------------------------------
// Time slicing

var timeslice = require('./lib/combinator/timeslice');

exports.until  = exports.takeUntil = timeslice.takeUntil;
exports.since  = exports.skipUntil = timeslice.skipUntil;
exports.during = timeslice.during; // EXPERIMENTAL

/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -a-b-c-|
 * @param {Stream} signal retain only events in stream before the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur before
 * the first event in signal.
 */
Stream.prototype.until = Stream.prototype.takeUntil = function(signal) {
	return timeslice.takeUntil(signal, this);
};

/**
 * stream:                    -a-b-c-d-e-f-g->
 * signal:                    -------x
 * takeUntil(signal, stream): -------d-e-f-g->
 * @param {Stream} signal retain only events in stream at or after the first
 * event in signal
 * @returns {Stream} new stream containing only events that occur after
 * the first event in signal.
 */
Stream.prototype.since = Stream.prototype.skipUntil = function(signal) {
	return timeslice.skipUntil(signal, this);
};

/**
 * stream:                    -a-b-c-d-e-f-g->
 * timeWindow:                -----s
 * s:                               -----t
 * stream.during(timeWindow): -----c-d-e-|
 * @param {Stream<Stream>} timeWindow a stream whose first event (s) represents
 *  the window start time.  That event (s) is itself a stream whose first event (t)
 *  represents the window end time
 * @returns {Stream} new stream containing only events within the provided timespan
 */
Stream.prototype.during = function(timeWindow) {
	return timeslice.during(timeWindow, this);
};

//-----------------------------------------------------------------------
// Delaying

var delay = require('./lib/combinator/delay').delay;

exports.delay = delay;

/**
 * @param {Number} delayTime milliseconds to delay each item
 * @returns {Stream} new stream containing the same items, but delayed by ms
 */
Stream.prototype.delay = function(delayTime) {
	return delay(delayTime, this);
};

//-----------------------------------------------------------------------
// Getting event timestamp

var timestamp = require('./lib/combinator/timestamp').timestamp;

exports.timestamp = timestamp;

/**
 * Expose event timestamps into the stream. Turns a Stream<X> into
 * Stream<{time:t, value:X}>
 * @returns {Stream<{time:number, value:*}>}
 */
Stream.prototype.timestamp = function() {
	return timestamp(this);
};

//-----------------------------------------------------------------------
// Rate limiting

var limit = require('./lib/combinator/limit');

exports.throttle = limit.throttle;
exports.debounce = limit.debounce;

/**
 * Limit the rate of events
 * stream:              abcd----abcd----
 * throttle(2, stream): a-c-----a-c-----
 * @param {Number} period time to suppress events
 * @returns {Stream} new stream that skips events for throttle period
 */
Stream.prototype.throttle = function(period) {
	return limit.throttle(period, this);
};

/**
 * Wait for a burst of events to subside and emit only the last event in the burst
 * stream:              abcd----abcd----
 * debounce(2, stream): -----d-------d--
 * @param {Number} period events occuring more frequently than this
 *  on the provided scheduler will be suppressed
 * @returns {Stream} new debounced stream
 */
Stream.prototype.debounce = function(period) {
	return limit.debounce(period, this);
};

//-----------------------------------------------------------------------
// Awaiting Promises

var promises = require('./lib/combinator/promises');

exports.fromPromise = promises.fromPromise;
exports.await       = promises.await;

/**
 * Await promises, turning a Stream<Promise<X>> into Stream<X>.  Preserves
 * event order, but timeshifts events based on promise resolution time.
 * @returns {Stream<X>} stream containing non-promise values
 */
Stream.prototype.await = function() {
	return promises.await(this);
};

//-----------------------------------------------------------------------
// Error handling

var errors = require('./lib/combinator/errors');


exports.flatMapError = errors.flatMapError;
exports.throwError   = errors.throwError;

/**
 * If this stream encounters an error, recover and continue with items from stream
 * returned by f.
 * stream:                  -a-b-c-X-
 * f(X):                           d-e-f-g-
 * flatMapError(f, stream): -a-b-c-d-e-f-g-
 * @param {function(error:*):Stream} f function which returns a new stream
 * @returns {Stream} new stream which will recover from an error by calling f
 */
Stream.prototype.flatMapError = function(f) {
	return errors.flatMapError(f, this);
};

},{"./lib/Stream":17,"./lib/base":18,"./lib/combinator/accumulate":19,"./lib/combinator/applicative":20,"./lib/combinator/build":21,"./lib/combinator/combine":22,"./lib/combinator/concatMap":23,"./lib/combinator/delay":24,"./lib/combinator/errors":25,"./lib/combinator/filter":26,"./lib/combinator/flatMap":27,"./lib/combinator/flatMapEnd":28,"./lib/combinator/lift":29,"./lib/combinator/limit":30,"./lib/combinator/loop":31,"./lib/combinator/merge":32,"./lib/combinator/observe":34,"./lib/combinator/promises":35,"./lib/combinator/sample":36,"./lib/combinator/slice":37,"./lib/combinator/switch":38,"./lib/combinator/timeslice":39,"./lib/combinator/timestamp":40,"./lib/combinator/transduce":41,"./lib/combinator/transform":42,"./lib/combinator/zip":43,"./lib/source/core":64,"./lib/source/create":65,"./lib/source/from":66,"./lib/source/fromEvent":68,"./lib/source/generate":70,"./lib/source/iterate":71,"./lib/source/periodic":72,"./lib/source/unfold":73}],75:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function (require) {

	var makePromise = require('./makePromise');
	var Scheduler = require('./Scheduler');
	var async = require('./env').asap;

	return makePromise({
		scheduler: new Scheduler(async)
	});

});
})(typeof define === 'function' && define.amd ? define : function (factory) { module.exports = factory(require); });

},{"./Scheduler":76,"./env":78,"./makePromise":80}],76:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	// Credit to Twisol (https://github.com/Twisol) for suggesting
	// this type of extensible queue + trampoline approach for next-tick conflation.

	/**
	 * Async task scheduler
	 * @param {function} async function to schedule a single async function
	 * @constructor
	 */
	function Scheduler(async) {
		this._async = async;
		this._running = false;

		this._queue = this;
		this._queueLen = 0;
		this._afterQueue = {};
		this._afterQueueLen = 0;

		var self = this;
		this.drain = function() {
			self._drain();
		};
	}

	/**
	 * Enqueue a task
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.enqueue = function(task) {
		this._queue[this._queueLen++] = task;
		this.run();
	};

	/**
	 * Enqueue a task to run after the main task queue
	 * @param {{ run:function }} task
	 */
	Scheduler.prototype.afterQueue = function(task) {
		this._afterQueue[this._afterQueueLen++] = task;
		this.run();
	};

	Scheduler.prototype.run = function() {
		if (!this._running) {
			this._running = true;
			this._async(this.drain);
		}
	};

	/**
	 * Drain the handler queue entirely, and then the after queue
	 */
	Scheduler.prototype._drain = function() {
		var i = 0;
		for (; i < this._queueLen; ++i) {
			this._queue[i].run();
			this._queue[i] = void 0;
		}

		this._queueLen = 0;
		this._running = false;

		for (i = 0; i < this._afterQueueLen; ++i) {
			this._afterQueue[i].run();
			this._afterQueue[i] = void 0;
		}

		this._afterQueueLen = 0;
	};

	return Scheduler;

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],77:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function(require) {

	var setTimer = require('../env').setTimer;
	var format = require('../format');

	return function unhandledRejection(Promise) {

		var logError = noop;
		var logInfo = noop;
		var localConsole;

		if(typeof console !== 'undefined') {
			// Alias console to prevent things like uglify's drop_console option from
			// removing console.log/error. Unhandled rejections fall into the same
			// category as uncaught exceptions, and build tools shouldn't silence them.
			localConsole = console;
			logError = typeof localConsole.error !== 'undefined'
				? function (e) { localConsole.error(e); }
				: function (e) { localConsole.log(e); };

			logInfo = typeof localConsole.info !== 'undefined'
				? function (e) { localConsole.info(e); }
				: function (e) { localConsole.log(e); };
		}

		Promise.onPotentiallyUnhandledRejection = function(rejection) {
			enqueue(report, rejection);
		};

		Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
			enqueue(unreport, rejection);
		};

		Promise.onFatalRejection = function(rejection) {
			enqueue(throwit, rejection.value);
		};

		var tasks = [];
		var reported = [];
		var running = null;

		function report(r) {
			if(!r.handled) {
				reported.push(r);
				logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
			}
		}

		function unreport(r) {
			var i = reported.indexOf(r);
			if(i >= 0) {
				reported.splice(i, 1);
				logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
			}
		}

		function enqueue(f, x) {
			tasks.push(f, x);
			if(running === null) {
				running = setTimer(flush, 0);
			}
		}

		function flush() {
			running = null;
			while(tasks.length > 0) {
				tasks.shift()(tasks.shift());
			}
		}

		return Promise;
	};

	function throwit(e) {
		throw e;
	}

	function noop() {}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

},{"../env":78,"../format":79}],78:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
(function(define) { 'use strict';
define(function(require) {
	/*jshint maxcomplexity:6*/

	// Sniff "best" async scheduling option
	// Prefer process.nextTick or MutationObserver, then check for
	// setTimeout, and finally vertx, since its the only env that doesn't
	// have setTimeout

	var MutationObs;
	var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;

	// Default env
	var setTimer = function(f, ms) { return setTimeout(f, ms); };
	var clearTimer = function(t) { return clearTimeout(t); };
	var asap = function (f) { return capturedSetTimeout(f, 0); };

	// Detect specific env
	if (isNode()) { // Node
		asap = function (f) { return process.nextTick(f); };

	} else if (MutationObs = hasMutationObserver()) { // Modern browser
		asap = initMutationObserver(MutationObs);

	} else if (!capturedSetTimeout) { // vert.x
		var vertxRequire = require;
		var vertx = vertxRequire('vertx');
		setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
		clearTimer = vertx.cancelTimer;
		asap = vertx.runOnLoop || vertx.runOnContext;
	}

	return {
		setTimer: setTimer,
		clearTimer: clearTimer,
		asap: asap
	};

	function isNode () {
		return typeof process !== 'undefined' &&
			Object.prototype.toString.call(process) === '[object process]';
	}

	function hasMutationObserver () {
		return (typeof MutationObserver === 'function' && MutationObserver) ||
			(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
	}

	function initMutationObserver(MutationObserver) {
		var scheduled;
		var node = document.createTextNode('');
		var o = new MutationObserver(run);
		o.observe(node, { characterData: true });

		function run() {
			var f = scheduled;
			scheduled = void 0;
			f();
		}

		var i = 0;
		return function (f) {
			scheduled = f;
			node.data = (i ^= 1);
		};
	}
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(require); }));

}).call(this,require('_process'))

},{"_process":82}],79:[function(require,module,exports){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return {
		formatError: formatError,
		formatObject: formatObject,
		tryStringify: tryStringify
	};

	/**
	 * Format an error into a string.  If e is an Error and has a stack property,
	 * it's returned.  Otherwise, e is formatted using formatObject, with a
	 * warning added about e not being a proper Error.
	 * @param {*} e
	 * @returns {String} formatted string, suitable for output to developers
	 */
	function formatError(e) {
		var s = typeof e === 'object' && e !== null && e.stack ? e.stack : formatObject(e);
		return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
	}

	/**
	 * Format an object, detecting "plain" objects and running them through
	 * JSON.stringify if possible.
	 * @param {Object} o
	 * @returns {string}
	 */
	function formatObject(o) {
		var s = String(o);
		if(s === '[object Object]' && typeof JSON !== 'undefined') {
			s = tryStringify(o, s);
		}
		return s;
	}

	/**
	 * Try to return the result of JSON.stringify(x).  If that fails, return
	 * defaultValue
	 * @param {*} x
	 * @param {*} defaultValue
	 * @returns {String|*} JSON.stringify(x) or defaultValue
	 */
	function tryStringify(x, defaultValue) {
		try {
			return JSON.stringify(x);
		} catch(e) {
			return defaultValue;
		}
	}

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

},{}],80:[function(require,module,exports){
(function (process){
/** @license MIT License (c) copyright 2010-2014 original author or authors */
/** @author Brian Cavalier */
/** @author John Hann */

(function(define) { 'use strict';
define(function() {

	return function makePromise(environment) {

		var tasks = environment.scheduler;
		var emitRejection = initEmitRejection();

		var objectCreate = Object.create ||
			function(proto) {
				function Child() {}
				Child.prototype = proto;
				return new Child();
			};

		/**
		 * Create a promise whose fate is determined by resolver
		 * @constructor
		 * @returns {Promise} promise
		 * @name Promise
		 */
		function Promise(resolver, handler) {
			this._handler = resolver === Handler ? handler : init(resolver);
		}

		/**
		 * Run the supplied resolver
		 * @param resolver
		 * @returns {Pending}
		 */
		function init(resolver) {
			var handler = new Pending();

			try {
				resolver(promiseResolve, promiseReject, promiseNotify);
			} catch (e) {
				promiseReject(e);
			}

			return handler;

			/**
			 * Transition from pre-resolution state to post-resolution state, notifying
			 * all listeners of the ultimate fulfillment or rejection
			 * @param {*} x resolution value
			 */
			function promiseResolve (x) {
				handler.resolve(x);
			}
			/**
			 * Reject this promise with reason, which will be used verbatim
			 * @param {Error|*} reason rejection reason, strongly suggested
			 *   to be an Error type
			 */
			function promiseReject (reason) {
				handler.reject(reason);
			}

			/**
			 * @deprecated
			 * Issue a progress event, notifying all progress listeners
			 * @param {*} x progress event payload to pass to all listeners
			 */
			function promiseNotify (x) {
				handler.notify(x);
			}
		}

		// Creation

		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise.never = never;

		Promise._defer = defer;
		Promise._handler = getHandler;

		/**
		 * Returns a trusted promise. If x is already a trusted promise, it is
		 * returned, otherwise returns a new trusted Promise which follows x.
		 * @param  {*} x
		 * @return {Promise} promise
		 */
		function resolve(x) {
			return isPromise(x) ? x
				: new Promise(Handler, new Async(getHandler(x)));
		}

		/**
		 * Return a reject promise with x as its reason (x is used verbatim)
		 * @param {*} x
		 * @returns {Promise} rejected promise
		 */
		function reject(x) {
			return new Promise(Handler, new Async(new Rejected(x)));
		}

		/**
		 * Return a promise that remains pending forever
		 * @returns {Promise} forever-pending promise.
		 */
		function never() {
			return foreverPendingPromise; // Should be frozen
		}

		/**
		 * Creates an internal {promise, resolver} pair
		 * @private
		 * @returns {Promise}
		 */
		function defer() {
			return new Promise(Handler, new Pending());
		}

		// Transformation and flow control

		/**
		 * Transform this promise's fulfillment value, returning a new Promise
		 * for the transformed result.  If the promise cannot be fulfilled, onRejected
		 * is called with the reason.  onProgress *may* be called with updates toward
		 * this promise's fulfillment.
		 * @param {function=} onFulfilled fulfillment handler
		 * @param {function=} onRejected rejection handler
		 * @param {function=} onProgress @deprecated progress handler
		 * @return {Promise} new promise
		 */
		Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
			var parent = this._handler;
			var state = parent.join().state();

			if ((typeof onFulfilled !== 'function' && state > 0) ||
				(typeof onRejected !== 'function' && state < 0)) {
				// Short circuit: value will not change, simply share handler
				return new this.constructor(Handler, parent);
			}

			var p = this._beget();
			var child = p._handler;

			parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);

			return p;
		};

		/**
		 * If this promise cannot be fulfilled due to an error, call onRejected to
		 * handle the error. Shortcut for .then(undefined, onRejected)
		 * @param {function?} onRejected
		 * @return {Promise}
		 */
		Promise.prototype['catch'] = function(onRejected) {
			return this.then(void 0, onRejected);
		};

		/**
		 * Creates a new, pending promise of the same type as this promise
		 * @private
		 * @returns {Promise}
		 */
		Promise.prototype._beget = function() {
			return begetFrom(this._handler, this.constructor);
		};

		function begetFrom(parent, Promise) {
			var child = new Pending(parent.receiver, parent.join().context);
			return new Promise(Handler, child);
		}

		// Array combinators

		Promise.all = all;
		Promise.race = race;
		Promise._traverse = traverse;

		/**
		 * Return a promise that will fulfill when all promises in the
		 * input array have fulfilled, or will reject when one of the
		 * promises rejects.
		 * @param {array} promises array of promises
		 * @returns {Promise} promise for array of fulfillment values
		 */
		function all(promises) {
			return traverseWith(snd, null, promises);
		}

		/**
		 * Array<Promise<X>> -> Promise<Array<f(X)>>
		 * @private
		 * @param {function} f function to apply to each promise's value
		 * @param {Array} promises array of promises
		 * @returns {Promise} promise for transformed values
		 */
		function traverse(f, promises) {
			return traverseWith(tryCatch2, f, promises);
		}

		function traverseWith(tryMap, f, promises) {
			var handler = typeof f === 'function' ? mapAt : settleAt;

			var resolver = new Pending();
			var pending = promises.length >>> 0;
			var results = new Array(pending);

			for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
				x = promises[i];

				if (x === void 0 && !(i in promises)) {
					--pending;
					continue;
				}

				traverseAt(promises, handler, i, x, resolver);
			}

			if(pending === 0) {
				resolver.become(new Fulfilled(results));
			}

			return new Promise(Handler, resolver);

			function mapAt(i, x, resolver) {
				if(!resolver.resolved) {
					traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
				}
			}

			function settleAt(i, x, resolver) {
				results[i] = x;
				if(--pending === 0) {
					resolver.become(new Fulfilled(results));
				}
			}
		}

		function traverseAt(promises, handler, i, x, resolver) {
			if (maybeThenable(x)) {
				var h = getHandlerMaybeThenable(x);
				var s = h.state();

				if (s === 0) {
					h.fold(handler, i, void 0, resolver);
				} else if (s > 0) {
					handler(i, h.value, resolver);
				} else {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
				}
			} else {
				handler(i, x, resolver);
			}
		}

		Promise._visitRemaining = visitRemaining;
		function visitRemaining(promises, start, handler) {
			for(var i=start; i<promises.length; ++i) {
				markAsHandled(getHandler(promises[i]), handler);
			}
		}

		function markAsHandled(h, handler) {
			if(h === handler) {
				return;
			}

			var s = h.state();
			if(s === 0) {
				h.visit(h, void 0, h._unreport);
			} else if(s < 0) {
				h._unreport();
			}
		}

		/**
		 * Fulfill-reject competitive race. Return a promise that will settle
		 * to the same state as the earliest input promise to settle.
		 *
		 * WARNING: The ES6 Promise spec requires that race()ing an empty array
		 * must return a promise that is pending forever.  This implementation
		 * returns a singleton forever-pending promise, the same singleton that is
		 * returned by Promise.never(), thus can be checked with ===
		 *
		 * @param {array} promises array of promises to race
		 * @returns {Promise} if input is non-empty, a promise that will settle
		 * to the same outcome as the earliest input promise to settle. if empty
		 * is empty, returns a promise that will never settle.
		 */
		function race(promises) {
			if(typeof promises !== 'object' || promises === null) {
				return reject(new TypeError('non-iterable passed to race()'));
			}

			// Sigh, race([]) is untestable unless we return *something*
			// that is recognizable without calling .then() on it.
			return promises.length === 0 ? never()
				 : promises.length === 1 ? resolve(promises[0])
				 : runRace(promises);
		}

		function runRace(promises) {
			var resolver = new Pending();
			var i, x, h;
			for(i=0; i<promises.length; ++i) {
				x = promises[i];
				if (x === void 0 && !(i in promises)) {
					continue;
				}

				h = getHandler(x);
				if(h.state() !== 0) {
					resolver.become(h);
					visitRemaining(promises, i+1, h);
					break;
				} else {
					h.visit(resolver, resolver.resolve, resolver.reject);
				}
			}
			return new Promise(Handler, resolver);
		}

		// Promise internals
		// Below this, everything is @private

		/**
		 * Get an appropriate handler for x, without checking for cycles
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandler(x) {
			if(isPromise(x)) {
				return x._handler.join();
			}
			return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
		}

		/**
		 * Get a handler for thenable x.
		 * NOTE: You must only call this if maybeThenable(x) == true
		 * @param {object|function|Promise} x
		 * @returns {object} handler
		 */
		function getHandlerMaybeThenable(x) {
			return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
		}

		/**
		 * Get a handler for potentially untrusted thenable x
		 * @param {*} x
		 * @returns {object} handler
		 */
		function getHandlerUntrusted(x) {
			try {
				var untrustedThen = x.then;
				return typeof untrustedThen === 'function'
					? new Thenable(untrustedThen, x)
					: new Fulfilled(x);
			} catch(e) {
				return new Rejected(e);
			}
		}

		/**
		 * Handler for a promise that is pending forever
		 * @constructor
		 */
		function Handler() {}

		Handler.prototype.when
			= Handler.prototype.become
			= Handler.prototype.notify // deprecated
			= Handler.prototype.fail
			= Handler.prototype._unreport
			= Handler.prototype._report
			= noop;

		Handler.prototype._state = 0;

		Handler.prototype.state = function() {
			return this._state;
		};

		/**
		 * Recursively collapse handler chain to find the handler
		 * nearest to the fully resolved value.
		 * @returns {object} handler nearest the fully resolved value
		 */
		Handler.prototype.join = function() {
			var h = this;
			while(h.handler !== void 0) {
				h = h.handler;
			}
			return h;
		};

		Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
			this.when({
				resolver: to,
				receiver: receiver,
				fulfilled: fulfilled,
				rejected: rejected,
				progress: progress
			});
		};

		Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
			this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
		};

		Handler.prototype.fold = function(f, z, c, to) {
			this.when(new Fold(f, z, c, to));
		};

		/**
		 * Handler that invokes fail() on any handler it becomes
		 * @constructor
		 */
		function FailIfRejected() {}

		inherit(Handler, FailIfRejected);

		FailIfRejected.prototype.become = function(h) {
			h.fail();
		};

		var failIfRejected = new FailIfRejected();

		/**
		 * Handler that manages a queue of consumers waiting on a pending promise
		 * @constructor
		 */
		function Pending(receiver, inheritedContext) {
			Promise.createContext(this, inheritedContext);

			this.consumers = void 0;
			this.receiver = receiver;
			this.handler = void 0;
			this.resolved = false;
		}

		inherit(Handler, Pending);

		Pending.prototype._state = 0;

		Pending.prototype.resolve = function(x) {
			this.become(getHandler(x));
		};

		Pending.prototype.reject = function(x) {
			if(this.resolved) {
				return;
			}

			this.become(new Rejected(x));
		};

		Pending.prototype.join = function() {
			if (!this.resolved) {
				return this;
			}

			var h = this;

			while (h.handler !== void 0) {
				h = h.handler;
				if (h === this) {
					return this.handler = cycle();
				}
			}

			return h;
		};

		Pending.prototype.run = function() {
			var q = this.consumers;
			var handler = this.handler;
			this.handler = this.handler.join();
			this.consumers = void 0;

			for (var i = 0; i < q.length; ++i) {
				handler.when(q[i]);
			}
		};

		Pending.prototype.become = function(handler) {
			if(this.resolved) {
				return;
			}

			this.resolved = true;
			this.handler = handler;
			if(this.consumers !== void 0) {
				tasks.enqueue(this);
			}

			if(this.context !== void 0) {
				handler._report(this.context);
			}
		};

		Pending.prototype.when = function(continuation) {
			if(this.resolved) {
				tasks.enqueue(new ContinuationTask(continuation, this.handler));
			} else {
				if(this.consumers === void 0) {
					this.consumers = [continuation];
				} else {
					this.consumers.push(continuation);
				}
			}
		};

		/**
		 * @deprecated
		 */
		Pending.prototype.notify = function(x) {
			if(!this.resolved) {
				tasks.enqueue(new ProgressTask(x, this));
			}
		};

		Pending.prototype.fail = function(context) {
			var c = typeof context === 'undefined' ? this.context : context;
			this.resolved && this.handler.join().fail(c);
		};

		Pending.prototype._report = function(context) {
			this.resolved && this.handler.join()._report(context);
		};

		Pending.prototype._unreport = function() {
			this.resolved && this.handler.join()._unreport();
		};

		/**
		 * Wrap another handler and force it into a future stack
		 * @param {object} handler
		 * @constructor
		 */
		function Async(handler) {
			this.handler = handler;
		}

		inherit(Handler, Async);

		Async.prototype.when = function(continuation) {
			tasks.enqueue(new ContinuationTask(continuation, this));
		};

		Async.prototype._report = function(context) {
			this.join()._report(context);
		};

		Async.prototype._unreport = function() {
			this.join()._unreport();
		};

		/**
		 * Handler that wraps an untrusted thenable and assimilates it in a future stack
		 * @param {function} then
		 * @param {{then: function}} thenable
		 * @constructor
		 */
		function Thenable(then, thenable) {
			Pending.call(this);
			tasks.enqueue(new AssimilateTask(then, thenable, this));
		}

		inherit(Pending, Thenable);

		/**
		 * Handler for a fulfilled promise
		 * @param {*} x fulfillment value
		 * @constructor
		 */
		function Fulfilled(x) {
			Promise.createContext(this);
			this.value = x;
		}

		inherit(Handler, Fulfilled);

		Fulfilled.prototype._state = 1;

		Fulfilled.prototype.fold = function(f, z, c, to) {
			runContinuation3(f, z, this, c, to);
		};

		Fulfilled.prototype.when = function(cont) {
			runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
		};

		var errorId = 0;

		/**
		 * Handler for a rejected promise
		 * @param {*} x rejection reason
		 * @constructor
		 */
		function Rejected(x) {
			Promise.createContext(this);

			this.id = ++errorId;
			this.value = x;
			this.handled = false;
			this.reported = false;

			this._report();
		}

		inherit(Handler, Rejected);

		Rejected.prototype._state = -1;

		Rejected.prototype.fold = function(f, z, c, to) {
			to.become(this);
		};

		Rejected.prototype.when = function(cont) {
			if(typeof cont.rejected === 'function') {
				this._unreport();
			}
			runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
		};

		Rejected.prototype._report = function(context) {
			tasks.afterQueue(new ReportTask(this, context));
		};

		Rejected.prototype._unreport = function() {
			if(this.handled) {
				return;
			}
			this.handled = true;
			tasks.afterQueue(new UnreportTask(this));
		};

		Rejected.prototype.fail = function(context) {
			this.reported = true;
			emitRejection('unhandledRejection', this);
			Promise.onFatalRejection(this, context === void 0 ? this.context : context);
		};

		function ReportTask(rejection, context) {
			this.rejection = rejection;
			this.context = context;
		}

		ReportTask.prototype.run = function() {
			if(!this.rejection.handled && !this.rejection.reported) {
				this.rejection.reported = true;
				emitRejection('unhandledRejection', this.rejection) ||
					Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
			}
		};

		function UnreportTask(rejection) {
			this.rejection = rejection;
		}

		UnreportTask.prototype.run = function() {
			if(this.rejection.reported) {
				emitRejection('rejectionHandled', this.rejection) ||
					Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
			}
		};

		// Unhandled rejection hooks
		// By default, everything is a noop

		Promise.createContext
			= Promise.enterContext
			= Promise.exitContext
			= Promise.onPotentiallyUnhandledRejection
			= Promise.onPotentiallyUnhandledRejectionHandled
			= Promise.onFatalRejection
			= noop;

		// Errors and singletons

		var foreverPendingHandler = new Handler();
		var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);

		function cycle() {
			return new Rejected(new TypeError('Promise cycle'));
		}

		// Task runners

		/**
		 * Run a single consumer
		 * @constructor
		 */
		function ContinuationTask(continuation, handler) {
			this.continuation = continuation;
			this.handler = handler;
		}

		ContinuationTask.prototype.run = function() {
			this.handler.join().when(this.continuation);
		};

		/**
		 * Run a queue of progress handlers
		 * @constructor
		 */
		function ProgressTask(value, handler) {
			this.handler = handler;
			this.value = value;
		}

		ProgressTask.prototype.run = function() {
			var q = this.handler.consumers;
			if(q === void 0) {
				return;
			}

			for (var c, i = 0; i < q.length; ++i) {
				c = q[i];
				runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
			}
		};

		/**
		 * Assimilate a thenable, sending it's value to resolver
		 * @param {function} then
		 * @param {object|function} thenable
		 * @param {object} resolver
		 * @constructor
		 */
		function AssimilateTask(then, thenable, resolver) {
			this._then = then;
			this.thenable = thenable;
			this.resolver = resolver;
		}

		AssimilateTask.prototype.run = function() {
			var h = this.resolver;
			tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);

			function _resolve(x) { h.resolve(x); }
			function _reject(x)  { h.reject(x); }
			function _notify(x)  { h.notify(x); }
		};

		function tryAssimilate(then, thenable, resolve, reject, notify) {
			try {
				then.call(thenable, resolve, reject, notify);
			} catch (e) {
				reject(e);
			}
		}

		/**
		 * Fold a handler value with z
		 * @constructor
		 */
		function Fold(f, z, c, to) {
			this.f = f; this.z = z; this.c = c; this.to = to;
			this.resolver = failIfRejected;
			this.receiver = this;
		}

		Fold.prototype.fulfilled = function(x) {
			this.f.call(this.c, this.z, x, this.to);
		};

		Fold.prototype.rejected = function(x) {
			this.to.reject(x);
		};

		Fold.prototype.progress = function(x) {
			this.to.notify(x);
		};

		// Other helpers

		/**
		 * @param {*} x
		 * @returns {boolean} true iff x is a trusted Promise
		 */
		function isPromise(x) {
			return x instanceof Promise;
		}

		/**
		 * Test just enough to rule out primitives, in order to take faster
		 * paths in some code
		 * @param {*} x
		 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
		 */
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}

		function runContinuation1(f, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject(f, h.value, receiver, next);
			Promise.exitContext();
		}

		function runContinuation3(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.become(h);
			}

			Promise.enterContext(h);
			tryCatchReject3(f, x, h.value, receiver, next);
			Promise.exitContext();
		}

		/**
		 * @deprecated
		 */
		function runNotify(f, x, h, receiver, next) {
			if(typeof f !== 'function') {
				return next.notify(x);
			}

			Promise.enterContext(h);
			tryCatchReturn(f, x, receiver, next);
			Promise.exitContext();
		}

		function tryCatch2(f, a, b) {
			try {
				return f(a, b);
			} catch(e) {
				return reject(e);
			}
		}

		/**
		 * Return f.call(thisArg, x), or if it throws return a rejected promise for
		 * the thrown exception
		 */
		function tryCatchReject(f, x, thisArg, next) {
			try {
				next.become(getHandler(f.call(thisArg, x)));
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * Same as above, but includes the extra argument parameter.
		 */
		function tryCatchReject3(f, x, y, thisArg, next) {
			try {
				f.call(thisArg, x, y, next);
			} catch(e) {
				next.become(new Rejected(e));
			}
		}

		/**
		 * @deprecated
		 * Return f.call(thisArg, x), or if it throws, *return* the exception
		 */
		function tryCatchReturn(f, x, thisArg, next) {
			try {
				next.notify(f.call(thisArg, x));
			} catch(e) {
				next.notify(e);
			}
		}

		function inherit(Parent, Child) {
			Child.prototype = objectCreate(Parent.prototype);
			Child.prototype.constructor = Child;
		}

		function snd(x, y) {
			return y;
		}

		function noop() {}

		function initEmitRejection() {
			/*global process, self, CustomEvent*/
			if(typeof process !== 'undefined' && process !== null
				&& typeof process.emit === 'function') {
				// Returning falsy here means to call the default
				// onPotentiallyUnhandledRejection API.  This is safe even in
				// browserify since process.emit always returns falsy in browserify:
				// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
				return function(type, rejection) {
					return type === 'unhandledRejection'
						? process.emit(type, rejection.value, rejection)
						: process.emit(type, rejection);
				};
			} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
				return (function(noop, self, CustomEvent) {
					var hasCustomEvent = false;
					try {
						var ev = new CustomEvent('unhandledRejection');
						hasCustomEvent = ev instanceof CustomEvent;
					} catch (e) {}

					return !hasCustomEvent ? noop : function(type, rejection) {
						var ev = new CustomEvent(type, {
							detail: {
								reason: rejection.value,
								key: rejection
							},
							bubbles: false,
							cancelable: true
						});

						return !self.dispatchEvent(ev);
					};
				}(noop, self, CustomEvent));
			}

			return noop;
		}

		return Promise;
	};
});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));

}).call(this,require('_process'))

},{"_process":82}],81:[function(require,module,exports){

},{}],82:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],83:[function(require,module,exports){
function E () {
	// Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
	on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],84:[function(require,module,exports){
/*!
* vdom-virtualize
* Copyright 2014 by Marcel Klehr <mklehr@gmx.net>
*
* (MIT LICENSE)
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var VNode = require("virtual-dom/vnode/vnode")
  , VText = require("virtual-dom/vnode/vtext")

module.exports = createVNode

function createVNode(domNode, key) {
  key = key || null // XXX: Leave out `key` for now... merely used for (re-)ordering

  if(domNode.nodeType == 1) return createFromElement(domNode, key)
  if(domNode.nodeType == 3) return createFromTextNode(domNode, key)
  return
}

createVNode.fromHTML = function(html, key) {
  var domNode = document.createElement('div'); // create container
  domNode.innerHTML = html; // browser parses HTML into DOM tree
  domNode = domNode.children[0] || domNode; // select first node in tree
  return createVNode(domNode, key);
};

function createFromTextNode(tNode) {
  return new VText(tNode.nodeValue)
}


function createFromElement(el) {
  var tagName = el.tagName
  , namespace = el.namespaceURI == 'http://www.w3.org/1999/xhtml'? null : el.namespaceURI
  , properties = getElementProperties(el)
  , children = []

  for (var i = 0; i < el.childNodes.length; i++) {
    children.push(createVNode(el.childNodes[i]/*, i*/))
  }

  return new VNode(tagName, properties, children, null, namespace)
}


function getElementProperties(el) {
  var obj = {}

  props.forEach(function(propName) {
    if(!el[propName]) return

    if(el[propName] instanceof Element) return

    // Special case: style
    // .style is a DOMStyleDeclaration, thus we need to iterate over all
    // rules to create a hash of applied css properties.
    //
    // You can directly set a specific .style[prop] = value so patching with vdom
    // is possible.
    if("style" == propName) {
      var css = {}
        , styleProp
      for(var i=0; i<el.style.length; i++) {
        styleProp = el.style[i]
        css[styleProp] = el.style.getPropertyValue(styleProp) // XXX: add support for "!important" via getPropertyPriority()!
      }

      obj[propName] = css
      return
    }

    // Special case: dataset
    // we can iterate over .dataset with a simple for..in loop.
    // The all-time foo with data-* attribs is the dash-snake to camelCase
    // conversion.
    //
    // *This is compatible with h(), but not with every browser, thus this section was removed in favor
    // of attributes (specified below)!*
    //
    // .dataset properties are directly accessible as transparent getters/setters, so
    // patching with vdom is possible.
    /*if("dataset" == propName) {
      var data = {}
      for(var p in el.dataset) {
        data[p] = el.dataset[p]
      }
      obj[propName] = data
      return
    }*/

    // Special case: attributes
    // these are a NamedNodeMap, but we can just convert them to a hash for vdom,
    // because of https://github.com/Matt-Esch/virtual-dom/blob/master/vdom/apply-properties.js#L57
    if("attributes" == propName){
      var atts = Array.prototype.slice.call(el[propName]);
      var hash = atts.reduce(function(o,a){
        var name = a.name;
        if(obj[name]) return o;
        o[name] = el.getAttribute(a.name);
        return o;
      },{});
      return obj[propName] = hash;
    }
    if("tabIndex" == propName && el.tabIndex === -1) return

    // Special case: contentEditable
    // browser use 'inherit' by default on all nodes, but does not allow setting it to ''
    // diffing virtualize dom will trigger error
    // ref: https://github.com/Matt-Esch/virtual-dom/issues/176
    if("contentEditable" == propName && el[propName] === 'inherit') return

    // default: just copy the property
    obj[propName] = el[propName]
    return
  })

  return obj
}

/**
 * DOMNode property white list
 * Taken from https://github.com/Raynos/react/blob/dom-property-config/src/browser/ui/dom/DefaultDOMPropertyConfig.js
 */
var props =

module.exports.properties = [
 "accept"
,"accessKey"
,"action"
,"alt"
,"async"
,"autoComplete"
,"autoPlay"
,"cellPadding"
,"cellSpacing"
,"checked"
,"className"
,"colSpan"
,"content"
,"contentEditable"
,"controls"
,"crossOrigin"
,"data"
,"dataset"
,"defer"
,"dir"
,"download"
,"draggable"
,"encType"
,"formNoValidate"
,"href"
,"hrefLang"
,"htmlFor"
,"httpEquiv"
,"icon"
,"id"
,"label"
,"lang"
,"list"
,"loop"
,"max"
,"mediaGroup"
,"method"
,"min"
,"multiple"
,"muted"
,"name"
,"noValidate"
,"pattern"
,"placeholder"
,"poster"
,"preload"
,"radioGroup"
,"readOnly"
,"rel"
,"required"
,"rowSpan"
,"sandbox"
,"scope"
,"scrollLeft"
,"scrolling"
,"scrollTop"
,"selected"
,"span"
,"spellCheck"
,"src"
,"srcDoc"
,"srcSet"
,"start"
,"step"
,"style"
,"tabIndex"
,"target"
,"title"
,"type"
,"value"

// Non-standard Properties
,"autoCapitalize"
,"autoCorrect"
,"property"

, "attributes"
]

var attrs =
module.exports.attrs = [
 "allowFullScreen"
,"allowTransparency"
,"charSet"
,"cols"
,"contextMenu"
,"dateTime"
,"disabled"
,"form"
,"frameBorder"
,"height"
,"hidden"
,"maxLength"
,"role"
,"rows"
,"seamless"
,"size"
,"width"
,"wmode"

// SVG Properties
,"cx"
,"cy"
,"d"
,"dx"
,"dy"
,"fill"
,"fx"
,"fy"
,"gradientTransform"
,"gradientUnits"
,"offset"
,"points"
,"r"
,"rx"
,"ry"
,"spreadMethod"
,"stopColor"
,"stopOpacity"
,"stroke"
,"strokeLinecap"
,"strokeWidth"
,"textAnchor"
,"transform"
,"version"
,"viewBox"
,"x1"
,"x2"
,"x"
,"y1"
,"y2"
,"y"
]

},{"virtual-dom/vnode/vnode":90,"virtual-dom/vnode/vtext":91}],85:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],86:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],87:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":89}],88:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],89:[function(require,module,exports){
module.exports = "2"

},{}],90:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":85,"./is-vhook":86,"./is-vnode":87,"./is-widget":88,"./version":89}],91:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":89}],92:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":112}],93:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"min-document":81}],94:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],95:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],96:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":101}],97:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":105,"is-object":94}],98:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":103,"../vnode/is-vnode.js":106,"../vnode/is-vtext.js":107,"../vnode/is-widget.js":108,"./apply-properties":97,"global/document":93}],99:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],100:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":108,"../vnode/vpatch.js":110,"./apply-properties":97,"./update-widget":102}],101:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":98,"./dom-index":99,"./patch-op":100,"global/document":93,"x-is-array":95}],102:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":108}],103:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":104,"./is-vnode":106,"./is-vtext":107,"./is-widget":108}],104:[function(require,module,exports){
arguments[4][85][0].apply(exports,arguments)
},{"dup":85}],105:[function(require,module,exports){
arguments[4][86][0].apply(exports,arguments)
},{"dup":86}],106:[function(require,module,exports){
arguments[4][87][0].apply(exports,arguments)
},{"./version":109,"dup":87}],107:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":109}],108:[function(require,module,exports){
arguments[4][88][0].apply(exports,arguments)
},{"dup":88}],109:[function(require,module,exports){
arguments[4][89][0].apply(exports,arguments)
},{"dup":89}],110:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":109}],111:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":105,"is-object":94}],112:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":103,"../vnode/is-thunk":104,"../vnode/is-vnode":106,"../vnode/is-vtext":107,"../vnode/is-widget":108,"../vnode/vpatch":110,"./diff-props":111,"x-is-array":95}]},{},[1])
//# sourceMappingURL=item-data.js.map
