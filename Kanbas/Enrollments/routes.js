import * as enrollmentsDao from "../Enrollments/dao.js";

export default function EnrollmentsRoutes(app) {
    const enrollInCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        const newEnrollment = enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.json(newEnrollment);
    };
    
    const unenrollFromCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        enrollmentsDao.unenrollUserFromCourse(currentUser._id, courseId);
        res.sendStatus(200);
    };

    app.post("/api/enrollments/current/courses/:courseId", enrollInCourse);
	app.delete("/api/enrollments/current/courses/:courseId", unenrollFromCourse);
};