const localCSS = {
    margin: 50,
    padding: 20,
    border: 'medium solid #000000',
};

const defTitle = {
    position: 'absolute',
    padding: '0 .5em',
    left: 20,
    top: -15,
    fontWeight: 'bold',
    //backgroundColor: '#fff',
    color: '#555555',
};

const Def = ({title, children}) => (
    <div style={localCSS}>
        <span style={defTitle}>{title}</span>
        {children}
    </div>
);

export default Def;