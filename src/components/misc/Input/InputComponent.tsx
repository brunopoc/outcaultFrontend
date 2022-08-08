import { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from '../../../utils/debounce';

const InputBar = styled.input`
    background-color: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text};
    padding: 8px;
    border: none;
    font-size: 14px;
    padding: 16px 32px;
    margin: 8px 0px;
    width: 100%;
    &:focus {
        outline: none;
    }
    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px
            ${props => props.theme.colors.background.primary} inset;
        color: ${props => props.theme.colors.text} !important;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        -webkit-text-fill-color: ${props => props.theme.colors.text};
        -webkit-box-shadow: 0 0 0px 1000px
            ${props => props.theme.colors.background.primary} inset;
    }
`;

const LabelArea = styled.label`
    text-align: center;
    margin-top: 16px;
    position: absolute;
    transform: translate(12px, 8px) scale(1);
    transition: all 0.2s ease-out;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    &:focus-within label,
    .Active {
        transform: translate(4px, -16px) scale(0.75);
    }
`;

type Props = {
    type?: string | undefined;
    name: string | undefined;
    id?: string | undefined;
    label: string | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (e: any) => void | undefined;
};

function InputComponent({
    type,
    id,
    value,
    onChange,
    name,
    label,
}: Props): JSX.Element {
    const [isActive, setIsActive] = useState(false);
    const [currentValue, setcurrentValue] = useState(value);

    function handleDirty() {
        if (currentValue) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    function handleChange(e) {
        if (onChange) onChange(e);
        setcurrentValue(e.target.value);
        handleDirty();
    }

    useEffect(() => {
        handleDirty();
    }, []);

    return (
        <InputContainer>
            <LabelArea className={isActive ? 'Active' : ''} htmlFor={id}>
                {label}
            </LabelArea>
            <InputBar
                name={name}
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                onBlur={handleChange}
                onClick={handleChange}
            />
        </InputContainer>
    );
}

InputComponent.defaultProps = {
    type: 'text',
    id: undefined,
    value: undefined,
    onChange: undefined,
};

export default InputComponent;
