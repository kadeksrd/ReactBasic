import {Link, Outlet} from 'react-router-dom'

export default function About () {
    return (
        <>
        <h1>Ini Halaman about Kalo mau ke halaman lain silahkan klik link dibawah ini</h1>
        <ul>
            <li>
            <Link to="/about/abouteam">About Team Cara pertama</Link>
            </li>
            <li>
            <Link to="/about/team">About Team Cara kedua</Link>
            </li>
        </ul>
        <Outlet />
        </>
    )
}

/*
Outlet: mengambil kontent dari child nya yaitu about/team=
*/