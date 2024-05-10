import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const SettingsViewContactView = dynamic(
  () => import('@/components/view/SettingsView'),
  {
    loading: () => <PreLoader />,
  }
);

const SettingsPage = () => {
  return <SettingsViewContactView />;
};

export default SettingsPage;
