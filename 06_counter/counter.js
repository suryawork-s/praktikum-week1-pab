function CounterFunctional() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Pengenalan React Tingkat Dasar</h1>
            <h3>Counter</h3>
            <h2>{count}</h2>
            <button onClick={() => setCount(count - 1)}>- 1</button>
            <button onClick={() => setCount(count + 1)}>+ 1</button>
        </div>
    );
}

class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h3>Counter</h3>
                <h2>{this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>- 1</button>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+ 1</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CounterFunctional />);

