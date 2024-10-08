const Run: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg
            viewBox="0 0 25 24"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.5 11.9999V8.43989C4.5 4.01989 7.63 2.2099 11.46 4.4199L14.55 6.1999L17.64 7.9799C21.47 10.1899 21.47 13.8099 17.64 16.0199L14.55 17.7999L11.46 19.5799C7.63 21.7899 4.5 19.9799 4.5 15.5599V11.9999Z"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Run;
