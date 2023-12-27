import React from 'react'

export default function Alert() {
    return (
        <div style={{height : '60px'}}>
            {
                <div className="alert alert-success" role="alert">This is an alert</div>
            }
        </div>
    )
}