import { BASE_URL } from "./ApiConstants"

class ArticleService {

    fetchPosts = () => {
        return fetch(`${BASE_URL}posts`)
        .then(res => res.json())
    }

    fetchPostById = (id) => {
        return fetch(`${BASE_URL}posts/${id}`)
        .then(res => res.json())
    }
    
}

export default new ArticleService()