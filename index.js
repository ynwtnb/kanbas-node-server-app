import "dotenv/config";
import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import session from "express-session";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express();
app.use(
	cors({
		credentials: true,
		origin: process.env.NETLIFY_URL || "http://localhost:3000",     // use different front end URL in dev and in production
	})
);
const sessionOptions = {
	secret: process.env.SESSION_SECRET || "kanbas",
	resave: false,
	saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {               // in production
	sessionOptions.proxy = true;                            // turn on proxy support
	sessionOptions.cookie = {                               // configure cookies for remote server
		sameSite: "none",
		secure: true,
		domain: process.env.NODE_SERVER_DOMAIN,
	};
}
app.use(session(sessionOptions));
app.use(express.json());
Hello(app);
Lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
