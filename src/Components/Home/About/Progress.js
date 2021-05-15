import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';


const Progress = ({ perchantage }) => {
    const { perchant, name, pathColor } = perchantage;
    return (
        <div className="col-md-6 p-3">
            <div className="row">
                <div className="col-4">
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: pathColor,
                            textColor: pathColor
                        })} value={perchant} text={`${perchant}%`} />
                </div>
                <div className="col-8">
                    <h5>{name}</h5>
                    <p className="text-secondary" >House Of Color will be known for providing a high-quality service product. We will become known as a premium provider of custom and commercial painting and finishing services, operating at multiple levels within our prospect and existing client community.</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;