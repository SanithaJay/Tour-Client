import React from 'react';
import '../../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const Search = () => {
    return (
        <div className="search-container">
            <div className="container mt-4 d-flex justify-content-start">
                <div className="row rounded-pill border p-3 search-form-wrapper">
                    <form className="d-flex w-100">
                        <div className="col d-flex flex-column search-partition search-border-end">
                            <div className="d-flex align-items-center gap-2">
                                <PlaceOutlinedIcon className="search-header-icon" />
                                <h6 className="search-header-text">Location</h6>
                            </div>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="search-input search-input-location"
                            />
                        </div>

                        <div className="col d-flex flex-column search-partition search-border-end">
                            <div className="d-flex gap-2">
                                <PinDropOutlinedIcon className="search-header-icon" />
                                <h6 className="search-header-text">Distance</h6>
                            </div>
                            <input
                                type="number"
                                placeholder="Distance k/m"
                                className="search-input search-input-distance"
                            />
                        </div>

                        <div className="col d-flex flex-column search-partition">
                            <div className="d-flex gap-2">
                                <GroupOutlinedIcon className="search-header-icon" />
                                <h6 className="search-header-text">Max People</h6>
                            </div>
                            <input
                                type="number"
                                placeholder="0"
                                className="search-input search-input-people"
                            />
                        </div>

                        <div className="search-search-button">
                            <IconButton className="search-icon-button">
                                <SearchIcon className="search-search-icon" />
                            </IconButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
