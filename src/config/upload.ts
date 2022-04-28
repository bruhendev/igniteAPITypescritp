import multer from "multer";
import crypto from "crypto"
import { resolve } from "path"

export default {


    upload(folder: string) {
        return {
            storage: multer.diskStorage({

                destination: (req, file, cb) => {
                    cb(null, resolve(__dirname, "..", "..", folder))
                },
                filename: (req, file, cb) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`;
                    cb(null, fileName)
                }
            })
        }
    }

    // upload(folder: string) {
    //     return {
    //         storage: multer.diskStorage({
    //             destination: resolve(__dirname, "..", "..", folder),
    //             filename: (reques, file, callback) => {
    //                 const fileHash = crypto.randomBytes(16).toString("hex");
    //                 const fileName = `${fileHash}-${file.originalname}`;

    //                 return callback(null, fileName);
    //             }
    //         })
    //     }
    // }
}