(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Module_1 = require("./../Model/Module");
var Home_1 = require("./../View/Home");
var Controller = function (_super) {
    __extends(Controller, _super);
    function Controller(props) {
        return _super.call(this, props) || this;
    }
    Controller.prototype.init = function () {
        return this.connect("klevis");
    };
    Controller.prototype.home = function () {
        var InitHome = new Home_1.default();
        return InitHome.body(this.list());
    };
    return Controller;
}(Module_1.default);
exports.default = Controller;

},{"./../Model/Module":2,"./../View/Home":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Module = function () {
    function Module(props) {}
    Module.prototype.connect = function (data) {
        var obj = {};
        obj = { mydata: data };
        return obj;
    };
    Module.prototype.list = function () {
        var list_ = {
            0: 'TypeScript',
            1: 'Gulp',
            2: 'Browserfy',
            3: 'UngliFy'
        };
        return list_;
    };
    return Module;
}();
exports.default = Module;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Home = function () {
    function Home() {}
    Home.prototype.body = function (props) {
        var ul;
        var data = "";
        if (props) {
            for (var list in props) {
                if (typeof props[list] != "undefined") {
                    data += "<li class='list-group-item'>" + props[list] + " <span class='badge'>" + list + "</span> </li>";
                }
            }
            ul = "<ul class='list-group'>" + data + "</ul>";
        }
        return ul;
    };
    return Home;
}();
exports.default = Home;

},{}],4:[function(require,module,exports){
"use strict";

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("./Controller/Controller");
var Main = function (_super) {
    __extends(Main, _super);
    function Main(props) {
        return _super.call(this) || this;
    }
    Main.prototype.app = function (param) {
        var app = document.getElementById("app");
        var container = "<div class='container'>" + "<div class='row'>  <div class='col-md-12'> " + this.home() + " </div>  </div>" + "</div>";
        app.innerHTML = "<p style='margin:auto 0px;width:100%'>Loading...</p>";
        setTimeout(function () {
            app.innerHTML = container;
        }, 5000);
    };
    return Main;
}(Controller_1.default);
var Api = new Main();
Api.app('home');

},{"./Controller/Controller":1}]},{},[4])

//# sourceMappingURL=bundle.js.map
