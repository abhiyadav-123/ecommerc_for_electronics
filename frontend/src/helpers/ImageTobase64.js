const ImageTobase64 = async (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);

    const data = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);  // Added semicolon and fixed spacing
    });

    return data;
};

export default ImageTobase64;
