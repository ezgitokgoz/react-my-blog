import "./sidebar.css"

export default function Sidebar() {
  return (
    <div clasName="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">BENİM HAKKIMDA</span>
             <img className="sidebarImg" src="https://images.unsplash.com/photo-1516976045582-20700094ba4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <p>
            Merhaba!Ben Ezgi Tokgoz, bu blogun yazarı ve içerik üreticisiyim. Yazılım geliştirme tutkunu, teknoloji meraklısı ve yaşamı keşfetmeye hevesli biriyim.
            Bilgisayar mühendisliği öğrencisi olarak teknoloji dünyasına olan ilgim küçük yaşlardan beri devam ediyor. Yazılımın sınırsız potansiyeline olan inancım ve merakım, kod yazmayı bir tutku haline getirdi. Bu blogda, teknoloji haberleri, yazılım geliştirme konuları, kişisel deneyimlerim ve merak ettiğim konular hakkında içerikler üretmeyi amaçlıyorum.
            Aynı zamanda doğa tutkunuyum ve seyahat etmeyi, yeni kültürler keşfetmeyi seviyorum. Bu sebeple, zaman zaman seyahat deneyimlerimi ve doğa ile ilgili gözlemlerimi de paylaşacağım.
            Bu blog, benim deneyimlerimi, öğrendiklerimi ve keşfettiklerimi sizlerle paylaşmak için bir platform. Teknoloji, yazılım geliştirme, seyahat ve yaşam üzerine içeriklerle dolu bir yolculuğa hazır mısınız?
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">KATEGORİLER</span>
            <ul className="sidebarList">
                <li className="sidebarListTitle">Kod</li>
                <li className="sidebarListTitle">Müzik</li>
                <li className="sidebarListTitle">Yaşam</li>
                <li className="sidebarListTitle">Spor</li>
                <li className="sidebarListTitle">Sinema</li>
                <li className="sidebarListTitle">Teknoloji</li>
            </ul>
            
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">BENİ TAKİP ET!</span>
            <h1 className="link">
                <p>Linkedin</p> 
                <a href="https://www.linkedin.com/in/ezgitokgoz/">https://www.linkedin.com/in/ezgitokgoz/</a>
            </h1>

            

        </div>
    </div> 
  );
}