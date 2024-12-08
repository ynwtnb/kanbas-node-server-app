import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
	{
		user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
        assignment: { type: mongoose.Schema.Types.ObjectId, ref: "AssignmentModel" },
		quizResponse: [{
            questionId: String,
            options: [{
                optionId: String,
                selected: Boolean,
                answer: String,
                correct: Boolean,
            }],
            answer: String,
            correct: Boolean,
            points: Number,
        }],
        totalPoints: Number,
        submissionDate: { type: Date, default: Date.now },
        attemptNumber: Number,
	},
	{ collection: "quizzes" }
);
export default quizSchema;