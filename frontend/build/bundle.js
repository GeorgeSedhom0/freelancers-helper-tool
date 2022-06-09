/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styling_1 = __webpack_require__(/*! ./styling */ "./ts/styling.ts");
const getStarted_1 = __importDefault(__webpack_require__(/*! ./getStarted */ "./ts/getStarted.ts"));
(0, styling_1.sideBarConrtoller)();
(0, getStarted_1.default)();


/***/ }),

/***/ "./ts/getStarted.ts":
/*!**************************!*\
  !*** ./ts/getStarted.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const getStarted = () => {
    const getStartedBtn = document.getElementById("getStarted");
    const settings = document.getElementById("settingsSetup");
    const cover = document.getElementById("cover");
    let on = false;
    getStartedBtn.addEventListener("click", () => {
        if (!on) {
            settings.style.display = "block";
            cover.style.display = "block";
            on = true;
            return;
        }
        settings.style.display = "none";
        cover.style.display = "none";
        on = false;
    });
};
exports["default"] = getStarted;


/***/ }),

/***/ "./ts/styling.ts":
/*!***********************!*\
  !*** ./ts/styling.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sideBarConrtoller = void 0;
const sideBar = document.getElementById("sideBar");
const menuButton = document.querySelector("#menuButton");
const sideBarConrtoller = () => {
    const sideBarWidth = sideBar.getBoundingClientRect().width;
    const menuButtonR = document.querySelector(".menuButton.r");
    const menuButtonL = document.querySelector(".menuButton.l");
    const menuButtonM = document.querySelector(".menuButton.m");
    const menuButtonOpen = () => {
        menuButtonR.classList.toggle("open");
        menuButtonL.classList.toggle("open");
        menuButtonM.classList.toggle("open");
    };
    const menuButtonClose = () => {
        menuButtonR.classList.remove("open");
        menuButtonL.classList.remove("open");
        menuButtonM.classList.remove("open");
    };
    menuButton.addEventListener("click", () => {
        var _a;
        let state = (_a = document
            .getElementById("sideBar")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().left;
        if (state) {
            sideBar.style.left = "0%";
            menuButtonClose();
        }
        else {
            sideBar.style.left = `-${sideBarWidth + 50}px`;
            menuButtonOpen();
        }
    });
    // close sidebar on swipe left
    let pointerStart;
    let pointerEnd;
    document.addEventListener("touchstart", (e) => {
        pointerStart = e.changedTouches[0].clientX;
    });
    document.addEventListener("touchend", (e) => {
        pointerEnd = e.changedTouches[0].clientX;
        if (pointerStart - pointerEnd > 100) {
            sideBar.style.left = `-${sideBarWidth + 50}px`;
        }
        else if (pointerEnd - pointerStart > 100) {
            sideBar.style.left = "0%";
        }
    });
};
exports.sideBarConrtoller = sideBarConrtoller;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQixtQkFBTyxDQUFDLGtDQUFXO0FBQ3JDLHFDQUFxQyxtQkFBTyxDQUFDLHdDQUFjO0FBQzNEO0FBQ0E7Ozs7Ozs7Ozs7O0FDUmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWU7Ozs7Ozs7Ozs7O0FDbkJGO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5Qjs7Ozs7OztVQ2pEekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vdHMvYXBwLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vdHMvZ2V0U3RhcnRlZC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3RzL3N0eWxpbmcudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHN0eWxpbmdfMSA9IHJlcXVpcmUoXCIuL3N0eWxpbmdcIik7XHJcbmNvbnN0IGdldFN0YXJ0ZWRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9nZXRTdGFydGVkXCIpKTtcclxuKDAsIHN0eWxpbmdfMS5zaWRlQmFyQ29ucnRvbGxlcikoKTtcclxuKDAsIGdldFN0YXJ0ZWRfMS5kZWZhdWx0KSgpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBnZXRTdGFydGVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0U3RhcnRlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2V0U3RhcnRlZFwiKTtcclxuICAgIGNvbnN0IHNldHRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nc1NldHVwXCIpO1xyXG4gICAgY29uc3QgY292ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdmVyXCIpO1xyXG4gICAgbGV0IG9uID0gZmFsc2U7XHJcbiAgICBnZXRTdGFydGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFvbikge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0dGluZ3Muc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGNvdmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBvbiA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN0YXJ0ZWQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2lkZUJhckNvbnJ0b2xsZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbmNvbnN0IHNpZGVCYXJDb25ydG9sbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lkZUJhcldpZHRoID0gc2lkZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIGNvbnN0IG1lbnVCdXR0b25SID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnV0dG9uLnJcIik7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ1dHRvbi5sXCIpO1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbk0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdXR0b24ubVwiKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b25PcGVuID0gKCkgPT4ge1xyXG4gICAgICAgIG1lbnVCdXR0b25SLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG1lbnVCdXR0b25MLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG1lbnVCdXR0b25NLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b25DbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBtZW51QnV0dG9uUi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICBtZW51QnV0dG9uTC5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICBtZW51QnV0dG9uTS5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgIH07XHJcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IChfYSA9IGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBzaWRlQmFyLnN0eWxlLmxlZnQgPSBcIjAlXCI7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2lkZUJhci5zdHlsZS5sZWZ0ID0gYC0ke3NpZGVCYXJXaWR0aCArIDUwfXB4YDtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbk9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGNsb3NlIHNpZGViYXIgb24gc3dpcGUgbGVmdFxyXG4gICAgbGV0IHBvaW50ZXJTdGFydDtcclxuICAgIGxldCBwb2ludGVyRW5kO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGUpID0+IHtcclxuICAgICAgICBwb2ludGVyU3RhcnQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHBvaW50ZXJFbmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgaWYgKHBvaW50ZXJTdGFydCAtIHBvaW50ZXJFbmQgPiAxMDApIHtcclxuICAgICAgICAgICAgc2lkZUJhci5zdHlsZS5sZWZ0ID0gYC0ke3NpZGVCYXJXaWR0aCArIDUwfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocG9pbnRlckVuZCAtIHBvaW50ZXJTdGFydCA+IDEwMCkge1xyXG4gICAgICAgICAgICBzaWRlQmFyLnN0eWxlLmxlZnQgPSBcIjAlXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMuc2lkZUJhckNvbnJ0b2xsZXIgPSBzaWRlQmFyQ29ucnRvbGxlcjtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vdHMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9