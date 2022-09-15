import './Button.scss';

const Button = ({buttonAction,buttonText}) =>{

    return( <div className='filterList_button'>
    <button onClick={buttonAction}>{buttonText}</button></div>)
}

export default Button;