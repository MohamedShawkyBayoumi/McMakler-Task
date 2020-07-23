import React from 'react'

function Card({ data: { name, phone, email, date, bid }, colors = [], date_placeholder }) {
    let fullname = name.split(' ');
    let avatar = fullname[0].charAt(0) + fullname[fullname.length - 1].charAt(0);
    let currentColorObj = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className="card">
            <div className="avatar">
                <div
                    style={{
                        backgroundColor: currentColorObj.backgroundColor,
                        color: currentColorObj.color
                    }}
                >{avatar}</div>
            </div>
            <h3>{name}</h3>
            <h4>{phone}</h4>
            <h4>{email}</h4>
            <div className="appointment-date" style={{ marginBottom: 8 }}>
                <span>{date_placeholder} {date}</span>
            </div>
            {bid && (
            <div className="bid">
                <span>BID 250.000€</span>
            </div>
            )}
        </div>
    )
}

export default Card;