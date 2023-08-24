import cl from './Checkbox.module.scss';

const Checkbox = ({ children, checked }) => {
    return (
        <label className={cl.container}>
            <input type="checkbox" checked={checked} />
            {children}
        </label>
    );
};

export default Checkbox;
