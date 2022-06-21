const UserModel = require("../models").tbUser;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // CEK EMAIL DULU ADAA ATAU NGGAK
    const dataUser = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    if (!dataUser)
      return res.status(404).json({ message: "user tidak ditemukan" });
    const verify = bcrypt.compareSync(password, dataUser.password);
    if (!verify) return res.status(442).json({ message: "password salah" });
    const token = jwt.sign(
      {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role,
        password: dataUser.password,
      },
      process.env.JWT_ACCESS_TOKEN
    );
    res.status(200).json({ message: "berhasil", token, dataUser });
    // CEK EMAIL DAN PASSWORD HARUS SAMA DARI DATABASE
    // CEK EMAILNYA
    
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
    // return res.statusCode = 404;
  }
};

module.exports = { login };
