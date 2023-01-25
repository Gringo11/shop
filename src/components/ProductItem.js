export const Product = (props) => {
  const { name, price, image } = props.data;

  return (
    <div className="wrapper">
      <div className="image">
        <img className="photo" alt="" src={image} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="price">
        <p>{price} рублей</p>
      </div>
      <button
        className="add"
        disabled={props.buttonDisabled}
        onClick={props.onClick}
      >
        {props.title}
      </button>
    </div>
  );
};
