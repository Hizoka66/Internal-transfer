// Service Worker พื้นฐานเพื่อให้ผ่านเงื่อนไขการติดตั้ง PWA
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
    // ไม่ต้องทำ Cache อะไร ปล่อยผ่านให้หมด เพราะเราต้องการดึงข้อมูลใหม่เสมอ
});
