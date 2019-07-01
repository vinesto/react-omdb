const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose)

var recordSchema = new Schema({
    ID: { type: Number, required: true, default: 0 },
    reqTime: { type: Number, required: true },
    keyword: { type: String, required: true },
    result: { type: [] },
    timestamps: Date
})

recordSchema.plugin(AutoIncrement, { inc_field: 'ID' })

var Record = mongoose.model('Record', recordSchema)

module.exports = Record