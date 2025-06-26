import { Profile } from "/src/protos/squareup/bbfrontend/bankingweb/v1/person_profile_service";

export interface Name {
  readonly first: string;
  readonly last: string;
}

export interface User {
  readonly personToken: string;
  readonly name: Name;
}

export const createUserFromProfile = (personProfile?: Profile): User => {
  if (personProfile == null) {
    throw new Error("Missing personProfile from bootstrap");
  }
  if (personProfile.personToken === "") {
    throw new Error("PersonProfile person token is empty from bootstrap");
  }

  return {
    personToken: personProfile.personToken,
    name: {
      first: personProfile.name?.firstName ?? "",
      last: personProfile.name?.lastName ?? "",
    },
  };
};

export const getFullName = (user: User): string => {
  const firstName = user.name.first;
  const lastName = user.name.last;
  return `${firstName} ${lastName}`.trim();
};
