// import EventsBusServiceManager from '../eventsbus/EventsBusServiceManager';
// import {encryptSha256} from '../helpers/encryptHelper';
// import {BASE_API_URL} from '../utils/Const';
// export interface IBaseResponse {
//   requestId?: string;
//   requestDate?: string;
// }
// export interface IApiError {
//   errorCode?: string;
//   message: string;
//   statusCode?: number;
// }
// export interface IApiResponse<T = void> {
//   data?: T;
//   header?: any;
//   errors?: any;
//   succeeded: boolean;
//   failed?: boolean;
//   error?: IApiError;
//   messageCode?: string;
// }
// export abstract class BaseApiService {
  
//   private _handleResponse(res: IApiError | IApiResponse): IApiResponse {
//     const response = res;
//     const error = res as IApiError;
//     // if (response.messageCode === 'SUCCESS') {
//     //   const data = response;
//     //   return {
//     //     messageCode:messageCode
//     //     data,
//     //     succeeded: true,
//     //   };
//     // }
//     return {
//       succeeded: false,
//       error,
//     };
//   }

//   private _handleError<T extends IBaseResponse>(
//     error: IApiError,
//   ): IApiResponse<T> {
//     return {
//       succeeded: false,
//       failed: true,
//       error,
//     };
//   }

//   public async get<T extends IBaseResponse>(
//     url: string,
//     body?: IBaseResponse,
//     callback?: any
//     // config?: IApiRequestConfig,
//   ) {
//     try {
//       var request = new EventsBusServiceManager();
//       //let key = await encryptSha256(body?.requestId, body?.requestDate);
//       const headers = {
//         'content-type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VySWQiOjU1LCJ1c2VyTmFtZSI6Im5nb2N0dTExMTE4QGdtYWlsLmNvbSIsIm5hbWUiOiJuZ3V5ZW4gdHUiLCJuYW1lQXNjaWkiOiJuZ3V5ZW4gdHUiLCJwaG9uZU51bWJlciI6IjAxMjM0NTY3ODkiLCJlbWFpbCI6Im5nb2N0dTExMTE4QGdtYWlsLmNvbSIsInN0YXR1cyI6MX0sIm1hcmtldFZlcnNpb24iOjEsInVzZXJfbmFtZSI6Im5nb2N0dTExMTE4QGdtYWlsLmNvbSIsInNjb3BlIjpbInJlYWQiXSwiZXhwIjoxNjg2NjU4MzI0LCJqdGkiOiJhZTIzMjc3Mi1lZTkzLTQ4ODgtODFkNC00YTVkZWYyZDFiMmQiLCJjbGllbnRfaWQiOiJ2bnB0LXN1cGVyYXBwLWhvc3RhcHAtYmFja2VuZCJ9.Cb4KcO7hXWR34YiudHEB3ASEeNeAtS14VG9Ncq6N2IE',
//         // 'X-VPayEvent-Signature': `${key}`,
//       };
//       request.requestAPI(
//         `${BASE_API_URL}${url}`,
//         'GET',
//         body,
//         headers,
//         (data?: String) => {
//           return callback(data);
//         },
//       );
//     } catch (error) {
//       return callback(error);
//     }
//   }

//   public async post(
//     url: string,
//     body?: IBaseResponse,
//     callback?: any
//   ) {
//     try {
//       var request = new EventsBusServiceManager();
//       let key = await encryptSha256(body?.requestId, body?.requestDate);
//       const headers = {
//         'content-type': 'application/json',
//         'X-VPayEvent-Signature': `${key}`,
//       };
//       request.requestAPI(
//         `${BASE_API_URL}${url}`,
//         'POST',
//         body,
//         headers,
//         (data?: String) => {
//           return callback(data);
//         },
//       );
//     } catch (error) {
//       return callback(error);
//     }
//   }
// }
