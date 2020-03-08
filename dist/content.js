/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/content.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/content.ts":
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("chrome.runtime.sendMessage({ event: \"removeLocalStreamers\" });\nchrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {\n    if (details.frameId === 0) {\n        // Fires only when details.url === currentTab.url\n        chrome.tabs.get(details.tabId, function (tab) {\n            if (tab.url === details.url) {\n                console.log(\"onHistoryStateUpdated\");\n            }\n        });\n    }\n});\nvar timerID = 0;\nvar start = new Date();\nfunction divIsLoaded() {\n    return document.getElementsByTagName('h4').length > 1;\n}\nfunction checkDom() {\n    if (divIsLoaded()) {\n        removeDiv();\n    }\n    else {\n        var timePassed = new Date().getTime() - start.getTime();\n        if (timePassed > 5000) {\n            clearInterval(timerID);\n        }\n    }\n}\nfunction findChild(h4elements) {\n    for (var i = 0; i < h4elements.length; i++) {\n        var value = h4elements[i].getAttribute('data-a-target');\n        if (value === 'international-section-header') {\n            return h4elements[i];\n        }\n    }\n}\nfunction removeDiv() {\n    var element = findChild(document.getElementsByTagName('h4'));\n    if (element && element.parentElement && element.parentElement.parentElement) {\n        element.parentElement.parentElement.remove();\n    }\n}\ntimerID = setInterval(checkDom.bind(this), 200);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250ZW50LnRzPzgxMDIiXSwic291cmNlc0NvbnRlbnQiOlsiY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyBldmVudDogXCJyZW1vdmVMb2NhbFN0cmVhbWVyc1wiIH0pO1xuY2hyb21lLndlYk5hdmlnYXRpb24ub25IaXN0b3J5U3RhdGVVcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gICAgaWYgKGRldGFpbHMuZnJhbWVJZCA9PT0gMCkge1xuICAgICAgICAvLyBGaXJlcyBvbmx5IHdoZW4gZGV0YWlscy51cmwgPT09IGN1cnJlbnRUYWIudXJsXG4gICAgICAgIGNocm9tZS50YWJzLmdldChkZXRhaWxzLnRhYklkLCBmdW5jdGlvbiAodGFiKSB7XG4gICAgICAgICAgICBpZiAodGFiLnVybCA9PT0gZGV0YWlscy51cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9uSGlzdG9yeVN0YXRlVXBkYXRlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG52YXIgdGltZXJJRCA9IDA7XG52YXIgc3RhcnQgPSBuZXcgRGF0ZSgpO1xuZnVuY3Rpb24gZGl2SXNMb2FkZWQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoNCcpLmxlbmd0aCA+IDE7XG59XG5mdW5jdGlvbiBjaGVja0RvbSgpIHtcbiAgICBpZiAoZGl2SXNMb2FkZWQoKSkge1xuICAgICAgICByZW1vdmVEaXYoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciB0aW1lUGFzc2VkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydC5nZXRUaW1lKCk7XG4gICAgICAgIGlmICh0aW1lUGFzc2VkID4gNTAwMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcklEKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZpbmRDaGlsZChoNGVsZW1lbnRzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoNGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGg0ZWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWEtdGFyZ2V0Jyk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ2ludGVybmF0aW9uYWwtc2VjdGlvbi1oZWFkZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gaDRlbGVtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZURpdigpIHtcbiAgICB2YXIgZWxlbWVudCA9IGZpbmRDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDQnKSk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50ICYmIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbn1cbnRpbWVySUQgPSBzZXRJbnRlcnZhbChjaGVja0RvbS5iaW5kKHRoaXMpLCAyMDApO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/content.ts\n");

/***/ })

/******/ });