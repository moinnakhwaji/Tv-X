import React from 'react';

function Dropdown({ title, options, func }) {
  return (
    <div className="relative inline-block w-200px mt-4 m-2">
      <div className="select text-white bg-[#27272A] border-1 border-[#444] rounded-4px overflow-hidden">
        <select
          defaultValue="0"
          name="format"
          onChange={func}
          id="format"
          className="w-full py-2 px-4 text-sm appearance-none  bg-[#27272A] border-none rounded-4px cursor-pointer focus:outline-none focus:shadow-outline"
        >
          <option value="0" className="text-sm">{title}</option>
          {options.map((o, i) => (
            <option key={i} value={o} className="text-sm">
              {o.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;

