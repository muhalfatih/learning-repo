export default function TabButton({ children, isSelected, ...props }) {
    // function handleClick() {
    //     console.log(`Hello ${children}`);
    // }
    console.log('COMPONENT COMPONENT EXECUTING~');

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}