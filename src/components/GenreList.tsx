import useGenres from "@/hooks/useGenres"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  return (
    <ul>
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {!isLoading && !error && data.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList