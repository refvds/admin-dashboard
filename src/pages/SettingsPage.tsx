import React from "react";
import PageWrapper from "../components/ui/PageWrapper";
import Profile from "../components/Profile";
import Notifications from "../components/Notifications";
import Security from "../components/Security";
import ConnectedAccounts from "../components/ConnectedAccounts";
import DangerZone from "../components/DangerZone";

const SettingsPage = () => {
  return (
    <PageWrapper headerTitle="Settings">
      <Profile />
      <Notifications />
      <Security />
      <ConnectedAccounts />
      <DangerZone />
    </PageWrapper>
  );
};

export default SettingsPage;
