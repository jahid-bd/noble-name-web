import DownloadSingleCard from '../cards/DownloadSingleCard';

const CSVDownloadView = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <DownloadSingleCard
        download="User"
        value="500"
        title="Total User"
        url="/users/csv/download"
      />

      <DownloadSingleCard
        download="Name"
        value="500"
        title="Total Name"
        url="/names/csv/download"
      />

      <DownloadSingleCard
        download="Newsletter"
        value="500"
        title="Total Newsletter"
        url="/subscribe-newsletters/csv/download"
      />
    </div>
  );
};

export default CSVDownloadView;
