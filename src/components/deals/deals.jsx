import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Deals({specificAirport, updateSpecificAirport}) {
    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
         const getDeals = async () => {
             try {
                 const response = await axios.get(
                     'https://api.scottscheapflights.com/workers/recent-deals'
                 );
                 setDeals(response.data.data.deals);
                 setError(null);
             } catch (err) {
                 setError(err.message);
                 setDeals(null);
             } finally {
                 setLoading(false);
             }
         };
         getDeals();
    }, []);

const getSpecificDeals = async (airport) => {
    updateSpecificAirport(true)
    try {
        const response = await axios.get(
            `https://api.scottscheapflights.com/workers/recent-deals?airport_code=${airport}`
        );
        setDeals(response.data.data.deals);
    } catch (err) {

    };
};

if(specificAirport) {
        return (
            <>
                <div className="deals-header">
                    <p>Our top finds this month</p>
                    <div className="images">
                         {deals.map ( (deal, index) => (
                            <div key={`deal${index}`} className={`deal-${index}`}>
                                <div key={`imagec${index}`} className={`image${index}-container`}>
                                    <div key={`priceg${index}`} className="price-group">
                                        <div key={`pricec${index}`} className="price-container">
                                            <div key={`priceo${index}`} className="price-original">{deal.normalPrice.formatted}</div>
                                            <div key={`priced${index}`} className="price-deal">{deal.price.formatted}</div>
                                        </div>
                                        <div key={`airport${index}`} className="airport-text">{deal.originIata} to {deal.destinationIata}</div>
                                    </div>
                                    <div key={`dealc${index}`} className={`deal${index}-container`}>
                                        <div key={index.toString()} className={`image-${index}`} style={{backgroundImage: `url(${deal.featureImageUrl})`}}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            < />
        );
} else {
        return (
            <>
                <div className="deals-header">
                    <p>Our top finds this month</p>
                    <div className="images">
                         {deals.map ( (deal, index) => (
                            <div key={`deal${index}`} className={`deal-${index}`}>
                                <div key={`imagec${index}`} className={`image${index}-container`}>
                                    <div key={`priceg${index}`} className="price-group">
                                        <div key={`pricec${index}`} className="price-container">
                                            <div key={`priceo${index}`} className="price-original">{deal.normalPrice.formatted}</div>
                                            <div key={`priced${index}`} className="price-deal">{deal.price.formatted}</div>
                                        </div>
                                        <div key={`airport${index}`} className="airport-text">{deal.originIata} to {deal.destinationIata}</div>
                                    </div>
                                    <div className={`deal${index}-container`}>
                                        <button key={`seemorec${index}`}  className="see-more-container" onClick={() => getSpecificDeals(deal.originIata)}>
                                            <div key={`seemoret${index}`} className="see-more-text">See more {deal.originIata}</div>
                                        </button>
                                        <div key={index.toString()} className={`image-${index}`} style={{backgroundImage: `url(${deal.featureImageUrl})`}}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            < />
        );
}
}

export default Deals;
