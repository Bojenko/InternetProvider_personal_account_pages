import React, {FC} from 'react';
import "../App.css"

interface PaymentsProps {
    lastPays: {
        id: number,
        time: string,
        amount: number,
        description: string
    }[]
}

const PaymentsPage: FC<PaymentsProps> = (props) => {
    return (
        <div className="ContentPanel">
            <div className="lastpaysbox" id="last_pays" style={{borderTop: "0.4em solid cornflowerblue"}}>
                <div style={{display: "flex", fontSize: "1.5em", paddingTop: "2em"}}><b>Платежи</b></div>
                <hr color="lightgray" style={{width: "90%", borderRadius: "0.3em"}}/>
                <table style={{width: "90%", textAlign: "left"}}>
                    <tr>
                        <td><b>Дата</b></td>
                        <td style={{paddingLeft: "1em"}}><b>Сумма</b></td>
                        <td style={{paddingLeft: "1em"}}><b>Назначение</b></td>
                    </tr>
                    {
                        props.lastPays.map(element => (
                                <tr>
                                    <td>{element.time}</td>
                                    <td style={{paddingLeft: "1em"}}>{element.amount}</td>
                                    <td style={{paddingLeft: "1em"}}>{element.description}</td>
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

export default PaymentsPage;