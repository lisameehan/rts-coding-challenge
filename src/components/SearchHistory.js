import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const intitialState = [];

class Posts extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.posts) {
            intitialState.unshift(nextProps.posts.history)
        }
    }

    render() {
      
        const postItems = intitialState.map((entry, index) => (
                      
                <div key={index}>{entry}</div>
            
        ))

        return (
            <aside class="sidebar">
                <h1>Search History</h1>
                {postItems}
            </aside>
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

