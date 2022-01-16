export const getCategoryOptions = (allCategories, searchCategory) => {
  const searchCategoryLowerCase = searchCategory.toLowerCase();
  return Object.values(allCategories).reduce((list, category) => {
    if (!category.name.toLowerCase().includes(searchCategoryLowerCase))
      return list;
    return [
      ...list,
      {
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
      },
    ];
  }, []);
};
