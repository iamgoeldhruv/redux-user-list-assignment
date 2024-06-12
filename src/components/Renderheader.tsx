import React from 'react'





export const RenderHeader = () => {
    let headerElement = ['id', 'name', 'email', 'operation']

    return headerElement.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
    })
}