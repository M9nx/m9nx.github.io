import { BootstrapResponse } from "/src/protos/squareup/bbfrontend/v1/web_service";
import { createUserFromProfile, User } from "/src/util/user";

/**
 * These are values needed by the application on application load.
 * Initial requests and values will be synthesized and added into this
 * object for the application to use. We will ensure the existence of
 * these values so the application does not have to. This will clean up
 * a lot of existence checks and makes everything sketchy.
 */
export interface ApplicationBootstrap {
  readonly user: User;
}

export const createApplicationBootstrapFromBootstrap = (
  bootstrap: BootstrapResponse.Authenticated
): ApplicationBootstrap => ({
  user: createUserFromProfile(bootstrap.personProfile),
});
