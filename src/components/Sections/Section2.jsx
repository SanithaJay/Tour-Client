import React from 'react';
import '../../styles/Section2.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const Section2 = () => {
    return (
        <div className="section2-container">
            <div className="container mt-4 d-flex justify-content-start">
                <div className="row rounded-pill border p-3 section2-form-wrapper">
                    <form className="d-flex w-100">
                        <div className="col d-flex flex-column section2-partition section2-border-end">
                            <div className="d-flex align-items-center gap-2">
                                <PlaceOutlinedIcon className="section2-header-icon" />
                                <h6 className="section2-header-text">Location</h6>
                            </div>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="section2-input section2-input-location"
                            />
                        </div>

                        <div className="col d-flex flex-column section2-partition section2-border-end">
                            <div className="d-flex gap-2">
                                <PinDropOutlinedIcon className="section2-header-icon" />
                                <h6 className="section2-header-text">Distance</h6>
                            </div>
                            <input
                                type="number"
                                placeholder="Distance k/m"
                                className="section2-input section2-input-distance"
                            />
                        </div>

                        <div className="col d-flex flex-column section2-partition">
                            <div className="d-flex gap-2">
                                <GroupOutlinedIcon className="section2-header-icon" />
                                <h6 className="section2-header-text">Max People</h6>
                            </div>
                            <input
                                type="number"
                                placeholder="0"
                                className="section2-input section2-input-people"
                            />
                        </div>

                        <div className="section2-search-button">
                            <IconButton className="section2-icon-button">
                                <SearchIcon className="section2-search-icon" />
                            </IconButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Section2;
