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

export function formatTime(utc) {

	const date = new Date();
	let hour = date.getUTCHours() + utc;
	let min = date.getUTCMinutes(); 
	let sec = date.getUTCSeconds();

	if (hour < 0) hour += 24;
	const fHour = (hour > 12) ? (hour - 12) : hour;
	const fMin = (min > 9) ? min : ('0' + min);
	const fSec = (sec > 9) ? sec : ('0' + sec);
	const AMPM = hour >= 12 ? 'PM' : 'AM';
	return ((fHour === 0 ? '12' : fHour)  + ':' + fMin + ':' + fSec + ' ' + AMPM);
}

export function isDST() {
    const date = new Date();
    var jan = new Date(date.getFullYear(),0,1);
    var jul = new Date(date.getFullYear(),6,1);
    return Math.min(jan.getTimezoneOffset(),jul.getTimezoneOffset()) == date.getTimezoneOffset(); 
}

