import "../css/Output.css";
let Output = (props) => {
    return (
        <div>
            {props.products.map((item) => {
                return (
                    <div className="card">
                        <img height="300" src={item.image}></img>

                        <h2>
                            {item.name} <p>{item.size}</p>
                        </h2>
                        <p>{item.color}</p>
                        <h6>{item.price}</h6>
                        <p>{item.desc}</p>
                    </div>
                );
            })}
        </div>
    );
};
export default Output;
