"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/24/16.
 */

var BrickManager = function () {
    function BrickManager() {
        _classCallCheck(this, BrickManager);

        this.brickArr = new Array();
    }

    _createClass(BrickManager, [{
        key: "addBrick",
        value: function addBrick(brick) {
            this.brickArr.push(brick);
        }
    }, {
        key: "drawAll",
        value: function drawAll(context) {
            for (var i = 0; i < this.brickArr.length; i++) {
                this.brickArr[i].draw(context);
            }
        }
    }, {
        key: "isMoveTable",
        value: function isMoveTable(x, y, size) {
            for (var i = 0; i < this.brickArr.length; i++) {
                if (this.brickArr[i].isInside(x, y, size) == true) {

                    // console.log("tank x: " + x);
                    // console.log("tank y: " + y);
                    // console.log("tank size: " + size);
                    // console.log("brick x: " + this.brickArr[i].x);
                    // console.log("brick y: " + this.brickArr[i].y);
                    return false;
                }
            }

            return true;
        }
    }]);

    return BrickManager;
}();