export function isMobile() { 
    return (/(iPad|iPhone|iPod|Android|BlackBerry|Opera Mini|IEMobile)/g.test(navigator.userAgent));
};


export function preloadImages(images) {
	
    return Promise.all(images.map(item => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(img);
            img.src = item;
        })
    }));
};