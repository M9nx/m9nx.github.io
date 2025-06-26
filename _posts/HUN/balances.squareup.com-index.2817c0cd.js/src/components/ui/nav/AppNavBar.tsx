import { useTranslation } from "react-i18next";
import SquareIcon from "tsx:/public/assets/svg/square-logo.svg";
import HelpIcon from "tsx:/public/assets/svg/question-mark.svg";
import { getFullName } from "/src/util/user";
import BASE_URL from "/src/util/get-base-url";
import { User } from "/src/util/user";
import { AccountDropdown } from "/src/components/ui/nav/account-dropdown/AccountDropdown";
import * as styles from "./AppNavBar.css";

export interface AppNavBarProps {
  readonly user: User;
}

export function AppNavBar({ user }: AppNavBarProps) {
  const { t } = useTranslation("site");

  const accountDropdownOptions = [
    {
      name: t("navigation.accountDropdownOptions.personalSettings"),
      callback: () => {
        window.location.href = `${BASE_URL}help`;
      },
    },
    {
      name: t("navigation.accountDropdownOptions.signOut"),
      callback: () => {
        window.location.href = `${BASE_URL}logout`;
      },
    },
  ];

  return (
    <>
      <div className={styles.navTopOffset}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <h3 className="semibold-20">{t("title")}</h3>
            <SquareIcon className={styles.icon} />
            <div className={styles.right}>
              <a className={styles.help} href={`${BASE_URL}help`}>
                <HelpIcon className={styles.icon} />
              </a>
              <AccountDropdown accountName={getFullName(user)} options={accountDropdownOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
