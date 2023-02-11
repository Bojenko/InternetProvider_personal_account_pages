import React, {FC} from 'react';
import "../App.css"
import {Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PanToolIcon from '@mui/icons-material/PanTool';
import LogoutIcon from '@mui/icons-material/Logout';
import {styled} from '@mui/material/styles';
import {Link} from "react-router-dom";
// @ts-ignore
import logo from '../CompanyLogo.svg';
import ErrorPage from "./ErrorPage";

const StyledBtn = styled(Button)({
    justifyContent: "start",
    color: "black",
    backgroundColor: "white",
    border: "2px solid black",
    margin: "5px",
    '&:hover': {
        backgroundColor: "black",
        color: "white"
    },
})

function GoTo(path: string) {
    window.location.href = path;
}

const Navmenu: FC = () => {
    return (
        <div className="Navmenu">
            <img src={logo} height="200px" className="logo"/>
            <StyledBtn
                onClick={()=>GoTo("/personalPage")}
                size="small"
                variant="contained"
                startIcon={<PersonIcon/>}>
                Личные данные
            </StyledBtn>

            <StyledBtn
                onClick={() => GoTo("/settingsPage")}
                size="small"
                variant="contained"
                startIcon={<SettingsIcon/>}>
                Настройки
            </StyledBtn>
            <StyledBtn
                onClick={() => GoTo("/paysPage")}
                size="small"
                variant="contained"
                startIcon={<ReceiptIcon/>}>
                Платежи
            </StyledBtn>
            <StyledBtn
                onClick={() => GoTo("/paymentPage")}
                size="small"
                variant="contained"
                startIcon={<PaymentIcon/>}>
                Оплатить
            </StyledBtn>
            <StyledBtn
                size="small"
                variant="contained"
                startIcon={<AccessTimeIcon/>}>
                Сеансы подключений
            </StyledBtn>
            <StyledBtn
                onClick={()=>GoTo("/stopPage")}
                size="small"
                variant="contained"
                startIcon={<PanToolIcon/>}>
                Приостановка услуг
            </StyledBtn>
            <StyledBtn
                onClick={()=>GoTo("/exitPage")}
                size="small"
                variant="contained"
                startIcon={<LogoutIcon/>}>
                Выход
            </StyledBtn>
        </div>
    )
        ;
};

export default Navmenu;