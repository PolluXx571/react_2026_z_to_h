# React useEffect Rehberi

# useEffect Nedir?

`useEffect`, React component'i render edildikten sonra belirli işlemleri çalıştırmak için kullanılan bir Hook'tur.

```jsx
useEffect(() => {
  // çalışacak kod
}, []);
```

---

# Neden Var?

React'ın temel mantığı:

```text
UI = State
```

Bir state değişir.

↓

React yeniden render eder.

Ancak bazı işlemleri render sırasında yapmak doğru değildir.

Örnek:

- API çağrısı yapmak
- Timer başlatmak
- Event listener eklemek
- LocalStorage okumak
- WebSocket bağlantısı kurmak

Bu işlemlere **Side Effect (Yan Etki)** denir.

useEffect bu yan etkileri yönetmek için vardır.

---

# Side Effect Nedir?

Component'in dış dünyayla iletişim kurmasıdır.

## Side Effect Örnekleri

```javascript
fetch()

setTimeout()

setInterval()

addEventListener()

localStorage

WebSocket
```

## Side Effect Olmayanlar

```javascript
const total = price * quantity;

const fullname = first + last;
```

Bunlar sadece veri hesaplamasıdır.

---

# Ne İçin Kullanılır?

## 1. API Çağrısı

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);
```

---

## 2. Event Listener

```jsx
useEffect(() => {

  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

}, []);
```

---

## 3. Timer

```jsx
useEffect(() => {

  setInterval(() => {
    console.log("çalışıyor");
  }, 1000);

}, []);
```

---

## 4. LocalStorage

```jsx
useEffect(() => {

  const token = localStorage.getItem("token");

  console.log(token);

}, []);
```

---

# Ne Zaman Kullanılır?

Kendine şu soruyu sor:

> Bu işlem component render edildikten sonra mı çalışmalı?

Evet ise büyük ihtimalle useEffect kullanılır.

| İşlem | useEffect |
|------|-----------|
| API çağrısı | ✅ |
| Timer | ✅ |
| Event Listener | ✅ |
| LocalStorage | ✅ |
| WebSocket | ✅ |
| Matematik işlemi | ❌ |
| String birleştirme | ❌ |
| Filtreleme | ❌ |

---

# useEffect Nasıl Çalışır?

## 1. Her Render Sonrası

```jsx
useEffect(() => {
  console.log("çalıştı");
});
```

Dependency array yok.

Her render sonrası çalışır.

---

## 2. İlk Açılışta 1 Kere

```jsx
useEffect(() => {
  console.log("1 kere çalıştı");
}, []);
```

Boş dependency array.

---

## 3. Belirli State Değişince

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log("count değişti");
}, [count]);
```

count değiştiğinde çalışır.

---

# Cleanup Function

Bazı işlemler component kapandığında temizlenmelidir.

```jsx
useEffect(() => {

  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };

}, []);
```

Bu return kısmına Cleanup Function denir.

---

# useEffect Ezberleme Mantığı

Şu cümleyi ezberle:

> React önce ekranı çizer, sonra useEffect çalışır.

---

# Modern React'ta useEffect Yerine Neler Kullanılıyor?

Önemli bilgi:

> useEffect'in alternatifi yoktur.

Çünkü useEffect bir problem çözmez.

Yan etkileri yönetir.

Ancak insanlar çoğu zaman gereksiz yere kullanırlar.

---

# 1. Normal JavaScript

## Yanlış

```jsx
const [fullName, setFullName] = useState("");

useEffect(() => {
  setFullName(`${firstName} ${lastName}`);
}, [firstName, lastName]);
```

## Doğru

```jsx
const fullName = `${firstName} ${lastName}`;
```

---

# 2. Filtreleme İçin useEffect Kullanmak

## Yanlış

```jsx
const [activeUsers, setActiveUsers] = useState([]);

useEffect(() => {
  setActiveUsers(
    users.filter(user => user.active)
  );
}, [users]);
```

## Doğru

```jsx
const activeUsers =
  users.filter(user => user.active);
```

---

# 3. Sıralama İçin useEffect Kullanmak

## Yanlış

```jsx
const [sortedProducts, setSortedProducts] = useState([]);

useEffect(() => {
  setSortedProducts(
    [...products].sort()
  );
}, [products]);
```

## Doğru

```jsx
const sortedProducts =
  [...products].sort();
```

---

# 4. useMemo

Ağır işlemler için kullanılır.

```jsx
const filteredUsers = useMemo(() => {

  return users.filter(
    user => user.active
  );

}, [users]);
```

Her yerde kullanılmaz.

Sadece pahalı hesaplamalarda kullanılır.

---

# 5. Event Handler Kullanmak

## Yanlış

```jsx
const [clicked, setClicked] = useState(false);

useEffect(() => {

  if (clicked) {
    saveData();
  }

}, [clicked]);

<button onClick={() => setClicked(true)}>
  Kaydet
</button>
```

## Doğru

```jsx
function handleSave() {
  saveData();
}

<button onClick={handleSave}>
  Kaydet
</button>
```

---

# 6. Veri Yönetim Kütüphaneleri

Eskiden:

```jsx
useEffect(() => {
  fetchData();
}, []);
```

Günümüzde:

- TanStack Query
- SWR

Örnek:

```jsx
const { data, isLoading } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

Cache, loading, retry gibi işleri kütüphane yönetir.

---

# Özet Tablo

| İhtiyaç | Kullan |
|--------|--------|
| State'ten değer üretmek | Normal JS |
| Ağır hesaplama | useMemo |
| Buton işlemleri | Event Handler |
| API yönetimi | TanStack Query |
| Sunucu verisi | Server Components |
| Gerçek yan etki | useEffect |

---

# Gerçek useEffect Kullanım Alanları

Buralarda hala kullanılır:

✅ API çağrısı (küçük projelerde)

✅ Timer

```javascript
setInterval

setTimeout
```

✅ Event Listener

```javascript
window.addEventListener()
```

✅ WebSocket

✅ LocalStorage

✅ Harici Kütüphaneler

```javascript
Chart.js

Leaflet

Google Maps
```

---

# Altın Kural

Kendine şu soruyu sor:

> Ben gerçekten dış dünyayla mı konuşuyorum, yoksa elimdeki veriyi mi dönüştürüyorum?

Dış dünya → useEffect

Veri dönüştürme → useEffect kullanma

Bu ayrımı yapabilirsen gereksiz useEffect kullanımının büyük kısmını ortadan kaldırırsın.