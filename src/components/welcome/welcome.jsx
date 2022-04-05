import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './welcome.module.css';

const Welcome = (props) => {
    const { firstname, lastname, number } = props;
    const styleName = classNames(style.name, style.bold);

    return (
        <>
            <p>Bonjour
                <span className={styleName}>
                    {firstname} {lastname}
                </span>.
            </p>
            <p className={style.number}>Votre numero est {number} !</p>
        </>
    );
};

Welcome.defaultProps = {
    number: 13
};

Welcome.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string,
    number: PropTypes.number
};

export default Welcome;
