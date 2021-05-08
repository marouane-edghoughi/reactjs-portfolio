import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };

    return <div style={{ ...style, ...thumbStyle }} />;
};

function CustomScrollbars() {

    return(
        <Scrollbars
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
            autoHide
            autoHideTimeout={500}
            autoHideDuration={200}
        />
    );
}

export default CustomScrollbars;