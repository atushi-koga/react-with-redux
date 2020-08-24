import React from 'react';
import {connect} from 'react-redux';

const renderDetail = props => {
    if (!props) {
        return <div>Select a song</div>;
    }

    return (
        <div>
            <h3>Details for</h3>
            <p>
                Title: {props.title}
                <br/>
                Duration: {props.duration}
            </p>
        </div>
    )
}

const SongDetail = props => {
    return renderDetail(props.selectSong);
}

const mapStateToProps = state => {
    return {selectSong: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);