/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSessionDto } from '../models/CreateSessionDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SessionsService {

    /**
     * @returns User
     * @throws ApiError
     */
    public static create({
        requestBody,
    }: {
        requestBody: CreateSessionDto,
    }): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sessions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}