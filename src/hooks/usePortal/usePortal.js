import { useState, useMemo, useEffect } from 'react';

const usePortal = (contentRef, parentRef, translation = { x: 0, y: 0 }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  const updateContentCoords = (e) => {
    const rect = e.target.getBoundingClientRect();

    setCoords({
      left: (parentRef?.current?.offsetLeft || rect.x) - translation.x,
      top: (parentRef?.current?.offsetTop || rect.y + window.scrollY) + translation.y,
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
      handleClose: () => {
        setOpen(false)
      }
    }),
    []
  );

  return { open, coords, handlers };
};

export default usePortal;
