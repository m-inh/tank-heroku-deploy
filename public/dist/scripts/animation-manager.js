"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/27/16.
 */
var AnimationManager = function () {
    function AnimationManager() {
        _classCallCheck(this, AnimationManager);

        this.animArr = new Array();
    }

    _createClass(AnimationManager, [{
        key: "addNewAnim",
        value: function addNewAnim(newAnim) {
            this.animArr.push(newAnim);
        }
    }, {
        key: "runAllAnim",
        value: function runAllAnim(context) {
            var tempArr = new Array();
            for (var i = 0; i < this.animArr.length; i++) {
                var anim = this.animArr[i];
                if (anim.runAnimation(context)) {
                    tempArr.push(anim);
                }
            }
            this.animArr = tempArr;
        }
    }]);

    return AnimationManager;
}();