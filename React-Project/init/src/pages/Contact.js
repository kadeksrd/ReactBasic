import { useEffect } from "react";

export default function Contact() {
    useEffect(function (){
        document.title = `Contact`;
    },[])    
  
    return (
    <section className="section">
      <h1 className="section-title">Contact Saya</h1>
      <div className="section-description">
        <p>Kamu Bisa Menghubungi Saya Dibawah ini</p>
        <ul>
          <li>Email: Kadeksuryard13@gmail.com</li>
          <li>Wa: 0838128491</li>
        </ul>
        <p>Atau Kamu Bisa Melihatku Di Sosmed</p>
        <ul>
          <li>
            {" "}
            <a href="facebook.com">Facebook</a>{" "}
          </li>
          <li>
            {" "}
            <a href="twitter.com">Twitter</a>{" "}
          </li>
        </ul>
      </div>
    </section>
  );
}
