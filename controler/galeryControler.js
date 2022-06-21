const ModelKate = require("../models").tbGalery;
const bcrypt = require("bcrypt");

const regGalery = async (req, res) => {
  try {
    let body = req.body;
    const Galerys = await ModelKate.create(body);
    console.log(Galerys);
    res.status(201).json({
      status: "Berhasil",
      messege: "Reg Galery Berhasil",
    });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

const indexGalery = async (req, res) => {
  try {
    const { keyword } = req.query;
    const dataKate = await ModelKate.findAll({
      attributes: ["id", "idPr","gambarGalery"],
      //
    });

    return res.json({
      status: "Berhasil",
      messege: "Berikut Daftar Galerys",
      data: dataKate,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Gagal",
      messege: "Ada Kesalahan",
    });
  }
};

const detailKate = async (req, res) => {
  try {
    // const id = req.params.id;
    const { id } = req.params;
    const dataDetail = await ModelKate.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Kate Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Berikut Data Detail Kate",
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

const deleteKate = async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await ModelKate.destroy({
      where: {
        id: id,
      },
    });
    if (dataDetail === 0) {
      return res.json({
        status: "Gagal",
        messege: "Data Kate Tidak Ditemukan",
      });
    }
    return res.json({
      status: "Berhasil",
      messege: "Kate Berhasil Dihapus",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      messege: "Ada Kesalahan",
    });
  }
};
const updateKate = async (req, res) => {
  console.log("berhasil");
  try {
    const { id } = req.params;
    const { nama, Katename, idOutlet, role } = req.body;
    const dataDetail = await ModelKate.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Kate Tidak Ditemukan",
      });
    }

    await ModelKate.update(
      { nama: nama, email: email, idOutlet: idOutlet, role: role },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json({
      status: "Berhasil",
      messege: "Kate Berhasil DiUpdate",
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
  regGalery,
  indexGalery,
};
