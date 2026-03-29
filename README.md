# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# react_2026_z_to_h



# React Formik, React State, Formik.jsx and Home.jsx  
Tamam — sana bunu **tek parça, kitapçık gibi okunacak şekilde**, kesintisiz ve düzgün bir anlatım olarak veriyorum. Direkt notlarına koyabilirsin.

---

# 📘 React Event ve State Yönetimi — Detaylı Not

React’te en önemli konulardan biri event (olay) yönetimi ve state (durum) kontrolüdür. Bu iki kavram doğru anlaşılmadan React’te sağlıklı ve ölçeklenebilir uygulamalar geliştirmek mümkün değildir. Bu nedenle React’in çalışma mantığını şu temel model üzerinden düşünmek gerekir: **Event → State değiştirir → UI güncellenir**. Yani kullanıcı bir işlem yapar (click, input, hover), bu işlem state’i değiştirir ve React bu state değişimine göre arayüzü yeniden render eder.

İlk önemli konu event handler kullanımıdır. React’te event handler yazarken en kritik hata, fonksiyonu çağırmak ile fonksiyonun referansını vermek arasındaki farkı bilmemektir. Eğer bir handler şu şekilde yazılırsa `onClick={handleClick()}`, bu durumda fonksiyon render sırasında hemen çalışır ve event beklenmez. Doğru kullanım `onClick={handleClick}` şeklindedir. Bu durumda React fonksiyonun kendisini referans olarak alır ve sadece event gerçekleştiğinde çalıştırır. Bu, React’te en temel kurallardan biridir.

Bir diğer önemli konu expression ve side-effect farkıdır. React’te sadece bir değeri döndürmek state’i değiştirmez. Örneğin `condition ? world : setWorld('peace')` gibi bir kullanımda, eğer condition true ise sadece `world` değeri okunur ve hiçbir değişiklik yapılmaz. State değişimi yapmak için mutlaka bir fonksiyon çağrılmalıdır. Yani `setWorld` gibi bir state setter fonksiyonunun çalıştırılması gerekir. Bu nedenle state değişimi her zaman bir side-effect’tir ve açık şekilde yapılmalıdır.

State güncellerken yapılan en kritik hatalardan biri de mevcut state’i doğrudan kullanmaktır. Örneğin `setWorld(world === 'Hello' ? 'peace' : 'Hello')` gibi bir kullanım bazı durumlarda hatalı sonuç verebilir çünkü React state güncellemelerini asenkron yapar. Bu yüzden doğru yaklaşım `prev` kullanmaktır. `setWorld(prev => prev === 'Hello' ? 'peace' : 'Hello')` şeklinde yazıldığında React her zaman en güncel state üzerinden işlem yapar. Özellikle toggle işlemlerinde bu yöntem zorunludur.

Form yönetimi de önemli bir konudur. React’te `onChange` ve `onSubmit` event’leri farklı amaçlara hizmet eder. `onChange`, input alanındaki değeri almak için kullanılır ve burada `event.target.value` doğrudur çünkü event’in target’ı input elementidir. Ancak `onSubmit` event’inde target form’dur ve form’un value’su olmadığı için buradan değer alınamaz. Bu yüzden form submit edildiğinde state’te tutulan değer kullanılmalıdır. Ayrıca `event.default.value` gibi bir kullanım React veya JavaScript’te yoktur ve tamamen hatalıdır.

Input’ların doğru kullanımı için controlled component mantığı benimsenmelidir. Eğer bir input sadece `onChange` ile kullanılırsa bu uncontrolled olur ve React state ile senkronize çalışmaz. Doğru kullanım `value={value} onChange={handleChange}` şeklindedir. Bu sayede input’un değeri tamamen React state tarafından kontrol edilir ve tek bir veri kaynağı oluşur.

Daha ileri bir konu olarak function’ların state içinde tutulması vardır. React’te bir fonksiyonu state’e koymak mümkündür ancak burada çok kritik bir fark vardır: fonksiyon çağrılmaz, referans olarak saklanır. Örneğin `setMouseHandler(handleMouseLeave())` tamamen yanlıştır çünkü fonksiyon hemen çalışır ve state’e sonucu (genelde undefined) koyulur. Doğru kullanım `setMouseHandler(handleMouseLeave)` şeklindedir. Yani fonksiyonun kendisi saklanır, çalıştırılmaz.

Fonksiyon state’e ilk değer olarak verilirken de dikkat edilmelidir. `useState(handleMouseEnter)` yazımı bazı durumlarda risklidir çünkü React bunu initializer olarak yorumlayabilir. Doğru ve güvenli kullanım `useState(() => handleMouseEnter)` şeklindedir. Bu, lazy initialization olarak adlandırılır ve fonksiyonun yanlışlıkla çalıştırılmasını engeller.

Event abstraction konusu da önemli bir detaydır. Eğer aynı handler hem `onMouseEnter` hem de `onMouseLeave` için kullanılıyorsa, hangi event’in geldiğini anlamak için `event.type` kontrol edilmelidir. Aksi takdirde enter ve leave event’leri ayırt edilemez. Örneğin tek bir fonksiyon içinde `if (event.type === 'mouseenter')` ve `if (event.type === 'mouseleave')` şeklinde kontrol yapılmalıdır. Bu, aynı handler ile farklı event’leri yönetmenin doğru yoludur.

Function toggle pattern ise daha ileri bir konudur. Bu yaklaşımda state içinde bir fonksiyon tutulur ve bu fonksiyon koşula göre değiştirilir. Örneğin bir handler’ın `handleMouseEnter` ve `handleMouseLeave` arasında toggle edilmesi mümkündür. Bu teknik doğru olsa da React’te yaygın kullanılan bir yöntem değildir ve genellikle özel durumlar için kullanılır. Çünkü React’in temel felsefesi davranışı değil, durumu (state) yönetmektir.

Bu noktada en önemli kavram React’in mental modelidir. React’te state, UI’ın nasıl görüneceğini belirler. Event’ler sadece state’i değiştiren tetikleyicilerdir. Fonksiyonlar ise bu değişimi gerçekleştiren araçlardır. Doğru yaklaşım state’i boolean, string veya obje gibi veri tipleri ile tutmak ve UI’ı buna göre güncellemektir. Fonksiyonları state içinde tutarak UI kontrol etmek genellikle yanlış bir abstraction’dır.

Özet olarak, React’te doğru mimari şu şekilde olmalıdır: kullanıcı bir event tetikler, bu event bir state değişikliğine neden olur ve React bu state’e göre UI’ı yeniden render eder. Yanlış yaklaşım ise event’ler veya fonksiyonlar üzerinden doğrudan UI kontrol etmeye çalışmaktır. Bu, karmaşık ve hataya açık kodlara yol açar.

Sonuç olarak bu konular React’te junior seviyeden mid seviyeye geçişte kritik rol oynar. Event yönetimi, controlled component kullanımı, prev ile state güncelleme ve doğru mental model oturduğunda React uygulamaları daha öngörülebilir, maintainable ve scalable hale gelir. Bu bilgilerin büyük kısmı mülakatlarda doğrudan veya dolaylı olarak sorulur ve doğru anlaşılması ciddi bir avantaj sağlar.

---

İstersen bundan sonra sana bu metinden direkt **mülakat soruları + cevapları** çıkarabilirim.






React’te `onClick` gibi event handler’lar ile çalışırken en kritik nokta, **fonksiyonu çağırmak ile fonksiyonun referansını vermek arasındaki farkı doğru anlamaktır**.

Bir component render edildiğinde React, JSX içindeki ifadeleri hemen çalıştırır. Eğer sen `onClick={handleClick()}` şeklinde yazarsan, burada aslında React’e bir fonksiyon vermiyorsun; tam tersine, `handleClick` fonksiyonunu **o anda çalıştırıyorsun** ve onun döndürdüğü sonucu `onClick`’e atamış oluyorsun. Bu da şu anlama gelir: butona tıklamayı beklemeden, component render edilir edilmez `handleClick` çalışır. Eğer içinde `alert` varsa sayfa açılır açılmaz çıkar. Ayrıca `onClick` artık bir fonksiyon değil, fonksiyonun sonucu olur — bu da çoğu zaman hataya yol açar.

Doğru kullanım olan `onClick={handleClick}` ise tamamen farklıdır. Burada React’e diyorsun ki: “Bu fonksiyonu sakla, kullanıcı butona tıkladığında çalıştır.” Yani sen fonksiyonu çağırmıyorsun, sadece referansını veriyorsun. React de event gerçekleştiğinde bu fonksiyonu kendisi çağırıyor. Bu hem doğru davranış sağlar hem de performans açısından daha verimlidir çünkü her render’da yeni bir fonksiyon oluşturulmaz.

Bir de `onClick={() => handleClick()}` kullanımı var. Bu teknik olarak doğrudur çünkü burada React’e bir fonksiyon veriyorsun (arrow function). Ancak çoğu durumda gereksizdir. Çünkü her render’da yeni bir anonim fonksiyon oluşturulur. Bu küçük projelerde sorun yaratmaz ama büyük projelerde gereksiz re-render ve performans maliyetine neden olabilir. Bu yüzden sadece gerçekten ihtiyaç varsa kullanılmalıdır.

Bu kullanımın gerekli olduğu durum ise, fonksiyona parametre geçirmek istediğin zamandır. Örneğin `handleClick(id)` gibi bir kullanımda, doğrudan `onClick={handleClick(id)}` yazamazsın çünkü yine hemen çalışır. Bu durumda `onClick={() => handleClick(id)}` yazman gerekir. Burada arrow function, click anında çalışacak bir wrapper görevi görür.

Özetle React’te event kullanırken temel kural şudur: **Fonksiyonu çağırma, referansını ver.** Eğer parametre gerekiyorsa, o zaman arrow function ile sarmala. Bu ayrımı doğru anlamak, React’te hem doğru davranışı hem de performansı kontrol edebilmenin temelidir.

---

React’te **prop drilling**, bir verinin ya da fonksiyonun (örneğin bir `handleClick` event handler’ının) üst component’ten en alt component’e kadar **birden fazla ara component üzerinden props ile taşınması** durumudur.

React’in veri akışı yukarıdan aşağıya olduğu için, bir state veya fonksiyon genellikle en üst seviyede tanımlanır. Ancak bu veri yalnızca en alttaki component’te kullanılacak olsa bile, aradaki tüm component’lerden props olarak geçirilmek zorundadır. Bu durumda bazı component’ler bu veriyi kullanmadığı halde sadece iletmek için almak zorunda kalır.

Bu durum küçük projelerde problem yaratmaz. Ancak uygulama büyüdükçe, props’ların katman katman taşınması kodun okunabilirliğini azaltır, bakımını zorlaştırır ve component’ler arasında gereksiz bağımlılıklar oluşturur. Özellikle aynı veri birçok farklı yerde kullanılacaksa, bu yapı hızla karmaşık hale gelir.

Bu nedenle prop drilling, React’in doğal bir sonucu olsa da büyük projelerde yönetilmesi gereken bir problemdir. Bu problemi çözmek için genellikle **Context API**, Redux veya Zustand gibi state management çözümleri kullanılır. Bu sayede veri, aradaki component’lere props olarak taşınmadan doğrudan ihtiyaç duyulan yerde kullanılabilir.

Özetle, React’te event handler’lar çoğu zaman üst component’te tanımlanır ve props aracılığıyla alt component’lere aktarılır. Bu aktarım derinleştikçe **prop drilling** ortaya çıkar. Bu yüzden belirli bir noktadan sonra daha merkezi veri yönetimi yaklaşımlarına geçmek gerekir.


