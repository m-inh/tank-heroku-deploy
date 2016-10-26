"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by TooNies1810 on 5/25/16.
 */
var TankManager = function () {
    function TankManager(size) {
        _classCallCheck(this, TankManager);

        this.size = size;

        this.tankArr = new Array();
    }

    _createClass(TankManager, [{
        key: "addNewTank",
        value: function addNewTank(newTank) {
            this.tankArr.push(newTank);
        }
    }, {
        key: "removeTank",
        value: function removeTank(uid) {
            var tempArr = new Array();
            for (var i = 0; i < this.tankArr.length; i++) {
                var tempTank = this.tankArr[i];
                if (tempTank.uid != uid) {
                    tempArr.push(this.tankArr[i]);
                } else {
                    // explore(tempTank.x, tempTank.y, 1);
                }
            }
            this.tankArr = tempArr;
        }
    }, {
        key: "getNameTankByUid",
        value: function getNameTankByUid(uid) {
            for (var i = 0; i < this.tankArr.length; i++) {
                var tempTank = this.tankArr[i];
                if (tempTank.uid == uid) {
                    return tempTank.name;
                }
            }
        }
    }, {
        key: "updateTankRevenge",
        value: function updateTankRevenge(uid) {
            for (var i = 0; i < this.tankArr.length; i++) {
                if (this.tankArr[i].uid == uid) {
                    this.tankArr[i].isRevenge = true;
                } else {
                    this.tankArr[i].isRevenge = false;
                }
            }
        }
    }, {
        key: "updateTank",
        value: function updateTank(newX, newY, newOrient, uid) {
            for (var i = 0; i < this.tankArr.length; i++) {
                if (this.tankArr[i].uid == uid) {
                    this.tankArr[i].x = newX;
                    this.tankArr[i].y = newY;
                    this.tankArr[i].currOrient = newOrient;
                }
            }
        }
    }, {
        key: "drawAll",
        value: function drawAll(context) {
            for (var i = 0; i < this.tankArr.length; i++) {
                this.tankArr[i].draw(context);
            }
        }
    }]);

    return TankManager;
}();