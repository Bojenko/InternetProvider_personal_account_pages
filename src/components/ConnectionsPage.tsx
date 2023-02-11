import React, {FC} from 'react';
import "../App.css";
import {Button} from "@mui/material";

interface CoonectionsPageProps {
    userConnections: {
        start: string,
        end: string,
        duration: string,
        IP: string
    }[]
}

const ConnectionsPage: FC<CoonectionsPageProps> = (props) => {
    return (
        <div className="ContentPanel">

            <div className="servicesDialogBox" id="last_pays" style={{borderTop: "0.4em solid cornflowerblue"}}>
                <div style={{display: "flex", fontSize: "1.5em", paddingTop: "2em"}}><b>Сеансы подключений</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <table>
                    <table style={{width: "90%", textAlign: "left"}}>
                        <tr>
                            <td><b>Старт</b></td>
                            <td><b>Завершение</b></td>
                            <td><b>Длительность</b></td>
                            <td><b>IP</b></td>
                        </tr>
                        {props.userConnections.map(element => (

                                <tr>
                                    <td>{element.start}</td>
                                    <td>{element.end}</td>
                                    <td>{element.duration}</td>
                                    <td><i>{element.IP}</i></td>
                                </tr>
                            )
                        )}
                    </table>
                    <br/>
                    <br/>
                </table>
            </div>
        </div>
    );
};

export default ConnectionsPage;