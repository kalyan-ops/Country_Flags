import React, {useEffect,useState} from 'react';
import './CountryFlags.css';

const CountryFlags=()=>{
    const [countries,setCountries]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetchCountries();
    },[]);
    const fetchCountries= async()=>{
        try{
            const response= await fetch('https://xcountries-backend.azurewebsites.net/all');
            const data=await response.json();
            console.log(data);
            setCountries(data);
            setLoading(false);
        }catch(error){
            console.error("Error fetching countries:", error);
            setLoading(false);
        }
    };
    if(loading){
        return (
            <div>
                <div>
                    Loading .....
                </div>
            </div>
        )
    }
    return (
        <div className="countries-container">
            <h1 className="countries-title">Countries and their flags</h1>
            <div className="countries-grid">
                {countries.map((country)=>(
                    <div key={country.name}className="country-card">
                        <img className="country-flag"src={country.flag} alt={country.abbr}/>
                        <h3 className="country-name">{country.name}</h3>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default CountryFlags;
