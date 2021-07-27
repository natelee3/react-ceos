import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CeoDetails = () => {
    const { ceo_slug } = useParams();
    const [ceo, setCeo] = useState({})
    console.log(ceo)

    useEffect(() => {
        (async () => {
            const url = `http://localhost:3000/ceo/${ceo_slug}`
            const ceo = await fetch(url)
            .then(response => response.json())
            setCeo(ceo);
        })();
    }, [setCeo, ceo_slug]);

    return (
        <h3>{ceo.name} was CEO at Apple in {ceo.first_year_active}.</h3>
        )
}

export default CeoDetails;