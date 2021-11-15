export function createSearchParams(obj: { [key: string]: string | number | string[] | number[] | undefined } = {}, base = '') {
  const result = Object.keys(obj)
    .reduce((searchParams, key) => {
      const value = obj[key];
      if (Array.isArray(value)) {
        searchParams.delete(key);
        value.forEach((item: string | number) => searchParams.append(key, item.toString()));
      } else if (value || value === 0) searchParams.set(key, value.toString());
      else searchParams.delete(key);
      return searchParams;
    }, new URLSearchParams(base))
    .toString();
  return result === '' ? '' : `?${result}`;
}

export function createFormData(obj: { [key: string]: string | number | Blob | File[] | string[] } = {}) {
  return Object.keys(obj).reduce((form, key) => {
    const value = obj[key];
    if (value !== null && value !== undefined && value !== '') {
      if (value instanceof Array) value.forEach((item: File | string) => form.append(key, item));
      else form.append(key, value as string | Blob);
    }
    return form;
  }, new FormData());
}

export function signoutProcess() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}
