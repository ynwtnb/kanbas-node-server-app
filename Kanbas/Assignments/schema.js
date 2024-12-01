import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
	{
		title: String,
		course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        due: Date,
        description: String,
        points: Number,
        display: {
            type: String,
            enum: ["Percentage", "Point"],
            default: "Percentage",
        },
        submissionType: {
            type: String,
            enum: ["Online"],
            default: "Online",
        },
        onlineEntry: [{
            type: String,
            enum: ["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"],
        }],
        assignmentGroup: {
            type: String,
            enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECTS"],
            default: "ASSIGNMENTS",
        },
        assignTo: {
            type: String,
            enum: ["Everyone"],
            default: "Everyone",
        },
        availableFrom: Date,
        availableUntil: Date,
	},
	{ collection: "assignments" }
);
export default assignmentSchema;