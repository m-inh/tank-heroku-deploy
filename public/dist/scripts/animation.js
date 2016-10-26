"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/27/16.
 */
var Animation = function () {
    function Animation(x, y, type) {
        _classCallCheck(this, Animation);

        this.x = x;
        this.y = y;
        this.type = type;
        this.state = 0;

        this.size = 40;
        this.imageArr = new Array();

        this.image1 = new Image();
        this.image2 = new Image();
        this.image3 = new Image();
        this.image4 = new Image();

        if (type == 1) {
            // xe tang
            this.image1 = img_tank_explore_1;
            this.image2 = img_tank_explore_2;
            this.image3 = img_tank_explore_3;
            this.image4 = img_tank_explore_4;

            this.imageArr.push(this.image1);
            this.imageArr.push(this.image2);
            this.imageArr.push(this.image3);
            this.imageArr.push(this.image4);
        } else if (type == 2) {
            // dan
            this.image1 = img_bullet_explore;
            this.imageArr.push(this.image1);
        }
    }

    _createClass(Animation, [{
        key: "runAnimation",
        value: function runAnimation(context) {
            if (this.state < this.imageArr.length) {
                this.draw(context);
                this.state++;
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "draw",
        value: function draw(context) {
            var img = this.imageArr[this.state];
            context.drawImage(img, this.x - img.width / 2, this.y - img.height / 2);
            // console.log("widht: " + img.width);
            // console.log("height: " + img.height);
        }
    }]);

    return Animation;
}();