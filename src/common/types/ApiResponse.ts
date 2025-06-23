import { HttpStatus } from '@nestjs/common';

export type ApiResponse<T> = {
  success: boolean;
  payload: T;
  message: string;
  status: HttpStatus;
};
