import "./Post.css"

export default function Post() {
  return (
    <>
    <div className="post">
       <img className="postImg"
       src="https://images.unsplash.com/photo-1544847558-3ccacb31ee7f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
       />
       <div className="postInfo">
          <div className="postCats">
              <span className="postCat">Code</span>
              <span className="postCat">Life</span>
          </div>
          <span className="postTitle">
          MVC Model nedir?
          </span>
          <hr/>
          <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
        MVC (Model-View-Controller) bir yazılım geliştirme modelidir ve uygulamanın yapısını düzenlemek için kullanılan bir tasarım desenidir. MVC, bir uygulamanın farklı bölümlerini ayırarak daha düzenli, bakımı kolay ve esnek bir yapı sağlar. Bu model, özellikle web uygulamalarında sıklıkla kullanılır, ancak genel yazılım geliştirme süreçlerinde de değerlidir.

        Model (Model)
        MVC'nin Model kısmı, uygulamanın veri işleme, mantıksal işlemler ve durumunu yönetir. Bu kısım, genellikle veritabanıyla etkileşim kurar, veri manipülasyonunu gerçekleştirir. Model, uygulama durumunu temsil eder ve genellikle veri tabanı işlemlerini, veri doğrulamalarını ve iş mantığını içerir. Örneğin, bir e-ticaret uygulamasında ürünlerin listesi, siparişlerin durumu gibi veriler Model tarafından yönetilir.

        View (Görünüm)
        View kısmı, kullanıcıya bilgi sunar, kullanıcı arayüzünü oluşturur. Model tarafından sağlanan verileri kullanarak bilgiyi görsel olarak temsil eder. Kullanıcı arayüzünü oluşturur ve kullanıcıyla etkileşime girer. Örneğin, bir e-ticaret uygulamasında ürünlerin listesi, sepetin içeriği gibi bilgiler kullanıcıya HTML, CSS, ve JavaScript kullanılarak sunulur.

        Controller (Denetleyici)
        Controller kısmı, kullanıcının etkileşimini alır ve bu etkileşime göre Model ve View arasındaki etkileşimi yönetir. Kullanıcıdan gelen istekleri karşılar, gerekli iş mantığını yürütür. Modeli günceller ve güncellenmiş verileri View'e ileterek kullanıcıya sunumu sağlar. Örneğin, bir e-ticaret uygulamasında kullanıcı sepete ürün eklediğinde, bu işlemi karşılayan Controller'dır.

        MVC, kodun parçalara ayrılmasını ve her bileşenin farklı bir sorumluluğu üstlenmesini sağlayarak yazılımın daha sürdürülebilir ve genişletilebilir olmasına yardımcı olur. Bu model, uygulamanın bakımını ve genişletilmesini kolaylaştırır. Ayrıca, yazılım geliştirme sürecinde farklı ekiplerin farklı bileşenler üzerinde çalışmasına olanak tanır, bu da işbirliği ve verimliliği artırır.

        MVC'nin kullanımı, yazılım geliştirme sürecini düzenlemek ve kodun daha organize bir şekilde çalışmasını sağlamak için oldukça etkili bir yöntemdir.</p>
    </div>

<div className="post">
<img className="postImg"
src="https://images.unsplash.com/photo-1527356900876-cae61d8d8462?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
<div className="postInfo">
   <div className="postCats">
       <span className="postCat">Tech</span>
       <span className="postCat">Code</span>
   </div>
   <span className="postTitle">RISC Mimarisi: Bilgisayar Teknolojilerinde Devrim Yaratan Basitlik</span>
   <hr/>
   <span className="postDate">1 hour ago</span>
</div>
<p className="postDesc">Bilgisayarların evrimi, işlemci tasarımlarının gelişmesiyle doğru orantılı olarak ilerlemiştir. Bu gelişme sürecinde, RISC (Reduced Instruction Set Computing) mimarisi önemli bir kilometre taşı olmuştur. RISC, temelde bilgisayar işlemcilerinin tasarımı ve yapısında devrim niteliğinde bir yaklaşım sunmaktadır.

RISC mimarisinin temel prensiplerinden biri, basit ve az sayıda komut seti kullanımıdır. Geleneksel CISC (Complex Instruction Set Computing) mimarisinden ayrılan RISC, işlemci performansını optimize etmek için basit, temel komut setlerine odaklanır. Bu sayede, işlemci daha az karmaşık bir yapıya sahip olurken, her bir komut daha hızlı ve verimli bir şekilde işlenebilir.

Donanımın basitleştirilmesi, RISC mimarisinin bir diğer belirgin özelliğidir. Az sayıda komut kullanılması, işlemci tasarımını karmaşıklıktan arındırır. Bu da işlemci performansını artırırken güç tüketimini azaltır. Ayrıca, RISC mimarisindeki bu basitlik, paralel işlemeyi ve pipelining'i destekleyerek işlem hızını artırır.

RISC mimarisi, bilgisayar dünyasında bir dönüm noktası olmuş ve modern işlemcilerin tasarımını ve performansını büyük ölçüde etkilemiştir. Basitlik ve verimlilik odaklı bu yaklaşım, günümüzde pek çok işlemci ve mobil cihazda tercih edilen bir mimari haline gelmiştir.

RISC mimarisinin getirdiği avantajları ve kullanım alanlarını anlamak, bilgisayar teknolojilerinin evrimi ve gelişimi hakkında daha derin bir anlayış sağlar. Hem bilgisayar mühendisliği hem de endüstriyel uygulamalar açısından RISC mimarisi, teknoloji dünyasının öncü ve etkili bir parçası olmaya devam etmektedir.</p>
</div>

<div className="post">
<img className="postImg"
src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
<div className="postInfo">
   <div className="postCats">
       <span className="postCat">Tech</span>
       <span className="postCat">Code</span>
   </div>
   <span className="postTitle">Yazılım Dünyasına Adım Atmak: Hangi Programlama Dilinden Başlamalı?</span>
   <hr/>
   <span className="postDate">1 hour ago</span>
</div>
<p className="postDesc">Yazılım dünyasına adım atmak heyecan verici ama bir o kadar da kafa karıştırıcı olabilir. Başlangıçta hangi programlama dilini seçeceğinize karar vermek, adım atmanız gereken ilk zorlu adımlardan biridir. Hangi dilin sizin için doğru olduğunu anlamak için, projeleriniz, ilgi alanlarınız ve hedefleriniz göz önünde bulundurulmalıdır.

Python: Herkes İçin Başlangıç
Python, geniş bir kullanıcı kitlesi tarafından sevilen ve tavsiye edilen bir dil olarak öne çıkıyor. Okunabilir ve anlaşılır olması, çeşitli kullanım alanlarına sahip olması (veri analizi, yapay zeka, web geliştirme, otomasyon), yeni başlayanlar için ideal bir seçenek yapar.

JavaScript: Web Dünyasının Vazgeçilmezi
Web geliştirmede JavaScript temel bir gerekliliktir. Tarayıcı üzerinde etkileşimli web sayfaları oluşturmak için kullanılır. Herhangi bir web uygulamasının ön yüzü için pratik ve temel bir dildir.

Java ve C#: Büyük Projeler ve Endüstriyel Uygulamalar
Java ve C#, büyük ölçekli uygulamalar, kurumsal yazılımlar ve oyun geliştirme gibi alanlarda tercih edilir. Java özellikle Android uygulama geliştirme için oldukça yaygındır.

Ruby ve Ruby on Rails: Hızlı Web Geliştirme
Ruby ve Ruby on Rails, web geliştirme için hızlı ve verimli araçlar sunar. Basit ve okunabilir bir dil olan Ruby, web uygulamaları için etkili bir çözümdür.

Mobil Geliştirme: Swift ve Kotlin
Mobil uygulama geliştirme dünyasına girmek istiyorsanız, Swift (iOS için) veya Kotlin (Android için) dillerine odaklanabilirsiniz. Bu diller, sırasıyla iOS ve Android platformları için öne çıkan seçeneklerdir.

Hangi dil ile başlanacağı konusunda karar vermek, kişisel hedeflerinize, projelerinize ve ilgi alanlarınıza bağlıdır. Önemli olan, bir dil seçip başlayarak temel kavramları öğrenmeye ve pratik yapmaya başlamaktır. Unutmayın, en önemli şey başlamaktır; gerisi tecrübeyle gelir!</p>
</div>



</>
  );
}