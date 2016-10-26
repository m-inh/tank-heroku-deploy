"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/26/16.
 */
var BulletManager = function () {
    function BulletManager() {
        _classCallCheck(this, BulletManager);

        this.bulletArr = new Array();
    }

    _createClass(BulletManager, [{
        key: "addNewBullet",
        value: function addNewBullet(newBullet) {
            this.bulletArr.push(newBullet);
        }
    }, {
        key: "moveAll",
        value: function moveAll(map, tank) {
            var tempBulletArr = new Array();
            for (var i = 0; i < this.bulletArr.length; i++) {
                var bullet = this.bulletArr[i];
                var isDestroyBullet = false;

                // console.log("moveAll bullet: " + bullet);
                // console.log("moveAll: " + bullet.uid);

                if (bullet.type == enemyType && tank.isInside(bullet.x, bullet.y, bulletSize)) {
                    isDestroyBullet = true;

                    isMovetable = false;
                    tank.isAlive = false;
                    tank.enemy_revenge = bullet.uid;
                    player_revenge = bullet.uid;

                    explore(tank.x, tank.y, 1);
                    emitDie(tank.uid, bullet.uid, bullet.id);
                } else if (map.isMoveTable(bullet.x, bullet.y, bulletSize) == false) {
                    isDestroyBullet = true;
                }

                if (isDestroyBullet == false) {
                    this.bulletArr[i].move();
                    tempBulletArr.push(bullet);
                } else {
                    explore(bullet.x, bullet.y, 2);
                }
            }
            this.bulletArr = tempBulletArr;
        }
    }, {
        key: "removeBullet",
        value: function removeBullet(uid, idBullet) {
            var tempBulletArr = new Array();
            for (var i = 0; i < this.bulletArr.length; i++) {
                var bullet = this.bulletArr[i];
                if (bullet.uid == uid && bullet.id == idBullet) {
                    explore(bullet.x, bullet.y, 1);
                    // explore(bullet.x, bullet.y, 2);
                } else {
                    tempBulletArr.push(bullet);
                }
            }
            this.bulletArr = tempBulletArr;
        }
    }, {
        key: "drawAll",
        value: function drawAll(context) {
            for (var i = 0; i < this.bulletArr.length; i++) {
                this.bulletArr[i].draw(context);
            }
        }
    }, {
        key: "getBullet",
        value: function getBullet(index) {
            return this.bulletArr[index];
        }
    }, {
        key: "size",
        value: function size() {
            return this.bulletArr.length;
        }
    }]);

    return BulletManager;
}();