import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
	const newEnrollment = { _id: Date.now().toString(), user: userId, course: courseId }
	Database.enrollments = [...Database.enrollments, newEnrollment];
	return newEnrollment;
};
export function unenrollUserFromCourse(userId, courseId) {
	const { enrollments } = Database;
	Database.enrollments = enrollments.filter((enrollment) => enrollment.user !== userId || enrollment.course !== courseId);
};
export function findPeopleInCourse(courseId) {
	const { enrollments, users } = Database;
	const people = enrollments.filter((enrollment) => enrollment.course === courseId).map((enrollment) => users.find((user) => user._id === enrollment.user));
	return people;
};