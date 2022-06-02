/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/app.ts":
/*!*******************!*\
  !*** ./ts/app.ts ***!
  \*******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const styling_1 = __webpack_require__(/*! ./styling */ "./ts/styling.ts");
const submitButton = document.querySelector("#submit");
const result = document.querySelector("#results");
const loader = document.querySelector("#loader");
submitButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const linkElement = document.querySelector("#link");
    const link = linkElement.value;
    if (!linkIsValid(link)) {
        alert("Enter a valid link");
        return;
    }
    const lang = getRequiredLanguage();
    mainFunk(link, lang);
}));
const getRequiredLanguage = () => {
    //get checked language
    const language = document.querySelector('input[name="lang"]:checked');
    return language ? language.value : "ar";
};
const linkIsValid = (link) => {
    const websiteLink = "https://khamsat.com/community/requests";
    // check if link contains websiteLink
    return link.includes(websiteLink);
};
const mainFunk = (link, lang) => __awaiter(void 0, void 0, void 0, function* () {
    loader.classList.add("loader");
    let res;
    try {
        res = yield fetch(`http://localhost:3000/khamsat?lang=${lang}`, {
            method: "GET",
            headers: { link: link },
        });
    }
    catch (err) {
        loader.classList.remove("loader");
        result.innerHTML = `<strong>Error!</strong> ${err}`;
        return;
    }
    if (!res.ok) {
        loader.classList.remove("loader");
        result.innerHTML = `<div >
    <strong>Error!</strong> ${res.statusText}
    </div>`;
        return;
    }
    const data = yield res.text();
    loader.classList.remove("loader");
    result.innerHTML = data;
});
(0, styling_1.sideBarConrtoller)();


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
    const menuButtonOpen = () => {
        menuButtonR.classList.toggle("open");
        menuButtonL.classList.toggle("open");
    };
    const menuButtonClose = () => {
        menuButtonR.classList.remove("open");
        menuButtonL.classList.remove("open");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsa0JBQWtCLG1CQUFPLENBQUMsa0NBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsS0FBSztBQUNyRTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsSUFBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7QUM1RGE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCOzs7Ozs7O1VDOUN6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi90cy9zdHlsaW5nLnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHN0eWxpbmdfMSA9IHJlcXVpcmUoXCIuL3N0eWxpbmdcIik7XHJcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0XCIpO1xyXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jlc3VsdHNcIik7XHJcbmNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGVyXCIpO1xyXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpbmtcIik7XHJcbiAgICBjb25zdCBsaW5rID0gbGlua0VsZW1lbnQudmFsdWU7XHJcbiAgICBpZiAoIWxpbmtJc1ZhbGlkKGxpbmspKSB7XHJcbiAgICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGxpbmtcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGFuZyA9IGdldFJlcXVpcmVkTGFuZ3VhZ2UoKTtcclxuICAgIG1haW5GdW5rKGxpbmssIGxhbmcpO1xyXG59KSk7XHJcbmNvbnN0IGdldFJlcXVpcmVkTGFuZ3VhZ2UgPSAoKSA9PiB7XHJcbiAgICAvL2dldCBjaGVja2VkIGxhbmd1YWdlXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJsYW5nXCJdOmNoZWNrZWQnKTtcclxuICAgIHJldHVybiBsYW5ndWFnZSA/IGxhbmd1YWdlLnZhbHVlIDogXCJhclwiO1xyXG59O1xyXG5jb25zdCBsaW5rSXNWYWxpZCA9IChsaW5rKSA9PiB7XHJcbiAgICBjb25zdCB3ZWJzaXRlTGluayA9IFwiaHR0cHM6Ly9raGFtc2F0LmNvbS9jb21tdW5pdHkvcmVxdWVzdHNcIjtcclxuICAgIC8vIGNoZWNrIGlmIGxpbmsgY29udGFpbnMgd2Vic2l0ZUxpbmtcclxuICAgIHJldHVybiBsaW5rLmluY2x1ZGVzKHdlYnNpdGVMaW5rKTtcclxufTtcclxuY29uc3QgbWFpbkZ1bmsgPSAobGluaywgbGFuZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImxvYWRlclwiKTtcclxuICAgIGxldCByZXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlcyA9IHlpZWxkIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAva2hhbXNhdD9sYW5nPSR7bGFuZ31gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBsaW5rOiBsaW5rIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkZXJcIik7XHJcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGA8c3Ryb25nPkVycm9yITwvc3Ryb25nPiAke2Vycn1gO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkZXJcIik7XHJcbiAgICAgICAgcmVzdWx0LmlubmVySFRNTCA9IGA8ZGl2ID5cclxuICAgIDxzdHJvbmc+RXJyb3IhPC9zdHJvbmc+ICR7cmVzLnN0YXR1c1RleHR9XHJcbiAgICA8L2Rpdj5gO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXMudGV4dCgpO1xyXG4gICAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkZXJcIik7XHJcbiAgICByZXN1bHQuaW5uZXJIVE1MID0gZGF0YTtcclxufSk7XHJcbigwLCBzdHlsaW5nXzEuc2lkZUJhckNvbnJ0b2xsZXIpKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuc2lkZUJhckNvbnJ0b2xsZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJcIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnVCdXR0b25cIik7XHJcbmNvbnN0IHNpZGVCYXJDb25ydG9sbGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lkZUJhcldpZHRoID0gc2lkZUJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcclxuICAgIGNvbnN0IG1lbnVCdXR0b25SID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51QnV0dG9uLnJcIik7XHJcbiAgICBjb25zdCBtZW51QnV0dG9uTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudUJ1dHRvbi5sXCIpO1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbk9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgbWVudUJ1dHRvblIuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICAgICAgbWVudUJ1dHRvbkwuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbWVudUJ1dHRvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgICAgIG1lbnVCdXR0b25SLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgICAgIG1lbnVCdXR0b25MLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xyXG4gICAgfTtcclxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gKF9hID0gZG9jdW1lbnRcclxuICAgICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwic2lkZUJhclwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuc3R5bGUubGVmdCA9IFwiMCVcIjtcclxuICAgICAgICAgICAgbWVudUJ1dHRvbkNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzaWRlQmFyLnN0eWxlLmxlZnQgPSBgLSR7c2lkZUJhcldpZHRoICsgNTB9cHhgO1xyXG4gICAgICAgICAgICBtZW51QnV0dG9uT3BlbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2Ugc2lkZWJhciBvbiBzd2lwZSBsZWZ0XHJcbiAgICBsZXQgcG9pbnRlclN0YXJ0O1xyXG4gICAgbGV0IHBvaW50ZXJFbmQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4ge1xyXG4gICAgICAgIHBvaW50ZXJTdGFydCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgIH0pO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIChlKSA9PiB7XHJcbiAgICAgICAgcG9pbnRlckVuZCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBpZiAocG9pbnRlclN0YXJ0IC0gcG9pbnRlckVuZCA+IDEwMCkge1xyXG4gICAgICAgICAgICBzaWRlQmFyLnN0eWxlLmxlZnQgPSBgLSR7c2lkZUJhcldpZHRoICsgNTB9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChwb2ludGVyRW5kIC0gcG9pbnRlclN0YXJ0ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHNpZGVCYXIuc3R5bGUubGVmdCA9IFwiMCVcIjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy5zaWRlQmFyQ29ucnRvbGxlciA9IHNpZGVCYXJDb25ydG9sbGVyO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi90cy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=