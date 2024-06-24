const express = require("express");
const router = express.Router();
const {
  getlinks,
  getonelink,
  Addlink,
  DeleteLink,
  Updatelink,
} = require("../Controllers/links.controller.js");
router.get("/", getlinks);
router.get("/:id", getonelink);
router.post("/addlink", Addlink);
router.delete("/deletelink/:id", DeleteLink);
router.put("/updatelink/:id", Updatelink);
module.exports = router;
