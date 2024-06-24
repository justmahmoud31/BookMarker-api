const Link = require("../Models/links.model.js");
const getlinks = async (req, res) => {
  try {
    const links = await Link.find({});
    res.status(200).json({ Message: "Found", data: links });
  } catch (err) {
    res.status(500).json({ Message: "ERROR", ERROR: err });
  }
};
const getonelink = async (req, res) => {
  try {
    const { id } = req.params;
    const onelink = await Link.findById(id);
    res.status(200).json({ Mesage: "Found", data: onelink });
  } catch (err) {
    res.status(500).json({ Message: "error", ERROR: err });
  }
};
const Addlink = async (req, res) => {
  try {
    const addLink = await Link.create(req.body);
    res.status(200).json({ Message: "added", data: addLink });
  } catch (err) {
    res.status(500).json({ Message: "failed", Errror: err });
  }
};
const DeleteLink = async (req, res) => {
  try {
    const { id } = req.params;
    const onelink = await Link.findByIdAndDelete(id);
    const AllLinks = await Link.find({});
    if (!onelink) {
      res.status(404).json({ Message: "link Not Found", Error: err });
    }
    res.status(201).json({ Message: "Deleted", data: AllLinks });
  } catch (err) {
    res.status(500).json({ Message: "Not Found", Error: err });
  }
};
const Updatelink = async (req, res) => {
  try {
    const { id } = req.params;
    const onelink = await Link.findByIdAndUpdate(id, req.body);
    if (!onelink) {
      return res.status(500).json({ Message: "Not Found" });
    }
    const updatedLink = await Link.findById(id);
    res.status(201).json({ Message: "Updated", data: updatedLink });
  } catch (err) {
    res.status(500).json({ Message: "Not Found", Error: err });
  }
};
module.exports = {
  getlinks,
  getonelink,
  Addlink,
  DeleteLink,
  Updatelink,
};
