import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/},
  price: {
    type: Number,
    min: 0},
}, {
  timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['United', 'American', 'Southwest']
  },
  airport: { 
    type: String, 
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999},
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
  },
  tickets: [ticketSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal'}]
}, {
  timestamps: true
})

const Flight = mongoose.model("Flight", flightSchema)

export {
  Flight
}