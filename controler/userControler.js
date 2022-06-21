const ModelUser = require("../models").tbUser;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const register = async (req, res) => {
  const { email } = req.body;
  try {
    const { email, password } = req.body;
    // CEK EMAIL DULU ADAA ATAU NGGAK
    const dataUser = await ModelUser.findOne({
      where: {
        email: email,
      },
    });
    
    let body = req.body;
    body.password = await bcrypt.hashSync(body.password, 10);
    const users = await ModelUser.create(body);
    const token = jwt.sign(
      {
        id: users.id,
        email: users.email,
        role: users.role,
        password: users.password,
      },
      process.env.JWT_ACCESS_TOKEN,
     
    );
    console.log(users);
    res.status(201).json({
      status: "Berhasil",
      messege: "Register User Berhasil",
      token
    });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
  
};

const indexUser = async (req, res) => {
  try {
    const { keyword } = req.query;
    const dataUser = await ModelUser.findAll({
      attributes: ["id", "nama", "email", "noTlp", "role"],
      //
    });

    return res.json({
      status: "Berhasil",
      messege: "Berikut Daftar Users",
      data: dataUser,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

const detailUser = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id } = req.params;
    const dataDetail = await ModelUser.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        messege: "Data User Tidak Ditemukan",
      });
    }
    return res.json({
      data: dataDetail,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await ModelUser.destroy({
      where: {
        id: id,
      },
    });
    if (dataDetail === 0) {
      return res.json({
        status: "Gagal",
        messege: "Data User Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "User Berhasil Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};
const updateUser = async (req, res) => {
  console.log("berhasil");
  try {
    const { id } = req.params;
    const { nama, username, idOutlet, role } = req.body;
    const dataDetail = await ModelUser.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        messege: "Data User Tidak Ditemukan",
      });
    }

    await ModelUser.update(
      { nama: nama, username: username, idOutlet: idOutlet, role: role },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "Berhasil",
      messege: "User Berhasil DiUpdate",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

module.exports = {
  register,
  indexUser,
  detailUser
};
