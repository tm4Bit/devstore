export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Search page</h1>
    </div>
  );
}
