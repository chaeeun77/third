//1번
const mongoose = require("mongoose");

//2번 설계하기
const orderSchema = mongoose.Schema();

//3번 모듈화하기
module.exports = mongoose.model('order', orderSchema)