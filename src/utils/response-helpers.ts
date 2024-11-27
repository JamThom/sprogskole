export const makeSuccessfulResponse = (data: any) => {
  return {
    success: true,
    data,
  };
};

export const makeErrorResponse = (error: Error) => {
  return {
    success: false,
    error,
  };
}