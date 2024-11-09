import React from 'react';
import '../../styles/Section2.css';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';



const Section2 = () => {
    return (
        <>
            <div
                className='bg light'
                style={{
                    marginLeft: '150px',
                    maxWidth: '1000px',
                }}
            >
                <div className="container mt-4 d-flex justify-content-start">
                    <div
                        className="row rounded-pill border p-3"
                        style={{
                            width: '100%',
                            maxWidth: '750px',
                            height: '80px',
                            boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
                            borderColor: 'white',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        {/* Partition 1 */}
                        <div
                            className="col d-flex  justify-content-center border-end"
                            style={{ height: '100%' }}
                        >
                            <div>
                                <p>

                                <PlaceOutlinedIcon style={{ fontSize: 15,color:'red', marginLeft:'-55px',marginTop:'-30px'}} />
      
                                </p>
                                <p className="mb-0">Partition 1 - Row 2</p>
                            </div>
                        </div>

                        {/* Partition 2 */}
                        <div
                            className="col d-flex align-items-center justify-content-center border-end"
                            style={{ height: '100%' }}
                        >
                            <div className="text-center">
                                <p className="mb-0">Partition 2 - Row 1</p>
                                <p className="mb-0">Partition 2 - Row 2</p>
                            </div>
                        </div>

                        {/* Partition 3 */}
                        <div
                            className="col d-flex align-items-center justify-content-center"
                            style={{ height: '100%' }}
                        >
                            <div className="text-center">
                                <p className="mb-0">Partition 3 - Row 1</p>
                                <p className="mb-0">Partition 3 - Row 2</p>
                            </div>
                        </div>

                        {/* Search Icon Button */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                paddingLeft: '10px',
                                marginTop: '-40px'
                            }}
                        >
                            <IconButton
                                style={{
                                    backgroundColor: '#e76f0d',
                                    borderRadius: '10%',
                                    padding: '10px',
                                    height: '35px',
                                    width: '35px',
                                }}
                            >
                                <SearchIcon style={{ color: 'white' }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section2;
