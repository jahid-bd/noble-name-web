import dynamic from 'next/dynamic';
const SettingsViewContactView = dynamic(
  () => import('@/components/view/SettingsView'),
);

const SettingsPage = () => {
  return <SettingsViewContactView />;
};

export default SettingsPage;
