import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const formatDate = (date) => {
    const creationDate = new Date(date);
    return `${creationDate.getMonth()}/${creationDate.getDay()}/${creationDate.getFullYear()}`
}

class Posts extends Component {

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.newPost) {
            this.props.results.posts = [...nextProps.newPost]
        }
      }

    render() {
        if(!this.props.posts.results){
            return (<div class="searchResults">No Search Results</div>)
        }

        const searchResults = this.props.posts.results.hits.map(post => (
            <div key={post.objectID}>              
                <h4><a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a> <small>{formatDate(post.created_at)}</small></h4>
            </div>
        ))

        return (
            <div class="searchResults">
                <h1>Search Results</h1>
                {searchResults}
            </div>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    posts: state.posts.items
  });

export default connect(mapStateToProps)(Posts);
