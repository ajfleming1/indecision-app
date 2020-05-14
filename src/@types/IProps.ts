type IProps = {
    buttonHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    optionHandler?: (option: string) => void | string,
    hasOptions?: boolean
} & Partial<DefaultProps>

export const defaultProps = {
    options: [] as string[]
};

export type DefaultProps = Readonly<typeof defaultProps>;

export const initialState = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [] as string[],
}

export type State = Readonly<typeof initialState>;

export default IProps;