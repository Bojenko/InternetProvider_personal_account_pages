import React, {FC, useState} from 'react';
import "../App.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
// @ts-ignore
import settingsIcon from "./settingsIcon.svg";
import {Button, IconButton, LinearProgress} from "@mui/material";
import {styled} from "@mui/material/styles";
const StyledIcon = styled(InfoIcon)({
    justifyContent: "start",
    color: "white",
    fontSize:"3em",
    '&:hover': {
        color: "whitesmoke"
    },
})
interface PersonalDataProps {
    userName: string,
    userLogin: string,
    userContractNum: number,
    userContractDate: string,
    userAddress: string,
    userPhone: string,
    accesStatus: boolean,
    userBalance: number,
    userService: {
        name: string,
        price: number,
        ending: string,
        starting: string,
        progress: number, //0-100
        description: string,
    },
    lastPays: {
        id: number,
        time: string,
        amount: number,
        description: string
    }[],
    providerServices: {
        price: number,
        period: string,
        description: string,
        selected: boolean
    }[]
}

const InternetAccessIcon = (accessStatus: boolean) => {
    if (accessStatus) return (<CheckCircleIcon fontSize={"large"} color={"success"}/>);
    else return (<DoNotDisturbIcon fontSize={"large"} color={"error"}/>);
}
const OpenServicesDialog = () => {
    let dialog = document.getElementById("services_dialog");
    if (dialog != null)
        dialog.style.visibility = "visible";
    else console.log("ERROR with dialog opening");
}
const CloseServiceDialog = () => {
    let dialog = document.getElementById("services_dialog");
    if (dialog != null)
        dialog.style.visibility = "hidden";
    else console.log("ERROR with dialog closing");
}

const PersonalData: FC<PersonalDataProps> = (props) => {
    document.addEventListener("keyup",function (event){
       if(event.key=="Escape") CloseServiceDialog();
    });
    return (
        <div className="ContentPanel">
            <div className="Box" id="profile_info" style={{borderTop: "0.3em solid #566ee7"}}>
                <AccountCircleIcon fontSize={"large"} style={{color: "#566ee7"}}/>
                <div style={{display: "flex", fontSize: "1.2em"}}><b>{props.userName}</b></div>
                <div style={{display: "flex", fontSize: "1em"}}>login: &nbsp; <b>{props.userLogin}</b></div>
                <div style={{display: "flex", fontSize: "1em"}}><AssignmentIcon fontSize={"small"}/>Договор
                    №<b>{props.userContractNum}</b>&nbsp;  от {props.userContractDate}</div>
                <div style={{display: "flex", fontSize: "1em"}}><HomeIcon fontSize={"small"}/>Адрес: {props.userAddress}
                </div>
                <div style={{display: "flex", fontSize: "1em"}}><LocalPhoneIcon
                    fontSize={"small"}/>Телефон: {props.userPhone}</div>
            </div>
            <div className="Box" id="profile_status"
                 style={{borderTop: props.accesStatus ? "0.3em solid green" : "0.3em solid red"}}>
                <div style={{display: "flex", fontSize: "1.2em"}}><b>Ваш доступ в интернет</b></div>
                {InternetAccessIcon(props.accesStatus)}
                <div>Ваш баланс:&nbsp;  <b>{props.userBalance}руб.</b></div>
                <div style={{
                    display: "flex",
                    fontSize: "1.05em"
                }}><b>{props.accesStatus ? "Active" : "Disabled"}</b></div>
            </div>
            <div className="Box" id="profile_service" style={{borderTop: "0.3em solid #566ee7"}}>
                <div style={{display: "flex", fontSize: "1.2em"}}><b>Подключенные услуги</b></div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "20em",
                    fontSize: "1em",
                    backgroundColor: "green",
                    borderRadius: "0.3em",
                    color: "white"
                }}>
                    <div>
                        <IconButton onClick={() => {
                            console.log("clicked");
                            OpenServicesDialog()
                        }}>
                            <StyledIcon/></IconButton>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}
                    >
                        {props.userService.name}<br/>
                        {props.userService.price} руб<br/>
                        <LinearProgress variant={"determinate"} value={props.userService.progress} color={"primary"}/>
                        Окончание: {props.userService.ending}
                    </div>
                </div>
            </div>
            <div className="lastpaysbox" id="last_pays" style={{borderTop: "0.3em solid #566ee7"}}>
                <div style={{display: "flex", fontSize: "1.2em", paddingTop: "2em"}}><b>Последние платежи</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <table style={{width: "90%", textAlign: "left"}}>
                    <tr>
                        <td><b>Дата</b></td>
                        <td style={{paddingLeft: "1em"}}><b>Сумма</b></td>
                        <td style={{paddingLeft: "1em"}}><b>Назначение</b></td>
                    </tr>
                    {
                        props.lastPays.map(element => {
                                if (element.id > 3) return;
                                else
                                    return (<tr>
                                            <td>{element.time}</td>
                                            <td style={{paddingLeft: "1em"}}>{element.amount}</td>
                                            <td style={{paddingLeft: "1em"}}>{element.description}</td>
                                        </tr>
                                    )
                            }
                        )}
                </table>
                <br/>
                <br/>
            </div>
            <div className="servicesDialog" id="services_dialog">
                <div className="servicesDialogBox">
                    <IconButton onClick={() => CloseServiceDialog()}>
                        <CloseIcon color={"error"} fontSize={"medium"}/>
                    </IconButton>
                    <div style={{display: "flex", fontSize: "1.2em", paddingTop: "2em"}}><b>Информация об услуге</b>
                    </div>
                    <div style={{width: "90%"}}>
                        Подключена {props.userService.starting} услуга <br/>
                        {props.userService.description} <br/>
                        Заканчивается {props.userService.ending} после чего будет подключена эта же услуга
                        стоимостью {props.userService.price} руб..<br/><br/>
                        *Изменить услугу можно в разделе "Изменить тариф"
                    </div>
                    <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                    <table style={{width: "90%", textAlign: "left"}}>
                        <tr>
                            <td></td>
                            <td><b>Стоимость</b></td>
                            <td><b>Период</b></td>
                            <td><b>Описание</b></td>
                        </tr>
                        {props.providerServices.map(element => (
                                <tr>
                                    <td>{element.selected ? (<Button variant={"outlined"} disabled>Выбрано</Button>) : (
                                        <Button variant={"contained"} disabled>Доступно</Button>)}</td>
                                    <td>{element.price}</td>
                                    <td>{element.period}</td>
                                    <td><i>{element.description}</i></td>
                                </tr>
                            )
                        )}
                    </table>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default PersonalData;