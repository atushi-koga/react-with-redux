import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetail extends Component {
    renderDetail() {
        if (!this.props.selectSong) {
            return '';
        }

        return (
            <div>
                <div>{this.props.selectSong.title}</div>
                <div>{this.props.selectSong.duration}</div>
            </div>
        )
    }

    render() {
        return this.renderDetail();
    }
}

const mapStateToProps = state => {
    return {selectSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);