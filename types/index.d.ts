declare namespace LinkedInAuthClient {
  interface config {
    fetchProvider: (url: string, init?: any) => Promise<any>;
  }

  interface endpoint {
    authorization: string;
    accessToken: string;
  }

  type scopeParam =
    | 'r_liteprofile'
    | 'r_basicprofile'
    | 'r_fullprofile'
    | 'r_emailaddress'
    | 'r_contactinfo'
    | 'r_network'
    | 'w_member_social';

  type grantTypeParam = 'authorization_code';

  interface params {
    /**
     * The value of this field should always be: `code`
     */
    response_type: string;
    /**
     * The value of this field should always be: `authorization_code`
     */
    grant_type: string;
    /**
     * The API Key value generated when you registered your application.
     */
    client_id: string;
    /**
     * The Client Secret value generated when you registered your application.
     */
    client_secret: string;
    /**
     * The URI your users are sent back to after authorization.
     * This value must match one of the OAuth 2.0 Authorized Redirect URLs
     * defined in your application configuration.
     *
     * For example:
     *
     * `https://www.example.com/auth/linkedin`
     */
    redirect_uri: string;
    /**
     * A unique string value of your choice that is hard to guess.
     * Used to prevent CSRF.
     *
     * For example:
     *
     * `DCEeFWf45A53sdfKef424`
     */
    state?: string;
    /**
     * An array of member permissions your application is
     * requesting on behalf of the user.
     *
     * These must be explicitly requested.
     *
     * For example:
     *
     * `['r_liteprofile', 'r_emailaddress', 'w_member_social']`
     */
    scope: Partial<LinkedInAuthClient.scopeParam[]>;
  }

  interface accessTokenResponse {
    /**
     * The access token for the application.
     */
    access_token: string;
    /**
     * The number of seconds remaining until the token expires.
     * Currently, all access tokens are issued with a 60 day lifespan.
     */
    expires_in: number;
  }
}

export default class LinkedInAuthClientClass {
  private params: LinkedInAuthClient.params;
  private config: LinkedInAuthClient.config;
  private baseUrl: string;
  private endpoint: LinkedInAuthClient.endpoint;
  private isInitialized: boolean;

  public constructor(config: LinkedInAuthClient.config);
  public init(params: LinkedInAuthClient.params): void;

  public getAccessToken(
    code: string
  ): Promise<LinkedInAuthClient.accessTokenResponse>;
  private getAccessTokenEndpoint(): string;
  public getAuthorizationUrl(): string;
  private getStringifiedScopeParam(): string;
}
