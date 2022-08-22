import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";


export const getPost = (postId) => {
    return new Promise ((resolve, regect) => {
        const db = getFirestore();
        getDoc(doc(db, 'posts', postId))
            .then(response => {
                const post = { id: response.id, ...response.data() }
                resolve(post)
            })
            .catch(error => {
                regect(error)
            })
    })
}

export const getPostList = (categoryId) => {
    return new Promise ((resolve, regect) => {
        let postsCollection = {}
      //  const db = getFirestore();
        categoryId
        ? postsCollection = query(collection(getFirestore(), "posts"), where ("category", "==", categoryId ))
        : postsCollection = collection(getFirestore(), "posts")

        getDocs(postsCollection )
            .then(response => {
                const posts = (response.docs.map((e) => ({ id: e.id, ...e.data()})))
                 resolve(posts)
                
            })
            .catch(error => {
                regect(error)
            })
    })
}



    // useEffect(() =>{
  //   const db = getFirestore();
  //   const postsCollection = collection(db, "posts");
  //   getDocs(postsCollection).then((response) => {
  //     setPost(response.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
  //   });
  // }, []);



// useEffect(() =>{
//     const db = getFirestore();
//     const postsDetail = doc(db, "posts", postId);
//     getDoc(postsDetail).then((snapshot) => {
//       if (snapshot.exists()){
//         setPost({ id: snapshot.id, ...snapshot.data() })
//       }      
//     });

//   }, [postId]);