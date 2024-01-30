import React, { Component } from 'react';
import Slider from 'rc-slider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import 'rc-slider/assets/index.css';
import './Navbar.css';


class Navbar extends Component {
    render() {
        const { level, changeLevel } = this.props;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>reactcolorpicker</a>
                </div>
                <div className="slider-container">
                    <span>
                        Level: {level}
                    </span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
                <div className="select-container">
                    <Select>
                        <MenuItem defaultValue='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem defaultValue='rgb'>
                            RGB - rgb(255,255,255)
                        </MenuItem>
                        <MenuItem defaultValue='rgba'>
                            RGBA - rgb(255,255,255, 1.0)
                        </MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;