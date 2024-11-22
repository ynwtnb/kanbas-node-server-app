import * as assignmentsDao from "../Assignments/dao.js";
export default function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.deleteAssinment(assignmentId);
        res.send(status);
    });
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
};