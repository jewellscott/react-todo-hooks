import PropTypes from 'prop-types'
import Button from './Button'

const onClick = () => {
    console.log('Click');
}

const Header = ({ title }) => {
  return (
    <header>
        <h1>
            { title }
        </h1>
        <Button color= 'green' text='Hello' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: 'React Todo',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

/*
css-in-js

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}

*/
export default Header