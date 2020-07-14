const transactionModel = require("../models/TransactionModel.js");

const express = require("express");

const transactionRouter = express.Router();

module.exports = transactionRouter;

const app = module.exports;

app.get("/:period", async (req, res) => {
  try {
    const period = req.params.period;
    if (!period) {
      throw new error();
    }

    const periods = await transactionModel.find({ yearMonth: period });
    res.send(periods);
  } catch (error) {
    res.status(404).send({
      error:
        'É necessário informar o parâmetro "period", cujo valor deve estar no formato yyyy-mm',
    });
  }
});
