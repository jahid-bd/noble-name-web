const LoveIcon = ({ isFavorite }: { isFavorite: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="heart">
        <path
          id="Icon"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.99431 4.27985C8.32819 2.332 5.54981 1.80804 3.46227 3.59168C1.37472 5.37532 1.08083 8.35748 2.72019 10.467C4.0832 12.2209 8.20816 15.9201 9.5601 17.1174C9.71136 17.2513 9.78698 17.3183 9.8752 17.3446C9.95219 17.3676 10.0364 17.3676 10.1134 17.3446C10.2016 17.3183 10.2773 17.2513 10.4285 17.1174C11.7805 15.9201 15.9054 12.2209 17.2684 10.467C18.9078 8.35748 18.6498 5.35656 16.5264 3.59168C14.4029 1.8268 11.6604 2.332 9.99431 4.27985Z"
          //   fill="#E95152"
          fill={isFavorite ? '#E95152' : '#ffff'}
        />
      </g>
    </svg>
  );
};

export default LoveIcon;
