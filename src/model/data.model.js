const mongoose = require('mongoose');
const schema = mongoose.Schema;

const dataSchema = new schema({
    name: { type: String, required: true },
    src: { type: String, required: true },
});

module.exports = mongoose.model("Data", dataSchema);