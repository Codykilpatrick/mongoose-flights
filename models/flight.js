import mongoose from "mongoose"

const Schema = mongoose.Schema


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Delta', 'American', 'Southwest']
  },
  airport: { type: String, default: 'DEN'},
  flightNo: Number,
  departs: {
    type: Date,
    default: function() {
        const today = new Date();
        console.log(today);
        const oneYearLater = today.getFullYear() + 1
        console.log(oneYearLater);
        today.setFullYear(oneYearLater)
        return today
    },
  }
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}