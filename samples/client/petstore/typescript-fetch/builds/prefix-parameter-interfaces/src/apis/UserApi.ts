// tslint:disable
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface UserApiCreateUserRequest {
    body: User;
}

export interface UserApiCreateUsersWithArrayInputRequest {
    body: Array<User>;
}

export interface UserApiCreateUsersWithListInputRequest {
    body: Array<User>;
}

export interface UserApiDeleteUserRequest {
    username: string;
}

export interface UserApiGetUserByNameRequest {
    username: string;
}

export interface UserApiLoginUserRequest {
    username: string;
    password: string;
}

export interface UserApiUpdateUserRequest {
    username: string;
    body: User;
}

/**
 * no description
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUserRaw(requestParameters: UserApiCreateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUser(requestParameters: UserApiCreateUserRequest): Promise<void> {
        await this.createUserRaw(requestParameters);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInputRaw(requestParameters: UserApiCreateUsersWithArrayInputRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithArrayInput.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithArray`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(UserToJSON),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInput(requestParameters: UserApiCreateUsersWithArrayInputRequest): Promise<void> {
        await this.createUsersWithArrayInputRaw(requestParameters);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInputRaw(requestParameters: UserApiCreateUsersWithListInputRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithListInput.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/createWithList`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body.map(UserToJSON),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInput(requestParameters: UserApiCreateUsersWithListInputRequest): Promise<void> {
        await this.createUsersWithListInputRaw(requestParameters);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUserRaw(requestParameters: UserApiDeleteUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUser(requestParameters: UserApiDeleteUserRequest): Promise<void> {
        await this.deleteUserRaw(requestParameters);
    }

    /**
     * Get user by user name
     */
    async getUserByNameRaw(requestParameters: UserApiGetUserByNameRequest): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Get user by user name
     */
    async getUserByName(requestParameters: UserApiGetUserByNameRequest): Promise<User> {
        const response = await this.getUserByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     * Logs user into the system
     */
    async loginUserRaw(requestParameters: UserApiLoginUserRequest): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Logs user into the system
     */
    async loginUser(requestParameters: UserApiLoginUserRequest): Promise<string> {
        const response = await this.loginUserRaw(requestParameters);
        return await response.value();
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUserRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUser(): Promise<void> {
        await this.logoutUserRaw();
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUserRaw(requestParameters: UserApiUpdateUserRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUser.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUser(requestParameters: UserApiUpdateUserRequest): Promise<void> {
        await this.updateUserRaw(requestParameters);
    }

}
