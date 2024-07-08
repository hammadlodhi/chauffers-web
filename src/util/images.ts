// TAABEH
export const logo = '/static/images/shauffers.png';
export const groundImage = '/static/images/black.jpg';

export const locationSvgPath = 'M256 0C153.755 0 70.573 83.182 70.573 ';
export const getImageFile = async (arrayBuffer: string, fileName: string): Promise<File> => {
    const blob = await fetch(arrayBuffer).then((response) => response.blob());
    const image = new File([blob], fileName, {type: blob.type.split('/')[1]});
    return image;
};
