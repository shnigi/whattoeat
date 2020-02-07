import React from "react";
import loadingSPinnerStyles from './loadingSpinnerStyles.module.css';

const LoadingSpinner = () => (
    <div className={loadingSPinnerStyles.ldsRipple}><div></div><div></div></div>
);

export default LoadingSpinner;