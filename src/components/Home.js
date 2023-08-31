import { useNavigate } from 'react-router-dom'
import '../components/Home.css'

export default function Home(){
    const navigate = useNavigate()
    return (
        <div className='home-container'>
           <img src='https://thumbs.dreamstime.com/b/old-bethlehem-steel-factory-pennsylvania-one-time-was-second-largest-manufacturing-facility-30357542.jpg' className='image'/>
            <section className=' ntwist-container'>
                <div className=' left'>
                    <h1 className='h1'>Data-Powered solutions for industrial Excellence</h1>
                    <button type="button" onClick={()=>navigate('/mine-to-mill')}  className="btn btn-primary">Read more</button>
                </div>
                <img src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' className='ntwist-network-img'></img>
            </section>
            <section className='list'>
                <div className='list-body'>
                    <h1>Mine-To-Mill-To-Mine-optimization</h1>
                    <p className=''>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans</p>
                    <button type="button" onClick={()=>navigate('/mine-to-mill')}  className="btn btn-primary  border-0">Read more</button>
                </div>
                <img className='list-image' src='https://img.freepik.com/premium-photo/male-worker-inspection-visual-pipeline-oil-gas_478515-5647.jpg?size=626&ext=jpg' alt='image' />
            </section>
            <section className='list'>
                <img className='list-image' src='https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg' alt='image' />
                <div className='list-body'>
                    <h1>Sustainability</h1>
                    <p className=''>Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                    With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.</p>
                    <button type="button" onClick={()=>navigate('/sustainability')}  className="btn btn-primary  border-0">Read more</button>
                </div>
            </section>
            <section className='list'>
                <div className='list-body'>
                    <h1>Mineral Processing</h1>
                    <p className=''>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</p>
                    <button type="button" onClick={()=>navigate('/mining')}  className="btn btn-primary  border-0">Read more</button>
                </div>
                <img className='list-image' src='https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg' alt='image' />
            </section>
            <section className='list'>
                <img className='list-image' src='https://ntwist.com/wp-content/uploads/2022/04/oil-and-gas.jpg' alt='image' />
                <div className='list-body'>
                    <h1>Oil & Gas</h1>
                    <p className=''>Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment. 
                    <br/>NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.</p>
                    <button type="button" onClick={()=>navigate('/oilGas')}  className="btn btn-primary  border-0">Read more</button>
                </div>
            </section>
        </div>
    )
}