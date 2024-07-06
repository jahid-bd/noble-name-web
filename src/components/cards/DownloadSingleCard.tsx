interface cardPropsType {
  title: string;
  value: string;
  url: string;
  download: string;
}

const DownloadSingleCard = ({ url, title, value, download }: cardPropsType) => {
  return (
    <div className="shadow-sm p-6 rounded-xl bg-white w-full">
      <p className="text-base font-semibold text-text-primary mb-6">{title}</p>

      <p className="text-4xl font-semibold text-text-primary mb-4">{value}</p>

      <a href={`${process.env.NEXT_PUBLIC_API_URL}${url}`} download>
        <div className="w-full text-white bg-primary px-2 py-2 rounded-md flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
            />
          </svg>

          <span>{download} Download</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadSingleCard;
