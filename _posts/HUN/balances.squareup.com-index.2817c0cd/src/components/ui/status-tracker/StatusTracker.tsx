import { ReactElement } from "react";
import classNames from "classnames";
import styles from "./StatusTracker.css";

export interface StatusTrackerProps {
  readonly currentStepIndex: number;
  readonly steps: string[];
}

export function StatusTracker({ currentStepIndex, steps }: StatusTrackerProps) {
  const generateIconProgressSegments = (index: number, currentStepIndex: number): ReactElement => {
    const progressBarStyles =
      currentStepIndex >= index
        ? classNames(styles.progressBar, styles.progressBarCompleted)
        : styles.progressBar;
    const iconStyles =
      currentStepIndex >= index ? classNames(styles.icon, styles.iconCurrent) : styles.icon;

    return (
      <div className={styles.progressSegment} key={index}>
        {index !== 0 ? <div className={progressBarStyles}></div> : <></>}
        <div className={styles.iconContainer}>
          {index === currentStepIndex ? <div className={styles.iconEmphasis}></div> : <></>}
          <div className={iconStyles}></div>
        </div>
      </div>
    );
  };

  const getLabelStyles = (index: number, currentStepIndex: number) =>
    currentStepIndex >= index
      ? classNames("semibold-20", styles.label, styles.labelCompleted)
      : classNames("semibold-20", styles.label);

  return (
    <div>
      <div className={styles.progressContainer}>
        {steps.map((step, index) => generateIconProgressSegments(index, currentStepIndex))}
      </div>
      <div className={styles.labelContainer}>
        {steps.map((step, index) => (
          <p key={index} className={getLabelStyles(index, currentStepIndex)}>
            {step}
          </p>
        ))}
      </div>
    </div>
  );
}
