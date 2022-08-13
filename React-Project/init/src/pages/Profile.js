import { useEffect } from "react";

export default function Profile () {
    useEffect(function (){
        document.title = `Profile`;
    },[])    
    return (
        <section className="section">
            <h1 clasName="section-title">
                Profile
            </h1>
            <p className="section-description"><b>Halo</b> Perkenalkan nama aku kadek surya rd aku seorang web developer lulusan google :p</p>
        </section>
    )
}