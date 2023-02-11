import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import logo from "./CompanyLogo.svg";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentIcon from "@mui/icons-material/Payment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PanToolIcon from "@mui/icons-material/PanTool";
import LogoutIcon from "@mui/icons-material/Logout";
import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";
import Settings from "./components/Settings";
import PersonalData from "./components/PersonalData";
import PaymentsPage from "./components/PaymentsPage";
import ConnectionsPage from "./components/ConnectionsPage";
import To_PayPage from "./components/To_PayPage";
import ErrorPage from "./components/ErrorPage";
import StopPage from "./components/StopPage";

const StyledBtn = styled(Button)({
    justifyContent: "start",
    color: "#1d1b32",
    backgroundColor: "#566ee7",
    margin: "5px",
    width:"17em",
    fontSize:"1em",
    '&:hover': {
        backgroundColor: "lime",
        color: "#1d1b32"
    },
})
//that data should be got from server
const Name: string = "Боженко Максим Андреевич";
const Login: string = "bozhenko";
const ContractNum: number = 4234;
const ContractDate: string = "05.10.2022";
const Address: string = "ул. Пушкина, дом 1";
const Phone: string = "+79788002032";
const Status: boolean = true;
const Balance: number = 201;
const Service = {
    name: "Безлимитный интернет(1GBIT/S)",
    price: 2000,
    ending: "04.08.2022",
    starting:"04.07.2022",
    progress: 74,
    description:"Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"
};
const Pays = [{
    id:1,
    time: "04.07.2022",
    amount: -2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"
}, {
    id:2,
    time: "04.07.2022",
    amount: 2000,
    description: "Оплата в платежной системе «citypay» на сумму 2000 руб., была создана 04.07.2022 13:21"
}, {
    id:3,
    time: "03.06.2022",
    amount: -2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}, {
    id:4,
    time: "03.06.2022",
    amount: 2201,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}, {
    id:5,
    time: "02.05.2022",
    amount: -2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}, {
    id:6,
    time: "02.05.2022",
    amount: 2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}, {
    id:7,
    time: "01.04.2022",
    amount: -2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}, {
    id:8,
    time: "01.04.2022",
    amount: 2000,
    description: "Безлимитный интернет в частном секторе со скоростью до 1 Gbit/s с месячной тарификацией стоимостью 2000 рублей за календарный месяц"

}
];
const Services=[
    {
        price:1249,
        period:"месяц",
        description:"Безлимитный интернет в частном секторе со скоростью до 300 Mbit/s с месячной тарификацией стоимостью 1249 рублей за календарный месяц",
        selected:false
    },
    {
        price:23,
        period:"1 дн.",
        description:"Безлимитный интернет в частном секторе со скоростью до 50 Mbit/s с ежедневной тарификацией стоимостью 23 руб. в сутки",
        selected:false
    },
    {
        price: 1500,
        period: "месяц",
        description: "Безлимитный интернет в частном секторе со скоростью до 500 Mbit/s с ежедневной тарификацией стоимостью 1500 руб. за календарный месяц",
        selected: false
    },
    {
        price:29,
        period:"1 дн.",
        description:"Безлимитный интернет в частном секторе со скоростью до 100 Mbit/s с ежедневной тарификацией стоимостью 29 руб. в день",
        selected:false
    },
    {
        price:42,
        period:"1 дн.",
        description:"Безлимитный интернет в частном секторе со скоростью до 300 Mbit/s с ежедневной тарификацией стоимостью 42 руб. в день",
        selected:false
    },
    {
        price: 2000,
        period: "месяц",
        description: "Безлимитный интернет в частном секторе со скоростью до 500 Mbit/s с ежедневной тарификацией стоимостью 2000 руб. за календарный месяц",
        selected: true
    },
    {
        price: 665,
        period: "месяц",
        description: "Безлимитный интернет в частном секторе со скоростью до 50 Mbit/s с ежедневной тарификацией стоимостью 665 руб. за календарный месяц",
        selected: false
    },
    {
        price: 850,
        period: "месяц",
        description: "Безлимитный интернет в частном секторе со скоростью до 100 Mbit/s с ежедневной тарификацией стоимостью 850 руб. за календарный месяц",
        selected: false
    },

]
const Connections=[
    {
        start:"11.07.2022 07:38",
        end:"11.07.2022 14:38",
        duration:"7 час 0 мин",
        IP:"10.180.11.161"
    },
    {
        start:"10.07.2022 21:03",
        end:"11.07.2022 07:38",
        duration:"10 час 35 мин",
        IP:"10.180.11.161"
    },
    {
        start:"10.07.2022 01:48",
        end:"10.07.2022 20:58",
        duration:"19 час 10 мин",
        IP:"10.180.11.161"
    },
    {
        start:"09.07.2022 11:32",
        end:"10.07.2022 01:48",
        duration:"14 час 15 мин",
        IP:"10.180.11.161"
    },
    {
        start:"09.07.2022 04:57",
        end:"09.07.2022 11:29",
        duration:"6 час 31 мин",
        IP:"10.180.11.161"
    },
    {
        start:"08.07.2022 16:55",
        end:"09.07.2022 04:57",
        duration:"12 час 2 мин",
        IP:"10.180.11.161"
    },
    {
        start:"08.07.2022 15:00",
        end:"08.07.2022 16:55",
        duration:"1 час 55 мин",
        IP:"10.180.11.161"
    },
    {
        start:"08.07.2022 13:45",
        end:"08.07.2022 15:00",
        duration:"1 час 15 мин",
        IP:"10.180.11.161"
    },
]

function App() {
    const [page, changePage] = useState("personal");
    const [renderSettings, rerender] = useState(false);
    switch (page) {
        default: {
            return (
                <div className="App">
                    <div className="main">

                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <PersonalData
                            userName={Name}
                            userLogin={Login}
                            userAddress={Address}
                            userContractDate={ContractDate}
                            userBalance={Balance}
                            userContractNum={ContractNum}
                            userPhone={Phone}
                            userService={Service}
                            accesStatus={Status}
                            lastPays={Pays}
                            providerServices={Services}
                        />
                    </div>
                </div>
            )
        }
        case "personal" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <PersonalData
                            userName={Name}
                            userLogin={Login}
                            userAddress={Address}
                            userContractDate={ContractDate}
                            userBalance={Balance}
                            userContractNum={ContractNum}
                            userPhone={Phone}
                            userService={Service}
                            accesStatus={Status}
                            lastPays={Pays}
                            providerServices={Services}
                        />
                    </div>
                </div>
            );
        }
        case "settings" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <Settings
                            renderStatus={renderSettings}
                            providerServices={Services}
                            userService={Service}
                        />
                    </div>
                </div>
            );
        }
        case "payments" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <PaymentsPage lastPays={Pays}/>
                    </div>
                </div>
            );
        }
        case "to_pay" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <To_PayPage userService={Service} userBalance={Balance}/>
                    </div>
                </div>
            );
        }
        case "connections" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <ConnectionsPage userConnections={Connections}/>
                    </div>
                </div>
            );
        }
        case "stop_page" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <StopPage/>
                    </div>
                </div>
            );
        }
        case "error" : {
            return (
                <div className="App">
                    <div className="main">
                        <div className="Navmenu">
                            <img src={logo} height="200px" className="logo"/>
                            <StyledBtn
                                onClick={() => {
                                    changePage("personal")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PersonIcon/>}>
                                Личные данные
                            </StyledBtn>

                            <StyledBtn
                                onClick={() => {
                                    changePage("settings")
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<SettingsIcon/>}>
                                Изменить тариф
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("payments");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<ReceiptIcon/>}>
                                Платежи
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("to_pay");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PaymentIcon/>}>
                                Оплатить
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("connections");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<AccessTimeIcon/>}>
                                Сеансы подключений
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("stop_page");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<PanToolIcon/>}>
                                Приостановка услуг
                            </StyledBtn>
                            <StyledBtn
                                onClick={() => {
                                    changePage("error");
                                }}
                                size="small"
                                variant="contained"
                                startIcon={<LogoutIcon/>}>
                                Выход
                            </StyledBtn>
                            <div className="footer">&copy; 2022 WanWay</div>
                        </div>
                        <ErrorPage/>
                    </div>
                </div>
            );
        }
    }

}

export default App;
