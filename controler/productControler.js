const ModelProduct = require("../models").tbProduct;
const bcrypt = require("bcrypt");

const regProd = async (req, res) => {
  try {
    let body = req.body;
    const Products = await ModelProduct.create(body);
    console.log(Products);
    res.status(201).json({
      status: "Berhasil",
      messege: "Reg prod Berhasil",
    });
  } catch (error) {
    console.log(error);
    console.log("error");
  }
};

const indexProd = async (req, res) => {
  try {
    const { keyword } = req.query;
    const dataProd = await ModelProduct.findAll({
      attributes: ["id", "namaPr","hargaPr","ukuranPr","idKate","gambarPr"],
      //
    })

    return res.json({
      status: "Berhasil",
      messege: "Berikut Daftar Products",
      data: dataProd,
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
    const dataDetail = await ModelProduct.findByPk(id);
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

const deleteProd = async (req, res) => {
  try {
    const id = req.params.id;
    const dataDetail = await ModelProduct.destroy({
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
    const { namaPr, hargaPr, ukuranPr, idKate,gambarPr } = req.body;
    const dataDetail = await ModelProduct.findByPk(id);
    if (dataDetail === null) {
      return res.json({
        status: "Gagal",
        messege: "Data Kate Tidak Ditemukan",
      });
    }

    await ModelProduct.update(
      { namaPr: namaPr, hargaPr: hargaPr, ukuranPr: ukuranPr, gambarPr: gambarPr, idKate: idKate },
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
  regProd,
  indexProd,
  deleteProd
};
