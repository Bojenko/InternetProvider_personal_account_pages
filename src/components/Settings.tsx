import React, {FC, useEffect, useState} from 'react';
import "../App.css"
import {Button, IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface SettingProps {
    userService: {
        name: string,
        price: number,
        ending: string,
        starting: string,
        progress: number, //0-100
        description: string,
    },
    providerServices: {
        price: number,
        period: string,
        description: string,
        selected: boolean
    }[],
    renderStatus:boolean
}

type providerService = {
    price: number,
    period: string,
    description: string,
    selected: boolean
}

const Settings: FC<SettingProps> = (props) => {
    const [services, selectServices] = useState(props);
    const [status, changeStatus] = useState(props.renderStatus);
    const ChangeService = (props: SettingProps, selected: providerService) => {
        let newSettingProps: SettingProps = props;
        for (let i = 0; i < props.providerServices.length; i++) {
            if (props.providerServices[i].selected) {
                newSettingProps.providerServices[i].selected = false;
            }
        }
        for (let i = 0; i < props.providerServices.length; i++) {
            if (props.providerServices[i].price == selected.price) {
                newSettingProps.providerServices[i].selected = true;
                newSettingProps.userService.price = selected.price;
                newSettingProps.userService.name = selected.description;
                let nowDate = new Date();
                newSettingProps.userService.starting = nowDate.getDate().toString()+"."+(nowDate.getMonth()+1).toString()+"."+nowDate.getFullYear().toString();
                let ending = new Date();
                if(selected.period=="месяц"){
                    ending.setMonth(ending.getMonth()+1);
                } else{
                    ending.setDate(ending.getDate()+1);
                }
                newSettingProps.userService.ending = ending.getDate().toString()+"."+(ending.getMonth()+1).toString()+"."+ending.getFullYear().toString();

                newSettingProps.userService.progress = 0;
                newSettingProps.userService.description = selected.description;
            }
        }
        selectServices(newSettingProps);
        changeStatus(!status);
    }
    return (
        <div className="ContentPanel">
            <div className="servicesDialogBox">
                <div style={{display: "flex", fontSize: "1.5em", paddingTop: "2em"}}><b>Информация об услуге</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <div style={{width: "90%"}}>
                    Подключена {services.userService.starting} услуга <br/>
                    {services.userService.description} <br/>
                    Заканчивается {services.userService.ending} после чего будет подключена эта же услуга
                    стоимостью {props.userService.price} руб..<br/><br/>
                    Выберите услугу, которая будет подключена после завершения текущей
                </div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <table style={{width: "90%", textAlign: "left"}}>
                    <tr>
                        <td></td>
                        <td><b>Стоимость</b></td>
                        <td><b>Период</b></td>
                        <td align="center"><b>Описание</b></td>
                    </tr>
                    {services.providerServices.map(element => (
                            <tr>
                                <td>
                                    {
                                        element.selected ? (<Button variant={"outlined"} disabled>Выбрано</Button>)
                                            : (<Button
                                                onClick={() => {ChangeService(props, element);}}
                                                variant={"contained"}>Выбрать</Button>)
                                    }
                                </td>
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
    );
};

export default Settings;