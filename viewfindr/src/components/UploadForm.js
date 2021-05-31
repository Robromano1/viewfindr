import React, { useState } from "react";

export const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    let selected = e.target.files[0];
    // console.log(selected);

		if (selected) {
			setFile(selected);
		}
  };

  return (
    <form>
      <input type="file" onChange={handleChange} />
    </form>
  );
};

export default UploadForm;
