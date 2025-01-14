/**
 * @flow
 * @file Function to render the date table cell
 * @author Box
 */

import React from 'react';

export default () => {
    return (
        <div className="actionToolTip">
            Owner
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="#6f6f6f"
                className="bi bi-info-circle-fill mb-1"
                viewBox="0 0 16 16"
                data-toggle="tooltip"
                data-placement="top"
                title="Owner of the root folder owns all subfolders."
            >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        </div>
    );
};
