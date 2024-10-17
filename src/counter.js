"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCounter = setupCounter;
function setupCounter(element) {
    var counter = 0;
    var setCounter = function (count) {
        counter = count;
        element.innerHTML = "count is ".concat(counter);
    };
    element.addEventListener('click', function () { return setCounter(counter + 2); });
    setCounter(0);
}
