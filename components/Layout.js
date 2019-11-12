import Header from './Header';

const layoutStyle = {
    margin: 30,
    padding: 20
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;