export const getCategoryOptions = (allCategories) =>
  Object.values(allCategories).map((category) => {
    return {
      value: (
        <div className="categoryMultiSelect__value">
          <span
            style={{ background: category.color }}
            className="categoryMultiSelect__dot"
          />
          <p className="categoryMultiSelect__text">{category.name}</p>
        </div>
      ),
      _id: category._id,
    };
  });
