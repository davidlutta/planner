import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createProject} from "../../store/actions/ProjectActions";
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        titleError: '',
        contentError: ''
    };

    validate = () => {
        let titleError = '';
        if (!this.state.title) {
            titleError = 'Please Enter a Title';
            this.setState({
                titleError,
                contentError: null
            });
            return false;
        }
        let contentError = '';
        if (!this.state.content) {
            contentError = 'Please Enter some content';
            this.setState({
                contentError,
                titleError: null
            });
            return false;
        }
        return true;
    };
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.props.createProject(this.state);
            this.setState({
                title: '',
                content: '',
            });
            this.props.history.push('/');
        }
    };

    render() {
        const {auth} = this.props;
        if (!auth.uid) return <Redirect to={'/signin'}/>;
        return (
            <div className={"container"}>
                <form className="card white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <br/>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.titleError}
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="red-text center">
                        {this.state.contentError}
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        createProject: (project) => dispatch(createProject(project))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);
