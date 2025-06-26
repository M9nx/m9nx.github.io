import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import {
  Field,
  userChangeInputFieldValue,
  userClickNextAction,
  ValidationRecord,
  VerifyNameError,
} from "/src/workflow/card-issuing/verify-name";
import { ConnectedProps } from "/src/components/card-issuing/connected/ConnectedCardIssuingModal";
import { VerifyName } from "/src/components/card-issuing/VerifyName";

export const getErrorString =
  (t: TFunction) =>
  (field: Field, validationRecord: ValidationRecord): string => {
    if (validationRecord.valid) {
      return "";
    }

    switch (validationRecord.errors[field][0]) {
      case VerifyNameError.VERIFY_NAME_ERROR_EMPTY:
        return t(`${field}.error.empty`);
    }
  };

export function ConnectedVerifyName({ state, dispatch }: ConnectedProps) {
  const { t } = useTranslation("card-issuing", { keyPrefix: "verifyName" });
  const getErrorStringFunc = getErrorString(t);

  const mapToProps = ({ state, dispatch }: ConnectedProps) => ({
    firstName: state.verifyNameState[Field.FirstName],
    firstNameError: getErrorStringFunc(Field.FirstName, state.verifyNameState.validation),
    lastName: state.verifyNameState[Field.LastName],
    lastNameError: getErrorStringFunc(Field.LastName, state.verifyNameState.validation),
    loading: state.verifyNameState.loading,
    onFirstNameChange: (value: string) =>
      dispatch(userChangeInputFieldValue(Field.FirstName, value)),
    onLastNameChange: (value: string) => dispatch(userChangeInputFieldValue(Field.LastName, value)),
    onNextClick: () => dispatch(userClickNextAction()),
  });

  return <VerifyName {...mapToProps({ state, dispatch })} />;
}
