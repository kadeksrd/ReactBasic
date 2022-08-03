import { useParams } from "react-router-dom";

export default function BlogDetails(){
    let params = useParams();
    
    return (
        <>
        <h1>Ini Blog Details {params.id}</h1>
        <p>Ini Blog details ceritanya isinya </p>
        </>
    )
}