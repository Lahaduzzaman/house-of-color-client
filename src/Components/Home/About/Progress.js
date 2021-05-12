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
                    <p className="text-secondary" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
                </div>
            </div>
        </div>
    );
};

export default Progress;