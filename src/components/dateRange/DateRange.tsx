'use client';

import { formatISO } from 'date-fns';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { DateRange } from 'react-date-range';

const DateRangePicker = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (item: any) => {
    setState([item.selection]);

    console.log(formatISO(item?.selection?.startDate));

    router.push(
      pathName +
        `?to=${formatISO(item?.selection?.startDate, {
          extended: true,
        })}&form=${formatISO(item.selection.endDate, { extended: true })}`,
    );
  };

  return (
    <DateRange
      ranges={state}
      disabled={true}
      maxDate={new Date()}
      editableDateInputs={true}
      rangeColors={['#00A991']}
      moveRangeOnFirstSelection={false}
      // onChange={(item: any) => setState([item.selection])}
      onChange={handleSelect}
    />
  );
};

export default DateRangePicker;
