"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/24/16.
 */
var Brick = function () {
    // var image;
    function Brick(x, y, size) {
        _classCallCheck(this, Brick);

        this.x = x;
        this.y = y;
        this.size = size;

        this.image = img_brick;
    }

    _createClass(Brick, [{
        key: "draw",
        value: function draw(context) {
            context.drawImage(this.image, this.x, this.y);
        }
    }, {
        key: "isInside",
        value: function isInside(objX, objY, objSize) {

            var xLeft = objX;
            var xRight = objX + objSize;
            var yTop = objY;
            var yBottom = objY + objSize;

            if (this.isPointInside(xLeft, yTop, this.x, this.y, this.size)) {
                return true;
            }
            if (this.isPointInside(xRight, yTop, this.x, this.y, this.size)) {
                return true;
            }
            if (this.isPointInside(xLeft, yBottom, this.x, this.y, this.size)) {
                return true;
            }
            if (this.isPointInside(xRight, yBottom, this.x, this.y, this.size)) {
                return true;
            }

            ////// is inside tank
            var brickXLeft = this.x;
            var brickXRight = this.x + this.size;
            var brickYTop = this.y;
            var brickYBottom = this.y + this.size;
            if (this.isPointInside(brickXLeft, brickYTop, objX, objY, objSize)) {
                return true;
            }
            if (this.isPointInside(brickXRight, brickYTop, objX, objY, objSize)) {
                return true;
            }
            if (this.isPointInside(brickXLeft, brickYBottom, objX, objY, objSize)) {
                return true;
            }
            if (this.isPointInside(brickXRight, brickYBottom, objX, objY, objSize)) {
                return true;
            }

            return false;
        }
    }, {
        key: "isPointInside",
        value: function isPointInside(objX, objY, obj2X, obj2Y, obj2Size) {
            if (objX > obj2X && objX < obj2X + obj2Size && objY > obj2Y && objY < obj2Y + obj2Size) {
                return true;
            }

            return false;
        }
    }]);

    return Brick;
}();