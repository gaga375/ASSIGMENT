let user = require("../models/userAuthSchema")

const usernameSend = async (req, res) => {
const userId = req.userId;
 let responce = await user.findById(userId)
 return res.json({ success: true, data:responce.username})
}
module.exports = usernameSend;