// CHAUFFEUR
export const logo = '/static/images/logo.png';
export const car1 = '/static/images/car1.jpeg';
export const car2 = '/static/images/car2.png';
export const car3 = '/static/images/car3.png';
export const car4 = '/static/images/car4.jpg';
export const car5 = '/static/images/shaufferBanner.png';
export const car6 = '/static/images/car6.jpg';
export const car7 = '/static/images/car7.jpg';
export const car8 = '/static/images/car8.jpg';
export const services1 = '/static/images/services1.jpg';
export const services2 = '/static/images/services2.jpg';
export const services3 = '/static/images/services3.jpg';
export const services4 = '/static/images/services4.jpeg';
export const groundImage = '/static/images/black.jpg';

export const locationSvgPath = 'M256 0C153.755 0 70.573 83.182 70.573 ';
export const getImageFile = async (arrayBuffer: string, fileName: string): Promise<File> => {
    const blob = await fetch(arrayBuffer).then((response) => response.blob());
    const image = new File([blob], fileName, {type: blob.type.split('/')[1]});
    return image;
};
