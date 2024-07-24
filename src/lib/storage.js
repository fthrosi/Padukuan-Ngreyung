import { storage } from "@/service/firebase";
import { ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import { nanoid } from "nanoid";


export const uploadFile = async (file, folder) => {
    try {
        const fileName = nanoid();
        const filePath = `${folder}${fileName}.${file.name.split(".").pop()}`;
        const storageRef = ref(storage, filePath);
        await uploadBytes(storageRef, file);
        return filePath;
    } catch (error) {
        throw error;
    }
}

export const getFile = async (path) => {
    try {
        const fileRef = ref(storage, path);
        return getDownloadURL(fileRef);
    } catch (error) {
        throw error;
    }
}
export const deleteFile = async (path) =>{
    try{
        const fileRef = ref(storage, path);
        const res = await deleteObject(fileRef)
        return res;
    }catch{
        
    }
}