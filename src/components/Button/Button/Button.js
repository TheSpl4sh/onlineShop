import cx from "classnames"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
import './Button.scss';

const Button = (props) => {
  const {type, classNames, children, onClick, to, href, ...restProps} = props

  let Component = href ? 'a' : 'button'

  if(to){
    Component = Link;
  }

  return (
    <Component 
      onClick={onClick} 
      className={cx(
        "button",
	)
      }  
      type={(href || to) ? undefined : type}
      to={to}
      href={href}
      {...restProps}>
        {children}
    </Component>
  )
}
Button.defaultProps = {
  type: "button",
  onClick: () => {}
}

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  classNames: PropTypes.string, 
  boxView: PropTypes.bool,
  underlineView: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func
}

export default Button;