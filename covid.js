import React, { useEffect , useState} from 'react';
import './covid.css';
const Covid = () => {
    const[data,setData]=useState([]);

    const getCovidData= async()=>{
        try {
            
            const res=await fetch('https://data.covid19india.org/data.json');
            // console.log(res);
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(()=>{
        getCovidData();
    }, []);
  return (
    <>
        <section>
            <h1><marquee>Live 🔴</marquee></h1>
            <h2>Covid Live TrackerApp ( When was My Last Update of Covid-19)</h2>
    
            <ul>
                <li className="box">
                    <div className='box__main'>
                    
                        <div className='box__inner'>
                            <p className='box__name'><span> country</span></p>
                            <a href='https://data.covid19india.org/data.json'>api</a>
                            <p className='box__total box__small'><span>India</span></p>
                            
                        </div>
                    </div>
                    </li>
                        <li className="box">
                    <div className='box__main'>
                        <div className='box__inner'>
                            <p className='box__name'><span> Total Recovery</span></p>
                            <p className='box__total card__small'>{data.recovered}</p>
                        </div>
                    </div>
                    </li>
                    <li className="box">
                <div className='box__main'>
                    <div className='box__inner'>
                        <p className='box__name'><span>Total Confirmed</span></p>
                        <p className='box__total card__small'>{data.confirmed}</p>
                    </div>
                </div>
                </li>
                    <li className="box">
                    <div className='box__main'>
                        <div className='box__inner'>
                            <p className='box__name'><span>Deaths</span></p>
                            <p className='box__total card__small'>{data.deaths}</p>
                        </div>
                    </div>
                    </li>
            
                    <li className="box">
                    <div className='box__main'>
                        <div className='box__inner'>
                            <p className='box__name'><span>Active</span></p>
                            <p className='box__total card__small'>{data.active}</p>
                        </div>
                    </div>
                    </li>
                    <li className="box">
                    <div className='box__main'>
                        <div className='box__inner'>
                            <p className='box__name'><span>Update</span></p>
                            <p className='box__total card__small'>{data.lastupdatedtime}</p>
                        </div>
                    </div>
                    </li>
                    
            </ul>
        </section>
        <footer>
        <div style={{textAlign:'center',color:"whitesmoke"}}>
         Made By Amar Singh | <a target='blank' href="https://www.linkedin.com/in/amar-singh-733155247/">Contact Me</a>
        </div>    
        </footer>
    </>
  )
}

export default Covid;
