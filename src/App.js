import React from "react";
import cn from "classnames";
import {useState} from "react";
import './App.css';
import alfaBank from "./logos/alfa.svg";
import gazpromBank from "./logos/gazprom.svg";
import otkritieBank from "./logos/otkritie.svg";
import promsvyazBank from "./logos/promsvyz.svg";
import raiffeisenBank from "./logos/raiffaizen.svg";
import rosBank from "./logos/rosbank.svg";
import rosselhozBank from "./logos/rosselhoz.svg";
import sberBank from "./logos/sber.svg";
import unicreditBank from "./logos/unicredit.svg";
import vtbBank from "./logos/vtb.svg";
import {RadioSelect} from "./RadioSelect";
const banksLogos = [
  {id: 'alfa', src: alfaBank, name: "Альфа банк"}, 
  {id: 'gazprom', src: gazpromBank, name: "Газпромбанк"},
  {id: 'otkritie', src: otkritieBank, name: "Открытие банк"},
  {id: 'promsvyaz', src: promsvyazBank, name: "Промсвязьбанк"},
  {id: 'raiffeisen', src: raiffeisenBank, name: "Райффайзенбанк"},
  {id: 'ros', src: rosBank, name: "Росбанк"},
  {id: 'rosselhoz', src: rosselhozBank, name: "Россельхозбанк"}, 
  {id: 'sber', src: sberBank, name: "Сбербанк"},
  {id: 'unicredit', src: unicreditBank, name: "Юникредитбанк"},
  {id: 'vtb', src: vtbBank, name: "ВТБ"},
 /*  {src: null, name: "Другой банк"},
  {src: null, name: "Наличные на руки"}, */
];
const typeObject = [
  {id: "secondary", title: "Вторичка"},
  {id: "primary", title: "Новостройка"}
];

function App() {
  const [value, setValue] = useState("alfa");
  const [typeSelectedObject, setTypeSelectedObject] = useState(["primary", "secondary"]); // ["secondary"] ["primary"]
  function handleChange(event){
    setValue(event.target.value)
  }
  return (
    <div className="App__card">
      <div className="App">
        <div className="App-title">На карту какого банка получаете зарплату?</div>
        <div className="App-bank">
          {banksLogos.map(bank => {
            return (
              <label
                key={bank.id}
                className={cn({
                  'bank': true,
                  'bankSelected': value === bank.id,
                })}
                style={{ '--logo': `url(${bank.src})` }}
              >
                {bank.name}
                <input
                  value={bank.id}
                  onChange={handleChange}
                  className="input-bank"
                  type="radio"
                  name="bank"
                  checked={bank.id === value}
                />
            </label>
            )
          })}
        </div>
      </div>
      <RadioSelect 
        value={typeSelectedObject}
        onChange={setTypeSelectedObject}
        options={typeObject} 
        titleRadio="Тип объета недвижимости"/>
    </div>
  );
}
export default App;