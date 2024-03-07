
// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// const Certifications = () => {
//   const certifications = useSelector((state) => state.user.certifications);
//   const dispatch = useDispatch();
//   const [newCertification, setNewCertification] = useState('');

//   const handleAddCertification = () => {
//     dispatch({ type: 'ADD_CERTIFICATION', payload: newCertification });
//     setNewCertification('');
//   };

//   return (
//     <div className="certifications-container">
//       <h2>Certifications</h2>
//       <ul>
//         {certifications.map((certification, index) => (
//           <li key={index}>{certification}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddCertification}>Add New</button>
//       <input
//         type="text"
//         value={newCertification}
//         onChange={(e) => setNewCertification(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Certifications;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// const Certifications = () => {
//   const certifications = useSelector((state) => state.user.certifications);
//   const dispatch = useDispatch();
//   const [newCertification, setNewCertification] = useState('');

//   const handleAddCertification = () => {
//     dispatch({ type: 'ADD_CERTIFICATION', payload: newCertification });
//     setNewCertification('');
//   };

//   return (
//     <div className="certifications-container">
//       <h2>Certifications</h2>
//       <ul>
//         {certifications.map((certification, index) => (
//           <li key={index}>{certification}</li>
//         ))}
//       </ul>
//       <button onClick={handleAddCertification}>Add New</button>
//       <input
//         type="text"
//         value={newCertification}
//         onChange={(e) => setNewCertification(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Certifications;

const Certifications = () => {
  const certifications = useSelector((state) => state.user.certifications);
  const dispatch = useDispatch();
  const [newCertification, setNewCertification] = useState('');

  const handleAddCertification = () => {
    if (newCertification.trim() !== '') {
      dispatch({ type: 'ADD_CERTIFICATION', payload: newCertification });
      setNewCertification('');
    }
  };

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <ul>
        {certifications.map((certification, index) => (
          <li key={index}>{certification}</li>
        ))}
      </ul>
      <button onClick={handleAddCertification}>Add New</button>
      <input
        type="text"
        value={newCertification}
        onChange={(e) => setNewCertification(e.target.value)}
      />
    </div>
  );
};

export default Certifications;
