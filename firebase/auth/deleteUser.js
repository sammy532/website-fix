import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, deleteUser } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function deleteFB(user) {
    console.log("deleting user: ", user)
    let resultDelete = null,
        errorDelete = null;
    try {
        resultDelete = await deleteUser(user);
        console.log("result of deleting user: ", user)
    } catch (e) {
        errorDelete = e;
        console.log("error of deleting user: ", error)
    }
    return { resultDelete, errorDelete };
}
