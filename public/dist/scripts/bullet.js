"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/26/16.
 */
var Bullet = function () {
    function Bullet(x, y, orient, speed, type, size, uid) {
        _classCallCheck(this, Bullet);

        this.x = x;
        this.y = y;
        this.orient = orient;
        this.speed = speed;
        this.type = type;
        this.size = size;
        this.uid = uid;
        this.id = bulletID++;

        this.image = img_bullet;

        var audio_shoot = audio_tank_shoot;
        audio_shoot.play();
    }

    _createClass(Bullet, [{
        key: "setID",
        value: function setID(id) {
            this.id = id;
        }
    }, {
        key: "move",
        value: function move() {
            switch (this.orient) {
                case 1:
                    this.y -= this.speed;
                    break;
                case 2:
                    this.y += this.speed;
                    break;
                case 3:
                    this.x -= this.speed;
                    break;
                case 4:
                    this.x += this.speed;
                    break;
            }
        }
    }, {
        key: "draw",
        value: function draw(context) {
            context.drawImage(this.image, this.x, this.y);
        }
    }]);

    return Bullet;
}();