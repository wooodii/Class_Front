import {useParams} from 'react-router-dom';

const NumberId = () => {
    const params = useParams();    
    return ( 
        <div>
            <p>{params.id}</p>
        </div>
    );
}

export default NumberId;