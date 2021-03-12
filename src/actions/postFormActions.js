import { SEARCH_POST } from './types'

const searchPost = ({query}) => dispatch => {

    fetch(`http://hn.algolia.com/api/v1/search?query=${query}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(posts => dispatch({
            type: SEARCH_POST,
            payload: {
                results: posts,
                history: query
            }
        }))

}

export default searchPost;


