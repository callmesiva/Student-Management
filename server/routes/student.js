const express = require('express');
const route = express.Router();
const studentcontrol = require("../controllers/studentcontrol");

route.get("/", studentcontrol.view);
route.get("/adduser",studentcontrol.adduser);
route.post("/adduser",studentcontrol.save);
route.get("/edituser/:id",studentcontrol.edituser);
route.post("/edituser/:id",studentcontrol.edit);
route.get("/delete/:id",studentcontrol.delete);

module.exports=route;