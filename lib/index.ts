import { stringify as stringifyQueryString } from 'qs';

import { LinkedInAuthClient as types } from '../types';

export default class LinkedInAuthClient {
  private params: types.params;
  private config: types.config;
  private baseUrl: string;
  private endpoint: types.endpoint;
  private isInitialized: boolean;

  public constructor(config: types.config) {
    this.config = config;
    this.baseUrl = 'https://www.linkedin.com/oauth/v2';
    this.endpoint = {
      authorization: '/authorization',
      accessToken: '/accessToken'
    };
    this.isInitialized = false;
  }

  public init(params: types.params): void {
    this.params = params;
    this.isInitialized = true;
  }

  public async getAccessToken(
    code: string
  ): Promise<types.accessTokenResponse> {
    if (!this.isInitialized) {
      return;
    }

    let data;
    const { scope, ...params } = this.params;

    try {
      const response = await this.config.fetchProvider(
        this.getAccessTokenEndpoint(),
        {
          method: 'POST',
          cache: 'no-cache',
          redirect: 'follow',
          body: stringifyQueryString({ code, ...params }),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      data = await response.json();
    } catch (e) {
      return e;
    }

    return data;
  }

  private getAccessTokenEndpoint(): string {
    return `${this.baseUrl}${this.endpoint.accessToken}`;
  }

  public getAuthorizationUrl(): string {
    const { scope, client_secret, grant_type, ...params } = this.params;

    return `${this.baseUrl}${
      this.endpoint.authorization
    }?${stringifyQueryString(params)}&${this.getStringifiedScopeParam()}`;
  }

  private getStringifiedScopeParam(): string {
    // Why would you make it space-delimited?
    // https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context#step-2-request-an-authorization-code
    return `scope=${encodeURIComponent(this.params.scope.join(' '))}`;
  }
}
