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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxrQ0FBVztBQUNyQyxxQ0FBcUMsbUJBQU8sQ0FBQyx3Q0FBYztBQUMzRDtBQUNBOzs7Ozs7Ozs7OztBQ1JhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFlOzs7Ozs7Ozs7OztBQ25CRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQkFBa0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUI7Ozs7Ozs7VUNqRHpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3RzL2FwcC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3RzL2dldFN0YXJ0ZWQudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi90cy9zdHlsaW5nLnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBzdHlsaW5nXzEgPSByZXF1aXJlKFwiLi9zdHlsaW5nXCIpO1xyXG5jb25zdCBnZXRTdGFydGVkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vZ2V0U3RhcnRlZFwiKSk7XHJcbigwLCBzdHlsaW5nXzEuc2lkZUJhckNvbnJ0b2xsZXIpKCk7XHJcbigwLCBnZXRTdGFydGVkXzEuZGVmYXVsdCkoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZ2V0U3RhcnRlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdldFN0YXJ0ZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldFN0YXJ0ZWRcIik7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ3NTZXR1cFwiKTtcclxuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3ZlclwiKTtcclxuICAgIGxldCBvbiA9IGZhbHNlO1xyXG4gICAgZ2V0U3RhcnRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICghb24pIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Muc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgY292ZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgb24gPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldHRpbmdzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBjb3Zlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgb24gPSBmYWxzZTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBnZXRTdGFydGVkO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNpZGVCYXJDb25ydG9sbGVyID0gdm9pZCAwO1xyXG5jb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQmFyXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51QnV0dG9uXCIpO1xyXG5jb25zdCBzaWRlQmFyQ29ucnRvbGxlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNpZGVCYXJXaWR0aCA9IHNpZGVCYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uUiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ1dHRvbi5yXCIpO1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbkwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVCdXR0b24ubFwiKTtcclxuICAgIGNvbnN0IG1lbnVCdXR0b25NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnV0dG9uLm1cIik7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uT3BlbiA9ICgpID0+IHtcclxuICAgICAgICBtZW51QnV0dG9uUi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICBtZW51QnV0dG9uTC5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgICAgICBtZW51QnV0dG9uTS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBtZW51QnV0dG9uQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgbWVudUJ1dHRvblIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgbWVudUJ1dHRvbkwuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgbWVudUJ1dHRvbk0uY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICB9O1xyXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBsZXQgc3RhdGUgPSAoX2EgPSBkb2N1bWVudFxyXG4gICAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlQmFyXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgc2lkZUJhci5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuc3R5bGUubGVmdCA9IGAtJHtzaWRlQmFyV2lkdGggKyA1MH1weGA7XHJcbiAgICAgICAgICAgIG1lbnVCdXR0b25PcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBjbG9zZSBzaWRlYmFyIG9uIHN3aXBlIGxlZnRcclxuICAgIGxldCBwb2ludGVyU3RhcnQ7XHJcbiAgICBsZXQgcG9pbnRlckVuZDtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgcG9pbnRlclN0YXJ0ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGUpID0+IHtcclxuICAgICAgICBwb2ludGVyRW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmIChwb2ludGVyU3RhcnQgLSBwb2ludGVyRW5kID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuc3R5bGUubGVmdCA9IGAtJHtzaWRlQmFyV2lkdGggKyA1MH1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHBvaW50ZXJFbmQgLSBwb2ludGVyU3RhcnQgPiAxMDApIHtcclxuICAgICAgICAgICAgc2lkZUJhci5zdHlsZS5sZWZ0ID0gXCIwJVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnNpZGVCYXJDb25ydG9sbGVyID0gc2lkZUJhckNvbnJ0b2xsZXI7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3RzL2FwcC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==