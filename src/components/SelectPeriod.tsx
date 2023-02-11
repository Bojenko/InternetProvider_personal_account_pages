import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';


export default function SelectPeriod() {
    const [period, setPeriod] = React.useState('');

    const Days: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 21, 30, 31, 40, 50, 60, 70, 80, 90, 100, 180];

    const handleChange = (event: SelectChangeEvent) => {
        setPeriod(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 250}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Выберите период</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={period}
                    label="Выберите период"
                    onChange={handleChange}
                    required
                >
                    {Days.map(e => {
                        let NowDate = new Date();
                        let EndDate = new Date();
                        EndDate.setDate(EndDate.getDate() + e);
                        let EndDateString = (EndDate.getDate().toString().length == 1 ?
                                ('0' + EndDate.getDate().toString()) : EndDate.getDate().toString()) + '.'
                            + EndDate.getMonth().toString() + '.' + EndDate.getFullYear().toString() + ' '
                            + EndDate.getHours().toString() + ':' + EndDate.getMinutes().toString();
                        if ((e % 10) == 1) return (
                            <MenuItem value={e}>{"На " + e + " день. До " + EndDateString} </MenuItem>);
                        else if ((e % 10) > 1 && (e % 10) < 5 && (e < 10 || e > 20)) return (
                            <MenuItem value={e}>{"На " + e + " дня. До " + EndDateString}</MenuItem>);
                        else
                            return (
                                <MenuItem value={e}>{"На " + e + " дней. До " + EndDateString}</MenuItem>
                            )
                    })}
                    {/*<MenuItem value={10}>Ten</MenuItem>*/}
                    {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*<MenuItem value={30}>Thirty</MenuItem>*/}
                </Select>
            </FormControl>
        </Box>
    );
}
