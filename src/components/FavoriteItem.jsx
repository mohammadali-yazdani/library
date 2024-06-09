import "./FavoriteItem.scss";

export const FavoriteItem = ({ favorite }) => {
  return (
    <li className="favorite-item">
      <img
        className="favorite-item-image"
        src={`/src/assets/${favorite.image}`}
        alt=""
      />
      <div className="favorite-item-content">
        <h5 className="favorite-item-content--title">{favorite.title}</h5>
      </div>
    </li>
  );
};
