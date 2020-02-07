import React from "react";
import buttonStyles from "./buttonStyles.module.css";

const { primaryButton, secondaryButton, commonButtonStyles } = buttonStyles;

const PrimaryButton = ({ children, onClick }) => (
    <button onClick={onClick} className={`${primaryButton} ${commonButtonStyles}`}>
        {children}
    </button>
);

const SecondaryButton = ({ children, onClick }) => (
    <button onClick={onClick} className={`${secondaryButton} ${commonButtonStyles}`}>
        {children}
    </button>
);

export {
    PrimaryButton,
    SecondaryButton,
}
