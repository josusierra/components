const URL = 'http://localhost:3001/profiles';

export const getProfiles = () => {
  return fetch(URL).then((response) => response.json());
};

export const addProfile = (profile) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
  }).then((response) => response.json());
};
