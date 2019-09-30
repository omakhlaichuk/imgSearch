import React from 'react';

class ImageCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    };

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10)+1;
        this.setState({spans:spans})
    };

    render() {
        const { description, urls } = this.props.image;
        return (
            <div  style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <a href={urls.regular} target="_blank" rel="noopener noreferrer">
                <img ref={this.imageRef} alt={description} src={urls.regular} style={{ maxWidth: `${this.props.imgWidth}px`}} />
                </a>
            </div>
        )
    }
}

export default ImageCard;