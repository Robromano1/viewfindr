import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config";

// Collection parameter = document where we want to get images from
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
		return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;