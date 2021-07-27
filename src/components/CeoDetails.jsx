import { useParams } from 'react-router-dom';

const CeoDetails = ({ceoList}) => {
    const { ceo_slug } = useParams();
    const ceo = ceoList.find(ceo => {
        return ceo.slug === ceo_slug ? ceo : null;
    })
    console.log(ceo)

    return (
        <h3>{ceo.name} was CEO at Apple in {ceo.first_year_active}.</h3>
        )
}

export default CeoDetails;