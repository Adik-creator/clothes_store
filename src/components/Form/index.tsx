import React, {useState} from 'react';


type FormProps = {
    title: string;
    handleClick: (email: string, pass: string) => void;
}
export const Form: React.FC<FormProps> = (props) => {

    const {handleClick, title} = props

    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    return (
        <div>
            <input
                type="email"
                onChange={event => setEmail(event.target.value)}
                placeholder="email"
                value={email}
            />
            <input
                type="password"
                onChange={event => setPass(event.target.value)}
                placeholder="password"
                value={pass}
            />

            <button onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
};

