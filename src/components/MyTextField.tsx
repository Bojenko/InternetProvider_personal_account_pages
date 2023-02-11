import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage";

const MyTextField= () => {
    const [state, changeState] = useState('correct');
    const [value, changeValue] = useState('');
    function Validate(){
        // @ts-ignore
        if (Number(document.getElementById("pay_textfield").value)<10) changeState('error');
        else changeState('correct');
        // @ts-ignore
        if(document.getElementById("pay_textfield").value.toString()=="")changeState('correct');
    }
    if(state=='correct')
    return (
        <>
            <TextField
                id="pay_textfield"
                type={"number"}
                variant={"outlined"}
                label={"Сумма"}
                required
                onChange={() => changeValue(()=>{
                    Validate();
                    // @ts-ignore
                    return document.getElementById("pay_textfield").value;
                })}
            />
            <br/>
            <Button
                type={"submit"}
                variant={"contained"}
                onClick={()=>{
                    if(value=='')return;
                    const root = ReactDOM.createRoot(
                        document.getElementById('root') as HTMLElement
                    );
                    root.render(
                        <React.StrictMode>
                            <ErrorPage/>
                        </React.StrictMode>
                    );
                }}
            >
                Оплатить
            </Button>
        </>
    );
    else return (
      <>
          <TextField
              id="pay_textfield"
              type={"number"}
              variant={"outlined"}
              label={"Сумма"}
              required
              helperText={"Введите число не менее 10"}
              onChange={() => changeValue(()=>{
                  Validate();
                  // @ts-ignore
                  return document.getElementById("pay_textfield").value;
              })}
              error
          />
          <Button
              type={"submit"}
              variant={"contained"}
          >
              Оплатить
          </Button>
      </>
    );
};

export default MyTextField;