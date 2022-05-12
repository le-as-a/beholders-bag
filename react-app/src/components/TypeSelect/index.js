import React, { useState } from 'react';
import Select from '@mui/material/Select';
import './typeselect.css';


const TypeSelect = () => {
    const [type, setType] = useState("");

    return (
        <FormControl fullWidth>
            <InputLabel id='type-selector'>Type</InputLabel>
            <Select
                labelId='type-selector'
                id='type-menu'
                value={type}
                label="Type"
                onChange={e => setType(e.target.value)}
            >
                <MenuItem value="equipment">Equipment</MenuItem>
                <MenuItem value="magic-item">Magic Item</MenuItem>
            </Select>
        </FormControl>
    );
}

export default TypeSelect;
