function TodoSearch() {
  return (
    <input
      className="todoSearch"
      onChange={(event) => console.log(event.target.value)}
      placeholder="Prepare meals"
    />
  );
}

export { TodoSearch };
