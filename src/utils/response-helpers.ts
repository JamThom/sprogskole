const makeSuccessfulResponse = (data: any) => {
  return {
    success: true,
    data,
  };
};

const makeErrorResponse = (error: Error) => {
  return {
    success: false,
    error,
  };
}