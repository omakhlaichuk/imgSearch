import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'

import './ImageList.css';
import ImageCard from './ImageCard';

const maxImgWidth = col => {
    return col !== "auto-fill" ? Math.floor((document.getElementsByClassName("container")[0].clientWidth - (col - 1) * 10) / col) : 250;
}

class ImageList extends React.Component {
    render() {
        if (this.props.images.length && this.props.colunms.values) {
            const col = this.props.colunms.values.colNum || "auto-fill";
            const imgWidth = maxImgWidth(col);
            return (
                <Container>
                    <div className="image-list" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${imgWidth}px,1fr))` }}>
                        {this.props.images.map(img => { return <ImageCard key={img.id} image={img} imgWidth={imgWidth} /> })}
                    </div>
                </Container>
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
