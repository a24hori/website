import Header from './Header';

const layoutStyle = {
    margin: 30,
    padding: 20,
};

const Layout = (props) => (
    <div style={layoutStyle}>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap&subset=japanese" rel="stylesheet"></link>
        </head>
        <Header />
        {props.children}
    </div>
);

export default Layout;