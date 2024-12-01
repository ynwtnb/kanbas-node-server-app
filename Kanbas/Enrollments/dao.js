// import Database from "../Database/index.js";
import model from "./model.js";

export function enrollUserInCourse(user, course) {
	// const newEnrollment = {
	// 	_id: Date.now().toString(),
	// 	user: userId,
	// 	course: courseId,
	// };
	// Database.enrollments = [...Database.enrollments, newEnrollment];
	// return newEnrollment;
	return model.create({ user, course });
}
export function unenrollUserFromCourse(user, course) {
	// const { enrollments } = Database;
	// Database.enrollments = enrollments.filter(
	// 	(enrollment) => enrollment.user !== userId || enrollment.course !== courseId
	// );
	return model.deleteOne({ user, course });
}
export async function findUsersForCourse(courseId) {
	// const { enrollments, users } = Database;
	// const people = enrollments.filter((enrollment) => enrollment.course === courseId).map((enrollment) => users.find((user) => user._id === enrollment.user));
	// return people;
	const enrollments = await model.find({ course: courseId }).populate("user");
	return enrollments.map((enrollment) => enrollment.user);
}
export async function findCoursesForUser(userId) {
	const enrollments = await model.find({ user: userId }).populate("course");
	return enrollments.map((enrollment) => enrollment.course);
}
