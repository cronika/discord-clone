import React, { useEffect, useState } from 'react'
import { onSnapshot, collection, query, DocumentData, Query } from 'firebase/firestore';
import { db } from '../firebase';

interface Channels {
  id: string,
  channel: DocumentData;
}

const useCollection = (data: string) => {

  const [documents, setDocuments] = useState<Channels[]>([]);

  const collectionRef: Query<DocumentData> = query(collection(db, "Channels"));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResult: Channels[] = [];
      querySnapshot.docs.forEach((doc) => 
        channelsResult.push({
          id: doc.id,
          channel:doc.data(),
        })
      );
      setDocuments(channelsResult);
    });
  }, []);
  return { documents }
}

export default useCollection
