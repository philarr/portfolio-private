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

export function formatTime(hour, min, sec) {
	if (hour < 0) hour += 24;
	const fHour = (hour > 12) ? (hour - 12) : hour;
	const fMin = (min > 9) ? min : ('0' + min);
	const fSec = (sec > 9) ? sec : ('0' + sec);
	const AMPM = hour >= 12 ? 'PM' : 'AM';
	return ((fHour === 0 ? '12' : fHour)  + ':' + fMin + ':' + fSec + ' ' + AMPM);
}