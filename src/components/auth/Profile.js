import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

const Profile = (props) => {
    const {email, profile} = props;
    if (!email) return <Redirect to={'/signin'}/>;
    return (
        <div className={'container'}>
            <div className="center">
                <div className="card">
                    <h4 className={'title'}>Profile</h4>
                    <img src={profile.imageUrl} alt="myImage" className={'profileImg'}/>
                    <h3 className={'title'}>{profile.firstName} {profile.lastName}</h3>
                    <h4>{email}</h4>
                    <br/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        email: state.firebase.auth.email,
        profile: state.firebase.profile
    };
};
export default connect(mapStateToProps)(Profile);
