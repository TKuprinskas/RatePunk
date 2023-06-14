const API_URL = 'https://api.jsonbin.io/v3/b/648971949d312622a36f5ddb';

export const submitEmail = async (email: string): Promise<any> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'X-Master-Key':
      '$2b$10$Zl5.f3CJksYqcqakkAZLVeNOVXz.DlpuyTMFsEYPUFeWGpWJFERjC',
  });
  const response = await fetch(API_URL, {
    method: 'PUT',
    body: JSON.stringify({ email: email }),
    headers: headers,
  });
  const data = await response.json();
  return data;
};
