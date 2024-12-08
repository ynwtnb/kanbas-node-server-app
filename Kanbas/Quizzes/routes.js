import * as quizzesDao from "./dao.js";
export default function QuizRoutes(app) {
    app.post("/api/quizzes/:qid/attempts", async (req, res) => {
        const { qid } = req.params;
        const { quizResponse, totalPoints } = req.body;
        const currentUser = req.session["currentUser"];
        const quizAttempt = await quizzesDao.createQuizResponseForUser(qid, currentUser._id, quizResponse, totalPoints);
        res.json(quizAttempt);
    });
    app.get("/api/quizzes/:qid/attempts", async (req, res) => {
        const { qid } = req.params;
        const currentUser = req.session["currentUser"];
        const quizResponse = await quizzesDao.findQuizForUserById(qid, currentUser._id);
        res.json(quizResponse);
    });
    app.put("/api/quizzes/:qid/attempts", async (req, res) => {
        const { qid } = req.params;
        const { submissionDate, quizResponse, totalPoints } = req.body;
        const currentUser = req.session["currentUser"];
        const status = await quizzesDao.updateQuizResponseForUser(qid, currentUser._id, submissionDate, quizResponse, totalPoints);
        res.send(status);
    });
};