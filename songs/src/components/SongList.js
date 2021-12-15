import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

const SongList = props => {
    const renderList = () => {
        return props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }
    return (
        <div className="ui divided list">{renderList()}</div>
    );
}

// state に store のデータが入っていて、ここで必要なものを取り出しオブジェクトにして返す
// この返した結果が、SongList コンポーネントの props に入ってくるので、props.songs でアクセスできる。
const mapStateToProps = state => {
    return {songs: state.songs};
}

// connect(mapStateToProps, {selectSong}) の結果が関数であり、その関数に引数として SongList を渡して実行している
export default connect(
    mapStateToProps, // mapStateToProps を渡すことで、props.songs に state.songs の値が入ってくるようになるので、store のデータにアクセスできる
    {selectSong}  // {selectSong} を渡すことで、props.selectSong に actionCreator を含んだ dispatch 関数が入ってくるので、引数を渡して dispatch できる
)(SongList);
