import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// state に store のデータが入っていて、ここで必要なものを取り出しオブジェクトにして返す
// この返した結果が、SongList コンポーネントの this.props に入ってくるので、this.props.songs でアクセスできる。
const mapStateToProps = state => {
    return {songs: state.songs};
}

// connect(mapStateToProps, {selectSong}) の結果が関数であり、その関数に引数として SongList を渡して実行している
export default connect(
    mapStateToProps, // mapStateToProps を渡すことで、this.props.songs に state.songs の値が入ってくるようになるので、store のデータにアクセスできる
    {selectSong}  // {selectSong} を渡すことで、this.props.selectSong に actionCreator を含んだ dispatch 関数が入ってくるので、引数を渡して dispatch できる
)(SongList);
