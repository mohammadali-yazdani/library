import { FavoriteItem } from "./FavoriteItem";
import "./FavoriteList.scss";

export const FavoriteList = ({ favorites }) => {
  return (
    <div className="favorites">
      <h4 className="favorites-title">مورد علاقه ها</h4>
      <ul className="favorites-list">
        {favorites.map((favorite) => (
          <FavoriteItem key={favorite.id} favorite={favorite} />
        ))}
      </ul>
    </div>
  );
};
