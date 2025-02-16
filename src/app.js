import express from "express";
import cors from "cors";
// import cookieparser from "cookie-parser";


const app = express();

console.log(process.env.CORS_ORIGIN);
// for using cors we use =>  "use" it is used for middelwares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// Data is coming from different places like it comes from "forms" , "URL" ,direct_form or json_form
// we don't want to come unlimited data in our server so we put the limit on this by using "use"

//this for when a form is filling and it is coming in backend server
app.use(express.json()) // it is for confiquring that we are accepting the data in json

 //url itself has a url encoder which convert the spaces into %20 and other character into differnt one
 //so it needed to tell the express that data is coming from URL
app.use(express.urlencoded({extended: true , limit: "16kb "})) // extended help in to make object in the object
app.use(express.static("public")); //  static only help in to store folder in my server files like favicon

// Work of cookieparser is to access the cookies and also can set the operations on the cookies on the user browser
// Secure cookie can be put in the user browser  and only server can use those cookies

// app.use(cookieparser())

// routes import  
import predictionRouter from "./routes/.routesprediction.js"


//router declaration
app.use("/api/v1/prediction" , predictionRouter); // /users is become prefix of the url local host and the control goes to user.routes.js





export { app };