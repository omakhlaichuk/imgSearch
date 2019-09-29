import React from 'react';
import { connect } from 'react-redux';

import './ImageList.css';
import ImageCard from './ImageCard';

const maxImgWidth = col => {
    return Math.floor((document.documentElement.clientWidth - (col - 1) * 10) / col)
}

class ImageList extends React.Component {
    render() {

        if (this.props.images.length) {
            const col = this.props.colunms.values.colNum //auto-fill
            const imgWidth = maxImgWidth(col);
            return (
                <div className="image-list" style={{ gridTemplateColumns: `repeat(${col}, minmax(${imgWidth}px,1fr))` }}>
                    {this.props.images.map(img => { return <ImageCard key={img.id} image={img} imgWidth={imgWidth} /> })}</div>
            )
        } else { return null }

    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        colunms: state.form.imageSearch
    }
};

export default connect(mapStateToProps, {})(ImageList);
