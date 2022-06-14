/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./getStarted/ts/utils/download.ts":
/*!*****************************************!*\
  !*** ./getStarted/ts/utils/download.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.download = void 0;
const download = (fileName, text) => {
    const element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", fileName);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};
exports.download = download;


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./getStarted/ts/new.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const download_1 = __webpack_require__(/*! ./utils/download */ "./getStarted/ts/utils/download.ts");
const saveLocalBtn = document.querySelector("#saveLocal");
const saveBtn = document.querySelector("#save");
let settingsValues;
const extractData = () => {
    let allInputs = Array.from(document.querySelectorAll("input"));
    let values = allInputs.map((input) => {
        if (input.type == "text" || input.type == "number")
            return { name: input.name, value: input.value };
        if (input.checked)
            return { name: input.name, value: input.value };
        else
            return { name: "None", value: "None" };
    });
    values.forEach((value, index) => {
        if (value.name == "None")
            values.splice(index, 1);
    });
    return values;
};
saveLocalBtn.addEventListener("click", () => {
    const values = extractData();
    settingsValues = values;
    localStorage.setItem("settings", JSON.stringify(settingsValues));
    (0, download_1.download)("settings.txt", JSON.stringify(values));
});
saveBtn.addEventListener("click", () => {
    settingsValues = extractData();
    console.log(settingsValues);
    localStorage.setItem("settings", JSON.stringify(settingsValues));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3RhcnRlZE5ldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOzs7Ozs7O1VDWmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsMkRBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9nZXRTdGFydGVkL3RzL3V0aWxzL2Rvd25sb2FkLnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kLy4vZ2V0U3RhcnRlZC90cy9uZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kb3dubG9hZCA9IHZvaWQgMDtcclxuY29uc3QgZG93bmxvYWQgPSAoZmlsZU5hbWUsIHRleHQpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImRhdGE6dGV4dC9wbGFpbjtjaGFyc2V0PXV0Zi04LFwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgZmlsZU5hbWUpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgZWxlbWVudC5jbGljaygpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufTtcclxuZXhwb3J0cy5kb3dubG9hZCA9IGRvd25sb2FkO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZG93bmxvYWRfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2Rvd25sb2FkXCIpO1xyXG5jb25zdCBzYXZlTG9jYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVMb2NhbFwiKTtcclxuY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZVwiKTtcclxubGV0IHNldHRpbmdzVmFsdWVzO1xyXG5jb25zdCBleHRyYWN0RGF0YSA9ICgpID0+IHtcclxuICAgIGxldCBhbGxJbnB1dHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKSk7XHJcbiAgICBsZXQgdmFsdWVzID0gYWxsSW5wdXRzLm1hcCgoaW5wdXQpID0+IHtcclxuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PSBcInRleHRcIiB8fCBpbnB1dC50eXBlID09IFwibnVtYmVyXCIpXHJcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IGlucHV0Lm5hbWUsIHZhbHVlOiBpbnB1dC52YWx1ZSB9O1xyXG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkKVxyXG4gICAgICAgICAgICByZXR1cm4geyBuYW1lOiBpbnB1dC5uYW1lLCB2YWx1ZTogaW5wdXQudmFsdWUgfTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IFwiTm9uZVwiLCB2YWx1ZTogXCJOb25lXCIgfTtcclxuICAgIH0pO1xyXG4gICAgdmFsdWVzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZS5uYW1lID09IFwiTm9uZVwiKVxyXG4gICAgICAgICAgICB2YWx1ZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHZhbHVlcztcclxufTtcclxuc2F2ZUxvY2FsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBleHRyYWN0RGF0YSgpO1xyXG4gICAgc2V0dGluZ3NWYWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzVmFsdWVzKSk7XHJcbiAgICAoMCwgZG93bmxvYWRfMS5kb3dubG9hZCkoXCJzZXR0aW5ncy50eHRcIiwgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7XHJcbn0pO1xyXG5zYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzZXR0aW5nc1ZhbHVlcyA9IGV4dHJhY3REYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzZXR0aW5nc1ZhbHVlcyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNldHRpbmdzXCIsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzVmFsdWVzKSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=