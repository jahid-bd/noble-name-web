import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const SettingsViewContactView = dynamic(
  () => import('@/components/view/SettingsView'),
);

export const metadata: Metadata = {
  title: 'Settings - Noble Names',
  description: 'This is settings page.',
};

const SettingsPage = () => {
  return <SettingsViewContactView />;
};

export default SettingsPage;
