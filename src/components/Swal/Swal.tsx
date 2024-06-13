import React from 'react'
import Swal from 'sweetalert2';
import './Swal.css';

export default function Swale(title: any) {
    return Swal.fire({
        position: "top-end",
        title: title,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            icon: 'custom-icon-class'
        }
    });
};