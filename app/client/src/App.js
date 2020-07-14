import React from "react";
import Select from "@material-ui/core/Select";

export default function App() {
  this.state = {
    list: ["a", "b", "c"],
  };

  function handleChangeDate(e) {
    console.log("chamou" + e.target.value);
  }
  return (
    <>
      <h1 className="cabecalho">Bootcamp Full Stack - Desafio Final</h1>
      <h3 className="cabecalho">Controle Financeiro Pessoal</h3>

      <div className="container">
        <div className="row">
          <div className="input-field col s5 right-align">
            <a class="waves-effect waves-light btn">&#60;</a>
          </div>
          <div className="input-field browser-default col s2">
            <select onChange={handleChangeDate} className="browser-default">
              <option value="1">{this.state.list}</option>
            </select>
          </div>
          <div className="input-field col s5 left-align">
            <a class="waves-effect waves-light btn">&#62;</a>
          </div>
        </div>
        <div className="row center-align div-bord">
          <div className="col s3 left-align">
            <span>
              <b>Lançamentos: </b>
            </span>
            69
          </div>
          <div className="col s3 center-align">
            <span>
              <b>Receitas: </b>
            </span>
            R$ 4.000,00
          </div>
          <div className="col s3 cebter-align">
            <span>
              <b>Despesas: </b>
            </span>
            R$ 1.710,00
          </div>
          <div className="col s3 right-align">
            <span>
              <b>Saldo: </b>
            </span>
            R$ 2.290,00
          </div>
        </div>

        <div className="row">
          <div className="input-field col s2">
            <a className="waves-effect waves-light btn">
              <i className="material-icons left">add</i>Novo Lançamento
            </a>
          </div>
          <div className="input-field col s10">
            <input
              placeholder="Filtro"
              id="first_name"
              type="text"
              className="validate"
            />
          </div>
        </div>

        <div className="row red div-bord">
          <div className="col s1 align-vertical">02</div>
          <div className="col s5">
            <b>Lazer</b>
            <br />
            Almoço em restaurante
          </div>
          <div className="col s2 align-vertical">R$ 45,00</div>
          <div className="col s2">
            <i class="material-icons">create</i>
          </div>
          <div className="col s2 align-vertical">
            <i class="material-icons">delete</i>
          </div>
        </div>
      </div>
    </>
  );
}
