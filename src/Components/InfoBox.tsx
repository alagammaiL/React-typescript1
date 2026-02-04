import type { ReactNode } from "react";
type HintBox = {
  mode: "hint";
  children: ReactNode;
};
type WarningBox = {
  mode: "warning";
  children: ReactNode;
  warningRange: "low" | "medium" | "high";
};
type InfoBoxProps = HintBox | WarningBox;
export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  const { warningRange } = props;
  return (
    <aside className={`infobox infobox-warning warning--${warningRange}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
