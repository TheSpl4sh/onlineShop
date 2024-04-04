import cx from "classnames";

// import "./Modal.scss";



const Modal = ({children, classNames})=>{
    const isActive = true || true && false && (true ||false)
    return(
        <div className={cx("modal", classNames,{'active':isActive})}>
            <div className={cx("modal-box", classNames)}>
                {children}
            </div>
        </div>
    )
}


export default Modal;