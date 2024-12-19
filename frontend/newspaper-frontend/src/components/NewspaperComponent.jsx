import React, {useEffect, useState} from 'react'
import { listNewspapers } from '../services/NewspaperService'
import { useNavigate } from 'react-router-dom'

const NewspaperComponent = () => {
    const [newspapers, setNewspapers] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await listNewspapers();
                setNewspapers(response);
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
            }
        };
    
        fetchData();
    }, []);
    

    function addNewspaper() {
        navigator('/news')
    }

    const handleSubscribeClick = (newspaper) => {
        navigator('/addSubscription', { state: { newspaper } });
    };
    
    return (
        <div className="container">
            <h2 className="center">List of Newspapers</h2>
            {localStorage.getItem('id') === '1' && (
                <button className="btn btn-primary mb-2" onClick={addNewspaper}>
                    Add Newspaper
                </button>
            )}
            <div className="row">
                {newspapers.map(newspaper => (
                    <div key={newspaper.id} className="col-md-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{newspaper.name}</h5>
                                <p className="card-text">{newspaper.description}</p>
                                <p className="card-text"><strong>Price:</strong> {newspaper.price}</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">ID: {newspaper.id}</small>
                                <button
                                    className="btn btn-success mt-2"
                                    onClick={() => handleSubscribeClick(newspaper)}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewspaperComponent