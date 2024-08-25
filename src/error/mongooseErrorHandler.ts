import mongoose from 'mongoose';
import { TErrorSources, TGenericResponse } from './error.interface';
import httpStatus from 'http-status';

const mongooseErrorHandler = (
  error: mongoose.Error.ValidationError,
): TGenericResponse => {
  const errorSources: TErrorSources = Object.values(error.errors).map(
    (value: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: value?.path,
        message: value?.message,
      };
    },
  );
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};
export default mongooseErrorHandler;
