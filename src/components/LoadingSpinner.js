import React from "react";
import loadingSPinnerStyles from './loadingSpinnerStyles.module.css';

const LoadingSpinner = () => (
    <div className={loadingSPinnerStyles.loadingContainer}>
        <h1>Loading!</h1>
        <div className={loadingSPinnerStyles.ldsRipple}><div></div><div></div></div>
    </div>
);

export default LoadingSpinner;