export default async <T>(url: string): Promise<T> => {
  return fetch(url).then((response) => response.json());
};
