import { UserModel } from "../models/UserModel.js";

export const changePassword = async (req, res) => {
  const userId = req.userId;
  const newPassword = req.query.newPassword;
  try {
    const user = await UserModel.findById(userId);
    if (user) {
      await user.updateOne({ ...user, password: newPassword });
      res.status(200).json({ success: true, message: "Cập nhật thành công" });
    }
  } catch (error) {
    console.log(err);
    res.status(400).json({ success: false, message: "Bạn chưa đăng nhập!" });
  }
};

export const getUser = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await UserModel.findById(userId).select("-password");
    return res.json({
      success: true,
      message: "Lấy thông tin thành công",
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Bạn chưa đăng nhập!" });
  }
};

export const getUserByEmail = async (req, res) => {
  const email = req.query.email;
  if (email) {
    try {
      const user = await UserModel.findOne({ email: email });
      return res.json({
        success: true,
        message: "Lấy thông tin thành công",
        data: user,
      });
    } catch (error) {
      console.log(err);
      res.status(400).json({ success: false, message: "Không tìm thấy người dùng này!" });
    }
  }
};
