import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './typeselect.css';



const TypeSelect = () => {
    const [type, setType] = useState("");
    const theme = createTheme({
        palette: {
          primary: {
              main: '#4ECDC4',
              contrastText: '#F7FFF7'
          }
        },
    })

    const handleChange = event => {
        setType(event.target.value);

    }

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}

export default TypeSelect;
