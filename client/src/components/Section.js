import React from 'react'
import Card from './Card';

function Section({ title, data, colors, errorMsg, loading, date_placeholder }) {
    return (
        <>
            <h1 className="head-section-text">{title}</h1>
            <section className="appointment-section">
                <div className="columns is-mobile card-columns-mobile">
                    {loading ? (
                        <div className="column is-12">
                            <h1 style={{ textAlign: 'center' }}>Loading</h1>
                        </div>
                    ) : (
                        <>
                            {data.length > 0 ? data.map((obj, i) => (
                                <div className="column is-3-desktop is-4-tablet is-three-quarters-mobile" key={i}>
                                <Card data={obj} colors={colors} date_placeholder={date_placeholder} />
                                </div>
                            )): (
                                <div className="column is-12">
                                    {!errorMsg && <h1 style={{ textAlign: 'center' }}>There is no items match the search</h1>}
                                    {errorMsg != '' && <h1 style={{ textAlign: 'center', color: 'red' }}>{errorMsg}</h1>}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

export default Section;