
// const Address = () => {
//   return (
//     <div>Address</div>
//   )
// }

// export default Address

// import  { useEffect, useRef } from 'react';

// const Address = ({ onSelect }) => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
//     autocomplete.addListener('place_changed', () => {
//       const place = autocomplete.getPlace();
//       onSelect(place);
//     });
//   }, [onSelect]);

//   return <input ref={inputRef} type="text" placeholder="Enter a location" />;
// };

// export default Address;
