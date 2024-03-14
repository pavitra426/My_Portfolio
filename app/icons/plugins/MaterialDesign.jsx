import React from 'react'

export default function MaterialDesign({forButton}) {
    return (
        forButton ? 
        <svg height="50%" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="design-and-ux/material-design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fillRule="nonzero" stroke="#403C3C" strokeWidth="2">
                    <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">

        </rect>
                </g>
                <g id="Google_Material_Design_Logo" transform="translate(12.000000, 12.000000)">
                    <circle id="Oval" fill="#757575" fillRule="nonzero" cx="25" cy="25" r="25">

        </circle>
                    <polygon id="Shape" fill="#BDBDBD" fillRule="nonzero" points="7.5 7.5 42.5 7.5 42.5 42.5 7.5 42.5">

        </polygon>
                    <polygon id="Shape" fill="#FFFFFF" fillRule="nonzero" points="42.5 7.5 25 42.5 7.5 7.5">

        </polygon>
                    <polygon id="Shape" points="0 0 50 0 50 50 0 50">

        </polygon>
                </g>
            </g>
        </svg>
         : 
         <svg height="100%" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="design-and-ux/material-design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fillRule="nonzero" stroke="#403C3C" strokeWidth="2">
                    <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14">
        
        </rect>
                </g>
                <g id="Google_Material_Design_Logo" transform="translate(12.000000, 12.000000)">
                    <circle id="Oval" fill="#757575" fillRule="nonzero" cx="25" cy="25" r="25">
        
        </circle>
                    <polygon id="Shape" fill="#BDBDBD" fillRule="nonzero" points="7.5 7.5 42.5 7.5 42.5 42.5 7.5 42.5">
        
        </polygon>
                    <polygon id="Shape" fill="#FFFFFF" fillRule="nonzero" points="42.5 7.5 25 42.5 7.5 7.5">
        
        </polygon>
                    <polygon id="Shape" points="0 0 50 0 50 50 0 50">
        
        </polygon>
                </g>
            </g>
        </svg>
    )
}
