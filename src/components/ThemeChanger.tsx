type Props = {
  onChangeTheme: VoidFunction;
};

const ThemeChanger = ({ onChangeTheme }: Props) => (
  <div
    onClick={() => onChangeTheme()}
    style={{ height: "10px", width: "5px", backgroundColor: "red" }}
  ></div>
);

export default ThemeChanger;
