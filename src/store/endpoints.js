export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://purposes-app.herokuapp.com/'
    : 'http://localhost:5000/';

// current user
export const CREATE_USER = 'api/users';

// category
export const URL_CATEGORY = 'api/categories';

// task
export const URL_TASK = 'api/tasks';

// activity
export const URL_ACTIVITIES = 'api/activities';

// statistics
export const URL_STATISTICS = 'api/statistics';
