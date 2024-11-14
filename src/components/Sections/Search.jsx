import React, { useState } from 'react';
import '../../styles/Search.css';
import SearchIcon from '@mui/icons-material/Search';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { useNavigate } from 'react-router-dom';

const Search = () =>
{
    const [ location, setLocation ] = useState( '' );
    const [ distance, setDistance ] = useState( '' );
    const [ maxPeople, setMaxPeople ] = useState( '' );

    const navigate = useNavigate();

    const handleSearch = ( e ) =>
    {
        e.preventDefault();

        let searchQuery = '';

        if ( location )
        {
            searchQuery += `city=${ location }&`;
        }
        if ( distance )
        {
            searchQuery += `distance=${ distance }&`;
        }
        if ( maxPeople )
        {
            searchQuery += `maxGroupSize=${ maxPeople }&`;
        }

        searchQuery = searchQuery.slice( 0, -1 ); 

        
        navigate( `/tours/search?${ searchQuery }` );
    };

    return (
        <div className="search-container">
            <div className="container mt-4 d-flex justify-content-start">
                <div className="row rounded-pill border p-3 search-form-wrapper">
                    <form className="d-flex w-100" onSubmit={ handleSearch }>
                        <div className="col d-flex flex-column search-partition search-border-end">
                            <div className="d-flex align-items-center gap-2">
                                <PlaceOutlinedIcon className="search-header-icon" />
                                <h6 className="search-header-text">Location</h6>
                            </div>
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="search-input search-input-location"
                                value={ location }
                                onChange={ ( e ) => setLocation( e.target.value ) }
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
                                value={ distance }
                                onChange={ ( e ) => setDistance( e.target.value ) }
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
                                value={ maxPeople }
                                onChange={ ( e ) => setMaxPeople( e.target.value ) }
                            />
                        </div>

                        <div className="search-search-button">
                            <button className="btn btn-warning search-button" type="submit">
                                <SearchIcon className="search-search-icon" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
