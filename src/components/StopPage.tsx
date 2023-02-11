import React from 'react';
import "../App.css";
import {Button, MenuItem, Select} from "@mui/material";
import SelectPeriod from "./SelectPeriod";

const StopPage = () => {
    return (
        <div className="ContentPanel">
            <div className="StopServiceBox" id="last_pays" style={{borderTop: "0.4em solid goldenrod"}}>
                <div style={{display: "flex", fontSize: "1.5em", paddingTop: "2em"}}><b>Приостановить услуги</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <div style={{textAlign: "center"}}>Вы хотите временно приостановить все услуги?<br/>
                    Выберите количество дней, на сколько вы хотите приостановить услугу:
                </div>
                <br/>
                <form>
                    <SelectPeriod/>
                    <br/>
                    <div style={{textAlign:'center'}}><Button variant={"contained"} type={"submit"}>Приостановить</Button></div>
                </form>

            </div>
        </div>
    );
};

export default StopPage;