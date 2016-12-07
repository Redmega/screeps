"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Caste = function Caste(parts) {
  _classCallCheck(this, Caste);

  this.body = [];
  this.body.push(MOVE);
  this.body.concat(parts);
};

var Peon = function (_Caste) {
  _inherits(Peon, _Caste);

  function Peon(parts) {
    _classCallCheck(this, Peon);

    var _this = _possibleConstructorReturn(this, (Peon.__proto__ || Object.getPrototypeOf(Peon)).call(this, parts));

    _this.body.push(CARRY);
    return _this;
  }

  return Peon;
}(Caste);

var Worker = function (_Peon) {
  _inherits(Worker, _Peon);

  function Worker(parts) {
    _classCallCheck(this, Worker);

    var _this2 = _possibleConstructorReturn(this, (Worker.__proto__ || Object.getPrototypeOf(Worker)).call(this, parts));

    _this2.body.push(WORK);
    return _this2;
  }

  return Worker;
}(Peon);

var Transport = function (_Peon2) {
  _inherits(Transport, _Peon2);

  function Transport(parts) {
    _classCallCheck(this, Transport);

    var _this3 = _possibleConstructorReturn(this, (Transport.__proto__ || Object.getPrototypeOf(Transport)).call(this, parts));

    _this3.body.concat([CARRY, MOVE]);
    return _this3;
  }

  return Transport;
}(Peon);
