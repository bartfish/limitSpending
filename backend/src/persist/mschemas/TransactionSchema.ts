const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const transactionSchema = new Schema({
  id: ObjectId,
  name: String,
  category: Number,
  amount: Number,
  insertTime: Number,
  longtitude: Number,
  latitude: Number,
  userId: Number
});

const TransactionSchema = mongoose.model('TransactionSchema', transactionSchema);
export default TransactionSchema;
