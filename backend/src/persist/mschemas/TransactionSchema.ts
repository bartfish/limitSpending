const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

let TransactionSchema = new Schema({
  id: ObjectId,
  name: String,
  category: Number,
  amount: Number,
  insertTime: Number,
  longtitude: Number,
  latitude: Number,
  userId: Number
});

TransactionSchema = mongoose.model('TransactionSchema', TransactionSchema);
export default TransactionSchema;
