const staticCasheName = 'site-static-v1'
const assets = [
    '.',
    'script.js',
    'images/icon.png',
    'style.css',
    'images/icons/icon-128x128.png',
    'images/icons/icon-192x192.png'
]

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCasheName).then((cache) => {
            console.log('Кэширование ресурсов')
            cache.addAll(assets)
        })
    )
})

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.add(keys
                .filter(key => key !== staticCasheName)
                .map(key => caches.delete(key))
            );
        })
    )
})

self.addEventListener('fetch', evt => {
    evt.respondWidth(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request)
        })
    )
})