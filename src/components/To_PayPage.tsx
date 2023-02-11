import React, {FC} from 'react';
import "../App.css";
import {Button, TextField} from "@mui/material";
import {stringify} from "querystring";
import MyTextField from "./MyTextField";
import ReactDOM from "react-dom/client";
import App from "../App";
import ErrorPage from "./ErrorPage";

interface ToPayPageProps {
    userBalance: number,
    userService: {
        name: string,
        price: number,
        ending: string,
        starting: string,
        progress: number, //0-100
        description: string,
    }
}

const Validate = () => {
    let textfield = document.getElementById("pay_textfield")
    if (textfield === undefined) {
        console.log("textfield is undefined")
    }
    if(textfield===null){
        console.log("textfield is null")
    }
    else {

        // @ts-ignore
        console.log(textfield.value);
        // @ts-ignore
        let value :number = Number(textfield.value);
         if (value < 10) {
            textfield.setAttribute("aria-invalid", "true");
          }
    }
}
const To_PayPage: FC<ToPayPageProps> = (props) => {
    return (
        <div className="ContentPanel">
            <div className="lastpaysbox" id="last_pays" style={{borderTop: "0.4em solid green"}}>
                <div style={{display: "flex", fontSize: "1.5em", paddingTop: "2em"}}><b>Оплатить</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <div style={{width: "90%"}}>
                    *На этой странице вы можете пополнить Ваш баланс. Ваши средства спишутся в
                    соответствии с действующим тарифом:<br/><br/>
                    {props.userService.description} <br/>
                    Заканчивается {props.userService.ending} после чего будет подключена эта же услуга
                    стоимостью {props.userService.price} руб..<br/><br/>
                </div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <div>ВАШ БАЛАНС</div>
                <div><b>{props.userBalance} руб.</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <form style={{alignItems:'center', alignContent:'center', display:'flex', flexDirection:'column'}}>
                    <MyTextField/>
                </form>

            </div>
        </div>
    );
};

export default To_PayPage;