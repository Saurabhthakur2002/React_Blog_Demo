import { Link } from "react-router-dom";
const Missing = () => {
    return(
        <main className="Missing">
            <h2>Page Not found</h2>
            <p>Well,that's Disappointing</p>
            <p><Link to='/'>Visit Our HomePage</Link></p>
        </main>
    )
}
export default Missing;