import { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import searchPost from '../actions/postFormActions'

class Postsform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            query: this.state.query
        }
        this.props.searchPost(post)

        //clear form after submit
        this.setState({
            query: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} class="searchForm">
                    <div>
                        <label>Search: </label>
                        <input type="text" name="query" value={this.state.query} onChange={this.onChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postsform.propTypes = {
    searchPost: PropTypes.func.isRequired
}

export default connect(null, { searchPost }) (Postsform);
