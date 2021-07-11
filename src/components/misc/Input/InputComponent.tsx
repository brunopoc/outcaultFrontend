import styled from 'styled-components';

const InputBar = styled.input`
    background-color: #5a5a5a;
    border-radius: 10px;
    color: #fff;
    padding: 5px;
    border: none;
    font-size: 14px;
    padding: 15px 30px;
    margin: 10px 0px;
    &:focus {
        outline: none;
    }
`;

type Props = {
    type?: string | undefined;
    id?: string | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    onChange?: (e: any) => void | undefined;
};

function InputComponent({ type, id, value, onChange }: Props): JSX.Element {
    return <InputBar type={type} id={id} value={value} onChange={onChange} />;
}

InputComponent.defaultProps = {
    type: 'text',
    id: undefined,
    value: undefined,
    onChange: undefined,
};

export default InputComponent;
