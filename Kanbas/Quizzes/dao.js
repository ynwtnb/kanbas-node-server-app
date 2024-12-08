import model from "./model.js";

export function findQuizResponseForUserInCourse(courseId, userId) {
	return model.find({ user: userId }).populate({
		path: 'assignment',
		match: { course: courseId }
	});
};

export function findQuizForUserById(quizId, userId) {
    return model.findOne({ assignment: quizId, user: userId });
};

export function createQuizResponseForUser(quizId, userId, quizResponse, totalPoints) {
	const attemptNumber = 1;
	return model.create({ assignment: quizId, user: userId, quizResponse, totalPoints, attemptNumber });
};

export async function updateQuizResponseForUser(quizId, userId, submissionDate, quizResponse, totalPoints) {
	const quizAttempt = await findQuizForUserById(quizId, userId);
	let attemptNumber = 1;
	if (quizAttempt.attemptNumber) {
		attemptNumber = quizAttempt.attemptNumber + 1;
	} 

	return model.updateOne({ assignment: quizId, user: userId }, { $set: { submissionDate, quizResponse, totalPoints, attemptNumber } });
};