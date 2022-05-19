import React, { useState, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider, makeStyles } from '@mui/material/styles';
import { grabInfo } from '../../store/open5e';
import { useDispatch } from 'react-redux';
import './typeselect.css';



const TypeSelect = () => {
    const [type, setType] = useState("");
    const dispatch = useDispatch();
    const theme = createTheme({
        select: {
            '&:before': {
                borderColor: '#FFE66D',
            },
            '&:after': {
                borderColor: '#FFE66D',
            }
        },
        icon: {
            fill: '#FFE66D'
        }
    })

    const handleChange = event => setType(event.target.value);

    return (
        <FormControl id='type-form'>
            <InputLabel
                id='type-selector'
                sx={{
                    color: '#FFE66D',
                }}
            >Type</InputLabel>
            <Select
                labelId='type-selector'
                id='type-menu'
                value={type}
                label="Type"
                onChange={handleChange}
                sx={{
                    color: '#F7FFF7',
                    border: { color: '#FFE66D' }
                }}
            >
                <MenuItem value="spells">Spells</MenuItem>
                <MenuItem value="backgrounds">Backgrounds</MenuItem>
                <MenuItem value="feats">Feats</MenuItem>
                <MenuItem value="conditions">Conditions</MenuItem>
                <MenuItem value="races">Races</MenuItem>
                <MenuItem value="classes">Classes</MenuItem>
                <MenuItem value="magicitems">Magic Items</MenuItem>
                <MenuItem value="weapons">Weapons</MenuItem>
            </Select>
        </FormControl>
    );
}

export default TypeSelect;
