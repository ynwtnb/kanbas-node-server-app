import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
	{
		name: String,
		number: String,
		credits: Number,
		description: String,
		image: String,
	},
	{ collection: "courses" }
);
export default courseSchema;