  const handleDelete = (id) => {
    setCard((prev) => prev.filter((item) => item.id !== id));
  };