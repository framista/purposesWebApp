export const getRelevantCategories = (allCategories, searchValue) =>
  Object.values(allCategories).reduce((categories, category) => {
    const { name, description } = category;
    return name.toLowerCase().includes(searchValue.toLowerCase()) ||
      description.toLowerCase().includes(searchValue.toLowerCase())
      ? [...categories, category]
      : categories;
  }, []);
