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
        published: Boolean,
        quizType: {
            type: String,
            enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
            default: "Graded Quiz",
        },
        shuffleAnswers: {
            type: Boolean,
            default: true,
        },
        timeLimitEnabled: {
            type: Boolean,
            default: true,
        },
        timeLimit: {
            type: Number,
            default: 20,
        },
        multipleAttempts: {
            type: Boolean,
            default: false,
        },
        howManyAttempts: {
            type: Number,
            default: 1,
        },
        showCorrectAnswers: {
            type: Boolean,
            default: true,
        },
        accessCode: {
            type: String,
            default: "",
        },
        oneQuestionAtATime: {
            type: Boolean,
            default: true,
        },
        webcamRequired: {
            type: Boolean,
            default: false,
        },
        lockQuestionsAfter: {
            type: Boolean,
            default: false,
        },
        questions: [
            {
                _id: String,
                title: String,
                order: Number,
                question: String,
                points: Number,
                quizType: {
                    type: String,
                    enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
                },
                options: [
                    {
                        _id: String,
                        answer: String,
                        correct: Boolean,
                        caseSensitive: Boolean,
                    },
                ],
            },
        ],
	},
	{ collection: "assignments" }
);
export default assignmentSchema;