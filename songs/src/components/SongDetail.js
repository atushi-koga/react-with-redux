import React from 'react';
import {connect} from 'react-redux';

// 引数にはオブジェクト {song: ..., dispatch: ...} が渡されるが必要なのは song のみなので、分割代入 (Destructuring assignment) している
const SongDetail = ({song}) => {
    if (!song) {
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Details for</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = state => {
    return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);
