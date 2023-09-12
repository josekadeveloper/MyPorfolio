import { useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { messagePopup } from "../MessagePopup/index.js";
import { useTranslation } from "react-i18next";

const Home = () => {
    const form = useRef();
    const [t] = useTranslation("global");

    const submitPortfolio = (e) => {
        e.preventDefault();

        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        portfolio.timestamp = serverTimestamp();
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            messagePopup(t("home.success"), 'success');
        } catch (error) {
            messagePopup(t("home.error"), 'error');
        }
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="Name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home;