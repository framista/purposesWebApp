import { useState, useMemo, useEffect } from 'react';

const usePortal = (contentRef, parentRef, translation = { x: 0, y: 0 }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  const updateContentCoords = () => {
    setCoords({
      left: parentRef?.current?.offsetLeft - translation.x,
      top: parentRef?.current?.offsetTop + translation.y,
    });
  };

  const handleClickOutside = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const handlers = useMemo(
    () => ({
      handleExpand: (e) => {
        updateContentCoords(e);
        setOpen(true);
      },
    }),
    []
  );

  return { open, coords, handlers };
};

export default usePortal;
