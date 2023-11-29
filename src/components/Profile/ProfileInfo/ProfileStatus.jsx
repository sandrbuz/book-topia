import React from "react";
import { profileAPI } from "../../../api/api";
import { updateStatus } from "../../../redux/profile-reducer";


class ProfileStatus extends React.Component {
    // 

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => { //for the arrow function ".bind(this)" is not necessary
        //console.log('This:', this) //for 72 lesson
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {  //for this function ".bind(this)" is  necessary
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }



    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" />
                    </div>
                }

            </div>
        )
    }

}

export default ProfileStatus;